import React, { memo, useState } from 'react';
import Slider from 'react-slick';
import { MdContentPaste } from 'react-icons/md';
import { GoCommentDiscussion } from 'react-icons/go';

import CarouselProduct from './../../components/CarouselProduct/CarouselProduct';

import {
  WrapDetail,
  ListCurrentImg,
  TitleProject,
  GroupMember,
  LabelProject,
  BoxProject,
  GroupDetail,
  GroupBox,
  TitleMain,
  ContentPost,
  GroupFeedback,
} from './DetailScreen.styles';
import { LIST_SLIDE } from './../../constants/detail.constants';
import RatingStar from './../../components/RatingStar/RatingStar';
import ShareSocial from './../../components/ShareSocial/ShareSocial';
import ToolsDetail from './../../components/ToolsDetail/ToolsDetail';
import AttachDoc from './../../components/AttachDoc/AttachDoc';
import RatingDetail from './../../components/Feedback/RatingDetail';
import Feedback from './../../components/Feedback/Feedback';

const DetailScreen = () => {
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

  const [valueSendCmt, setValueSendCmt] = useState({
    userId: '',
    value: '',
    rating: null,
  });

  return (
    <WrapDetail>
      <div className="container">
        <div className="row">
          <div className="xl-7">
            <Slider {...settings}>
              {LIST_SLIDE.map((item, index) => (
                <div key={index}>
                  <img src={item.img} alt="" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="xl-5">
            <div>
              <TitleProject>
                Đồ án tốt nghiệp website bán hàng mông công nghệ thông tin
              </TitleProject>
              <RatingStar
                valueSendCmt={valueSendCmt}
                setValueSendCmt={setValueSendCmt}
              />
              <GroupMember>
                <LabelProject>Thành viên nhóm: </LabelProject>
                <div className="list-member">
                  <span className="item-member">Lê Quang Sơn - PH09794</span>
                  <span className="item-member">Lê Quang Sơn - PH09794</span>
                  <span className="item-member">Lê Quang Sơn - PH09794</span>
                  <span className="item-member">Lê Quang Sơn - PH09794</span>
                  <span className="item-member">Lê Quang Sơn - PH09794</span>
                </div>
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
            </div>
          </div>
        </div>

        <GroupDetail>
          <div className="row">
            <div className="xl-8">
              <div className="group-des">
                <TitleMain>
                  <MdContentPaste />
                  <span>Bài viết giới thiệu</span>
                </TitleMain>
                <ContentPost>
                  Theo đó, nói về lý do tham dự cuộc thi Thiết kế đồ họa thế
                  giới (Adobe Certified Associate World Championship – ACAWC),
                  cả Kim Thắm và Ánh Lam đều chia sẻ rằng hai bạn biết cuộc thi
                  qua bài viết giới thiệu cuộc thi của FPT Polytechnic Tây
                  Nguyên, từ đó cảm thấy cuộc thi thú vị nên 2 bạn muốn thử sức
                  cũng như quyết định đăng ký tham gia. Việc tham gia một cuộc
                  thi lớn như vậy khiến cho 2 cô gái của FPT Polytechnic Tây
                  Nguyên cảm thấy rất hứng khởi nhưng phần nào cảm thấy hơi lo
                  lắng, áp lực vì bài thi khó hơn so với trình đủ. Chính vì thế
                  mà Thắm và Lam tự nhủ phải nỗ lực, cố gắng hơn rất nhiều để có
                  thể vượt qua. Bên cạnh đó là việc nhiều người giỏi cùng tham
                  dự cuộc thi nên khả năng bị loại rất cao.
                </ContentPost>

                <GroupFeedback>
                  <TitleMain>
                    <GoCommentDiscussion />
                    <span>Đánh giá</span>
                  </TitleMain>

                  <RatingDetail />

                  <Feedback
                    valueSendCmt={valueSendCmt}
                    setValueSendCmt={setValueSendCmt}
                  />
                </GroupFeedback>

                <CarouselProduct />
              </div>
            </div>
            <div className="xl-4">
              <GroupBox>
                <AttachDoc />
              </GroupBox>

              <GroupBox>
                <ToolsDetail />
              </GroupBox>

              <GroupBox>
                <ShareSocial />
              </GroupBox>
            </div>
          </div>
        </GroupDetail>
      </div>
    </WrapDetail>
  );
};

export default memo(DetailScreen);
