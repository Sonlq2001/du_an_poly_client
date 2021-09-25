import React from 'react';
import {
  WrapPage,
  Title,
  HeaderFrom,
  Selects,
  DeleteIcon,
  Input,
  Editor,
  CKEditors,
  Button,
  TiDeletes,
} from './ProductAddScreen.styles';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
  const Xoa = () => {
    console.log('xóa ok ');
  };
  const tidelete = () => {
    console.log('xóa ở đây');
  };
  return (
    <WrapPage className="container">
      <Title> Sản phẩm mới</Title>
      <div className="from">
        <form action="">
          <HeaderFrom>
            <div className="from1">
              <div className="fromGrup">
                <label htmlFor=""> Tên Sản Phẩm </label>
                <Input type="text" video="11px" placeholder="Tên Sản phẩm" />
              </div>
              <div className="fromGrup">
                <label htmlFor="techear"> Giảng Viên </label>
                <Selects
                  className="select"
                  //   loadOptions={test}
                  options={test}
                  placeholder="Giảng viên"
                />
              </div>
              <div className="fromGrup">
                <label htmlFor="techear"> Kỳ học </label>
                <Selects
                  className="select"
                  //   loadOptions={test}
                  options={test}
                  placeholder="kỳ học"
                />
              </div>
              <div className="fromGrup">
                <label htmlFor="techear"> Subject id </label>
                <Selects
                  className="select"
                  //   loadOptions={test}
                  options={test}
                  placeholder="Subject id"
                />
              </div>
              <div className="fromGrup">
                <label htmlFor="techear"> Product type id </label>
                <Selects
                  className="select"
                  //   loadOptions={test}
                  options={test}
                  placeholder="Product type id"
                />
              </div>
              <div className="fromGrup">
                <label htmlFor="">Link video </label>
                <Input type="text" video="42px" placeholder="Video" />
              </div>
              <div className="fromGrup">
                <label htmlFor="techear"> Thành Viên </label>
                <Selects
                  className="select"
                  options={test}
                  placeholder=" Thành viên"
                />
              </div>
              <div className="fromGrup">
                <ul>
                  <li>
                    1 Nguyễn Hữu Sơn - Ph12562{' '}
                    <TiDeletes className="tidelete" onClick={tidelete} />
                  </li>
                  <li>
                    2 Nguyễn Hữu Sơn - Ph12562{' '}
                    <TiDeletes className="tidelete" />
                  </li>
                  <li>
                    3 Nguyễn Phương Thảo - Ph12562{' '}
                    <TiDeletes className="tidelete" />
                  </li>
                  <li>
                    4 Nguyễn Hữu Sơn - Ph12562{' '}
                    <TiDeletes className="tidelete" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="rigthForm">
              <div className="fromGrup">
                <div className="imageLable">
                  <label htmlFor="fileImge">Chọn ảnh</label>
                </div>
                <input
                  type="file"
                  hidden
                  multiple
                  id="fileImge"
                  name="fileImge"
                />
              </div>
              <div className="listImage">
                <div className="box-item">
                  <img
                    src="https://images.pexels.com/photos/6253/city-street-typography-design.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                  <DeleteIcon className="deleteIcon" onClick={Xoa} />
                </div>
                <div className="box-item">2</div>
                <div className="box-item">
                  <img
                    src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                  <DeleteIcon className="deleteIcon" onClick={Xoa} />
                </div>
                <div className="box-item">4</div>
                <div className="box-item">5</div>
              </div>
            </div>
          </HeaderFrom>
          <Editor className="editor">
            <Title mota="left" padding="0px 0px 20px 0px" fontWeight="450">
              Mô tả
            </Title>
            <CKEditors editor={ClassicEditor} />
          </Editor>
          <Button className="button">
            <button type="submit" className="btn btn-primary">
              Thêm Sản Phẩm{' '}
            </button>
          </Button>
        </form>
      </div>
    </WrapPage>
  );
};

export default AddProduct;
