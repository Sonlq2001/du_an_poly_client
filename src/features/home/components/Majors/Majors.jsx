import React from 'react';
import ImageDev from './../../../../assets/images/undraw_Developer_activity_re_39tg.png';
import ImageDesign from './../../../../assets/images/undraw_winter_designer_a2m7.png';
import ImageMarketing from './../../../../assets/images/undraw_Marketing_re_7f1g.png';
import ImageBeauty from './../../../../assets/images/undraw_girl_just_wanna_have_fun_9d5u.png';
import ImageAuto from './../../../../assets/images/undraw_logistics_x4dc.png';
import ImageTravel from './../../../../assets/images/undraw_Travelers_re_y25a.png';

import { ContentIntro, ContentWrap, ContentBox } from './majors.styles';
import { TitleMain } from './../../../../styles/common/index';

import { Link } from 'react-router-dom';

const Majors = () => {
  return (
    <ContentIntro>
      <TitleMain>Chuyên ngành</TitleMain>
      <ContentWrap>
        <ContentBox>
          <img src={ImageDev} alt="" className="box-img" />
          <div className="box-title">
            <Link to="/category/cong-nghe-thong-tin/5" >
              Công nghệ thông tin
            </Link>
          </div>
        </ContentBox>

        <ContentBox>
          <img src={ImageDesign} alt="" className="box-img" />
          <div className="box-title">
            <Link to="/category/thiet-ke-do-hoa/3">
              Thiết kế đồ họa
            </Link>
          </div>
        </ContentBox>

        <ContentBox>
          <img src={ImageMarketing} alt="" className="box-img" />
          <div className="box-title">
            <Link to="/category/kinh-te-kinh-doang/2">
              Kinh tế - kinh doanh
            </Link>
          </div>
        </ContentBox>

        <ContentBox>
          <img src={ImageBeauty} alt="" className="box-img" />
          <div className="box-title">
            <Link to="/category/mi-pham-lam-dep/5">
              Thẩm mĩ làm đẹp
            </Link>
          </div>
        </ContentBox>

        <ContentBox>
          <img src={ImageAuto} alt="" className="box-img" />
          <div className="box-title">
            <Link to="/category/co-khi-tu-dong-hoa/4">
              Cơ khí - tự động hóa
            </Link>
          </div>
        </ContentBox>
        <ContentBox>
          <img src={ImageTravel} alt="" className="box-img" />
          <div className="box-title">
          <Link to="/category/du-lich-nha-hang-khach-san/6">
                 Du lịch - Khách sạn - Nhà hàng
            </Link>
          </div>
        </ContentBox>
      </ContentWrap>
    </ContentIntro>
  );
};

export default Majors;
