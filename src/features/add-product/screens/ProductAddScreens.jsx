import React from 'react';
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
} from './ProductAddScreen.styles';
import Select from 'react-select';
import { BsImageFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
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

  return (
    <WrapPage className="container">
      <Title> Sản phẩm mới</Title>
      <Warform>
        <div>bên trái</div>
        <form action="">
          <FromGroup className="fromGroup">
            <label htmlFor="name" className="label-title">
              {' '}
              Tên Sản phẩm{' '}
            </label>
            <input
              type="text"
              placeholder="Tên đề tài "
              id="name"
              className="filed-input"
            />
          </FromGroup>
          <FromGroup className="fromGroup">
            <label htmlFor="class" className="label-title">
              {' '}
              Lớp Học
            </label>
            <input
              type="text"
              placeholder="Lớp Học "
              id="class"
              className="filed-input"
            />
          </FromGroup>
          <FromGroup className="fromGroup">
            <label htmlFor="name" className="label-title">
              {' '}
              Link video
            </label>
            <input
              type="text"
              placeholder="Video  "
              id="name"
              className="filed-input"
            />
          </FromGroup>
          <FromGroup className="fromGroup">
            <label htmlFor="teacher" className="label-title">
              {' '}
              Giảng viên{' '}
            </label>
            <Select options={test} placeholder="Giảng viên " id="teacher" />
          </FromGroup>
          <FromGroup className="fromGroup">
            <label htmlFor="teacher" className="label-title">
              Kỳ Học
            </label>
            <Select options={test} placeholder="Giảng viên " id="teacher" />
          </FromGroup>
          <FromGroup className="fromGroup">
            <label htmlFor="teacher" className="label-title">
              Subject id
            </label>
            <Select options={test} placeholder="Giảng viên " id="teacher" />
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
            <BoxFile>
              <label htmlFor="document" className="document">
                Tài Liệu
              </label>
              <input
                hidden
                type="file"
                placeholder="Video  "
                id="document"
                className="filed-input"
              />
            </BoxFile>
          </FromGroup>
          <FromGroup className="fromGroup">
            <label htmlFor="teacher" className="label-title">
              Thành viên
            </label>
            <Select options={test} placeholder="Giảng viên " id="teacher" />
          </FromGroup>
          <LisGroup className="listGrup" hidden>
            <h4> Danh sách thành viên</h4>
            <ul>
              <li>Lê Quang Sơn - ph1205 </li>
              <li>Nguyễn Hữu Sơn - ph1205 </li>
              <li>Lê Phương Thảo - ph1205 </li>
              <li>Lê Quang Sơn - ph1205 </li>
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
              <input type="file" multiple id="image" hidden />
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
        </form>
      </Warform>
    </WrapPage>
  );
};

export default AddProduct;
