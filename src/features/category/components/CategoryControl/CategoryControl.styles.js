import styled from 'styled-components';

export const WrapControl = styled.div`
  padding: 2rem 0 0 0;
  margin-bottom: 2rem;
`;

export const GroupFilterBasic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  }
`;

export const GroupLinkFilter = styled.div`
  position: relative;
  margin-left: 6rem;

  .list-cate {
    display: flex;
    width: 50rem;
    white-space: nowrap;
    overflow-y: scroll;
    transition: 0.3s;
  }

  .list-cate::-webkit-scrollbar {
    display: none;
  }

  .btn-carousel {
    position: absolute;
    cursor: pointer;
    font-size: 1.4rem;
  }

  .btn-prev {
    left: -2em;
  }

  .btn-next {
    right: -2rem;
  }

  .link-cate {
    color: #6e6d7a;
    font-size: 1.3rem;
    word-break: normal;
  }

  .link-cate:hover {
    color: var(--txt-color);
  }

  .link-cate:not(:first-child) {
    margin-left: 2rem;
  }
`;

export const ButtonControlFilter = styled.button`
  &.active {
    border-color: var(--first-color);
    box-shadow: 0 0 0 4px rgba(242 111 33 / 10%);
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

  &:hover {
    border-color: var(--first-color);
    box-shadow: 0 0 0 4px rgba(242 111 33 / 10%);
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
`;

export const ButtonSelect = styled.div`
  padding: 1rem 1.8rem 1rem 2rem;
  display: block;
  background-color: var(--white-color);
  border-radius: 5px;
  font-size: 1.4rem;
  cursor: pointer;
  border: 1px solid var(--eee-color);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon-select {
    font-size: 1.2rem;
    color: var(--aaa-color);
    transition: ease-in-out 0.2s;
  }

  .icon-select.active {
    transform: rotate(180deg);
  }
`;

export const SearchAdvance = styled.div`
  margin-bottom: 5px;
  width: 20rem;

  & + & {
    margin-left: 5rem;
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
  .input-filter:hover,
  ${ButtonSelect}:hover {
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
`;

export const GroupSelect = styled.div`
  position: relative;
`;

export const GroupItemSelect = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  background-color: var(--white-color);
  border: 1px solid var(--eee-color);
  z-index: 5;
  border-radius: 5px;
  margin-top: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  .item-select {
    padding: 1rem 1.5rem;
    cursor: pointer;
    font-size: 1.4rem;
    color: var(--gray1-color);
  }

  .item-select.active {
    color: var(--first-color);
    font-weight: 500;
  }

  .item-select:hover {
    background-color: var(--eee-color);
  }
`;
