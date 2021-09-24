import React, { memo } from 'react';
import Slider from 'react-slick';
import { MdContentPaste } from 'react-icons/md';
import { GrAttachment } from 'react-icons/gr';
import { GoCommentDiscussion } from 'react-icons/go';
import { AiFillStar } from 'react-icons/ai';
import { CgToolbox } from 'react-icons/cg';
import { BiShareAlt } from 'react-icons/bi';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

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
  GroupAttach,
  ItemAttach,
  // BoxYoutube,
  GroupFeedback,
  GroupRating,
  RatingTotal,
  FilterRating,
  GroupComment,
  ItemComment,
  GroupTools,
  GroupShare,
  GroupRepComment,
  ItemRepComment,
  ItemSendComment,
  SubInputComment,
  ActionComment,
  EditorCommentMain,
} from './DetailScreen.styles';
import {
  LIST_SLIDE,
  LIST_RATING,
  LIST_TOOLS,
} from './../../constants/detail.constants';
import AvatarEmpty from './../../../../assets/images/user-empty.png';

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

                  <GroupRating>
                    <RatingTotal>
                      <div className="rating-percent">3.5</div>
                      <div className="group-star">
                        <div className="list-star">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                        <div className="view-project">1925 lượt xem</div>
                      </div>
                    </RatingTotal>

                    <FilterRating>
                      {LIST_RATING.map((itemStart) => (
                        <div className="item-rating" key={itemStart.star}>
                          <div className="item-rating__icon">
                            {itemStart.star}
                            <AiFillStar />
                          </div>
                          ({itemStart.total_star})
                        </div>
                      ))}
                    </FilterRating>
                  </GroupRating>

                  <GroupComment>
                    <EditorCommentMain>
                      <img src={AvatarEmpty} alt="" className="user-comment" />

                      <div className="comment-main">
                        <input
                          type="text"
                          placeholder="Đánh giá của bàn về sản phẩm !"
                          className="input-main"
                        />
                        <ActionComment>
                          <button className="btn-comment btn-cancel">
                            Hủy
                          </button>
                          <button className="btn-comment">Bình luận</button>
                        </ActionComment>
                      </div>
                    </EditorCommentMain>

                    <ItemComment>
                      <ItemSendComment>
                        <img src={AvatarEmpty} alt="" className="avatar-user" />
                        <div className="">
                          <span className="auth-comment">le quang son</span>
                          <div className="star-comment">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                          </div>

                          <p className="content-comment">Sản phẩm đẹp quá !</p>

                          <div className="box-comment">
                            <p className="time-comment">2021-09-14 17:25</p>
                            <button className="rep-comment">Trả lời</button>
                          </div>
                        </div>
                      </ItemSendComment>

                      <GroupRepComment>
                        <ItemRepComment>
                          <img
                            src={AvatarEmpty}
                            alt=""
                            className="avatar-user"
                          />
                          <div className="">
                            <span className="auth-comment">le quang son</span>
                            <div className="star-comment">
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                            </div>
                            <p className="content-comment">
                              <span className="user-comment">Lê Quang Sơn</span>
                              Sản phẩm đẹp quá !
                            </p>
                            <div className="box-comment">
                              <p className="time-comment">2021-09-14 17:25</p>
                              <button className="rep-comment">Trả lời</button>
                            </div>
                          </div>
                        </ItemRepComment>

                        <SubInputComment>
                          <img
                            src={AvatarEmpty}
                            alt=""
                            className="avatar-user"
                          />

                          <div className="box-sub-comment">
                            <div className="editor-comment">
                              <span className="auth-comment auth-rep">
                                le quang son
                              </span>
                              <div
                                className="input-comment"
                                contentEditable="true"
                              ></div>
                            </div>
                            <ActionComment>
                              <button className="btn-comment btn-cancel">
                                Hủy
                              </button>
                              <button className="btn-comment btn-send">
                                Trả lời
                              </button>
                            </ActionComment>
                          </div>
                        </SubInputComment>
                      </GroupRepComment>
                    </ItemComment>
                  </GroupComment>
                </GroupFeedback>

                <CarouselProduct />
              </div>
            </div>
            <div className="xl-4">
              <GroupBox>
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
                  <ItemAttach>
                    <div className="title-attach">Tài liệu bài viết:</div>
                    <a href="!#">
                      https://caodang.fpt.edu.vn/tin-tuc-poly/nu-sinh-fpoly-tay-nguyen-dat-chung-chi-cuoc-thi-vo-dich-thiet-ke-do-hoa-the-gioi.html
                    </a>
                  </ItemAttach>
                  <ItemAttach>
                    <div className="title-attach">Video youtube:</div>
                    <a href="!#">
                      https://caodang.fpt.edu.vn/tin-tuc-poly/nu-sinh-fpoly-tay-nguyen-dat-chung-chi-cuoc-thi-vo-dich-thiet-ke-do-hoa-the-gioi.html
                    </a>
                    {/* <BoxYoutube>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/nKHBIAdBvZ4"
                        title="YouTube video player"
                        frameBorder="0"
                        className="video-youtube"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </BoxYoutube> */}
                  </ItemAttach>
                </GroupAttach>
              </GroupBox>

              <GroupBox>
                <TitleMain>
                  <CgToolbox />
                  <span>Công cụ</span>
                </TitleMain>

                <GroupTools>
                  {LIST_TOOLS.map((tool, index) => (
                    <img
                      key={index}
                      src={tool.img}
                      alt=""
                      className="img-tools"
                    />
                  ))}
                </GroupTools>
              </GroupBox>

              <GroupBox>
                <TitleMain>
                  <BiShareAlt />
                  <span>Chia sẻ</span>
                </TitleMain>

                <GroupShare>
                  <button className="button-social share-facebook">
                    <FaFacebookSquare />
                  </button>
                  <button className="button-social share-twitter">
                    <FaTwitterSquare />
                  </button>
                  <button className="button-social share-instagram">
                    <FaInstagram />
                  </button>
                  <button className="button-social share-linkedin">
                    <FaLinkedin />
                  </button>
                </GroupShare>
              </GroupBox>
            </div>
          </div>
        </GroupDetail>
      </div>
    </WrapDetail>
  );
};

export default memo(DetailScreen);
