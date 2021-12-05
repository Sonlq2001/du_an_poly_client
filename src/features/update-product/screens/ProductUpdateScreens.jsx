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
} from './ProductUpdateScreen.styles';
import { initForm } from '../helpers/add-product.helpers';
import InputElement from 'components/FormElement/InputElement/InputElement';
import InputFileElement from 'components/FormElement/InputElement/InputFileElement';
import SelectElement from 'components/FormElement/SelectElement/SelectElement';
import {
  getProductTypes,
  removeImage,
} from '../redux/update-product.slice';
import CKEditor from '../components/editor/CKEditor';
import { WarEditor } from '../components/editor/Editor.styles';
import { MapOptions } from 'helpers/convert/map-options';
import { STATUS_KEY_INPUT } from '../constants/update-product.key';
import { getDetailProduct } from 'features/detail/redux/detail.slice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productTypes, userLogin,detailProduct } = useSelector((state) => ({
    productTypes: state.addProduct.productTypes,
    userLogin: state.auth.userLogin,
    detailProduct : state.detailProduct.detailProduct
  }));
  const ArrayGalleris = detailProduct && detailProduct.product_galleries.map((item)=>{
    return item.image_url })
  const [listImages, setListImage] = useState([] )
  const [linkAvatar, setLinkAvatar] = useState(null);
  const [LinkDoc, setLinkDoc] = useState(null);
  const [loadingButton, setLoadingButton] = useState(STATUS_KEY_INPUT.DEFAULT);
  const [disableButton, setDisableButton] = useState(false);
  const [loadingItem, setLoadingItem] = useState(true);
  const { id } = useParams();
  const fetchProductTypes = useCallback(() => {
    dispatch(getProductTypes());
  }, [dispatch]);

  useEffect(() => {
    fetchProductTypes();
  }, [fetchProductTypes]);

  useEffect(() => {
      dispatch(getDetailProduct(id))
  }, [dispatch, id]);


// console.log("detailProduct",detailProduct)
  const selectProductTypes = MapOptions(productTypes);
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
          initialValues={
            detailProduct
          }
          onSubmit={async (values) => {
            // const { value } = product_type_id;
            // const newObjProduct = { ...rest, product_type_id: value };
            // newObjProduct.students = groupCodeStudent;
            // newObjProduct.galleries = listImages;
            // newObjProduct.email = userLogin.email;
            // newObjProduct.image_url = linkAvatar;
            // newObjProduct.resource_url = LinkDoc;
            // setLoadingButton(STATUS_KEY_INPUT.LOADING);
            // setDisableButton(true);
console.log("newObjProduct",detailProduct)
            // const response = await dispatch(postAddProduct(newObjProduct));
            // if (postAddProduct.fulfilled.match(response)) {
            //   toast.success('Thêm sản phẩm thành công !');
            //   setLoadingButton(STATUS_KEY_INPUT.DEFAULT);
            //   setTimeout(
            //     () => history.push(`/product/${response.payload.id}`),
            //     1000
            //   );
            // } else {
            //   toast.success('Thêm sản phẩm thất bại !');
            //   setLoadingButton(STATUS_KEY_INPUT.ERROR);
            // }
            setDisableButton(false);
          }}
        >
          {() => (
            <Form encType="multipart/form-data">
              <ContentForm>
                <FormLeft>
                  <InputElement
                    label="Tên sản phẩm"
                    name="detailProduct.name"
                    placeholder="Nhập tên sản phẩm"
                  />
                  <InputElement
                    label="Đường dẫn video"
                    name="detailProduct.video_url"
                    placeholder="Link video "
                  />
                  <GroupLabel className="group-label">
                    <InputElement label="Môn Học  " name="subject_id" hidden />
                    <div className="text-label">
                      {/* {infoProduct?.subject_id
                        ? infoProduct.subject_id
                        : 'Môn Học '} */}
                    </div>
                 
                  </GroupLabel>

                  <GroupLabel className="group-label">
                    <InputElement label="Giảng viên" name="teacher_id" hidden />
                    <div className="text-label">
                    {detailProduct?.teacher?.name}
                    </div>
                   
                  </GroupLabel>

                  <GroupLabel className="group-label">
                    <InputElement
                      label="Kì học"
                      name="semester_id"
                      placeholder="Kỳ học"
                      hidden
                    />
                    <div className="text-label">
                    {detailProduct?.semester?.name}
                    </div>
                   
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
                    {ArrayGalleris&&
                      ArrayGalleris.map((item, index) => {
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
                // infoProduct &&
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
                  <button type="submit"  className="button-add">
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
