import React from 'react';
import {
  MasonryAction,
  MasonryActionItem,
  MasonryBox,
  MasonryContent,
  MasonryHeader,
  MasonryLayout,
  Titel,
} from './ProductMajor.styles';

import { AiOutlineStar } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProductMajor = () => {
  const { productMajor } = useSelector((state) => state.category);
  return (
    <>
      {productMajor.length > 0 ? (
        <Titel> Hiển thị sản phẩm theo chuyên ngành <span>  </span></Titel>
      ) : (
        ''
      )}
      <MasonryLayout>
        {productMajor ? (
          <>
            {productMajor.length > 0 ? (
              productMajor.map((item, index) => {
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
              })
            ) : (
              <div className="messenger"> Chưa có sản phẩm !</div>
            )}
          </>
        ) : (
          <Redirect to="/page404" />
        )}
      </MasonryLayout>
    </>
  );
};
export default ProductMajor;
