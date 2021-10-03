import React from 'react';
import { OverLay, Content } from './Review.styles';
import Image from './../../../../assets/images/review.jpg';
const ReviewProduct = ({ show, setShow }) => {
  return (
    <OverLay className={show ? 'active' : ''} onClick={() => setShow(!show)}>
      <Content
        className={show ? 'container activeContent' : 'container'}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={Image} />{' '}
      </Content>
    </OverLay>
  );
};

export default ReviewProduct;
