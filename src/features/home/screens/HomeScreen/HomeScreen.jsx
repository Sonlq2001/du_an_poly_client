import React, { useEffect } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import Slider from 'components/Slider/Slider';
import Majors from './../../components/Majors/Majors';
import { TitleMain } from 'styles/common/index';
import {
  GridWrap,
  GridContent,
  GridItem,
  ButtonReadMore,
  GridContentItem,
  GridEnd,
} from './HomeScreen.styles';
import { getProducts } from '../../redux/home.slice';
import Loading from 'components/Loading/Loading';
import { Link } from 'react-router-dom';

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
      {/* slider  */}
      <Slider />
      <div className="container">
        <Majors />
        <GridWrap>
          <TitleMain>Các sản phẩm nổi bật</TitleMain>
          <GridContent>
            {productsHome.map((item) => {
              console.log(item);
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
                    <div className="item-view">
                      <span className="item-icon">
                        <AiOutlineEye />
                      </span>
                      <span className="item-counter">{item?.view}</span>
                    </div>
                  </GridContentItem>
                </GridItem>
              );
            })}
          </GridContent>

          <GridEnd>
            <ButtonReadMore>Xem thêm</ButtonReadMore>
          </GridEnd>
        </GridWrap>
      </div>
    </>
  );
};

export default HomeScreen;
