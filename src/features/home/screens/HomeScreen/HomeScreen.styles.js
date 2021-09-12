import styled from 'styled-components';

export const GridWrap = styled.div`
  margin-top: 5rem;
`;

export const GridContent = styled.div`
  margin-top: 3.5rem;
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 260px 260px 130px 130px 130px 260px 260px;
`;

export const GridItem = styled.div`
  &:nth-child(1),
  &:nth-child(2) {
    grid-row: 1 / 2;
  }

  &:nth-child(1) {
    grid-column: 1 / 2;
  }

  &:nth-child(2) {
    grid-column: 2 / 3;
  }

  &:nth-child(3) {
    grid-column: 3 / 5;
    grid-row: 1 / 4;
  }

  &:nth-child(4) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  &:nth-child(5),
  &:nth-child(6) {
    grid-row: 3 / 5;
  }

  &:nth-child(5) {
    grid-column: 1 / 2;
  }

  &:nth-child(6) {
    grid-column: 2 / 3;
  }

  &:nth-child(7),
  &:nth-child(8) {
    grid-row: 4 / 6;
  }

  &:nth-child(7) {
    grid-column: 3 / 4;
  }

  &:nth-child(8) {
    grid-column: 4 / 5;
  }

  &:nth-child(9) {
    grid-column: 1 / 3;
    grid-row: 5 / 8;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
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
