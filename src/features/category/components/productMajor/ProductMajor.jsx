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
const ProductMajor = () => {
  const { productMajor } = useSelector((state) => state.category);
  return (
    <>
      {productMajor ? (
          productMajor.length > 0 ? (
         <MasonryLayout>
           { productMajor.map((item, index) => {
              return (
                <MasonryBox className="item" key={index + 1}>
                  <MasonryHeader>
                    <img src={item?.image} alt={item?.name} />
                  </MasonryHeader>
                  <MasonryContent>
                    <Link to={`/product/${item.id}`} className="content-title">
                      {item?.name}
                    </Link>
                    <p className="content-object">
                      Môn học: {item?.subject?.name}
                    </p>
                    <MasonryAction>
                      <MasonryActionItem>
                        <span className="icon-masonry">
                          <AiOutlineStar />
                        </span>
                        <span className="icon-masonry">
                          <AiOutlineStar />
                        </span>
                        <span>12</span>
                      </MasonryActionItem>
                      <MasonryActionItem>
                        <span className="icon-masonry">
                          <FaRegComment />
                        </span>
                        <span>15</span>
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
                  <div className="label-no-result">
                    Không tìm thấy kết quả nào
                  </div>
                  <div className="des-no-result">
                    Hãy thử sử dụng các từ khóa chung chung hơn
                  </div>
                </div>
              </div>
            </GroupNoResult>
          )
      
      ) : (
        <GroupNoResult>
              <div className="body-no-result">
                <img src={NoResult} alt="" className="img-no-result" />
                <div className="box-no-result">
                  <div className="label-no-result">
                    Không tìm thấy kết quả nào
                  </div>
                  <div className="des-no-result">
                    Hãy thử sử dụng các từ khóa chung chung hơn
                  </div>
                </div>
              </div>
            </GroupNoResult>
      )}
    </>
  );
};
export default ProductMajor;
