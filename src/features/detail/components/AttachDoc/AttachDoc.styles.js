import styled from 'styled-components';

export const GroupAttach = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;

export const ItemAttach = styled.div`
  padding-left: 2.8rem;

  font-size: 1.2rem;
  word-break: break-all;
  .title-attach {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 5px;
  }
  button {
    font-size: 1.5rem;
    padding: 8px 6px;
    border-radius: 5px;
    background: #f4efef;
    border: none;
    line-height: 100%;
  }
  button a:hover {
    cursor: pointer;
    color: blue;
  }
`;
