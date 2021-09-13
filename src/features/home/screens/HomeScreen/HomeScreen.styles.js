import styled from 'styled-components';

export const GridWrap = styled.div`
  margin-top: 5rem;
`;

export const GridContent = styled.div`
  margin-top: 3.5rem;
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 5rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 150px 50px 170px 50px 170px 50px 170px;
`;

export const GridItem = styled.div`
  &:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }

  &:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  &:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
  }

  &:nth-child(4) {
    grid-column: 4 / 5;
    grid-row: 1 / 3;
  }

  &:nth-child(5) {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
  }

  &:nth-child(6) {
    grid-column: 3 / 4;
    grid-row: 3 / 5;
  }

  &:nth-child(7) {
    grid-column: 4 / 5;
    grid-row: 3 / 5;
  }

  &:nth-child(8) {
    grid-column: 1 / 2;
    grid-row: 4 / 6;
  }

  &:nth-child(9) {
    grid-column: 2 / 3;
    grid-row: 4 / 6;
  }

  &:nth-child(10) {
    grid-column: 3 / 4;
    grid-row: 5 / 7;
  }

  &:nth-child(11) {
    grid-column: 4 / 5;
    grid-row: 5 / 8;
  }

  &:nth-child(12) {
    grid-column: 1 / 2;
    grid-row: 6 / 8;
  }

  &:nth-child(13) {
    grid-column: 2 / 3;
    grid-row: 6 / 8;
  }

  &:nth-child(14) {
    grid-column: 3 / 4;
    grid-row: 7 / 8;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }
`;

export const ButtonReadMore = styled.button`
  border: none;
  border-radius: 1.5rem;
  background-color: var(--first-color);
  padding: 1rem 2rem;
  font-size: 1.6rem;
  color: var(--white-color);
`;

export const GridContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  .item-title {
    font-size: 1.5rem;
    max-width: 18rem;
    overflow: hidden;
    line-height: 2rem;
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
`;
