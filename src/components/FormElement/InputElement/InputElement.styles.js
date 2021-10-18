import styled from 'styled-components';

export const GroupForm = styled.div`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 2rem;
  }
  .form-label {
    font-size: 1.4rem;
    font-weight: 500;
    min-width: 15rem;
  }
  .form-input,
  .form-label__file {
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: var(--bg-input);
    padding: 1.3rem 1.5rem;
  }
  &.group-file {
    margin-top: 2rem;
  }
  .form-input__file {
    display: none;
  }
  .file-text {
    font-size: 1.3rem;
  }
`;
export const GroupFormFile = styled(GroupForm)`
  & + & {
    margin-top: 2rem;
  }
`;
