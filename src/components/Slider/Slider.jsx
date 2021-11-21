import React, { useState } from 'react';
import { default as WrapSlider } from 'react-slick';
import { HiOutlineSearch } from 'react-icons/hi';
import OutsideClickHandler from 'react-outside-click-handler';

import {
  SliderMain,
  SliderItem,
  GroupSearch,
  BoxTrending,
  SearchMain,
  SearchComplete,
  GroupSlide,
} from './Slider.styles';
import ImageSlide1 from './../../assets/images/notebook-1.jpg';
import ImageSlide2 from './../../assets/images/slide-2.jpg';

const Slider = () => {
  const [valueSearch, setValueSearch] = useState('');
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleSearch = (e) => {
    setValueSearch(e.target.value);
  };

  return (
    <GroupSlide>
      <SliderMain>
        <WrapSlider {...settings}>
          <SliderItem>
            <img src={ImageSlide1} alt="" />
          </SliderItem>
          <SliderItem>
            <img src={ImageSlide2} alt="" />
          </SliderItem>
        </WrapSlider>
      </SliderMain>

      <SearchMain>
        <div className="container">
          <GroupSearch>
            <h2 className="title-search">
              Tham khảo tài liệu sinh viên poly miễn phí
            </h2>
            <div className="box-search">
              <input
                type="text"
                placeholder="Tìm kiếm tài liệu"
                name=""
                className="input-search"
                onChange={handleSearch}
              />
              <span className="icon-search">
                <HiOutlineSearch />
              </span>

              {valueSearch !== '' && (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setValueSearch('');
                  }}
                >
                  <SearchComplete>
                    <div className="label-result">
                      Tìm: ' <span className="value-search">{valueSearch}</span>
                      '
                    </div>

                    <div className="search-result">
                      <div className="label-list">
                        <div className="label-text">Sản phẩm</div>
                        <div className="view-more">Xem thêm</div>
                      </div>

                      <div className="result-list">
                        <div className="item-list">
                          <img
                            src="https://cdn.pixabay.com/photo/2021/11/02/15/30/tealights-6763542_1280.jpg"
                            alt=""
                            className="item-img"
                          />
                          <span className="item-name">
                            Đây là 1 sản phầm nào đó !
                          </span>
                        </div>
                      </div>
                    </div>
                  </SearchComplete>
                </OutsideClickHandler>
              )}
            </div>
            <BoxTrending>
              <span className="txt-popular">Tìm kiếm phổ biến:</span>
              <span>
                Đồ án tốt nghiệp công nghệ thông tin, tài liệu marketing...
              </span>
            </BoxTrending>
          </GroupSearch>
        </div>
      </SearchMain>
    </GroupSlide>
  );
};

export default Slider;
