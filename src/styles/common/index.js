import styled from 'styled-components';

export const TitleMain = styled.h3`
  text-align:center;
  font-size: 2rem;
  line-height: 3rem;
  text-transform:uppercase;
  color: var(--txt-color);

  @media (max-width: 767.98px) {
    font-size: 1.8rem;
  }
`;

export const WrapPage = styled.div`
  margin-top: 7rem;
  @media (max-width: 575.98px) {
    margin-top: 6rem;
  }
`;
