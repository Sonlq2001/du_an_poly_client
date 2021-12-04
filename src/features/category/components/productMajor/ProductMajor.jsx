import React , {useEffect, useCallback}from 'react';
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
import { Link, Redirect ,useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getProductMajor } from 'features/category/redux/category.slice';

const ProductMajor = () => {
  const { productMajor } = useSelector((state) => state.category);
  const {id,path}= useParams()
  const dispatch = useDispatch()
  const getData = useCallback(()=>{
    dispatch(getProductMajor(id));
  },[dispatch,id])
  useEffect(()=>{
    getData()
  },[dispatch,getData])
  return (
    <>
      {productMajor.length > 0 ? (
        <Titel> Hiển thị sản phẩm theo chuyên ngành <span> {path} </span></Titel>
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
                      <Link to="/product/1" className="content-title">
                        {item?.name}
                      </Link>
                      <p className="content-object">
                        Môn học: môn học mới nhất
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
              <div className="messenger"> Chưa có sản phẩm </div>
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
