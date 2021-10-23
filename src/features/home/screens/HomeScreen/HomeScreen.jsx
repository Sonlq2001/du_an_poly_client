import React, { useEffect } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import Slider from './../../../../components/Slider/Slider';
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
import { DATA_FAKE } from './../../constants/home.constants';
import { getProducts } from 'helpers/api/productApi/product.slice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {/* slider  */}
      <Slider />
      <div className="container">
        <Majors />

        <GridWrap>
          <TitleMain>Các sản phẩm nổi bật</TitleMain>

          <GridContent>
            {DATA_FAKE.map((item) => (
              <GridItem key={item.id}>
                <img src={item.img} alt="" />
                <GridContentItem>
                  <div className="item-title">{item.name}</div>
                  <div className="item-view">
                    <span className="item-icon">
                      <AiOutlineEye />
                    </span>
                    <span className="item-counter">{item.view}</span>
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
