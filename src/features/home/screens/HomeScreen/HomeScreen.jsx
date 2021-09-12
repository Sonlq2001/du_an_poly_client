import React from 'react';

import Slider from './../../../../components/Slider/Slider';
import Majors from './../../components/Majors/Majors';
import { TitleMain } from './../../../../styles/common/index';
import {
  GridWrap,
  GridContent,
  GridItem,
  ButtonReadMore,
} from './HomeScreen.styles';

const HomeScreen = () => {
  return (
    <div>
      <Slider />
      <div className="container">
        <Majors />

        <GridWrap>
          <TitleMain>Các sản phẩm nổi bật</TitleMain>

          <GridContent>
            <GridItem>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                alt=""
              />
            </GridItem>
            <GridItem>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                alt=""
              />
            </GridItem>
            <GridItem>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                alt=""
              />
            </GridItem>
            <GridItem>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                alt=""
              />
            </GridItem>
            <GridItem>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                alt=""
              />
            </GridItem>
            <GridItem>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                alt=""
              />
            </GridItem>
            <GridItem>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                alt=""
              />
            </GridItem>
            <GridItem>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                alt=""
              />
            </GridItem>
            <GridItem>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                alt=""
              />
            </GridItem>
            <GridItem>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                alt=""
              />
            </GridItem>
            <GridItem>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                alt=""
              />
            </GridItem>
            <GridItem>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                alt=""
              />
            </GridItem>
            <GridItem>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg"
                alt=""
              />
            </GridItem>
          </GridContent>

          <div className="grid-end">
            <ButtonReadMore>Xem thêm</ButtonReadMore>
          </div>
        </GridWrap>
      </div>
    </div>
  );
};

export default HomeScreen;
