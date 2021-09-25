import React, { memo, useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

import { BoxRating } from './RatingStar.styles';

const RatingStar = () => {
  const startLength = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  const handleClickStar = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
    setCurrentValue(value);
  };

  return (
    <BoxRating>
      <span className="title-rating">Đánh giá:</span>
      {startLength.map((item, index) => (
        <span
          key={index}
          className={`icon-rating ${
            (currentValue || hoverValue) > index ? 'active' : ''
          }`}
          onClick={() => handleClickStar(index + 1)}
          onMouseOver={() => handleMouseOver(index + 1)}
          onMouseLeave={() => setHoverValue(null)}
        >
          <AiTwotoneStar />
        </span>
      ))}
    </BoxRating>
  );
};

export default memo(RatingStar);
