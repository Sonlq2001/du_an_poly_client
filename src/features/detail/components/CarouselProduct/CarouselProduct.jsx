import React, { memo } from 'react';
import Slider from 'react-slick';
import { GrProductHunt } from 'react-icons/gr';

import {
  Carousel,
  ItemHeader,
  ItemBody,
  ItemCarousel,
} from './CarouselProduct.styles';
import { TitleMain } from './../../screens/DetailScreen/DetailScreen.styles';
import { LIST_CAROUSEL } from './../../constants/detail.constants';

const CarouselProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  return (
    <Carousel>
      <TitleMain className="title-main">
        <GrProductHunt />
        <span>Sản Phẩm Liên Quan </span>
      </TitleMain>
      <Slider {...settings}>
        {LIST_CAROUSEL.map((carousel, index) => (
          <ItemCarousel key={index}>
            <ItemHeader>
              <img src={carousel.img} alt="" className="img-carousel" />
            </ItemHeader>
            <ItemBody>
              <div className="item-title">Tài liệu cơ khí điện tử</div>
              <div className="item-box">
                <span className="item-label">Môn học:</span>
                Điện tử 1
              </div>
            </ItemBody>
          </ItemCarousel>
        ))}
      </Slider>
    </Carousel>
  );
};

export default memo(CarouselProduct);
