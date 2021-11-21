import React, { useState, memo, useEffect, useCallback } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
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
} from './ProductAddScreen.styles';
import { initForm } from './../helpers/add-product.helpers';
import InputElement from 'components/FormElement/InputElement/InputElement';
import InputFileElement from 'components/FormElement/InputElement/InputFileElement';
import SelectElement from 'components/FormElement/SelectElement/SelectElement';
import {
  postAddProduct,
  getInfo,
  getProductTypes,
  removeImage,
} from '../redux/add-product.slice';
import CKEditor from '../components/Editor/CKEditor';
import { WarEditor } from '../components/Editor/Editor.styles';
import { MapOptions } from 'helpers/convert/map-options';
import { STATUS_KEY_INPUT } from './../constants/add-product.key';

const AddProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [listImages, setListImage] = useState([]);
  const [linkAvatar, setLinkAvatar] = useState(null);
  const [LinkDoc, setLinkDoc] = useState(null);
  const [loadingButton, setLoadingButton] = useState(STATUS_KEY_INPUT.DEFAULT);
  const [disableButton, setDisableButton] = useState(false);
  const [loadingItem, setLoadingItem] = useState(true);
  const { product_token } = useParams();

  const fetchProductTypes = useCallback(() => {
    dispatch(getProductTypes());
  }, [dispatch]);

  useEffect(() => {
    fetchProductTypes();
  }, [fetchProductTypes]);

  useEffect(() => {
    const getInfoApi = async () => {
      const response = await dispatch(
        getInfo({
          token: product_token,
        })
      );
      if (getInfo.fulfilled.match(response)) {
        setLoadingItem(false);
      }
    };
    getInfoApi();
  }, [dispatch, product_token]);

  const { productTypes, infoProduct, userLogin } = useSelector((state) => ({
    productTypes: state.addProduct.productTypes,
    infoProduct: state.addProduct.infoProduct,
    userLogin: state.auth.userLogin,
  }));

  const selectProductTypes = MapOptions(productTypes);
  window.localStorage.setItem('product_token', product_token);
  let email = [];
  const [groupCodeStudent, setGroupCodeStudent] = useState([
    userLogin?.student_code,
  ]);

  const remove = (i) => {
    setGroupCodeStudent(groupCodeStudent.filter((_, index) => index !== i));
  };

  const RemoveImage = async (i, key) => {
    const url = { img_url: i };
    try {
      await dispatch(removeImage(url));
      setListImage(listImages.filter((_, index) => index !== key));
    } catch (error) {}
  };

  const EmailChange = (e, key) => {
    const valueEmail = e.target.value;
    email = [...groupCodeStudent];
    email[key] = valueEmail;
    setGroupCodeStudent(email);
  };

  return (
    <WrapPage className="container">
      <Title title> Sản phẩm mới</Title>
      <WrapForm>
        <Formik
          initialValues={{
            ...initForm,
          }}
          onSubmit={async ({ product_type_id, ...rest }) => {
            const { value } = product_type_id;
            const newObjProduct = { ...rest, product_type_id: value };
            newObjProduct.students = groupCodeStudent;
            newObjProduct.galleries = listImages;
            newObjProduct.email = userLogin.email;
            newObjProduct.image_url = linkAvatar;
            newObjProduct.resource_url = LinkDoc;
            newObjProduct.token = product_token;
            setLoadingButton(STATUS_KEY_INPUT.LOADING);
            setDisableButton(true);

            const response = await dispatch(postAddProduct(newObjProduct));
            if (postAddProduct.fulfilled.match(response)) {
              toast.success('Thêm sản phẩm thành công !');
              setLoadingButton(STATUS_KEY_INPUT.DEFAULT);
              setTimeout(
                () => history.push(`/product/${response.payload.id}`),
                1000
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
                    <InputElement label="Môn Học  " name="subject_id" hidden />
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
                    <InputElement label="Giảng viên" name="teacher_id" hidden />
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
                              onChange={(e) => EmailChange(e, index)}
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
                                onClick={() => RemoveImage(item, index)}
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
                {/* <label onClick={() => setShow(!show)} className="review">
                  Xem trước
                </label> */}
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
      {/* <ReviewProduct show={show} setShow={setShow} data={formik} /> */}

      <ToastContainer position="top-right" autoClose={1500} />
    </WrapPage>
  );
};

export default memo(AddProduct);
