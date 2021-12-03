import styled from 'styled-components';
export const WarEditor = styled.div`
  .ck-blurred,
  .ck-content {
    height: 60rem;
    font-size: 14px;
  }
  @media (max-width: 991.98px) {
    .ck-content {
    height: 40rem;
    font-size: 14px;
    .ck-editor__editable_inline{
      border-radius: 10px;
    }
  }
  }
  @media (max-width: 767.98px) {
  }
  @media (max-width: 575.98px) {}
`;
