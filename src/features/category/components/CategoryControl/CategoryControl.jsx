import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsFilter } from 'react-icons/bs';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import {
  WrapControl,
  ControlFilterCate,
  ButtonControlFilter,
  GroupFilterBasic,
  SearchAdvance,
  GroupLinkFilter,
  GroupFilterAdvance,
  CustomerSelect,
} from './CategoryControl.styles';
import { LIST_SORT, LIST_MAJOR } from './../../constants/category.constants';
import {
  getSubjects,
  getTeacher,
  productFilter,
  seachProduct,
  getProductMajor,
  sortProduct,
} from './../../redux/category.slice';
import { MapOptions, MapOptionsLong } from 'helpers/convert/map-options';
import { getCampuses } from 'features/master-data/redux/master-data.slice';

const CategoryControl = () => {
  const { path } = useParams();
  const dispatch = useDispatch();
  const arrayPath = path.split('-');
  const id = arrayPath[arrayPath.length - 1];

  const dataSubject = useCallback(() => {
    if(Number(id)){
      dispatch(getSubjects(id));
    }
  }, [dispatch, id]);
  const dataCampuse = useCallback(() => {
    dispatch(getCampuses());
  }, [dispatch]);
  const dataTeacher = useCallback(() => {
    const data = {
      id: Number(id),
      type: 'teacher_user_major',
    };
    dispatch(getTeacher(data));
  }, [dispatch, id]);

  const getAllProduct = useCallback(() => {
    dispatch(getProductMajor());
  }, [dispatch]);

  const [isToggle, setIsToggle] = useState(false);
  useEffect(() => {
    if (Number(id)) {
      dataSubject();
      dataTeacher();
      dataCampuse()
    } else {
      getAllProduct();
    }
  }, [dispatch, dataSubject, dataCampuse, dataTeacher,getAllProduct,id]);

  const { listSubject, listTeacher } = useSelector((state) => state.category);
  const { listCampus } = useSelector((state) => state.masterData);
  const optionSubject = MapOptionsLong(listSubject);
  const optionListCampus = MapOptions(listCampus);
  const optionTeacher = MapOptionsLong(listTeacher);
  const WrapCate = useRef(null);
  const timeOutString = useRef(null);
  const handlePrev = () => {
    const cateSlide = WrapCate.current;
    cateSlide.scrollLeft -= cateSlide.offsetWidth;
    if (cateSlide.scrollLeft <= 0) {
      cateSlide.scrollLeft = 0;
    }
  };

  const handleNext = () => {
    const cateSlide = WrapCate.current;
    cateSlide.scrollLeft += cateSlide.offsetWidth;
    if (cateSlide.scrollLeft > 0) {
      cateSlide.scrollLeft = cateSlide.offsetWidth;
    }
  };
  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: '#f58f53',
        primary25: '#DEEBFF',
        primary50: '#B2D4FF',
        primary75: '#4C9AFF',
      },
    };
  };
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    dot: false,
    draggable: true,
  };
  // filter
  const ChangeFilter = (e, type) => {
    const id_comon = e.value;
    switch (type) {
      case 1: {
        const data = {
          subject_id: id_comon,
        };
        dispatch(productFilter(data));
        break;
      }
      case 2: {
        const data = {
          major_id: Number(id),
          user_id: id_comon,
        };
        dispatch(productFilter(data));
        break;
      }
      case 3: {
        const data = {
          major_id: Number(id),
          campus_id: id_comon,
        };
        dispatch(productFilter(data));
        break;
      }
      case 4: {
        const data = {
          major_id: Number(id),
          value: id_comon,
        };
        dispatch(sortProduct(data));
        break;
      }
      default:
    }
  };
  const ChangeSearch = (e) => {
    const value = {
      major_id: Number(id),
      text: e.target.value,
    };

    if (!e.target.value) {
      if (timeOutString.current) {
        clearTimeout(timeOutString.current);
      }
      timeOutString.current = setTimeout(() => {
        dispatch(getProductMajor(id));
      }, 500);
    } else {
      if (timeOutString.current) {
        clearTimeout(timeOutString.current);
      }
      timeOutString.current = setTimeout(() => {
        dispatch(seachProduct(value));
      }, 500);
    }
  };

  return (
    <WrapControl>
      <div className="container">
        <GroupFilterBasic>
          <ControlFilterCate>
            <span className="title-filter">Ch???n chuy??n ng??nh</span>
          </ControlFilterCate>
          <GroupLinkFilter>
            <span
              className="btn-carousel btn-prev"
              onClick={() => handlePrev()}
            >
              <AiOutlineLeft />
            </span>
            <span
              className="btn-carousel btn-next"
              onClick={() => handleNext()}
            >
              <AiOutlineRight />
            </span>
            <Slider {...settings}>
              {LIST_MAJOR.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={`/category/${item?.name.toLowerCase()}`}
                    className="link-cate"
                  >
                    {item.nameLink}
                  </Link>
                );
              })}
            </Slider>
          </GroupLinkFilter>
          {Number(id) ?
          <ButtonControlFilter
            onClick={() => {
              setIsToggle(!isToggle);
            }}
            className={`${isToggle ? 'active' : ''}`}
          >
            <BsFilter className="icon-filter" />
            <span>Filter</span>
          </ButtonControlFilter>
        : ""}
        </GroupFilterBasic>
          {Number(id) ? 
        <GroupFilterAdvance
          className={`control-advance ${isToggle ? 'active' : ''}`}
        >
          <SearchAdvance>
            <label htmlFor="" className="label-search">
              T??m ki???m
            </label>
            <div className="input-group">
              <span className="input-group__icon">
                <CgSearch />
              </span>
              <input
                type="text"
                className="input-filter"
                placeholder="T??n s???n ph???m, m?? sinh vi??n..."
                onKeyUp={(e) => ChangeSearch(e)}
              />
            </div>
          </SearchAdvance>
          <SearchAdvance>
            <label htmlFor="" className="label-search">
              M??n h???c
            </label>
            <CustomerSelect>
              <Select
                options={optionSubject ? optionSubject : []}
                placeholder="T??m theo m??n h???c"
                theme={customTheme}
                onChange={(e) => ChangeFilter(e, 1)}
              />
            </CustomerSelect>
          </SearchAdvance>

          <SearchAdvance>
            <label htmlFor="" className="label-search">
              Gi??o vi??n
            </label>
            <CustomerSelect>
              <Select
                options={optionTeacher ? optionTeacher : []}
                placeholder="T??m theo gi??o vi??n"
                theme={customTheme}
                // noOptionsMessage="le quang son"
                onChange={(e) => ChangeFilter(e, 2)}
              />
            </CustomerSelect>
          </SearchAdvance>
          <SearchAdvance>
            <label htmlFor="" className="label-search">
              C?? S???
            </label>
            <CustomerSelect>
              <Select
                options={optionListCampus ? optionListCampus : []}
                placeholder="T??m theo c?? s??? "
                theme={customTheme}
                onChange={(e) => ChangeFilter(e, 3)}
              />
            </CustomerSelect>
          </SearchAdvance>
          <SearchAdvance>
            <label htmlFor="" className="label-search">
              S???p x???p
            </label>
            <CustomerSelect>
              <Select
                options={LIST_SORT}
                placeholder="S???p x???p theo"
                theme={customTheme}
                onChange={(e) => ChangeFilter(e, 4)}
              />
            </CustomerSelect>
          </SearchAdvance>
        </GroupFilterAdvance>
        : ""}
      </div>
    </WrapControl>
  );
};

export default memo(CategoryControl);
