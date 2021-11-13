import React, { memo } from 'react';
import { AiFillStar } from 'react-icons/ai';

import { GroupRating, RatingTotal, FilterRating } from './Feedback.styles';
import { LIST_RATING } from './../../constants/detail.constants';

const RatingDetail = () => {
  return (
    <GroupRating>
      <RatingTotal>
        <div className="rating-percent">3.5</div>
        <div className="group-star">
          <div className="list-star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="view-project">1925 lượt xem</div>
        </div>
      </RatingTotal>

      <FilterRating>
        {LIST_RATING.map((itemStart) => (
          <div className="item-rating" key={itemStart.star}>
            <div className="item-rating__icon">
              {itemStart.star}
              <AiFillStar />
            </div>
            ({itemStart.total_star})
          </div>
        ))}
      </FilterRating>
    </GroupRating>
  );
};

export default memo(RatingDetail);
