import React, { useState, memo } from 'react';
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
  ListImage,
} from './ProductAddScreen.styles';
import { RiDeleteBin2Line } from 'react-icons/ri';
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
import { addProduct } from '../redux/productadd.slice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [statusDocument, setStatusDocument] = useState(false);
  const [statusGalleries, setStatusGalleries] = useState(false);
  const [listImage, setListImage] = useState([]);
  return (
    <WrapPage className="container">
      <Title> Sản phẩm mới</Title>
      <WrapForm>
        <Formik
          initialValues={initForm}
          onSubmit={(values) => {
            console.log(values);
            const newProduct = new FormData();
            newProduct.append('name', values.name);
            newProduct.append('video_url', values.video_url);
            newProduct.append('campus_id', values.campus_id);
            newProduct.append('teacher_id', values.teacher_id);
            newProduct.append('subject_id', values.subject_id);
            newProduct.append('semester_id', values.semester_id);
            newProduct.append('product_type_id', values.product_type_id);
            newProduct.append('class', values.class);
            newProduct.append('image', values.image);
            newProduct.append('resource_url', values.resource_url);
            newProduct.append('students', values.students);
            newProduct.append('galleries[]', values.galleries);
            newProduct.append('status', values.status);
            newProduct.append('description', values.description);
            dispatch(addProduct(newProduct));
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
                    setStatusDocument={setStatusDocument}
                  />
                  <InputFileElement
                    name="galleries"
                    label="Hình ảnh"
                    id="file-gallery"
                    content="Chọn bộ sưu tập"
                    multiple
                    setStatusGalleries={setStatusGalleries}
                    setListImage={setListImage}
                  />
                  <ListImage>
                    {listImage &&
                      listImage.map((item) => {
                        console.log(item);
                        return (
                          <div className="box-item">
                            <img src={item} alt="" />
                            <div className="delete">
                              <RiDeleteBin2Line />
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
                {statusDocument && statusGalleries ? (
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
    </WrapPage>
  );
};

export default memo(AddProduct);
