import React from 'react';
import {
  MasonryAction,
  MasonryActionItem,
  MasonryBox,
  MasonryContent,
  MasonryHeader,
  MasonryLayout,
  GroupNoResult,
} from './ProductMajor.styles';

import NoResult from 'assets/images/no-result.png';
import { AiOutlineStar } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Ong_vang from 'assets/images/ong_vang.png';
import { PendingSearch } from './../../screens/CategoryScreen.styles';
import Loading from 'components/Loading/Loading';
const ProductMajor = () => {
  const { productMajor, isProductLoading } = useSelector(
    (state) => state.category
  );
  if (isProductLoading) {
    <PendingSearch>
      <div className="group-pending">
        <Loading nowrap={false} />
      </div>
    </PendingSearch>;
  }

  return (
    <>
      {productMajor && productMajor.length > 0 ? (
        <MasonryLayout>
          {productMajor.map((item, index) => {
            return (
              <MasonryBox className="item" key={index + 1}>
                <MasonryHeader>
                  <img src={item?.image ?? Ong_vang} alt={item?.name} />
                </MasonryHeader>
                <MasonryContent>
                  <Link to={`/product/${item?.id}`} className="content-title">
                    {item?.name}
                  </Link>
                  <div className="content-subject">
                    <span className="label-subject">Môn học: {item?.subject?.name}</span>
                  </div>
                  <MasonryAction>
                    <MasonryActionItem>
  
                      <span className="icon-masonry">
                        <AiOutlineStar />
                      </span>
                      <span>{Math.floor(item?.avg_rate)?? 0} </span>
                    </MasonryActionItem>
                    <MasonryActionItem>
                      <span className="icon-masonry">
                        <FaRegComment />
                      </span>
                      <span>{item?.comments ?? 0}</span>
                    </MasonryActionItem>
                    <MasonryActionItem>
                      <span className="icon-bookmark">
                        <FiBookmark />
                      </span>
                    </MasonryActionItem>
                  </MasonryAction>
                </MasonryContent>
              </MasonryBox>
            );
          })}
        </MasonryLayout>
      ) : (
        <GroupNoResult>
          <div className="body-no-result">
            <img src={NoResult} alt="" className="img-no-result" />
            <div className="box-no-result">
              <div className="label-no-result">Không tìm thấy kết quả nào</div>
            </div>
          </div>
        </GroupNoResult>
      )}
    </>
  );
};
export default ProductMajor;
