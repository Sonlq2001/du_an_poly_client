import React, { memo, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { GroupRating, RatingTotal, FilterRating } from './Feedback.styles';
import { getCountStar } from '../../redux/detail.slice';

const RatingDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getCountStar(id));
    }
  }, [dispatch, id]);

  const { countStar } = useSelector((state) => ({
    countStar: state.detailProduct.countStar,
  }));

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
        <div className="item-rating">
          <div className="item-rating__icon">
            1
            <AiFillStar />
          </div>
          ({countStar?.oneStar})
        </div>
        <div className="item-rating">
          <div className="item-rating__icon">
            2
            <AiFillStar />
          </div>
          ({countStar?.twoStar})
        </div>
        <div className="item-rating">
          <div className="item-rating__icon">
            3
            <AiFillStar />
          </div>
          ({countStar?.threeStar})
        </div>
        <div className="item-rating">
          <div className="item-rating__icon">
            4
            <AiFillStar />
          </div>
          ({countStar?.fourStar})
        </div>
        <div className="item-rating">
          <div className="item-rating__icon">
            5
            <AiFillStar />
          </div>
          ({countStar?.fiveStar})
        </div>
      </FilterRating>
    </GroupRating>
  );
};

export default memo(RatingDetail);
