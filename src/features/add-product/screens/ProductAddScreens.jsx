import React, { useState, useEffect } from 'react';
import { shape } from './Validator';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
    { id: 5, value: 'xin chào 5', label: 'xin chào 5' },
    { id: 6, value: 'xin chào 6', label: 'xin chào 6' },
    { id: 7, value: 'xin chào 7', label: 'xin chào 7' },
    { id: 8, value: 'xin chào 8', label: 'xin chào 8' },
    { id: 9, value: 'xin chào 9', label: 'xin chào 9' },
    { id: 10, value: 'xin chào 10', label: 'xin chào 10' },
    { id: 11, value: 'xin chào 11', label: 'xin chào 11' },
    { id: 12, value: 'xin chào 12', label: 'xin chào 12' },
  ];
  const [show, setShow] = useState(false);
  const [FileName, SetFileName] = useState('');
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(shape) });
  const AddProduct = (data) => {
    console.log('ở đây', data);
  };
  useEffect(() => {
    setValue('teacher', 'Trần hữu thiện', {
      shouldValidate: true,
      shouldDirty: true,
    });
  }, []);
  const ChangeDocument = (e) => {
    SetFileName(e.target.files[0].name);
    let test = e.target.files[0].name.split('.');
    console.log('file đây ', test[1]);
  };
  const ChangImage = (e) => {
    console.log(e.target.files);
  };
  return (
    <WrapPage className="container">
      <Title> Sản phẩm mới</Title>
      <Warform>
        <From onSubmit={handleSubmit(AddProduct)}>
          <WapItem>
            <FromGroup className="fromGroup">
              <label htmlFor="name" className="label-title ">
                {' '}
                Tên Sản phẩm{' '}
              </label>
              <input
                type="text"
                placeholder="Tên đề tài "
                id="name"
                className={errors.name ? 'filed-input error' : 'filed-input'}
                {...register('name')}
              />
              <span> {errors.name?.message}</span>
            </FromGroup>
            <FromGroup className="fromGroup">
              <label htmlFor="class" className="label-title">
                Lớp Học
              </label>
              <input
                type="text"
                placeholder="Lớp Học "
                id="class"
                className={errors.class ? 'filed-input error' : 'filed-input'}
                {...register('class')}
              />
              <span> {errors.class?.message}</span>
            </FromGroup>
            <FromGroup className="fromGroup">
              <label htmlFor="video" className="label-title">
                Video
              </label>
              <input
                type="text"
                placeholder="Link video  "
                id="video"
                className={errors.video ? 'filed-input error' : 'filed-input'}
                {...register('video')}
              />
              <span> {errors.video?.message}</span>
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
                setValue={setValue}
                disabled
                // {...register('teacher')}
              />
            </FromGroup>
            <FromGroup className="fromGroup">
              <label htmlFor="sub" className="label-title">
                Subject id
              </label>
              <input
                type="text"
                placeholder="Lớp Học "
                id="class"
                className="filed-input"
                value="Thiết kế website "
                disabled
                className="filed-input"
                {...register('subject_id')}
              />
              <span> {errors.subject_id?.message}</span>
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
              <label htmlFor="teacher" className="label-title">
                Product id
              </label>
              <Select options={test} placeholder="Giảng viên " id="teacher" />
            </FromGroup>

            <FromGroup className="fromGroup">
              <label htmlFor="document" className="label-title">
                Tài Liệu
              </label>
              <BoxFile color={FileName ? 'orange' : ''}>
                <label
                  htmlFor="document"
                  className={errors.document ? 'document error' : 'document'}
                >
                  {FileName ? FileName : 'Tài Liệu '}
                </label>
                <input
                  hidden
                  type="file"
                  placeholder="Video  "
                  id="document"
                  className="filed-input"
                  onChange={ChangeDocument}
                  className={
                    errors.document ? 'filed-input error' : 'filed-input'
                  }
                  // {...register('document')}
                />
              </BoxFile>
              <span className={FileName ? 'hidden' : 'show'}>
                {' '}
                {errors.document?.message}
              </span>
            </FromGroup>
            <FromGroup className="fromGroup">
              <label htmlFor="teacher" className="label-title">
                Thành viên
              </label>
              <Select options={test} placeholder="Thành Viên " id="teacher" />
            </FromGroup>
            <LisGroup className="listGrup" hidden>
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
                  <span className="">
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
            <Editor />
          </WapItem>
          <WapItem>
            <button onClick={() => setShow(!show)} className="review">
              Xem trước
            </button>
            <button type="submit" onSubmit={AddProduct}>
              Thêm Sản phẩm{' '}
            </button>
          </WapItem>
        </From>
      </Warform>

      <ReviewProduct show={show} setShow={setShow} />
    </WrapPage>
  );
};

export default AddProduct;
