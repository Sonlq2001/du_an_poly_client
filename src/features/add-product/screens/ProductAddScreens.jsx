import React, { useState, memo, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

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
} from './ProductAddScreen.styles';
import { RiDeleteBin2Line } from 'react-icons/ri';
import Editor from './../components/editor/Editor';
// import ReviewProduct from '../components/Review/Review';
import { initForm } from './../helpers/add-product.helpers';
import InputElement from 'components/FormElement/InputElement/InputElement';
import InputFileElement from 'components/FormElement/InputElement/InputFileElement';
import SelectElement from 'components/FormElement/SelectElement/SelectElement';
import { addProduct } from '../redux/add-product.slice';
import { getData } from '../redux/productTypeReducer';
import store from 'redux/store';

const AddProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const [statusDocument, setStatusDocument] = useState(false);
  const [statusGalleries, setStatusGalleries] = useState(false);
  const [listImage, setListImage] = useState([]);
  let email = [];

  const { userLogin } = store.getState().auth;

  const [Group, setGroup] = useState([userLogin?.email]);

  // danh sách product_type_id
  const listProductType = useSelector(
    (state) => state.listProTypes.productTypes
  );

  const productType =
    listProductType &&
    listProductType.map((item) => {
      return { ...item, label: item.name, value: item.id };
    });
  // xóa thành viên nhóm
  const remove = (i) => {
    setGroup(Group.filter((_, index) => index !== i));
  };
  //  xóa danh sách ảnh
  const RemoveImage = (i) => {
    setListImage(listImage.filter((_, index) => index !== i));
  };
  // lấy dữ liệu email
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
          initialValues={initForm}
          onSubmit={(values, { resetForm }) => {
            values.product_type_id = values.product_type_id.value;
            values.students = Group;
            values.galleries = listImage;
            console.log('values', values);
            dispatch(addProduct(values));
            resetForm();
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
                  <InputElement label="Giảng viên" name="teacher_id" />
                  <InputElement
                    label="Môn học"
                    name="subject_id"
                    disabled
                    placeholder="Nhập tên sản phẩm"
                  />
                  <InputElement
                    label="Kì học"
                    name="semester_id"
                    placeholder="Nhập tên sản phẩm"
                  />

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
                    options={productType && productType}
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
                          <div className="box-item">
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
                  <Editor name="description" />
                </FormRight>
              </ContentForm>
              <WrapButton>
                {/* <label onClick={() => setShow(!show)} className="review">
                  Xem trước
                </label> */}

                <button
                  type="submit"
                  className="button-add"
                  disabled={!statusDocument && !statusGalleries}
                >
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
