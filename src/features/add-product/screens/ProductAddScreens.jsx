import React, { useState } from 'react';
import { validationSchema } from './Validator';
import { useFormik } from 'formik';
import {
  WrapPage,
  Title,
  Warform,
  FromGroup,
  BoxFile,
  LisGroup,
  GroupImage,
  GroupHeaderImage,
  ListImage,
  BoxImage,
  From,
  WapItem,
  Input,
} from './ProductAddScreen.styles';
import { addProduct } from './../redux/productadd.slice';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { BsImageFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import Editor from './../components/editor/Editor';
import ReviewProduct from '../components/Review/Review';
const AddProduct = () => {
  const dispatch = useDispatch();
  const test = [
    { value: 1, label: 'Dự án website' },
    { value: 2, label: 'Dự án đồ họa ' },
  ];
  const students = [
    { value: 1, label: 'Lê Quang Sơn' },
    { value: 2, label: 'Bùi Hoàng Việt ' },
  ];
  const [show, setShow] = useState(false);
  const [fileName, SetFileName] = useState('');
  const [Image, setImage] = useState(false);
  const [selectProduct_id, SetselectProduct_id] = useState('');
  const [group_student, setGroup] = useState([]);
  const [avatar, setAvatar] = useState();
  const ChangeDocument = (e) => {
    SetFileName(e.target.files[0].name.slice(0, 20));
    formik.values.resource_url = e.target.files[0];
  };
  const ChangeAvatar = (e) => {
    setAvatar(e.target.files[0].name.slice(0, 20));
    formik.values.image = e.target.files[0];
  };
  const ChangImage = (e) => {
    formik.values.galleries = e.target.files;
    setImage(true);
  };
  const ChangeDescription = (data) => {
    formik.values.description = data;
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      video_url: '',
      campus_id: 1,
      teacher_id: 1,
      subject_id: 1,
      semester_id: 1,
      product_type_id: 1,
      class: 'pt15319',
      image: '',
      resource_url: '',
      students: [],
      galleries: [],
      description: '',
      status: 0,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      // const image = document.getElementById('image');
      // const galleries = document.getElementById('galleries');
      // const resoure = document.getElementById('resource');
      // formData.append('teacher_id', 1);
      // formData.append('semester_id', 1);
      // formData.append('subject_id', 1);
      // formData.append('class', 'pt1221');
      // formData.append('product_type_id', 1);
      // formData.append('campus_id', 1);
      // formData.append('video_url', 'asdf');
      // formData.append('description', 'awhufiwef');
      // formData.append('name', 'website');
      // formData.append('image', values.image);
      // for (let i = 0; i < values.galleries.length; i++) {
      //   formData.append(`galleries[]`, values.galleries[i]);
      // }
      // formData.append('students[]', values.students);
      // formData.append('resource_url', values.resource_url);
      // fetch('http://api.duanpoly.ml/api/products', {
      //   method: 'POST',
      //   body: formData,
      // })
      //   .then((response) => response.json())
      //   .then((result) => {
      //     console.log('Success:', result);
      //   })
      //   .catch((error) => {
      //     console.error('Error:', error);
      //   });
    },
  });
  const ChangeSelect = (e) => {
    formik.values.product_type_id = e.id;
    SetselectProduct_id(e.value);
  };
  const ChangeGroup = (e) => {
    setGroup(e);
    let group = e.map((item) => {
      return item.value;
    });
    formik.values.students = group;
  };
  return (
    <WrapPage className="container">
      <Title> Sản phẩm mới</Title>
      <Warform>
        <From enctype="multipart/form-data" onSubmit={formik.handleSubmit}>
          <WapItem>
            <FromGroup className="fromGroup">
              <label htmlFor="name" className="label-title ">
                Tên Sản phẩm
              </label>
              <Input
                error={formik.errors.name ? 'red' : ''}
                type="text"
                placeholder="Tên đề tài "
                id="name"
                name="name"
                className="filed-input"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name ? (
                <span> {formik.errors.name} </span>
              ) : null}
            </FromGroup>
            <FromGroup className="fromGroup">
              <label htmlFor="video_url" className="label-title ">
                video
              </label>
              <Input
                error={formik.errors.video_url ? 'red' : ''}
                type="text"
                placeholder="Tên đề tài "
                id="video_url"
                name="video_url"
                className="filed-input"
                value={formik.values.video_url}
                onChange={formik.handleChange}
              />
              {formik.errors.video_url && formik.touched.video_url ? (
                <span> {formik.errors.video_url} </span>
              ) : null}
            </FromGroup>

            <FromGroup className="fromGroup">
              <label htmlFor="teacher" className="label-title">
                Giảng Viên
              </label>
              <input
                type="text"
                id="class"
                className="filed-input"
                value="Trần Hữu Thiện "
                disabled
              />
            </FromGroup>
            <FromGroup className="fromGroup">
              <label htmlFor="sub" className="label-title">
                Môn Học
              </label>
              <input
                type="text"
                placeholder="Lớp Học "
                id="class"
                className="filed-input"
                value="Thiết kế website "
                disabled
              />
            </FromGroup>
            <FromGroup className="fromGroup">
              <label htmlFor="kyhoc" className="label-title">
                Kỳ Học
              </label>
              <input
                type="text"
                placeholder="Lớp Học "
                id="kyhoc"
                className="filed-input"
                value="Fall 2021"
                name=""
                disabled
              />
            </FromGroup>
            <FromGroup className="fromGroup">
              <label htmlFor="product_id" className="label-title">
                Product id
              </label>
              <Select
                options={test}
                name="product_type_id"
                placeholder="Product id  "
                id="product_type_id"
                className={
                  formik.errors.product_type_id && !selectProduct_id
                    ? 'error'
                    : ''
                }
                onChange={(e) => {
                  ChangeSelect(e);
                }}
              />
              {formik.errors.product_type_id &&
              formik.touched.product_type_id ? (
                <span hidden={selectProduct_id ? true : false}>
                  {formik.errors.product_type_id}
                </span>
              ) : null}
            </FromGroup>

            <FromGroup className="fromGroup">
              <label htmlFor="document" className="label-title">
                Tài Liệu
              </label>
              <BoxFile
                color={fileName ? 'orange' : ''}
                className={formik.errors.document}
                error={fileName ? true : false}
              >
                <label
                  htmlFor="document"
                  className={
                    formik.errors.resource_url && !fileName
                      ? 'error'
                      : 'document'
                  }
                >
                  {fileName ? fileName + ' ...' : 'Tài Liệu '}
                </label>
                <input
                  hidden
                  type="file"
                  placeholder="tài liệu"
                  name="resource_url"
                  id="document"
                  className="filed-input"
                  onChange={ChangeDocument}
                />
              </BoxFile>
              {formik.errors.resource_url && formik.touched.resource_url ? (
                <span hidden={fileName ? true : false}>
                  {formik.errors.resource_url}
                </span>
              ) : null}
            </FromGroup>
            <FromGroup className="fromGroup">
              <label htmlFor="teacher" className="label-title">
                Thành viên
              </label>
              <Select
                options={students}
                placeholder="Thành Viên "
                className={
                  formik.errors.students && !group_student ? 'error' : ''
                }
                className="basic-multi-select"
                classNamePrefix="select"
                id="teacher"
                onChange={(e) => {
                  ChangeGroup(e);
                }}
                isMulti
              />
              {formik.errors.students && formik.touched.students ? (
                <span hidden={group_student.length > 0 ? true : false}>
                  {formik.errors.students}
                </span>
              ) : null}
            </FromGroup>
            <FromGroup className="fromGroup">
              <label htmlFor="document" className="label-title">
                Avatar
              </label>
              <BoxFile
                color={avatar ? 'orange' : ''}
                className={formik.errors.image}
                error={avatar ? true : false}
              >
                <label
                  htmlFor="avatar"
                  className={
                    formik.errors.image && !setAvatar ? 'error' : 'document'
                  }
                >
                  {avatar ? avatar + '...' : 'Ảnh đại diện...'}
                </label>
                <input
                  hidden
                  type="file"
                  placeholder="Ảnh đại diện..."
                  id="avatar"
                  name="image"
                  className="filed-input"
                  onChange={ChangeAvatar}
                />
              </BoxFile>
              {formik.errors.avatar && formik.touched.avatar ? (
                <span hidden={setAvatar ? true : false}>
                  {formik.errors.avatar}
                </span>
              ) : null}
            </FromGroup>
            <GroupImage>
              <h4>Hình ảnh </h4>
              <GroupHeaderImage>
                <label htmlFor="galleries">
                  <span className="icon">
                    <BsImageFill />
                  </span>
                  <span
                    className={formik.errors.galleries && !Image ? 'error' : ''}
                  >
                    <b> Upload a file</b> Không có tệp nào được chọn or drag and
                    drop <br /> PNG, JPG, GIF up to 10MB
                  </span>
                </label>
                <input
                  type="file"
                  multiple
                  id="galleries"
                  hidden
                  onChange={ChangImage}
                />
              </GroupHeaderImage>
              <ListImage>
                <BoxImage>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg"
                    alt=""
                  />
                  <div className="delete">
                    <AiFillDelete />
                  </div>
                </BoxImage>
                <BoxImage> 2</BoxImage>
                <BoxImage> 3</BoxImage>
                <BoxImage> 4</BoxImage>
                <BoxImage> 5</BoxImage>
                <BoxImage> 6</BoxImage>
                <BoxImage> 7</BoxImage>
              </ListImage>
            </GroupImage>
          </WapItem>
          <WapItem>
            <Editor ChangeDescription={ChangeDescription} />
          </WapItem>
          <WapItem>
            <label onClick={() => setShow(!show)} className="review">
              Xem trước
            </label>
            <button type="submit">Thêm sản phẩm</button>
          </WapItem>
        </From>
      </Warform>
      <ReviewProduct show={show} setShow={setShow} data={formik} />
    </WrapPage>
  );
};

export default AddProduct;
