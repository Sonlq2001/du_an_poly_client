import styled from 'styled-components';

export const FooterWrap = styled.div`
  background-color: var(--bg-1);
  padding: 4rem 0;
  color: var(--txt-color);
  .footer-img {
    height: 10rem;
  }
  @media (max-width: 575.98px) {
    padding: 3rem 0;
    .footer-img {
      height: 8rem;
      display: flex;
      margin: 0 auto;
    }
  }
`;

export const FooterItem = styled.div`
  text-align: left;
  @media (max-width: 991.98px) {
    margin-top: 2rem;
  }
  @media (max-width: 575.98px) {
    text-align: center;
    margin-top: 3rem;
  }
`;

export const FooterTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 3rem;
  @media (max-width: 575.98px) {
    margin-bottom: 1.5rem;
  }
`;

export const FooterText = styled.div`
  font-size: 1.4rem;
  display: flex;
  line-height: 2rem;
  & + & {
    margin-top: 1.3rem;
  }
  .footer-icon {
    margin-right: 5px;
    font-size: 1.7rem;
  }
  @media (max-width: 575.98px) {
    text-align: center;
    justify-content: center;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  .footer-box {
    width: 45%;
  }
  @media (max-width: 991.98px) {
    .footer-box {
      width: 49%;
    }
  }
  @media (max-width: 575.98px) {
    flex-direction: column;
    align-items: center;
    .footer-box {
      width: 80%;
    }
  }
`;
