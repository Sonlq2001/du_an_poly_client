import styled, { keyframes } from 'styled-components';

export const WrapHeader = styled.header`
  height: 7rem;
  box-shadow: 0 0 6rem rgb(0 0 0 / 12%);
  border-bottom: 1px solid hsl(0deg 0% 93%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: var(--white-color);
  @media (max-width: 575.98px) {
    height: 6rem;
  }
`;
export const HeaderInner = styled.div`
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 5rem;
  }
  @media (max-width: 991.98px) {
    justify-content: flex-start;
  }
  @media (max-width: 575.98px) {
    height: 6rem;
    img {
      height: 3rem;
    }
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 4rem;
  .item-menu + .item-menu {
    margin-left: 3rem;
  }
  .link-menu {
    color: var(--text-color);
    font-size: 1.4rem;
    font-weight: 500;
  }
  @media (max-width: 991.98px) {
    display: none;
  }
`;
export const SubMenu = styled.div`
  position: absolute;
  background-color: var(--white-color);
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem 1rem;
  width: 25rem;
  opacity: 0;
  visibility: hidden;
  margin-top: 2rem;
  transition: linear 0.3s;
`;
export const ItemMenuNew = styled.li`
  position: relative;
  .link-disabled {
    cursor: pointer;
  }
  &:hover ${SubMenu} {
    opacity: 1;
    visibility: visible;
    margin-top: 0;
  }
`;
const EffectBox = keyframes`
  from{
    opacity: 1;
  }to{
    opacity: 0.8;
  }
`;
export const BoxNew = styled.span`
  position: absolute;
  background-color: red;
  color: var(--white-color);
  border-radius: 1rem;
  padding: 0 5px;
  right: -24px;
  top: -13px;
  .text-new {
    animation: ${EffectBox} 0.5s ease-in-out infinite;
    font-size: 9px;
    font-weight: 500;
  }
`;

export const SubMeuItem = styled.div`
  .link-sub {
    display: flex;
    color: var(--txt-color);
    font-size: 1.4rem;
    padding: 1rem;
    line-height: 2rem;
    border-radius: 1rem;
  }
  .link-sub:hover {
    background-color: var(--bg-1);
  }
  span:first-child {
    font-size: 1.5rem;
    transform: translateY(1px);
  }
  span:last-child {
    display: inline-block;
    margin-left: 1rem;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  .link-menu {
    color: var(--text-color);
    font-size: 1.4rem;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .icon-login {
    display: inline-block;
    margin-left: 1rem;
    margin-top: 3px;
  }
  @media (max-width: 991.98px) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .group-user {
      display: none;
    }
  }
  @media (max-width: 767.98px) {
    .link-menu {
      display: none;
    }
  }
`;

export const GroupLogin = styled.div`
  position: relative;
  .action-user {
    position: absolute;
    right: 0;
    margin-top: 1rem;
    background-color: var(--white-color);
    width: 20rem;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 2px var(--eee-color);
  }
  .item-user {
    border: none;
    width: 100%;
    padding: 1rem 1.5rem;
    background-color: transparent;
    text-align: left;
    &:hover {
      background-color: var(--eee-color);
    }
  }
`;

export const FormSearch = styled.div`
  position: relative;
  margin-right: 5rem;
  input {
    padding: 1rem 3.6rem 1rem 1.5rem;
    border-radius: 5px;
    border: none;
    background-color: var(--bg-1);
  }
  .icon-search {
    position: absolute;
    font-size: 1.5rem;
    height: 100%;
    top: 0;
    right: 0;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  @media (max-width: 991.98px) {
    width: 100%;
    margin: 0 4rem;
    input {
      width: 100%;
    }
  }
  @media (max-width: 767.98px) {
    margin: 0 2.5rem;
  }
  @media (max-width: 767.98px) {
    margin: 0 1rem;
  }
`;

export const MenuResponse = styled.div`
  @media (max-width: 991.98px) {
    margin-left: 2rem;
    position: relative;
    .icon-menu {
      font-size: 2.5rem;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .overlay-bar {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.2);
      visibility: hidden;
      opacity: 0;
      transition: ease-in-out 0.3s;
    }
    .menu-bar {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 40%;
      background-color: var(--white-color);
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
      transform: translateX(110%);
      transition: ease-in-out 0.3s;
      opacity: 0;
      @media (max-width: 767.98px) {
        width: 90%;
      }
      @media (max-width: 575.98px) {
        width: 100%;
      }
    }
    #checked-mobile:checked ~ .menu-bar {
      transform: translateX(0);
      opacity: 1;
    }
    #checked-mobile:checked + .overlay-bar {
      visibility: visible;
      opacity: 1;
    }
  }
  @media (max-width: 767.98px) {
    margin-left: 0;
  }
`;

export const HeaderBar = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid var(--eee-color);
  position: relative;
  .user-login {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: var(--aaa-color);
  }
  .user-avatar {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 1.5rem;
  }
  .close-bar {
    font-size: 2rem;
    position: absolute;
    top: 2rem;
    right: 1.5rem;
    cursor: pointer;
    &:hover {
      color: var(--aaa-color);
    }
  }
`;

export const BodyBar = styled.ul`
  margin-top: 7.1rem;
  padding: 2rem 5px 2rem 0;
  margin-right: 5px;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--eee-color);
    border-radius: 10px;
  }
  .line-menu:not(:first-child) {
    border-top: 1px solid var(--eee-color);
    margin: 1rem 0;
  }
  .link-bar {
    display: flex;
    align-items: center;
    padding: 2rem 1.5rem;
    font-size: 1.5rem;
    transition: ease-in-out 0.3s;
    .icon-bar {
      padding-right: 2rem;
    }
    &:hover {
      background-color: var(--eee-color);
    }
  }
`;
export const GroupUser = styled.div`
  display: flex;
  align-items: center;
  .user-avatar {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    margin-right: 1rem;
  }
  .user-name {
    font-size: 1.3rem;
  }
  .icon-drop {
    font-size: 1.5rem;
    transform: rotate(45deg);
    cursor: pointer;
    display: inline-block;
    margin-left: 1.5rem;
  }
  @media (max-width: 1199.98px) {
    .user-name {
      display: none;
    }
  }
`;
