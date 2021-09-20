import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiLogIn, BiPalette } from 'react-icons/bi';
import { FcSearch } from 'react-icons/fc';
import { MdWeb, MdAutorenew } from 'react-icons/md';
import { GiLipstick } from 'react-icons/gi';
import { FaSuitcaseRolling } from 'react-icons/fa';
import { HiChartBar } from 'react-icons/hi';

import {
  WrapHeader,
  HeaderInner,
  HeaderLeft,
  HeaderMenu,
  HeaderRight,
  ItemMenuNew,
  BoxNew,
  FormSearch,
  SubMenu,
  SubMeuItem,
} from './header.styles';
import LogoFpt from './../../assets/images/logo.png';

const Header = () => {
  const { pathname } = useLocation();
  const [isSearchHeader, setIsSearchHeader] = useState(false);

  useEffect(() => {
    pathname === '/' ? setIsSearchHeader(false) : setIsSearchHeader(true);
    const searchHeader = () => {
      if (pathname === '/') {
        window.scrollY >= 500
          ? setIsSearchHeader(true)
          : setIsSearchHeader(false);
      }
    };
    window.addEventListener('scroll', searchHeader);
    return () => {
      window.removeEventListener('scroll', searchHeader);
    };
  }, [pathname]);

  return (
    <WrapHeader>
      <div className="container ">
        <HeaderInner>
          <HeaderLeft>
            <Link to="/">
              <img src={LogoFpt} alt="" />
            </Link>

            <HeaderMenu>
              <li className="item-menu">
                <Link to="/" className="link-menu">
                  Trang chủ
                </Link>
              </li>
              <li className="item-menu">
                <Link to="/" className="link-menu">
                  Thông tin
                </Link>
              </li>
              <ItemMenuNew className="item-menu">
                <div>
                  <div className="link-disabled link-menu">
                    Các chuyên ngành
                  </div>
                  <BoxNew>
                    <span className="text-new">New</span>
                  </BoxNew>
                </div>

                <SubMenu>
                  <SubMeuItem>
                    <Link to="/category" className="link-sub">
                      <span>
                        <MdWeb />
                      </span>
                      <span>Công nghệ thông tin</span>
                    </Link>
                  </SubMeuItem>
                  <SubMeuItem>
                    <Link to="/category" className="link-sub">
                      <span>
                        <BiPalette />
                      </span>
                      <span>Thiết kế đồ họa</span>
                    </Link>
                  </SubMeuItem>
                  <SubMeuItem>
                    <Link to="/category" className="link-sub">
                      <span>
                        <HiChartBar />
                      </span>
                      <span>Kinh tế kinh doanh</span>
                    </Link>
                  </SubMeuItem>
                  <SubMeuItem>
                    <Link to="/category" className="link-sub">
                      <span>
                        <GiLipstick />
                      </span>
                      <span> Mĩ phẩm làm đẹp</span>
                    </Link>
                  </SubMeuItem>
                  <SubMeuItem>
                    <Link to="/category" className="link-sub">
                      <span>
                        <MdAutorenew />
                      </span>
                      <span>Cơ khí tự động hóa</span>
                    </Link>
                  </SubMeuItem>
                  <SubMeuItem>
                    <Link to="/category" className="link-sub">
                      <span>
                        <FaSuitcaseRolling />
                      </span>
                      <span>Du lịch - Khách sạn - Nhà hàng</span>
                    </Link>
                  </SubMeuItem>
                </SubMenu>
              </ItemMenuNew>
            </HeaderMenu>
          </HeaderLeft>

          <HeaderRight>
            {isSearchHeader && (
              <FormSearch>
                <input type="text" placeholder="Tìm kiếm ..." />
                <span className="icon-search">
                  <FcSearch />
                </span>
              </FormSearch>
            )}

            <Link to="/sign-in" className="link-menu">
              Login
              <span className="icon-login">
                <BiLogIn />
              </span>
            </Link>
          </HeaderRight>
        </HeaderInner>
      </div>
    </WrapHeader>
  );
};

export default Header;
