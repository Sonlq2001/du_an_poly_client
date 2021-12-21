import React, { memo, useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { BoxRating } from './RatingStar.styles';
import { postProductRating } from '../../redux/detail.slice';

const RatingStar = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const startLength = Array(5).fill(0);
  const [hoverValue, setHoverValue] = useState(0);
  const { starProduct, userLogin } = useSelector((state) => ({
    itemDetailProduct: state.detailProduct?.itemDetailProduct,
    starProduct: state.detailProduct?.starProduct,
    userLogin: state.auth?.userLogin,
  }));
  const [currentValue, setCurrentValue] = useState(starProduct || 0);

  const handleClickStar = (value) => {
    if (userLogin?.id) {
      setCurrentValue(value);
      dispatch(
        postProductRating({
          id,
          star: value,
        })
      );
    }
  };

  return (
    <BoxRating>
      <span className="title-rating">Đánh giá:</span>
      {startLength.map((_, index) => (
        <span
          key={index}
          className={`icon-rating ${
            (currentValue || hoverValue) > index ? 'active' : ''
          }`}
          onClick={() => handleClickStar(index + 1)}
          onMouseOver={() => setHoverValue(index + 1)}
          onMouseLeave={() => setHoverValue(null)}
        >
          <AiTwotoneStar />
        </span>
      ))}
    </BoxRating>
  );
};

export default memo(RatingStar);
