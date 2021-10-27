import React, { useState, memo, useEffect, useCallback } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { unwrapResult } from '@reduxjs/toolkit';
import queryString from 'query-string';

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
} from '../redux/add-product.slice';
import store from 'redux/store';
import CKEditor from './../components/Editor/CKEditor';
import { WarEditor } from './../components/Editor/Editor.styles';
import { MapOptions } from 'helpers/convert/map-options';

const AddProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const { userLogin } = store.getState().auth;

  const [statusDocument, setStatusDocument] = useState(false);
  const [statusGalleries, setStatusGalleries] = useState(false);
  const [listImage, setListImage] = useState([]);

  const fetchProductTypes = useCallback(() => {
    dispatch(getProductTypes());
  }, [dispatch]);

  useEffect(() => {
    fetchProductTypes();
  }, [fetchProductTypes]);

  const { productTypes, infoProduct } = useSelector((state) => ({
    productTypes: state.addProduct.productTypes,
    infoProduct: state.addProduct.infoProduct,
  }));

  const selectProductTypes = MapOptions(productTypes);

  const { teach, subject, campus, semester } = queryString.parse(search);

  const fetchInfoProduct = useCallback(() => {
    if (search) {
      const objQuery = {
        teacher_id: teach,
        subject_id: subject,
        campus_id: campus,
        semester_id: semester,
      };
      dispatch(getInfo(objQuery));
    }
  }, [dispatch, search, teach, subject, campus, semester]);

  useEffect(() => {
    fetchInfoProduct();
  }, [fetchInfoProduct]);

  let email = [];

  const [Group, setGroup] = useState([userLogin?.email]);

  const remove = (i) => {
    setGroup(Group.filter((_, index) => index !== i));
  };

  const RemoveImage = (i) => {
    setListImage(listImage.filter((_, index) => index !== i));
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
            teacher_id: teach,
            semester_id: semester,
          }}
          onSubmit={({ product_type_id, ...rest }) => {
            const { value } = product_type_id;
            const newObjProduct = { ...rest, product_type_id: value };
            newObjProduct.students = Group;
            newObjProduct.galleries = listImage;
            dispatch(postAddProduct(newObjProduct))
              .then(unwrapResult)
              .then(() => {
                toast.success('Thêm sản phẩm thành công !');
                setTimeout(() => history.push('/'), 1000);
              });
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
                    placeholder="Đường dẫn"
                  />

                  <GroupLabel className="group-label">
                    <InputElement
                      label="Giảng viên"
                      name="teacher_id"
                      value={teach}
                      hidden
                    />
                    {infoProduct?.teacherName &&
                    infoProduct?.teacherName !== null ? (
                      <>
                        <div className="text-label">
                          {infoProduct.teacherName}
                        </div>
                      </>
                    ) : (
                      <div className="text-label">Chưa có thông tin ?</div>
                    )}
                  </GroupLabel>

                  <GroupLabel className="group-label">
                    <InputElement
                      label="Môn học"
                      name="subject_id"
                      value={subject}
                      hidden
                    />
                    {infoProduct?.subjectName &&
                    infoProduct?.subjectName === null ? (
                      <>
                        <div className="text-label">
                          {infoProduct.subjectName}
                        </div>
                      </>
                    ) : (
                      <div className="text-label">Chưa có thông tin ?</div>
                    )}
                  </GroupLabel>

                  <GroupLabel className="group-label">
                    <InputElement
                      label="Kì học"
                      name="semester_id"
                      placeholder="Nhập tên sản phẩm"
                      value={teach}
                      hidden
                    />
                    {infoProduct?.semesterName &&
                    infoProduct?.semesterName !== null ? (
                      <>
                        <div className="text-label">
                          {infoProduct.semesterName}
                        </div>
                      </>
                    ) : (
                      <div className="text-label">Chưa có thông tin ?</div>
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
                              type="email"
                              placeholder="email"
                              value={item}
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
                  />
                  <InputFileElement
                    name="resource_url"
                    label="Tài liệu"
                    id="file-document"
                    content="Chọn tài liệu"
                    setStatusDocument={setStatusDocument}
                    statusDocument={statusDocument}
                  />
                  <InputFileElement
                    name="galleries"
                    label="Hình ảnh"
                    id="file-gallery"
                    content="Chọn bộ sưu tập"
                    multiple
                    setStatusGalleries={setStatusGalleries}
                    setListImage={setListImage}
                    statusGalleries={statusGalleries}
                  />
                  <ListImage>
                    {listImage &&
                      listImage.map((item, index) => {
                        return (
                          <div className="box-item" key={index}>
                            <img src={item} alt="" />
                            <div className="delete">
                              <RiDeleteBin2Line
                                onClick={() => RemoveImage(index)}
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

                <button className="button-add" type="submit">
                  Thêm sản phẩm
                </button>
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
