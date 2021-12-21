import styled from 'styled-components';

export const GridWrap = styled.div`
  margin-top: 5rem;
`;
export const GridContent = styled.div`
  margin-top: 3.5rem;
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 5rem;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: repeat(5, 200px);
  grid-auto-flow: dense;
  @media (max-width: 991.98px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 767.98px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 575.98px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
`;
export const GridItem = styled.div`
  border: 1px solid var(--ddd-color);
  border-radius: 8px;
  &:nth-child(1) {
    grid-column: span 2;
    grid-row: span 1;
  }
  &:nth-child(2) {
    grid-column: span 1;
    grid-row: span 2;
  }
  &:nth-child(5) {
    grid-column: span 2;
    grid-row: span 1;
  }
  &:nth-child(6) {
    grid-column: span 1;
    grid-row: span 2;
  }
  &:nth-child(7) {
    grid-column: span 2;
    grid-row: span 1;
  }
  &:nth-child(8) {
    grid-column: span 1;
    grid-row: span 2;
  }
  .item-img {
    overflow: hidden;
    transition: 0.3s ease-in-out;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  &:hover .item-img img {
    transform: scale(1.1);

  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 767.98px) {
    &:nth-child(7) {
      grid-column: span 1;
      grid-row: span 2;
    }
  }
  @media (max-width: 575.98px) {
    img {
      max-height: 23rem;
    }
  }
`;
export const GridContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  .item-title {
    font-size: 1.5rem;
    /* max-width: rem; */
    overflow: hidden;
    line-height: 2rem;
    padding-right : 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .item-view {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.1rem;
  }

  .item-icon {
    font-size: 1.4rem;
    color: var(--first-color);
    margin: 4px 5px 0 0;
  }
  .item-counter {
    max-width: 4.6rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
export const GridEnd = styled.div`
  margin: 7rem 0 10rem 0;
  text-align: center;
  @media (max-width: 575.98px) {
    margin: 6rem 0 3rem 0;
  }
  .btn-read-more {
    border: none;
    border-radius: 1.5rem;
    background-color: var(--first-color);
    padding: 1rem 2rem;
    font-size: 1.6rem;
    color: var(--white-color);
  }
`;

export const MasonryAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.1rem;
`;

export const MasonryActionItem = styled.div`
  color: var(--aaa-color);
  display: flex;
  align-items: center;

  & + & {
    margin-left: 1rem;
  }

  .icon-masonry {
    margin-right: 5px;
    font-size: 1.4rem;
  }

  .icon-bookmark {
    cursor: pointer;
    font-size: 1.4rem;
  }

  .icon-bookmark:hover {
    color: var(--txt-color);
    transition: ease-in-out 0.3s;
  }
`;