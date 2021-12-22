import React from 'react';
import { GoLocation } from 'react-icons/go';

import ImageLogo from './../../assets/images/logo.png';
import {
  FooterWrap,
  FooterItem,
  FooterTitle,
  FooterText,
  FooterContent,
} from './footer.styles';

const Footer = () => {
  return (
    <FooterWrap>
      <div className="container">
        <div className="row">
          <div className="xl-3 lg-3 md-6 sm-6 col-12">
            <img src={ImageLogo} alt="" className="footer-img" />
          </div>
          <div className="xl-3 lg-3 md-6 sm-6 col-12">
            <FooterItem>
              <FooterTitle>THÔNG TIN LIÊN HỆ</FooterTitle>
              <FooterText>Điện thoại: 024 6327 6402</FooterText>
              <FooterText>Email: caodang@fpt.edu.vn</FooterText>
            </FooterItem>
          </div>

          <div className="xl-6 lg-6 md-12 sm-12 col-12">
            <FooterItem>
              <FooterTitle>HỆ THỐNG CƠ SỞ ĐÀO TẠO</FooterTitle>
              <FooterContent>
                <div className="footer-box">
                  <FooterText>
                    <span className="footer-icon">
                      <GoLocation />
                    </span>
                    <p>
                      Tòa nhà FPT Polytechnic, Phố Trịnh Văn Bô, Nam Từ Liêm, Hà
                      Nội
                    </p>
                  </FooterText>
                  <FooterText>
                    <span className="footer-icon">
                      <GoLocation />
                    </span>
                    <p>
                      Số 137 Nguyễn Thị Thập, Phường Hòa Minh, Quận Liên Chiểu,
                      TP. Đà Nẵng
                    </p>
                  </FooterText>
                  <FooterText>
                    <span className="footer-icon">
                      <GoLocation />
                    </span>
                    <p>
                      Số 288, Nguyễn Văn Linh, phường An Khánh, quận Ninh Kiều,
                      Tp. Cần Thơ
                    </p>
                  </FooterText>
                </div>

                <div className="footer-box">
                  <FooterText>
                    <span className="footer-icon">
                      <GoLocation />
                    </span>
                    <p>
                      Văn phòng Tuyển sinh: 778/B1 Nguyễn Kiệm, P.4, Q. Phú
                      Nhuận, TP. Hồ Chí Minh
                    </p>
                  </FooterText>

                  <FooterText>
                    <span className="footer-icon">
                      <GoLocation />
                    </span>
                    <p>
                      Tổ dân phố 8, phường Tân An, TP. Buôn Mê Thuột, Đắk Lắk
                    </p>
                  </FooterText>
                </div>
              </FooterContent>
            </FooterItem>
          </div>
        </div>
      </div>
    </FooterWrap>
  );
};

export default Footer;

//  <FooterItem>
//    <FooterTitle>d</FooterTitle>
//    <FooterText>
//      <span className="footer-icon">
//        <GoLocation />
//      </span>
//      <p>
//        Văn phòng Tuyển sinh: 778/B1 Nguyễn Kiệm, P.4, Q. Phú Nhuận, TP. Hồ Chí
//        Minh
//      </p>
//    </FooterText>

//    <FooterText>
//      <span className="footer-icon">
//        <GoLocation />
//      </span>
//      <p>Tổ dân phố 8, phường Tân An, TP. Buôn Mê Thuột, Đắk Lắk</p>
//    </FooterText>
//  </FooterItem>;
