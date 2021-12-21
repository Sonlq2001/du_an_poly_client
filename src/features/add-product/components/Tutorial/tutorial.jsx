import React from 'react';
import { Overlay, Title, Wappage,NodeTitel } from './tutorial.styles';
const Tutorial = ({setTutorial,tutorial}) => {
  return (
      <Overlay  onClick={()=>setTutorial(!tutorial)} className={tutorial ? 'active' : ''}>  
      <Wappage className={tutorial ? 'activeContent':''}>
        <Title> Hướng dẫn thêm sản phẩm </Title>
        <NodeTitel>Để tránh tình trạng tạo lỗi sản  phẩm  Cao Đẳng FpolyTechnic có 1 số lưu ý sau : </NodeTitel>
          <div className='item'> 
            <h3>+) Tên Dự án </h3>
              <ul>
                  <li> Nhập đầy đủ tên, không được để trống  </li>

              </ul>
          </div>
          <div className='item'> 
            <h3>+) Video</h3>
              <ul>
                  <li>Đẩy video lên  google driver cá nhân </li>
                  <li>Share link +  coppy link  </li>
                  <li>Pase vào trường link_video   </li>

              </ul>
          </div>
          <div className='item'> 
            <h3>+) Thành viên </h3>
              <ul>
                 <li> Nhập tên + mã số sinh viên </li>
              </ul>
          </div>
          <div className='item'> 
            <h3>+) Hình ảnh  </h3>
              <ul>
                 <li> Chọn các ảnh không quá 2MB </li>
                 <li> Các file định dạng ảnh gồm : PNG , JPG...</li>
              </ul>
          </div>
          <div className='item'> 
            <h3>+) Tài liệu  </h3>
              <ul>
                 <li> Chọn các file không quá 20MB </li>
                 <li> Các file định dạng ảnh gồm : PGF,WORD,EXCEL...</li>
              </ul>
          </div>
          <div className='item'> 
            <h3>+) Bộ sưu tập   </h3>
              <ul>
                 <li> Chọn các ảnh không quá 2MB </li>
                 <li> Các file định dạng ảnh gồm : PNG , JPG...</li>
                 <li>Kích thước ảnh không quá lớn hoặc quá nhỏ </li>
                 <li>Tối đa 6 hình ảnh </li>
              </ul>
          </div>
          <div className='item'> 
            <h3>+) Mô tả sản phẩm    </h3>
              <ul>
                 <li> Chọn các ảnh không quá 2MB </li>
                 <li> Các file định dạng ảnh gồm : PNG , JPG...</li>
                 <li>Kích thước ảnh không quá lớn hoặc quá nhỏ </li>
                 <li> Ngắn gọn , không quá dài  </li>
              </ul>
          </div>
        
      </Wappage >
        </Overlay>
     
  );
};
export default Tutorial;
