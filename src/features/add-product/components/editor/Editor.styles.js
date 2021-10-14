import styled from 'styled-components';
export const WarEditor = styled.div`
  & h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: gray;
    font-weight: 550;
  }
  & .ql-container {
    height: 55rem;

    border: 1px solid #ccc;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  & .ql-editor {
    border: 1px solid #ccc;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  & .ql-toolbar {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    padding: 1rem 0rem;
    & ::-webkit-scrollbar {
      width: 4px;
      background: gray;
    }
  }
  & .ql-size {
    width: 10px;
  }
`;
