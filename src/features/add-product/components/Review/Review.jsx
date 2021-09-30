import React from 'react';
import { OverLay, Content } from './Review.styles';
const ReviewProduct = ({ show, setShow }) => {
  return (
    <OverLay className={show ? 'active' : ''} onClick={() => setShow(!show)}>
      <Content className="container activeContent"> chi tiết sản phẩm </Content>
    </OverLay>
  );
};

export default ReviewProduct;
