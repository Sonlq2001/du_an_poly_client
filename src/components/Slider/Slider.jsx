import React from 'react';
import { default as WrapSlider } from 'react-slick';
import { HiOutlineSearch } from 'react-icons/hi';

import {
  SliderMain,
  SliderItem,
  GroupSearch,
  BoxTrending,
  SearchMain,
} from './Slider.styles';
import ImageSlide1 from './../../assets/images/notebook-1.jpg';
import ImageSlide2 from './../../assets/images/slide-2.jpg';

const Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderMain>
      <WrapSlider {...settings}>
        <SliderItem>
          <img src={ImageSlide1} alt="" />
        </SliderItem>
        <SliderItem>
          <img src={ImageSlide2} alt="" />
        </SliderItem>
      </WrapSlider>

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
                id=""
              />
              <span className="icon-search">
                <HiOutlineSearch />
              </span>
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
    </SliderMain>
  );
};

export default Slider;
