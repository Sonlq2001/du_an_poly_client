import React, { useState, memo, useEffect, useCallback } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { unwrapResult } from '@reduxjs/toolkit';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

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
import { RiDeleteBin2Line } from 'react-icons/ri';
// import ReviewProduct from '../components/Review/Review';
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
import store from 'redux/store';
import CKEditor from '../components/Editor/CKEditor';
import { WarEditor } from '../components/Editor/Editor.styles';
import { MapOptions } from 'helpers/convert/map-options';

const AddProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userLogin } = store.getState().auth;
  const { product_token } = useParams();
  const [loadingItem, setLoadingItem] = useState(true);
  const fetchProductTypes = useCallback(() => {
    dispatch(getProductTypes());
  }, [dispatch]);
  useEffect(() => {
    fetchProductTypes();
  }, [fetchProductTypes]);
  useEffect(async () => {
    const tokens = {
      token: product_token,
    };
    const response = await dispatch(getInfo(tokens));
    if (getInfo.fulfilled.match(response)) {
      setLoadingItem(false);
    }
  }, [dispatch, product_token]);
  const { productTypes, infoProduct } = useSelector(
    (state) => state.addProduct
  );

  const selectProductTypes = MapOptions(productTypes);
  const [listImages, setListImage] = useState([]);
  const [linkAvatar, setLinkAvatar] = useState(null);
  const [LinkDoc, setLinkDoc] = useState(null);
  let email = [];
  // email-nhom : vietbhph09726
  const [Group, setGroup] = useState(['sonnhph12562']);

  const remove = (i) => {
    setGroup(Group.filter((_, index) => index !== i));
  };

  const RemoveImage = async (i, key) => {
    const url = { img_url: i };
    try {
      await dispatch(removeImage(url));
      setListImage(listImages.filter((item, index) => index !== key));
    } catch (error) {}
  };

  const EmailChange = (e, key) => {
    email = [...Group];
    email[key] = e.target.value;
    setGroup(email);
  };

  return (
    <WrapPage className="container">
      <Title> Sản phẩm mới</Title>
      <WrapForm>
        <Formik
          initialValues={{
            ...initForm,
          }}
          onSubmit={async ({ product_type_id, ...rest }) => {
            const { value } = product_type_id;
            const newObjProduct = { ...rest, product_type_id: value };
            newObjProduct.students = Group;
            newObjProduct.galleries = listImages;
            newObjProduct.email = userLogin.email;
            newObjProduct.image_url = linkAvatar;
            newObjProduct.resource_url = LinkDoc;
            newObjProduct.token = product_token;
            const response = await dispatch(postAddProduct(newObjProduct));
            if (postAddProduct.fulfilled.match(response)) {
              toast.success('Thêm sản phẩm thành công !');
              setTimeout(
                () => history.push(`/product/${response.payload.id}`),
                1000
              );
            }
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
                      {infoProduct && infoProduct.subject_id
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
                      {infoProduct && infoProduct.teacher_id
                        ? infoProduct.teacher_id
                        : 'Giảng Viên '}
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
                      {infoProduct && infoProduct.semester_id
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
                    <Title> Thành viên </Title>
                    <GroupInput>
                      {Group.map((item, index) => {
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
                              <RiDeleteBin2Line />
                            </button>
                          </div>
                        );
                      })}
                      <button
                        type="button"
                        className="add"
                        onClick={() => setGroup([...Group, ''])}
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
                              <RiDeleteBin2Line
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
                  <button type="submit" className="button-add">
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
