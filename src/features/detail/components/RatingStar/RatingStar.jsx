import React, { memo, useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { BoxRating } from './RatingStar.styles';
import { postProductRating } from '../../redux/detail.slice';

const RatingStar = ({ valueSendCmt, setValueSendCmt }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const startLength = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  const handleClickStar = (value) => {
    setCurrentValue(value);
    setValueSendCmt({ ...valueSendCmt, rating: value });

    console.log(value, 'o day');
    dispatch(
      postProductRating({
        id,
        star: value,
      })
    );
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
