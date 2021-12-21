import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Slider from 'components/Slider/Slider';
import { AiOutlineStar } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import Majors from './../../components/Majors/Majors';
import { TitleMain } from 'styles/common/index';
import {
  GridWrap,
  GridContent,
  GridItem,
  GridContentItem,
  GridEnd,
  MasonryActionItem,
  MasonryAction
} from './HomeScreen.styles';
import { getProducts } from '../../redux/home.slice';
import Loading from 'components/Loading/Loading';
import { CATEGORY_PATHS } from 'features/category/constants/category.paths';

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProducts({
        page: 1,
        pageLength: 14,
      })
    );
  }, [dispatch]);

  const { productsHome, isProductsHomeLoading } = useSelector((state) => ({
    productsHome: state.home?.productsHome,
    isProductsHomeLoading: state.home?.isProductsHomeLoading,
  }));
  if (isProductsHomeLoading) {
    return <Loading />;
  }
  return (
    <>
      <Slider />
      <div className="container">
        <Majors />
        <GridWrap>
          <TitleMain>Các sản phẩm nổi bật</TitleMain>
          <GridContent>
            {(productsHome ?? [])?.map((item) => {
              return (
                <GridItem key={item?.id}>
                  <div className="item-img">
                    <Link to={`/product/${item.id}`}>
                      <img src={item?.image} alt={item?.name} />
                    </Link>
                  </div>
                  <GridContentItem>
                    <div className="item-title">
                      <Link to={`/product/${item?.id}`}> {item?.name}</Link>
                    </div>
                    <MasonryAction>
                    <MasonryActionItem>
                      <span className="icon-masonry">
                        <AiOutlineStar />
                      </span>
                      <span>{Math.round(item?.avg_rate)?? 0} </span>
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
                  </GridContentItem>
                </GridItem>
              );
            })}
          </GridContent>

          <GridEnd>
            <Link
              to={CATEGORY_PATHS.GET_PRODUCT_CATEGORY.replace(':path', 'all')}
              className="btn-read-more"
            >
              Xem thêm
            </Link>
          </GridEnd>
        </GridWrap>
      </div>
    </>
  );
};

export default HomeScreen;
