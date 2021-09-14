import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';
import { FcSearch } from 'react-icons/fc';

import {
  WrapHeader,
  HeaderInner,
  HeaderLeft,
  HeaderMenu,
  HeaderRight,
  ItemMenuNew,
  BoxNew,
  FormSearch,
} from './header.styles';
import LogoFpt from './../../assets/images/logo.png';

const Header = () => {
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
                <Link to="/" className="link-menu">
                  Các chuyên ngành
                </Link>
                <BoxNew>
                  <span className="text-new">New</span>
                </BoxNew>
              </ItemMenuNew>
            </HeaderMenu>
          </HeaderLeft>

          <HeaderRight>
            <FormSearch>
              <input type="text" placeholder="Tìm kiếm ..." />
              <span className="icon-search">
                <FcSearch />
              </span>
            </FormSearch>
            <Link to="/" className="link-menu">
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
