import React from 'react';
import { Link } from 'react-router-dom';

import { Page404, Page404Image, Page404Content } from './Page404Screens.styles';
const Page404Screens = () => {
  return (
    <div className="container">
      <Page404>
        <Page404Image>
          <img
            src="https://i.pinimg.com/originals/cc/4d/aa/cc4daa9d54c97a1badec1f0fd9a327dc.gif"
            alt=""
            className="pag404"
          />
        </Page404Image>
        <Page404Content>
          <h2>Địa chỉ tìm kiếm không hợp lệ</h2>
          <p>Xin lỗi chúng thôi không thể tìm thấy địa chỉ bạn mong muốn !</p>
          <Link to="/" className="back-home">
            Quay lại trang chủ
          </Link>
        </Page404Content>
      </Page404>
    </div>
  );
};

export default Page404Screens;
