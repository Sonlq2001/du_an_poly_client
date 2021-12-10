import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import {  Link, useParams } from 'react-router-dom';
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
import {
  LIST_SORT,
  LIST_MAJOR,
} from './../../constants/category.constants';
import { getSubjects, getTeacher, productFilter } from './../../redux/category.slice';
import { MapOptions, MapOptionsLong } from 'helpers/convert/map-options';
import { getCampuses } from 'features/master-data/redux/master-data.slice';

const CategoryControl = () => {
  const {id}  = useParams()
  const [isToggle, setIsToggle] = useState(false);
  const dispatch = useDispatch();
  const dataSubject = useCallback(() => {
    dispatch(getSubjects(id));
  },[dispatch,id]);
  const dataCampuse = useCallback(() => {
    dispatch(getCampuses());
  },[dispatch]);
  const dataTeacher = useCallback(()=>{
    const data = {
        id: id,
        type:"teacher_user_major"
    }
  dispatch(getTeacher(data))
  },[dispatch,id])
  useEffect(() => {
    dataSubject();
    dataCampuse();
    dataTeacher()
  }, [dispatch, dataSubject, dataCampuse,dataTeacher]);

  const { listSubject,listTeacher } = useSelector((state) => state.category);
  const { listCampus } = useSelector((state) => state.masterData);
  const optionSubject = MapOptionsLong(listSubject);
  const optionListCampus = MapOptions(listCampus);
  const optionTeacher = MapOptionsLong(listTeacher)
  const WrapCate = useRef(null);
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
  const ChangeFilter = (e,type)=>{
    const data ={
      major_id : id,
      id : e.value,
      type : type
    } 
    dispatch(productFilter(data))
  }
  
  return (
    <WrapControl>
      <div className="container">
        <GroupFilterBasic>
          <ControlFilterCate>
            <span className="title-filter">Chọn chuyên ngành</span>
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
                    to={`/category/${item?.nameLink}/${item?.id}`}
                    className="link-cate"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </Slider>
          </GroupLinkFilter>

          <ButtonControlFilter
            onClick={() => {
              setIsToggle(!isToggle);
            }}
            className={`${isToggle ? 'active' : ''}`}
          >
            <BsFilter className="icon-filter" />
            <span>Filter</span>
          </ButtonControlFilter>
        </GroupFilterBasic>

        <GroupFilterAdvance
          className={`control-advance ${isToggle ? 'active' : ''}`}
        >
          <SearchAdvance>
            <label htmlFor="" className="label-search">
              Tìm kiếm
            </label>
            <div className="input-group">
              <span className="input-group__icon">
                <CgSearch />
              </span>
              <input
                type="text"
                className="input-filter"
                placeholder="Tên sản phẩm, mã sinh viên..."
              />
            </div>
          </SearchAdvance>
          <SearchAdvance>
            <label htmlFor="" className="label-search">
              Môn học
            </label>
            <CustomerSelect>
              <Select
                options={optionSubject ? optionSubject : []}
                placeholder="Tìm theo môn học"
                theme={customTheme}
                onChange = {(e)=> ChangeFilter(e,"subject_id")}
              />
            </CustomerSelect>
          </SearchAdvance>

          <SearchAdvance>
            <label htmlFor="" className="label-search">
              Giáo viên
            </label>
            <CustomerSelect>
              <Select
                options={optionTeacher? optionTeacher : []}
                placeholder="Tìm theo giáo viên"
                theme={customTheme}
                // noOptionsMessage="le quang son"
                onChange = {(e)=> ChangeFilter(e,"teacher_id")}
              />
            </CustomerSelect>
          </SearchAdvance>
          <SearchAdvance>
            <label htmlFor="" className="label-search">
              Cơ Sở
            </label>
            <CustomerSelect>
              <Select
                options={optionListCampus ? optionListCampus : []}
                placeholder="Tìm theo cơ sở "
                theme={customTheme}
                noOptionsMessage="le quang son"
                onChange = {(e)=> ChangeFilter(e,"campus")}

              />
            </CustomerSelect>
          </SearchAdvance>
          <SearchAdvance>
            <label htmlFor="" className="label-search">
              Xắp xếp
            </label>
            <CustomerSelect>
              <Select
                options={LIST_SORT}
                placeholder="Xắp xếp theo"
                theme={customTheme}
                onChange = {(e)=> ChangeFilter(e,"sort")}
              />
            </CustomerSelect>
          </SearchAdvance>
        </GroupFilterAdvance>
      </div>
    </WrapControl>
  );
};

export default memo(CategoryControl);
