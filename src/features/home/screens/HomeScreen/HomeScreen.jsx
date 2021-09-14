import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';

import Slider from './../../../../components/Slider/Slider';
import Majors from './../../components/Majors/Majors';
import { TitleMain, WrapPage } from './../../../../styles/common/index';
import {
  GridWrap,
  GridContent,
  GridItem,
  ButtonReadMore,
  GridContentItem,
  GridEnd,
} from './HomeScreen.styles';

const HomeScreen = () => {
  return (
    <>
      {/* slider  */}
      <WrapPage>
        <Slider />
        <div className="container">
          <Majors />

          <GridWrap>
            <TitleMain>Các sản phẩm nổi bật</TitleMain>

            <GridContent>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                  alt=""
                />

                <GridContentItem>
                  <div className="item-title">
                    Sản phẩm tốt nghiệp án tượng khóa 12
                  </div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_1280.jpg"
                  alt=""
                />
                <GridContentItem>
                  <div className="item-title">Web phim cực phẩm</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726_1280.jpg"
                  alt=""
                />
                <GridContentItem>
                  <div className="item-title">Web phim cực phẩm</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2014/09/03/20/15/shoes-434918_1280.jpg"
                  alt=""
                />
                <GridContentItem>
                  <div className="item-title">Web phim cực phẩm</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg"
                  alt=""
                />
                <GridContentItem>
                  <div className="item-title">Web phim cực phẩm</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg"
                  alt=""
                />
                <GridContentItem>
                  <div className="item-title">Web phim cực phẩm</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
                  alt=""
                />
                <GridContentItem>
                  <div className="item-title">Web phim cực phẩm</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2016/01/27/04/32/books-1163695_1280.jpg"
                  alt=""
                />
                <GridContentItem>
                  <div className="item-title">Web phim cực phẩm</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_1280.jpg"
                  alt=""
                />
                <GridContentItem>
                  <div className="item-title">Web phim cực phẩm</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2015/06/08/15/11/typewriter-801921_1280.jpg"
                  alt=""
                />
                <GridContentItem>
                  <div className="item-title">Web phim cực phẩm</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_1280.jpg"
                  alt=""
                />
                <GridContentItem>
                  <div className="item-title">Web phim cực phẩm</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2012/03/04/01/01/father-22194_1280.jpg"
                  alt=""
                />
                <GridContentItem>
                  <div className="item-title">Web phim cực phẩm</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_1280.jpg"
                  alt=""
                />
                <GridContentItem>
                  <div className="item-title">Web phim cực phẩm</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
              <GridItem>
                <img
                  src="https://cdn.pixabay.com/photo/2020/07/21/16/24/landscape-5426755_1280.jpg"
                  alt=""
                />
                <GridContentItem>
                  <div className="item-title">Web phim cực phẩm</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">123,1323</span>
                  </div>
                </GridContentItem>
              </GridItem>
            </GridContent>

            <GridEnd>
              <ButtonReadMore>Xem thêm</ButtonReadMore>
            </GridEnd>
          </GridWrap>
        </div>
      </WrapPage>
    </>
  );
};

export default HomeScreen;
