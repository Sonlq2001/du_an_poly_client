import React from 'react';
import ImageDev from './../../../../assets/images/undraw_Developer_activity_re_39tg.png';
import ImageDesign from './../../../../assets/images/undraw_winter_designer_a2m7.png';
import ImageMarketing from './../../../../assets/images/undraw_Marketing_re_7f1g.png';
import ImageBeauty from './../../../../assets/images/undraw_girl_just_wanna_have_fun_9d5u.png';
import ImageAuto from './../../../../assets/images/undraw_logistics_x4dc.png';
import ImageTravel from './../../../../assets/images/undraw_Travelers_re_y25a.png';

import { ContentIntro, ContentWrap, ContentBox } from './majors.styles';
import { TitleMain } from './../../../../styles/common/index';
import {  useHistory } from 'react-router-dom';
const Majors = () => {
  const history = useHistory();
  const ChangeCategory = (name,id) => {
    history.push(`/category/${name}`)
  };
  return (
    <ContentIntro>
      <TitleMain>Chuyên ngành</TitleMain>
      <ContentWrap>
        <ContentBox>
          <img src={ImageDev} alt="" className="box-img" />
          <div className="box-title">
            <span onClick={() => ChangeCategory('công-nghê-thông-tin', 1)}>
              Công nghệ thông tin
            </span>
          </div>
        </ContentBox>

        <ContentBox>
          <img src={ImageDesign} alt="" className="box-img" />
          <div className="box-title">
            <span onClick={() => ChangeCategory('thiết-kế-đồ-họa', 2)}>
              {' '}
              Thiết kế đồ họa
            </span>
          </div>
        </ContentBox>

        <ContentBox>
          <img src={ImageMarketing} alt="" className="box-img" />
          <div className="box-title">
            <span onClick={() => ChangeCategory('kinh-tế -kinh-doanh', 3)}>
              {' '}
              Kinh tế kinh doanh
            </span>
          </div>
        </ContentBox>

        <ContentBox>
          <img src={ImageBeauty} alt="" className="box-img" />
          <div className="box-title">
            <span onClick={() => ChangeCategory('thẩm-mĩ-làm-đẹp', 4)}>
              Thẩm mĩ làm đẹp
            </span>
          </div>
        </ContentBox>

        <ContentBox>
          <img src={ImageAuto} alt="" className="box-img" />
          <div className="box-title">
            <span onClick={() => ChangeCategory('cơ-khí-tự-động-hóa', 5)}>
              Cơ khí - tự động hóa
            </span>
          </div>
        </ContentBox>
        <ContentBox>
          <img src={ImageTravel} alt="" className="box-img" />
          <div className="box-title">
          <span onClick={() => ChangeCategory('du-lịch-khách-sạn-nhà-hàng',6)}>
                 Du lịch - Khách sạn - Nhà hàng
            </span>
          </div>
        </ContentBox>
      </ContentWrap>
    </ContentIntro>
  );
};

export default Majors;
