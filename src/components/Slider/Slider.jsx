import React, { useState, useRef } from 'react';
import { default as WrapSlider } from 'react-slick';
import { HiOutlineSearch } from 'react-icons/hi';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import {
  SliderMain,
  SliderItem,
  GroupSearch,
  BoxTrending,
  SearchMain,
  SearchComplete,
  GroupSlide,
} from './Slider.styles';
import ImageSlide1 from './../../assets/images/notebook-1.jpg';
import ImageSlide2 from './../../assets/images/slide-2.jpg';
import LoadingSearch from 'components/Loading/LoadingSearch';
import { searchData } from 'features/home/redux/home.slice';
import { DETAIL_PATHS } from 'features/detail/constants/detail.paths';
import { SEARCH_PATHS } from 'features/search/constants/search.paths';

const Slider = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const timeOutString = useRef(null);
  const [valueSearch, setValueSearch] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { dataSearch, isDataSearchLoading } = useSelector((state) => ({
    dataSearch: state.home?.dataSearch,
    isDataSearchLoading: state.home?.isDataSearchLoading,
  }));

  const handleSearch = async (e) => {
    const q = e.target.value;
    setValueSearch(q);

    if (timeOutString.current) {
      clearTimeout(timeOutString.current);
    }

    timeOutString.current = setTimeout(() => {
      dispatch(
        searchData({
          text: q,
        })
      );
    }, 500);
  };

  const handleEnterSearch = (e) => {
    const { charCode } = e;
    if (charCode === 13) {
      history.push(`${SEARCH_PATHS.SEARCH_MAIN}?keyword=${valueSearch}`);
    }
  };

  return (
    <GroupSlide>
      <SliderMain>
        <WrapSlider {...settings}>
          <SliderItem>
            <img src={ImageSlide1} alt="" />
          </SliderItem>
          <SliderItem>
            <img src={ImageSlide2} alt="" />
          </SliderItem>
        </WrapSlider>
      </SliderMain>

      <SearchMain>
        <div className="container">
          <GroupSearch>
            <h2 className="title-search">T??m ki???m t??i li???u sinh vi??n Fpoly</h2>
            <div className="box-search">
              <input
                type="text"
                placeholder="T??m ki???m t??i li???u"
                name=""
                className="input-search"
                onChange={handleSearch}
                onKeyPress={handleEnterSearch}
              />
              <span className="icon-search">
                <HiOutlineSearch />
              </span>

              {valueSearch !== '' && (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setValueSearch('');
                  }}
                >
                  <SearchComplete>
                    <div className="label-result">
                      <div>
                        T??m:
                        <span className="value-search">' {valueSearch} '</span>
                      </div>
                      <div>{isDataSearchLoading && <LoadingSearch />}</div>
                    </div>

                    <div className="search-result">
                      <div className="result-list">
                        {dataSearch ? (
                          dataSearch.map((data) => (
                            <Link
                              to={DETAIL_PATHS.DETAIL_PRODUCT.replace(
                                /:id/,
                                data.id
                              )}
                              className="item-list"
                              key={data.id}
                            >
                              <img
                                src={data.image}
                                alt=""
                                className="item-img"
                              />
                              <span className="item-name">{data.name}</span>
                            </Link>
                          ))
                        ) : (
                          <div className="no-result">
                            Kh??ng t??m th???y k???t qu???
                          </div>
                        )}
                      </div>
                    </div>
                  </SearchComplete>
                </OutsideClickHandler>
              )}
            </div>
            <BoxTrending>
              <span className="txt-popular">T??m ki???m ph??? bi???n:</span>
              <span>
                ????? ??n t???t nghi???p c??ng ngh??? th??ng tin, t??i li???u marketing...
              </span>
            </BoxTrending>
          </GroupSearch>
        </div>
      </SearchMain>
    </GroupSlide>
  );
};

export default Slider;
