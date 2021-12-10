import React, {useEffect } from 'react';
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
            {productsHome.map((item) => (
              <GridItem key={item?.id}>
                <img src={item?.image} alt={item?.name} />
                <GridContentItem>
                  <div className="item-title">{item?.name}</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">{item?.view}</span>
                  </div>
                </GridContentItem>
              </GridItem>
            ))}
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
