import React, { memo, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { MdContentPaste } from 'react-icons/md';
import { GoCommentDiscussion } from 'react-icons/go';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

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
  Video,
} from './DetailScreen.styles';
import RatingStar from './../../components/RatingStar/RatingStar';
import ShareSocial from './../../components/ShareSocial/ShareSocial';
import ToolsDetail from './../../components/ToolsDetail/ToolsDetail';
import AttachDoc from './../../components/AttachDoc/AttachDoc';
import RatingDetail from './../../components/Feedback/RatingDetail';
import Feedback from './../../components/Feedback/Feedback';
import ReactPlayer from 'react-player';
import { getDetailProduct } from './../../redux/detail.slice';
import Loading from 'components/Loading/Loading';

const DetailScreen = () => {
  const params = useParams();
  const id = Number(params?.id);
  const dispatch = useDispatch();

  const { isLoadingDetailProduct, detailProduct } = useSelector(
    (state) => state.detailProduct
  );

  const settings = {
    customPaging: function (i) {
      return (
        <ListCurrentImg>
          <img
            src={detailProduct?.product_galleries[i].image_url}
            className="current-slide"
            alt=""
          />
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

  useEffect(() => {
    if (id) {
      dispatch(getDetailProduct(id));
    }
  }, [dispatch, id]);

  if (isLoadingDetailProduct) {
    return <Loading />;
  }

  return (
    <WrapDetail>
      <div className="container">
        <div className="row">
          <div className="xl-7">
            <Slider {...settings}>
              {detailProduct?.product_galleries.map((item, index) => (
                <div key={index}>
                  <img src={item?.image_url} alt="" className="image-gallery" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="xl-5">
            <div>
              <TitleProject>{detailProduct?.name}</TitleProject>
              <RatingStar
                valueSendCmt={valueSendCmt}
                setValueSendCmt={setValueSendCmt}
              />
              <GroupMember>
                <LabelProject>Thành viên nhóm: </LabelProject>
                <div className="list-member">
                  {detailProduct?.students.map((student) => (
                    <span className="item-member" key={student.id}>
                      {student.email} - {student.student_code}
                    </span>
                  ))}
                </div>
              </GroupMember>
              <BoxProject>
                <LabelProject>Khóa:</LabelProject>
                16.3
              </BoxProject>
              <BoxProject>
                <LabelProject>Giảng viên hướng dẫn:</LabelProject>
                {detailProduct?.teacher?.name}
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
                {detailProduct?.semester?.name}
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
                <Video>
                  <ReactPlayer
                    className="react-player"
                    playing={true}
                    height="300px"
                    controls
                    url={detailProduct?.video_url}
                  />
                </Video>

                <ContentPost
                  dangerouslySetInnerHTML={{
                    __html: detailProduct?.description,
                  }}
                />

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
                <AttachDoc data={detailProduct} />
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
