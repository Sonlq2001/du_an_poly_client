import React, { useState, memo, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { RiErrorWarningLine } from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';

import NoResult from 'assets/images/no-result.png';

import {
  WrapPage,
  Title,
  WrapForm,
  ContentForm,
  FormLeft,
  FormRight,
  WrapButton,
  ListImage,
  GroupStudents,
  GroupInput,
  GroupLabel,
  TetailItem,
  DemoAvatar,
  Overlay,
  GroupNoResult,
} from './ProductUpdateScreen.styles';
import {
  DataConvert,
  DataConvertStudent,
} from '../helpers/add-product.helpers';
import InputElement from 'components/FormElement/InputElement/InputElement';
import InputFileElement from 'components/FormElement/InputElement/InputFileElement';
import SelectElement from 'components/FormElement/SelectElement/SelectElement';
import CKEditor from '../components/editor/CKEditor';
import { WarEditor } from '../components/editor/Editor.styles';
import { MapOptions } from 'helpers/convert/map-options';
import { STATUS_KEY_INPUT } from '../constants/update-product.key';
import { getProductType } from 'features/master-data/redux/master-data.slice';

import { getDetailProduct, removeImage,UpdateProduct } from '../redux/update-product.slice';
import Loading from 'components/Loading/Loading';

const AddProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductType());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(getDetailProduct(id));
    }
  }, [dispatch, id]);

  const { userLogin, productDetail, loading, listProductType } = useSelector(
    (state) => ({
      userLogin: state.auth?.userLogin,
      productDetail: state.updateProduct?.productDetail,
      loading: state.updateProduct?.loading,
      listProductType: state.masterData?.listProductType,
    })
  );
  const dataConvertProduct = DataConvert(productDetail);
  const dataConvertStudent = DataConvertStudent(productDetail);

  let ArrayGalleris =
    productDetail &&
    productDetail.product_galleries.map((item) => {
      return item.image_url;
    });
  const [listImages, setListImage] = useState([]);
  const [linkAvatar, setLinkAvatar] = useState(null);

  const [LinkDoc, setLinkDoc] = useState(null);
  const [loadingButton, setLoadingButton] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const [hiden, setHiden] = useState(true);
  const [hidenStudent, setHidenStudent] = useState(true);
  const [reviewAvatar, setReviewAvatar] = useState(false);
  const selectProductTypes = MapOptions(listProductType ?? []);

  let email = [];
  const [groupCodeStudent, setGroupCodeStudent] = useState([]);

  const remove = (i) => {
    if (groupCodeStudent.length > 0) {
      setGroupCodeStudent(groupCodeStudent.filter((_, index) => index !== i));
      setHidenStudent(false);
    } else {
      setGroupCodeStudent(dataConvertStudent.filter((_, index) => index !== i));
    }
  };

  const RemoveImage = async (i, key) => {
    const url = { img_url: i };
    try {
      await dispatch(removeImage(url));
      if (listImages && listImages.length > 0) {
        setListImage(listImages.filter((_, index) => index !== key));
        setHiden(false);
      } else {
        setListImage(ArrayGalleris.filter((_, index) => index !== key));
      }
    } catch (error) {}
  };

  const EmailChange = (e, key) => {
    const valueEmail = e.target.value;
    email = [...groupCodeStudent];
    email[key] = valueEmail;
    setGroupCodeStudent(email);
  };
  const popupWindow = (url, title, w, h) => {
    var left = window.screen.width / 2 - w / 2;
    var top = window.screen.height / 2 - h / 2;
    return window.open(
      url,
      title,
      `toolbar=no, location=no,directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`
    );
  };
  if(!userLogin?.id){
      return <Redirect to="/" />
  }
  if (loading || productDetail === null) {
    return <Loading />;
  }
  return (
    <>
      {productDetail === undefined ? (
        <GroupNoResult>
          <div className="body-no-result">
            <img src={NoResult} alt="" className="img-no-result" />
            <div className="box-no-result">
              <div className="label-no-result">Kh??ng t??m th???y k???t qu??? n??o</div>
            </div>
          </div>
        </GroupNoResult>
      ) : (
        <>
        {productDetail?.status === 0 || productDetail?.status === 1 ?
          <WrapPage className="container">
            {userLogin?.id === productDetail?.user_id ||
            userLogin?.id === productDetail?.master_user ||
            userLogin?.id === productDetail?.teacher_id ? (
              <>
                <Title title> C???p nh???t s???n ph???m </Title>
                <WrapForm>
                  <Formik
                    initialValues={dataConvertProduct}
                    onSubmit={async (values, { rest }) => {
                      const newObjProduct = { ...rest };
                      newObjProduct.name = values.name
                        ? values.name
                        : dataConvertProduct.name;
                      newObjProduct.description = values.description
                        ? values.description
                        : dataConvertProduct.description;
                      newObjProduct.class = dataConvertProduct.class;
                      newObjProduct.video_url = values.video_url
                        ? values.video_url
                        : dataConvertProduct.video_url;
                      newObjProduct.students =
                        groupCodeStudent.length > 0
                          ? groupCodeStudent
                          : dataConvertStudent;
                      newObjProduct.galleries =
                        listImages.length > 0 ? listImages : ArrayGalleris;
                      newObjProduct.email = userLogin.email;
                      newObjProduct.image_url = linkAvatar
                        ? linkAvatar
                        : dataConvertProduct.image;
                      newObjProduct.resource_url = LinkDoc
                        ? LinkDoc
                        : dataConvertProduct.resource_url;
                      newObjProduct.status = 1;
                      newObjProduct.description = values.description ;
                      newObjProduct.product_type_id =
                        values.product_type_id;

                      setLoadingButton(STATUS_KEY_INPUT.LOADING);
                      setDisableButton(true);
                      let data = {
                        newObjProduct: newObjProduct,
                        id: id,
                      };
                      const response = await dispatch(UpdateProduct(data))
                      if (UpdateProduct.fulfilled.match(response)) {
                        toast.success('C???p nh???t s???n ph???m th??nh c??ng');
                        setLoadingButton(STATUS_KEY_INPUT.DEFAULT);
                        setDisableButton(false)
                        setTimeout(
                          () => history.push(`/product/${id}`),
                          1000
                        );
                      } else {
                        toast.error('C???p nh???t s???n ph???m th???t b???i !');
                        setLoadingButton(STATUS_KEY_INPUT.ERROR);
                        setDisableButton(false);
                      }
                      setDisableButton(false);
                    }}
                  >
                    {() => (
                      <Form encType="multipart/form-data">
                        <ContentForm>
                          <FormLeft>
                            <InputElement
                              label="T??n s???n ph???m"
                              name="name"
                              placeholder="Nh???p t??n s???n ph???m"
                            />
                            <InputElement
                              label="???????ng d???n video"
                              name="video_url"
                              placeholder="Link video "
                            />
                            <GroupLabel className="group-label">
                              <InputElement
                                label="M??n H???c  "
                                name="subject_id"
                                hidden
                              />
                              <div className="text-label">
                                {productDetail?.subject?.name}
                              </div>
                            </GroupLabel>
                            <GroupLabel className="group-label">
                              <InputElement
                                label="Gi???ng vi??n"
                                name="teacher_id"
                                hidden
                              />
                              <div className="text-label">
                                {productDetail?.teacher?.name}
                              </div>
                            </GroupLabel>

                            <GroupLabel className="group-label">
                              <InputElement
                                label="K?? h???c"
                                name="semester_id"
                                placeholder="K??? h???c"
                                hidden
                              />
                              <div className="text-label">
                                {productDetail?.semester?.name}
                              </div>
                            </GroupLabel>

                            <GroupStudents>
                              <Title className="title">Th??nh vi??n</Title>
                              {groupCodeStudent.length > 0 ? (
                                <>
                                  <GroupInput>
                                    {groupCodeStudent.map((item, index) => {
                                      return (
                                        <div className="group" key={index}>
                                          <input
                                            className="inputE"
                                            type="text"
                                            placeholder="T??n v?? m?? s??? sinh vi??n "
                                            value={item}
                                            required
                                            onChange={(e) =>
                                              EmailChange(e, index)
                                            }
                                          />
                                          <button
                                            className="remove"
                                            type="button"
                                            onClick={() => remove(index)}
                                            disabled={
                                              groupCodeStudent.length === 1
                                            }
                                          >
                                            <BsTrash />
                                          </button>
                                        </div>
                                      );
                                    })}
                                    <button
                                      type="button"
                                      className="add"
                                      onClick={() => {
                                        setGroupCodeStudent([
                                          ...groupCodeStudent,
                                          '',
                                        ]);
                                      }}
                                    >
                                      Th??m +
                                    </button>
                                  </GroupInput>{' '}
                                </>
                              ) : (
                                <>
                                  {/* groupCodeStudent  kh??ng t???n t???i  */}
                                  {hidenStudent && (
                                    <>
                                      <GroupInput>
                                        {dataConvertStudent.map(
                                          (item, index) => {
                                            return (
                                              <div
                                                className="group"
                                                key={index}
                                              >
                                                <input
                                                  className="inputE"
                                                  type="text"
                                                  placeholder="T??n v?? m?? s??? sinh vi??n "
                                                  value={item}
                                                  required
                                                  onChange={(e) =>
                                                    EmailChange(e, index)
                                                  }
                                                />
                                                <button
                                                  className="remove"
                                                  type="button"
                                                  onClick={() => remove(index)}
                                                  disabled={
                                                    dataConvertStudent.length ===
                                                    1
                                                  }
                                                >
                                                  <BsTrash />
                                                </button>
                                              </div>
                                            );
                                          }
                                        )}
                                        <button
                                          type="button"
                                          className="add"
                                          onClick={() => {
                                            setGroupCodeStudent([
                                              ...dataConvertStudent,
                                              '',
                                            ]);
                                          }}
                                        >
                                          Th??m +
                                        </button>
                                      </GroupInput>
                                    </>
                                  )}
                                </>
                              )}
                            </GroupStudents>

                            <SelectElement
                              label="Lo???i"
                              name="product_type_id"
                              placeholder="Lo???i s???n ph???m"
                              options={selectProductTypes || []}
                            />
                            <InputFileElement
                              name="image_url"
                              label="???nh ?????i di???n"
                              id="file-avatar"
                              content="Ch???n ???nh ?????i di???n"
                              linkAvatar={linkAvatar}
                              setLinkAvatar={setLinkAvatar}
                            />
                            {!linkAvatar && (
                              <TetailItem onClick={() => setReviewAvatar(true)}>
                                Xem avatar{' '}
                              </TetailItem>
                            )}
                            {reviewAvatar && (
                              <DemoAvatar>
                                <img src={dataConvertProduct.image} alt="" />
                                <Overlay onClick={() => setReviewAvatar(false)}>
                                  {' '}
                                </Overlay>
                              </DemoAvatar>
                            )}
                            <InputFileElement
                              name="resource_url"
                              label="T??i li???u"
                              id="file-document"
                              content="Ch???n t??i li???u"
                              setLinkDoc={setLinkDoc}
                              LinkDoc={LinkDoc}
                            />
                            {!LinkDoc && (
                              <TetailItem
                                onClick={() =>
                                  popupWindow(
                                    dataConvertProduct?.resource_url,
                                    'T??i li???u',
                                    '600',
                                    '600'
                                  )
                                }
                              >
                                Xem t??i li???u
                              </TetailItem>
                            )}
                            <InputFileElement
                              name="galleries"
                              label="H??nh ???nh"
                              id="file-gallery"
                              content={
                                listImages && listImages.length > 0 ? (
                                  `Danh s??ch ???nh  ${listImages.length} `
                                ) : (
                                  <>
                                    {' '}
                                    {hiden ? (
                                      <>
                                        {' '}
                                        {ArrayGalleris
                                          ? ` Danh s??ch ???nh ${ArrayGalleris.length} `
                                          : 'Ch???n b??? s??u t???p'}{' '}
                                      </>
                                    ) : (
                                      <> Ch???n b??? s??u t???p </>
                                    )}
                                  </>
                                )
                              }
                              multiple
                              setListImage={setListImage}
                              listImages={listImages}
                              disabled={listImages && listImages.length >= 6}
                            />

                            {/*  list h??nh ???nh  */}
                            <ListImage>
                              {listImages && listImages.length > 0 ? (
                                listImages.map((item, index) => {
                                  return (
                                    <div className="box-item" key={index}>
                                      <img src={item} alt="" />
                                      <div className="delete">
                                        <BsTrash
                                          onClick={() =>
                                            RemoveImage(item, index)
                                          }
                                        />
                                      </div>
                                    </div>
                                  );
                                })
                              ) : (
                                <>
                                  {/*  ???n s???n ph???m */}
                                  {hiden && (
                                    <>
                                      {ArrayGalleris &&
                                        ArrayGalleris.map((item, index) => {
                                          return (
                                            <div
                                              className="box-item"
                                              key={index}
                                            >
                                              <img src={item} alt="" />
                                              <div className="delete">
                                                <BsTrash
                                                  onClick={() =>
                                                    RemoveImage(item, index)
                                                  }
                                                />
                                              </div>
                                            </div>
                                          );
                                        })}
                                    </>
                                  )}
                                </>
                              )}
                            </ListImage>
                          </FormLeft>

                          <FormRight>
                            <WarEditor>
                              <CKEditor data={productDetail?.description} />
                            </WarEditor>
                          </FormRight>
                        </ContentForm>
                        <WrapButton>
                          {/* <label onClick={() => setShow(!show)} className="review">
                  Xem tr?????c
                </label> */}

                          <button
                            disabled={
                           disableButton
                            }
                            type="submit"
                            className={`button-add ${
                              loadingButton === STATUS_KEY_INPUT.ERROR && 'er'
                            }`}
                          >
                            {loadingButton === STATUS_KEY_INPUT.LOADING && (
                              <div className="loader"></div>
                            )}
                            {loadingButton === STATUS_KEY_INPUT.ERROR && (
                              <div className="error">
                                <RiErrorWarningLine />
                              </div>
                            )}
                            C???p nh???t s???n ph???m
                          </button>
                        </WrapButton>
                      </Form>
                    )}
                  </Formik>
                </WrapForm>
                <ToastContainer position="top-right" autoClose={1500} />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </WrapPage>
          :   <Redirect to="/" /> }
        </>
      )}
    </>
  );
};

export default memo(AddProduct);
