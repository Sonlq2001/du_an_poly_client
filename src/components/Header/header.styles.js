import styled, { keyframes } from 'styled-components';

export const WrapHeader = styled.header`
  height: 7rem;
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

export const ItemMenuNew = styled.li`
  position: relative;
`;

const EffectBox = keyframes`
  from {
    opacity: 0.5,
    color: blue;
  }to{
    opacity: 1,
  }
`;

export const BoxNew = styled.span`
  position: absolute;
  background-color: red;
  color: var(--white-color);
  border-radius: 1rem;
  padding: 0 5px;
  top: -8px;

  .text-new {
    animation: ${EffectBox} 1s ease-in-out infinite;
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
