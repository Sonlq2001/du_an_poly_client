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
  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }
  @media (max-width: 767.98px) {
    &:nth-child(7) {
      grid-column: span 1;
      grid-row: span 2;
    }
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
  @media (max-width: 575.98px) {
    margin: 6rem 0 3rem 0;
  }
`;
