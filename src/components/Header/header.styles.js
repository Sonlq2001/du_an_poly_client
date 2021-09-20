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
`;

export const HeaderInner = styled.div`
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 5rem;
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
`;

export const FormSearch = styled.form`
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
`;
