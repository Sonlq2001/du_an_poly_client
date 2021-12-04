import styled from 'styled-components';

export const ContentIntro = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  margin-top: 5rem;
  @media (max-width: 767.98px) {
    max-width: 45rem;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const ContentBox = styled.div`
  text-align: center;
  width: calc(100% / 3);
  margin-top: 2.5rem;
  .box-img {
    height: 150px;
  }
  .box-title {
    font-size: 1.7rem;
    line-height: 2.3rem;
  }
  .box-title:hover {
    color: var(--first-color);
    cursor: pointer;
  }
  & a {
    text-decoration: none;
    color: var(--second-color);
  }
  @media (max-width: 991.98px) {
    width: calc(100% / 2);
    .box-img {
      height: 13rem;
    }
    .box-title {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 767.98px) {
    .box-img {
      height: 10rem;
    }
    .box-title {
      font-size: 1.4rem;
      margin-top: 5px;
    }
  }
`;
