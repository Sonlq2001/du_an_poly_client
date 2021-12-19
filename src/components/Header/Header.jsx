import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { FcSearch, FcMenu } from 'react-icons/fc';
import { GrBottomCorner } from 'react-icons/gr';
import { RiCloseLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineProfile } from 'react-icons/ai';
import OutsideClickHandler from 'react-outside-click-handler';

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
  MenuResponse,
  HeaderBar,
  BodyBar,
  GroupUser,
  GroupLogin,
} from './header.styles';
import LogoFpt from './../../assets/images/logo.png';
import { menubar } from './../../routes/routes.constants';
import { postLogout } from './../../features/auth/redux/auth.slice';
import { SEARCH_PATHS } from 'features/search/constants/search.paths';
import { useQuery } from 'helpers/convert/use-query';
import { PROFILE_PATHS } from 'features/profile/constants/profile.paths';
import { AUTH_PATHS } from 'features/auth/constants/auth.paths';

const Header = () => {
  const { pathname } = useLocation();
  const [isSearchHeader, setIsSearchHeader] = useState(false);
  const [isUserAction, setIsUserAction] = useState(false);
  const [querySearch, setQuerySearch] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const query = useQuery();
  const valueSearch = query.get('keyword');

  useEffect(() => {
    if (valueSearch) {
      setQuerySearch(valueSearch);
    }
  }, [valueSearch]);

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

  const { userLogin } = useSelector((state) => ({
    userLogin: state.auth?.userLogin,
  }));

  const handleLogout = () => {
    dispatch(postLogout());
    history.push('/');
  };

  const handleSearch = (e) => {
    const { charCode } = e;
    if (charCode === 13) {
      history.push(`${SEARCH_PATHS.SEARCH_MAIN}?keyword=${querySearch}`);
    }
  };

  return (
    <WrapHeader>
      <div className="container ">
        <HeaderInner>
          <HeaderLeft>
            <Link to="/">
              <img src={LogoFpt} alt="" />
            </Link>

            <HeaderMenu>
              {menubar.map((menu, index) =>
                menu?.items.length <= 1 ? (
                  <li className="item-menu" key={index}>
                    <Link to={menu?.items[0]?.path} className="link-menu">
                      {menu?.items[0]?.navigationTitle}
                    </Link>
                  </li>
                ) : (
                  <ItemMenuNew className="item-menu" key={index}>
                    <div>
                      <div className="link-disabled link-menu">
                        {menu?.cate}
                      </div>
                      <BoxNew>
                        <span className="text-new">New</span>
                      </BoxNew>
                    </div>
                    <SubMenu>
                      {menu?.items.map((item) => (
                        <SubMeuItem key={item?.id}>
                          <Link
                            to={`/category${item?.path}`}
                            className="link-sub"
                          >
                            {item?.icon && <span>{item.icon}</span>}
                            <span>{item?.navigationTitle}</span>
                          </Link>
                        </SubMeuItem>
                      ))}
                    </SubMenu>
                  </ItemMenuNew>
                )
              )}
            </HeaderMenu>
          </HeaderLeft>

          <HeaderRight>
            {isSearchHeader && (
              <FormSearch>
                <input
                  type="text"
                  placeholder="Tìm kiếm ..."
                  onKeyPress={handleSearch}
                  value={querySearch}
                  onChange={(e) => setQuerySearch(e.target.value)}
                />
                <span className="icon-search">
                  <FcSearch />
                </span>
              </FormSearch>
            )}

            <MenuResponse className="lg-0">
              <label className="icon-menu" htmlFor="checked-mobile">
                <FcMenu />
              </label>
              <input type="checkbox" id="checked-mobile" hidden />
              <label htmlFor="checked-mobile" className="overlay-bar"></label>
              <div className="menu-bar">
                <HeaderBar>
                  {userLogin?.avatar ? (
                    <>
                      <div className="user-login">
                        <img
                          src={userLogin?.avatar}
                          alt=""
                          className="user-avatar"
                        />
                        {userLogin?.email}
                      </div>
                    </>
                  ) : (
                    <Link to={AUTH_PATHS.SIGN_IN} className="btn-sign-in">
                      <span className="icon-sign-in">
                        <BiLogIn />
                      </span>
                      Đăng nhập
                    </Link>
                  )}
                  <label htmlFor="checked-mobile" className="close-bar">
                    <RiCloseLine />
                  </label>
                </HeaderBar>

                <BodyBar>
                  {menubar.map((menu, index) => (
                    <React.Fragment key={index}>
                      {!menu.title && <div className="line-menu" />}
                      {menu?.items.map((item) => {
                        const pathMobile = menu?.cate
                          ? `/category${item?.path}`
                          : item?.path;
                        return (
                          <li className="item-bar" key={item?.id}>
                            <Link to={pathMobile} className="link-bar">
                              <span className="icon-bar">{item?.icon}</span>
                              <span className="txt-bar">
                                {item?.navigationTitle}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </React.Fragment>
                  ))}
                  {userLogin?.avatar && (
                    <div className="item-bar btn-logout" onClick={handleLogout}>
                      <div className="link-bar">
                        <span className="icon-bar">
                          <BiLogOut />
                        </span>
                        <span className="txt-bar">Đăng xuất</span>
                      </div>
                    </div>
                  )}
                </BodyBar>
              </div>
            </MenuResponse>
            <div className="group-user">
              {userLogin?.avatar ? (
                <GroupLogin>
                  <GroupUser>
                    <img
                      src={userLogin?.avatar}
                      alt=""
                      className="user-avatar"
                    />
                    <span className="user-name">{userLogin?.email}</span>
                    <span
                      className="icon-drop"
                      onClick={() => setIsUserAction(!isUserAction)}
                    >
                      <GrBottomCorner />
                    </span>
                  </GroupUser>

                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setIsUserAction(false);
                    }}
                  >
                    <div className={`action-user ${isUserAction && 'active'}`}>
                      <Link
                        to={PROFILE_PATHS.PROFILE.replace(/:id/, userLogin?.id)}
                      >
                        <button className="item-user">
                          <span className="item-icon">
                            <AiOutlineProfile />
                          </span>
                          Thông tin cá nhân
                        </button>
                      </Link>
                      <button className="item-user" onClick={handleLogout}>
                        <span className="item-icon">
                          <BiLogOut />
                        </span>
                        Đăng xuất
                      </button>
                    </div>
                  </OutsideClickHandler>
                </GroupLogin>
              ) : (
                <Link to={AUTH_PATHS.SIGN_IN} className="link-menu">
                  Đăng nhập
                  <span className="icon-login">
                    <BiLogIn />
                  </span>
                </Link>
              )}
            </div>
          </HeaderRight>
        </HeaderInner>
      </div>
    </WrapHeader>
  );
};

export default Header;
