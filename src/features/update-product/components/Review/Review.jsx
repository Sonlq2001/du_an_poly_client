import React from 'react';

import Slider from 'react-slick';
import {
  OverLay,
  Content,
  MainReview,
  ImageSlice,
  ContentReview,
  ListCurrentImg,
  TitleProject,
  GroupMember,
  LabelProject,
  BoxProject,
  GroupDetail,
  GroupBox,
  TitleMain,
  ContentPost,
  GroupAttach,
  ItemAttach,
} from './Review.styles';
import { MdContentPaste } from 'react-icons/md';
import { GrAttachment } from 'react-icons/gr';
import { LIST_SLIDE } from '../../constants/ReviewProduct.constants';
const ReviewProduct = ({ show, setShow, data }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <ListCurrentImg>
          <img src={LIST_SLIDE[i].img} className="current-slide" alt="" />
        </ListCurrentImg>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <OverLay className={show ? 'active' : ''} onClick={() => setShow(!show)}>
      <Content
        className={show ? 'container activeContent' : 'container'}
        onClick={(e) => e.stopPropagation()}
      >
        <MainReview className="row">
          <ImageSlice className="col-6">
            <Slider {...settings}>
              {LIST_SLIDE.map((item, index) => (
                <div key={index}>
                  <img src={item.img} alt="" />
                </div>
              ))}
            </Slider>
          </ImageSlice>
          <ContentReview className="col-6">
            {data.values.name ? (
              <TitleProject>{data.values.name}</TitleProject>
            ) : (
              ''
            )}

            <GroupMember>
              <>
                <LabelProject>Thành viên nhóm: </LabelProject>
                <div className="list-member">
                  {data.values.group &&
                    data.values.group.map((item, index) => {
                      return (
                        <span className="item-member" key={index}>
                          {item.label} - PH09794
                        </span>
                      );
                    })}
                </div>
              </>
            </GroupMember>
            <BoxProject>
              <LabelProject>Khóa:</LabelProject>
              16.3
            </BoxProject>
            <BoxProject>
              <LabelProject>Giảng viên hướng dẫn:</LabelProject>
              Trần hữu thiện
            </BoxProject>
            <BoxProject>
              <LabelProject>Chuyên ngành:</LabelProject>
              Thiết kế website
            </BoxProject>
            <BoxProject>
              <LabelProject>Mã môn học:</LabelProject>
              PRO2016
            </BoxProject>
            <BoxProject>
              <LabelProject>Kì học:</LabelProject>
              Fall 2021
            </BoxProject>
          </ContentReview>
        </MainReview>
        <GroupDetail>
          <div className="row">
            <div className="xl-8">
              <div className="group-des">
                {data.values.description ? (
                  <>
                    <TitleMain>
                      <MdContentPaste />
                      <span>Bài viết giới thiệu</span>
                    </TitleMain>
                    <ContentPost> {data.values.description} </ContentPost>
                    {/* <ContentPost
                      dangerouslySetInnerHTML={{
                        __html: data.values.description,
                      }}
                    /> */}
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="xl-4">
              <GroupBox>
                {data.values.document ? (
                  <>
                    <TitleMain>
                      <GrAttachment />
                      <span>Tài liệu đính kèm</span>
                    </TitleMain>

                    <GroupAttach>
                      <ItemAttach>
                        <div className="title-attach">Link github:</div>
                        <a href="!#">
                          https://caodang.fpt.edu.vn/tin-tuc-poly/nu-sinh-fpoly-tay-nguyen-dat-chung-chi-cuoc-thi-vo-dich-thiet-ke-do-hoa-the-gioi.html
                        </a>
                      </ItemAttach>
                      <ItemAttach>
                        <div className="title-attach">Tài liệu hướng dẫn:</div>
                        <a href="!#">
                          https://caodang.fpt.edu.vn/tin-tuc-poly/nu-sinh-fpoly-tay-nguyen-dat-chung-chi-cuoc-thi-vo-dich-thiet-ke-do-hoa-the-gioi.html
                        </a>
                      </ItemAttach>
                    </GroupAttach>
                  </>
                ) : (
                  ''
                )}
              </GroupBox>
            </div>
          </div>
        </GroupDetail>
      </Content>
    </OverLay>
  );
};

export default ReviewProduct;
