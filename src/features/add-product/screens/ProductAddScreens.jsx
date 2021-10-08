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

import Select from 'react-select';
import { BsImageFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import Editor from './../components/editor/Editor';
import ReviewProduct from '../components/Review/Review';
const AddProduct = () => {
  const test = [
    { id: 1, value: 'xin chào 1 ', label: 'Lê trọng đạt  1' },
    { id: 2, value: 'xin chào 2', label: 'Trần hữu Thiện ' },
    { id: 3, value: 'xin chào 3', label: 'xin chào 3' },
    { id: 4, value: 'xin chào 4 ', label: 'xin chào 4' },
  ];
  const [show, setShow] = useState(false);
  const [fileName, SetFileName] = useState('');
  const [Image, setImage] = useState(false);
  const [selectProduct_id, SetselectProduct_id] = useState('');
  const [group_student, setGroup] = useState([]);
  const [Description, SetDescription] = useState('');

  const ChangeDocument = (e) => {
    SetFileName(e.target.files[0].name);
    formik.values.document = e.target.files[0].name;
  };
  const ChangImage = (e) => {
    console.log(e.target.files);
    setImage(true);
  };
  const ChangeDescription = (data) => {
    SetDescription(data);
    formik.values.description = data;
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      video: '',
      teacher_id: 'giảng viên ',
      subject_id: 'môn học ',
      kyhoc: 'fall 20201',
      product_id: '',
      document: '',
      group: '',
      images: '',
      description: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('ở đây', values);
    },
  });
  const ChangeSelect = (e) => {
    formik.values.product_id = e.value;
    SetselectProduct_id(e.value);
  };
  const ChangeGroup = (e) => {
    setGroup(group_student.push(e));
  };
  return (
    <WrapPage className="container">
      <Title> Sản phẩm mới</Title>
      <Warform>
        <From onSubmit={formik.handleSubmit}>
          <WapItem>
            <FromGroup className="fromGroup">
              <label htmlFor="name" className="label-title ">
                Tên Sản phẩm{' '}
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
              <label htmlFor="video" className="label-title">
                Video
              </label>
              <Input
                error={formik.errors.video ? 'red' : ''}
                type="text"
                placeholder="Link video  "
                id="video"
                className="filed-input"
                value={formik.values.video}
                onChange={formik.handleChange}
              />
              {formik.errors.video && formik.touched.video ? (
                <span> {formik.errors.video} </span>
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
                disabled
              />
            </FromGroup>
            <FromGroup className="fromGroup">
              <label htmlFor="product_id" className="label-title">
                Product id
              </label>
              <Select
                options={test}
                name="product_id"
                placeholder="Product id  "
                id="product_id"
                className={
                  formik.errors.product_id && !selectProduct_id ? 'error' : ''
                }
                onChange={(e) => {
                  ChangeSelect(e);
                }}
              />
              {formik.errors.product_id && formik.touched.product_id ? (
                <span hidden={selectProduct_id ? true : false}>
                  {' '}
                  {formik.errors.product_id}
                  {''}
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
                    formik.errors.document && !fileName ? 'error' : 'document'
                  }
                >
                  {fileName ? fileName : 'Tài Liệu '}
                </label>
                <input
                  hidden
                  type="file"
                  placeholder="tài liệu   "
                  id="document"
                  className="filed-input"
                  onChange={ChangeDocument}
                />
              </BoxFile>
              {formik.errors.document && formik.touched.document ? (
                <span hidden={fileName ? true : false}>
                  {formik.errors.document}{' '}
                </span>
              ) : null}
            </FromGroup>
            <FromGroup className="fromGroup">
              <label htmlFor="teacher" className="label-title">
                Thành viên
              </label>
              <Select
                options={test}
                placeholder="Thành Viên "
                className={formik.errors.group && !group_student ? 'error' : ''}
                id="teacher"
                onChange={(e) => {
                  ChangeGroup(e);
                }}
              />
              {formik.errors.group && formik.touched.group ? (
                <span hidden={group_student.length > 0 ? true : false}>
                  {' '}
                  {formik.errors.product_id}
                  {''}
                </span>
              ) : null}
            </FromGroup>
            <LisGroup
              className="listGrup"
              hidden={group_student ? true : false}
            >
              <h4> Danh sách thành viên</h4>
              <ul>
                <li>
                  Lê Quang Sơn - ph1205{' '}
                  <span>
                    <AiFillDelete />
                  </span>
                </li>
                <li>
                  Nguyễn Hữu Sơn - ph1205{' '}
                  <span>
                    <AiFillDelete />
                  </span>{' '}
                </li>
                <li>
                  Lê Phương Thảo - ph1205{' '}
                  <span>
                    <AiFillDelete />
                  </span>{' '}
                </li>
                <li>
                  Lê Quang Sơn - ph1205{' '}
                  <span>
                    <AiFillDelete />
                  </span>{' '}
                </li>
              </ul>
            </LisGroup>
            <GroupImage>
              <h4>Hình ảnh </h4>
              <GroupHeaderImage>
                <label htmlFor="image">
                  <span className="icon">
                    <BsImageFill />
                  </span>{' '}
                  <span
                    className={formik.errors.images && !Image ? 'error' : ''}
                  >
                    <b> Upload a file</b> Không có tệp nào được chọn or drag and
                    drop <br /> PNG, JPG, GIF up to 10MB
                  </span>
                </label>
                <input
                  type="file"
                  multiple
                  id="image"
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
            <button onClick={() => setShow(!show)} className="review">
              Xem trước
            </button>
            <button type="submit">Thêm sản phẩm</button>
          </WapItem>
        </From>
      </Warform>

      <ReviewProduct show={show} setShow={setShow} data={formik} />
    </WrapPage>
  );
};

export default AddProduct;
