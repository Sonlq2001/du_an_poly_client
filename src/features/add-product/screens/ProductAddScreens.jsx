import React, { useState, memo, useEffect, useCallback } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';

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
  WrapPageHeader,
} from './ProductAddScreen.styles';
import { initForm } from './../helpers/add-product.helpers';
import InputElement from 'components/FormElement/InputElement/InputElement';
import InputFileElement from 'components/FormElement/InputElement/InputFileElement';
import SelectElement from 'components/FormElement/SelectElement/SelectElement';
import Loading from 'components/Loading/Loading';
import {
  postAddProduct,
  getInfo,
  removeImage,
} from '../redux/add-product.slice';
import CKEditor from '../components/Editor/CKEditor';
import { WarEditor } from '../components/Editor/Editor.styles';
import { MapOptions } from 'helpers/convert/map-options';
import { STATUS_KEY_INPUT } from './../constants/add-product.key';
import { MESSAGE_DEFAULT } from 'constants/app.constants';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import { KEY_PRODUCT } from 'constants/app.constants';
import { AUTH_PATHS } from 'features/auth/constants/auth.paths';
import { getProductType } from 'features/master-data/redux/master-data.slice';
import { DETAIL_PATHS } from 'features/detail/constants/detail.paths';
import Tutorial from '../components/Tutorial/tutorial';

const AddProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tutorial, setTutorial] = useState(false);
  const [listImages, setListImage] = useState([]);
  const [linkAvatar, setLinkAvatar] = useState(null);
  const [LinkDoc, setLinkDoc] = useState(null);
  const [loadingButton, setLoadingButton] = useState(STATUS_KEY_INPUT.DEFAULT);
  const [disableButton, setDisableButton] = useState(false);
  const [loadingItem, setLoadingItem] = useState(true);
  const { product_token } = useParams();

  const fetchProductTypes = useCallback(() => {
    dispatch(getProductType());
  }, [dispatch]);

  useEffect(() => {
    fetchProductTypes();
  }, [fetchProductTypes]);

  const { infoProduct, userLogin, isInfoProductLoading, listProductType } =
    useSelector((state) => ({
      listProductType: state.masterData?.listProductType,
      infoProduct: state.addProduct?.infoProduct,
      isInfoProductLoading: state.addProduct?.isInfoProductLoading,
      userLogin: state.auth?.userLogin,
    }));

  useEffect(() => {
    const getInfoApi = async () => {
      const response = await dispatch(
        getInfo({
          token: product_token,
        })
      );

      if (getInfo.fulfilled.match(response)) {
        setLoadingItem(false);
      } else {
        userLogin?.email ? history.push('/') : history.push(AUTH_PATHS.SIGN_IN);
      }
    };
    getInfoApi();
  }, [dispatch, product_token, history, userLogin]);

  useEffect(() => {
    if (product_token) {
      window.sessionStorage.setItem(KEY_PRODUCT, product_token);
    }
  }, [product_token]);


  const selectProductTypes = MapOptions(listProductType ?? []);
  let email = [];
  const [groupCodeStudent, setGroupCodeStudent] = useState([
    userLogin?.email.substring(0, userLogin.email.search('@')),
  ]);
  const remove = (i) => {
    setGroupCodeStudent(groupCodeStudent.filter((_, index) => index !== i));
  };

  const handleRemoveImage = async (path, key) => {
    const response = await dispatch(
      removeImage({
        img_url: path,
      })
    );
    if (removeImage.fulfilled.match(response)) {
      setListImage(listImages.filter((_, index) => index !== key));
    } else {
      toast.error(MESSAGE_DEFAULT.PROBLEM);
    }
  };

  const handleChangeEmail = (e, key) => {
    const valueEmail = e.target.value;
    email = [...groupCodeStudent];
    email[key] = valueEmail;
    setGroupCodeStudent(email);
  };
  if(Number(product_token)){
    window.sessionStorage.removeItem('product_token');
    return <Redirect to="/"/>;
  }
  if (!userLogin?.email) {
    return <Redirect to={AUTH_PATHS.SIGN_IN} />;
  }

  return (
    <>
      <Breadcrumb position="Thêm sản phẩm" />
      {!isInfoProductLoading ? (
        <WrapPage className="container">
          <WrapPageHeader>
            <h3 className="title-form">Thêm mới sản phẩm</h3>
            <div className="question-form" onClick={()=>setTutorial(!tutorial)}>Hướng dẫn ?</div>
          </WrapPageHeader>
          <WrapForm>
            <Formik
              initialValues={{
                ...initForm,
              }}
              onSubmit={async ({ product_type_id, ...rest }) => {
                const newObjProduct = { ...rest };
                newObjProduct.students = groupCodeStudent;
                newObjProduct.galleries = listImages;
                newObjProduct.email = userLogin.email;
                newObjProduct.image_url = linkAvatar;
                newObjProduct.resource_url = LinkDoc;
                newObjProduct.token = product_token;
                newObjProduct.product_type_id = product_type_id;
                setLoadingButton(STATUS_KEY_INPUT.LOADING);
                setDisableButton(true);
                const response = await dispatch(postAddProduct(newObjProduct));

                if (postAddProduct.fulfilled.match(response)) {
                  toast.success('Thêm sản phẩm thành công');
                  window.sessionStorage.removeItem('product_token');
                  setLoadingButton(STATUS_KEY_INPUT.DEFAULT);
                  setTimeout(
                    () =>
                      history.push(
                        DETAIL_PATHS.DETAIL_PRODUCT.replace(
                          ':id',
                          response.payload?.id
                        )
                      ),
                    1500
                  );
                } else {
                  toast.success('Thêm sản phẩm thất bại !');
                  setLoadingButton(STATUS_KEY_INPUT.ERROR);
                }
                setDisableButton(false);
              }}
            >
              {() => (
                <Form encType="multipart/form-data">
                  <ContentForm>
                    <FormLeft>
                      <InputElement
                        label="Tên sản phẩm"
                        name="name"
                        placeholder="Nhập tên sản phẩm"
                      />
                      <InputElement
                        label="Đường dẫn video"
                        name="video_url"
                        placeholder="Link video "
                      />
                      <GroupLabel className="group-label">
                        <InputElement
                          label="Môn Học  "
                          name="subject_id"
                          hidden
                        />
                        <div className="text-label">
                          {infoProduct?.subject_id
                            ? infoProduct.subject_id
                            : 'Môn Học '}
                        </div>
                        {loadingItem && (
                          <div className="loading">
                            <AiOutlineLoading3Quarters />
                          </div>
                        )}
                      </GroupLabel>

                      <GroupLabel className="group-label">
                        <InputElement
                          label="Giảng viên"
                          name="teacher_id"
                          hidden
                        />
                        <div className="text-label">
                          {infoProduct?.teacher_id
                            ? infoProduct.teacher_id
                            : 'Giảng Viên'}
                        </div>
                        {loadingItem && (
                          <div className="loading">
                            <AiOutlineLoading3Quarters />
                          </div>
                        )}
                      </GroupLabel>

                      <GroupLabel className="group-label">
                        <InputElement
                          label="Kì học"
                          name="semester_id"
                          placeholder="Kỳ học"
                          hidden
                        />
                        <div className="text-label">
                          {infoProduct?.semester_id
                            ? infoProduct.semester_id
                            : 'Kỳ học '}
                        </div>
                        {loadingItem && (
                          <div className="loading">
                            <AiOutlineLoading3Quarters />
                          </div>
                        )}
                      </GroupLabel>

                      <GroupStudents>
                        <Title className="title">Thành viên</Title>
                        <GroupInput>
                          {groupCodeStudent.map((item, index) => {
                            return (
                              <div className="group" key={index}>
                                <input
                                  className="inputE"
                                  type="text"
                                  placeholder="Tên và mã số sinh viên "
                                  value={item}
                                  required
                                  onChange={(e) => handleChangeEmail(e, index)}
                                  disabled={index === 0 ? true : false}
                                />

                                <button
                                  className="remove"
                                  type="button"
                                  onClick={() => remove(index)}
                                  disabled={index === 0 ? true : false}
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
                              setGroupCodeStudent([...groupCodeStudent, '']);
                            }}
                          >
                            Thêm +
                          </button>
                        </GroupInput>
                      </GroupStudents>

                      <SelectElement
                        label="Loại"
                        name="product_type_id"
                        placeholder="Loại sản phẩm"
                        options={selectProductTypes || []}
                      />

                      <InputFileElement
                        name="image_url"
                        label="Ảnh đại diện"
                        id="file-avatar"
                        content="Chọn ảnh đại diện"
                        linkAvatar={linkAvatar}
                        setLinkAvatar={setLinkAvatar}
                      />
                      <InputFileElement
                        name="resource_url"
                        label="Tài liệu"
                        id="file-document"
                        content="Chọn tài liệu"
                        setLinkDoc={setLinkDoc}
                        LinkDoc={LinkDoc}
                      />
                      <InputFileElement
                        name="galleries"
                        label="Hình ảnh"
                        id="file-gallery"
                        content={
                          listImages.length > 0
                            ? `Danh sách ảnh  ${listImages.length} `
                            : ' Chọn bộ sưu tập'
                        }
                        multiple
                        setListImage={setListImage}
                        listImages={listImages}
                        disabled={listImages && listImages.length >= 6}
                      />
                      <ListImage>
                        {listImages &&
                          listImages.map((item, index) => {
                            return (
                              <div className="box-item" key={index}>
                                <img src={item} alt="" />
                                <div className="delete">
                                  <BsTrash
                                    onClick={() =>
                                      handleRemoveImage(item, index)
                                    }
                                  />
                                </div>
                              </div>
                            );
                          })}
                      </ListImage>
                    </FormLeft>

                    <FormRight>
                      <WarEditor>
                        <CKEditor />
                      </WarEditor>
                    </FormRight>
                  </ContentForm>
                  <WrapButton>
                    {LinkDoc &&
                    linkAvatar &&
                    infoProduct &&
                    listImages.length > 0 ? (
                      <button
                        disabled={disableButton}
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
                        Thêm sản phẩm
                      </button>
                    ) : (
                      <button type="submit" disabled className="button-add">
                        Thêm sản phẩm
                      </button>
                    )}
                  </WrapButton>
                </Form>
              )}
            </Formik>
          </WrapForm>
          <Tutorial  tutorial={tutorial} setTutorial={setTutorial}/>
          <ToastContainer position="top-right" autoClose={1500} />
        </WrapPage>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default memo(AddProduct);
