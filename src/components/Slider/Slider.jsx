import React from 'react';
// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';
import { default as WrapSlider } from 'react-slick';

import { SliderMain, SliderItem } from './Slider.styles';

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
          <img
            src="https://caodang.fpt.edu.vn/wp-content/uploads/Banner-Web-Desktop_vesion-2.png"
            alt=""
          />
        </SliderItem>
        <SliderItem>
          <img
            src="https://caodang.fpt.edu.vn/wp-content/uploads/1900x750-2-3.png"
            alt=""
          />
        </SliderItem>
        <SliderItem>
          <img
            src="https://caodang.fpt.edu.vn/wp-content/uploads/Banner-Web-24.png"
            alt=""
          />
        </SliderItem>
        <SliderItem>
          <img
            src="https://caodang.fpt.edu.vn/wp-content/uploads/thumbnail_Banner-Web.png"
            alt=""
          />
        </SliderItem>
      </WrapSlider>
    </SliderMain>
  );
};

export default Slider;
