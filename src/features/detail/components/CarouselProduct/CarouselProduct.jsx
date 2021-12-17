import React, { memo } from 'react';
import Slider from 'react-slick';
import { GrProductHunt } from 'react-icons/gr';
import { useSelector } from 'react-redux';

import {
  Carousel,
  ItemHeader,
  ItemBody,
  ItemCarousel,
} from './CarouselProduct.styles';
import { TitleMain } from './../../screens/DetailScreen/DetailScreen.styles';

const CarouselProduct = () => {
  const { listProductRelated } = useSelector((state) => ({
    listProductRelated: state.detailProduct?.listProductRelated,
  }));

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      {listProductRelated && listProductRelated?.length > 5 && (
        <Carousel>
          <>
            <TitleMain className="title-main">
              <GrProductHunt />
              <span>Sản Phẩm Liên Quan </span>
            </TitleMain>
            <Slider {...settings}>
              {listProductRelated?.map((row, index) => {
                return (
                  <ItemCarousel key={index}>
                    <ItemHeader>
                      <img src={row?.image} alt="" className="img-carousel" />
                    </ItemHeader>
                    <ItemBody>
                      <div className="item-title">{row?.name}</div>
                      <div className="item-box">
                        <span className="item-label">Môn học:</span>
                        <span className="item-txt">{row?.subject?.name}</span>
                      </div>
                    </ItemBody>
                  </ItemCarousel>
                );
              })}
            </Slider>
          </>
        </Carousel>
      )}
    </>
  );
};

export default memo(CarouselProduct);
