import React, { memo, useState, useRef, useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { BsFilter } from 'react-icons/bs';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

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
  LIST_OBJECT,
  LIST_TEACHER,
  LIST_SORT,
  LIST_STATUS,
} from './../../constants/category.constants';
import { getMajors } from './../../redux/category.slice';

const CategoryControl = () => {
  const { url } = useRouteMatch();
  const [isToggle, setIsToggle] = useState(false);
  const dispatch = useDispatch();

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
    if (cateSlide.scrollLeft >= 0) {
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

  useEffect(() => {
    dispatch(getMajors());
  }, [dispatch]);

  const { listMajors } = useSelector((state) => state.category);

  return (
    <WrapControl>
      <div className="container">
        <GroupFilterBasic>
          <ControlFilterCate>
            <span className="title-filter">Chọn theo chuyên ngành</span>
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
              <div className="list-cate" ref={WrapCate}>
                <NavLink to={url} className="link-cate">
                  All
                </NavLink>
                {listMajors &&
                  listMajors.length > 0 &&
                  listMajors.map((cate) => (
                    <NavLink
                      to={`${url}/${cate.name}`}
                      className="link-cate"
                      key={cate.name}
                    >
                      {cate.name}
                    </NavLink>
                  ))}
              </div>
            </GroupLinkFilter>
          </ControlFilterCate>

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
                options={LIST_OBJECT}
                placeholder="Tìm theo môn học"
                theme={customTheme}
              />
            </CustomerSelect>
          </SearchAdvance>

          <SearchAdvance>
            <label htmlFor="" className="label-search">
              Giáo viên
            </label>
            <CustomerSelect>
              <Select
                options={LIST_TEACHER}
                placeholder="Tìm theo giáo viên"
                theme={customTheme}
                noOptionsMessage="le quang son"
              />
            </CustomerSelect>
          </SearchAdvance>

          <SearchAdvance>
            <label htmlFor="" className="label-search">
              Trạng Thái
            </label>
            <CustomerSelect>
              <Select
                options={LIST_STATUS}
                placeholder="Trạng thái"
                theme={customTheme}
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
              />
            </CustomerSelect>
          </SearchAdvance>
        </GroupFilterAdvance>
      </div>
    </WrapControl>
  );
};

export default memo(CategoryControl);
