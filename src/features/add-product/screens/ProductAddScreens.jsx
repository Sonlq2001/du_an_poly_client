import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import {
  WrapPage,
  Title,
  WrapForm,
  ContentForm,
  FormLeft,
  FormRight,
  WrapButton,
} from './ProductAddScreen.styles';
import Editor from './../components/editor/Editor';
import ReviewProduct from '../components/Review/Review';
import { initForm } from './../helpers/add-product.helpers';
import InputElement from './../../../components/FormElement/InputElement/InputElement';
import InputFileElement from './../../../components/FormElement/InputElement/InputFileElement';
import SelectElement from './../../../components/FormElement/SelectElement/SelectElement';
import {
  PRODUCT_TYPE_ID,
  STUDENTS,
} from './../constants/ReviewProduct.constants';

const AddProduct = () => {
  const dispatch = useDispatch();

  return (
    <WrapPage className="container">
      <Title> Sản phẩm mới</Title>
      <WrapForm>
        <Formik
          initialValues={initForm}
          onSubmit={(values) => {
            console.log(values);
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
                    placeholder="Nhập tên sản phẩm"
                  />
                  <InputElement
                    label="Kì học"
                    name="semester_id"
                    placeholder="Nhập tên sản phẩm"
                  />
                  <SelectElement
                    label="Thành viên"
                    name="students"
                    isMulti
                    placeholder="Chọn thành viên tham gia"
                    options={STUDENTS}
                  />
                  <SelectElement
                    label="Loại"
                    name="product_type_id"
                    placeholder="Loại sản phẩm"
                    options={PRODUCT_TYPE_ID}
                  />
                  <InputFileElement
                    name="image"
                    label="Ảnh đại diện"
                    id="file-avatar"
                    content="Chọn ảnh đại diện"
                  />
                  <InputFileElement
                    name="resource_url"
                    label="Tài liệu"
                    id="file-document"
                    content="Chọn tài liệu"
                  />
                  <InputFileElement
                    name="galleries"
                    label="Hình ảnh"
                    id="file-gallery"
                    content="Chọn bộ sưu tập"
                    multiple
                  />
                </FormLeft>
                <FormRight>
                  <Editor name="description" />
                </FormRight>
              </ContentForm>
              <WrapButton>
                {/* <label onClick={() => setShow(!show)} className="review">
                  Xem trước
                </label> */}
                <button type="submit" className="button-add">
                  Thêm sản phẩm
                </button>
              </WrapButton>
            </Form>
          )}
        </Formik>
      </WrapForm>
      {/* <ReviewProduct show={show} setShow={setShow} data={formik} /> */}
    </WrapPage>
  );
};

export default AddProduct;
