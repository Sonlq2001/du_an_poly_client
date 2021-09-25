import styled from 'styled-components';

export const BoxRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  .title-rating {
    font-size: 1.6rem;
    padding-right: 2rem;
  }

  .icon-rating {
    font-size: 2rem;
    cursor: pointer;
    color: var(--aaa-color);
  }

  .icon-rating.active {
    color: var(--first-color);
  }

  .icon-rating + .icon-rating {
    margin-left: 5px;
  }
`;
