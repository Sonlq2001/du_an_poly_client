import React, { memo, useState, useRef } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { BsFilter } from 'react-icons/bs';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import { IoIosArrowDown } from 'react-icons/io';

import {
  WrapControl,
  ControlFilterCate,
  ButtonControlFilter,
  GroupFilterBasic,
  SearchAdvance,
  GroupLinkFilter,
  GroupFilterAdvance,
  ButtonSelect,
  GroupSelect,
  GroupItemSelect,
} from './CategoryControl.styles';
import {
  LIST_SEMESTER,
  LIST_CATEGORY,
} from './../../constants/category.constants';

const CategoryControl = () => {
  const { url } = useRouteMatch();
  const [isToggle, setIsToggle] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [valueSelect, setValueSelect] = useState('Chọn theo kì học');

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
                {LIST_CATEGORY.map((cate) => (
                  <NavLink
                    to={`${url}/${cate.param}`}
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
              setIsSelect(false);
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
              Sản phẩm
            </label>
            <div className="input-group">
              <span className="input-group__icon">
                <CgSearch />
              </span>
              <input type="text" placeholder="" className="input-filter" />
            </div>
          </SearchAdvance>

          <SearchAdvance>
            <label htmlFor="" className="label-search">
              Kỳ học
            </label>
            <div></div>
            <GroupSelect>
              <ButtonSelect onClick={() => setIsSelect(!isSelect)}>
                {valueSelect}
                <span>
                  <IoIosArrowDown
                    className={`icon-select ${isSelect ? 'active' : ''}`}
                  />
                </span>
              </ButtonSelect>
              {isSelect && (
                <GroupItemSelect>
                  {LIST_SEMESTER.map((item) => (
                    <div
                      className={`item-select ${
                        item.name === valueSelect ? 'active' : ''
                      }`}
                      key={item.name}
                      onClick={() => {
                        setValueSelect(item.name);
                        setIsSelect(!isSelect);
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </GroupItemSelect>
              )}
            </GroupSelect>
          </SearchAdvance>
        </GroupFilterAdvance>
      </div>
    </WrapControl>
  );
};

export default memo(CategoryControl);
