import styled from 'styled-components';

export const FooterWrap = styled.div`
  background-color: var(--bg-1);
  padding: 4rem 0;
  color: var(--txt-color);

  .footer-img {
    height: 10rem;
  }
`;

export const FooterItem = styled.div`
  text-align: left;
`;

export const FooterTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 3rem;
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
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;

  .footer-box {
    width: 45%;
  }
`;
