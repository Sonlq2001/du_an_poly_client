import styled from 'styled-components';

export const GroupAttach = styled.div`
  margin-top: 2.5rem;
`;

export const ItemAttach = styled.div`
  max-width: 100%;
  word-wrap: break-word;
  letter-spacing: 1.1px;
  & + & {
    margin-top: 2rem;
  }
  font-size: 1.2rem;
  word-break: break-all;
  .title-attach {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 5px;
  }
`;
