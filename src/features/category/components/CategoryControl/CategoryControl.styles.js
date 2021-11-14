import styled from 'styled-components';

export const WrapControl = styled.div`
  padding: 2rem 0 0 0;
  margin-bottom: 2rem;
`;

export const GroupFilterBasic = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 575.98px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ControlFilterCate = styled.div`
  display: flex;
  align-items: center;
  color: var(--txt-color);
  .title-filter {
    display: inline-block;
    font-size: 1.3rem;
    padding: 1rem;
    border: 1px solid var(--ccc-color);
    border-radius: 5px;
    white-space: nowrap;
  }
  @media (max-width: 991.98px) {
    .title-filter {
      font-size: 1.2rem;
    }
  }
`;

export const GroupLinkFilter = styled.div`
  position: relative;
  width: 100%;
  padding: 0 5rem;
  overflow: hidden;
  .list-cate {
    width: 97%;
    transition: 0.3s;
    white-space: nowrap;
    overflow: hidden;
  }
  .list-cate::-webkit-scrollbar {
    display: none;
  }
  .group-cate {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .btn-carousel {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 1.4rem;
  }
  .btn-prev {
    left: 2.5rem;
  }

  .btn-next {
    right: 2.5rem;
  }
  .link-cate {
    color: #6e6d7a;
    font-size: 1.3rem;
  }
  .link-cate:hover {
    color: var(--txt-color);
  }
  .link-cate:not(:first-child) {
    margin-left: 2rem;
  }
  @media (max-width: 575.98px) {
    order: 2;
    margin-top: 2rem;
  }
`;

export const ButtonControlFilter = styled.button`
  &.active {
    background-color: var(--bg-2);
  }
  font-size: 1.4rem;
  padding: 1rem;
  border: 1px solid var(--ddd-color);
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: transparent;

  .icon-filter {
    font-size: 1.7rem;
    margin-right: 3px;
  }

  &:active {
    background-color: var(--bg-2);
  }
`;

export const GroupFilterAdvance = styled.div`
  margin-top: 1.3rem;
  display: flex;
  opacity: 0;
  visibility: hidden;
  max-height: 0;
  transition: 0.3s ease-in-out;
  &.active {
    max-height: 10rem;
    margin-bottom: 3rem;
    opacity: 1;
    visibility: visible;
  }
  @media (max-width: 991.98px) {
    flex-wrap: wrap;
    &.active {
      margin-bottom: 7rem;
      max-height: 12rem;
    }
  }
  @media (max-width: 767.98px) {
    &.active {
      max-height: 20rem;
    }
  }
`;

export const SearchAdvance = styled.div`
  margin-bottom: 5px;
  width: 20%;
  & + & {
    margin-left: 4rem;
  }
  .label-search {
    font-size: 1.4rem;
    display: block;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  .input-filter {
    width: 100%;
    background-color: var(--bg-2);
    border-radius: 5px;
    transition: ease-in 0.2s;
    border: 1px solid var(--eee-color);
    padding: 1rem 1.5rem 1rem 4rem;
  }
  .input-filter:hover {
    border-color: var(--eee-color);
    box-shadow: 0 0 0 3px rgba(240 147 43 / 20%);
    background-color: transparent;
  }

  .input-group {
    position: relative;
  }
  .input-group__icon {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    font-size: 2rem;
    height: 100%;
    padding: 0 1rem;
    color: var(--aaa-color);
  }
  @media (max-width: 991.98px) {
    width: 30%;
    margin-top: 1rem;
    & + & {
      margin-left: 3.4rem;
    }
    &:nth-child(4) {
      margin-left: 0;
    }
  }
  @media (max-width: 767.98px) {
    width: 50%;
    &:nth-child(even) {
      padding-left: 1.5rem;
    }
    &:nth-child(odd) {
      padding-right: 1.5rem;
    }
    & + & {
      margin-left: 0;
    }
  }
  @media (max-width: 575.98px) {
    &:nth-child(even) {
      padding-left: 1rem;
    }
    &:nth-child(odd) {
      padding-right: 1rem;
    }
  }
`;

export const CustomerSelect = styled.div`
  .css-1uccc91-singleValue,
  .css-26l3qy-menu,
  .css-1wa3eu0-placeholder,
  .css-b8ldur-Input {
    font-size: 1.3rem;
    white-space: nowrap;
  }
  @media (max-width: 1199.98px) {
    .css-1uccc91-singleValue,
    .css-26l3qy-menu,
    .css-1wa3eu0-placeholder,
    .css-b8ldur-Input {
      font-size: 1.2rem;
    }
  }
`;
