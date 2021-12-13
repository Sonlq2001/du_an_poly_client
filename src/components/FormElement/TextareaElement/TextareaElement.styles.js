import styled from 'styled-components';

export const WrapTextarea = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: ${({ labelBlock }) => (labelBlock ? 'column' : 'row')};
  .label-form {
    font-size: 1.4rem;
    font-weight: 500;
    min-width: 15rem;
    display: inline-block;
    margin-bottom: ${({ labelBlock }) => (labelBlock ? '5px' : '0')};
  }
  .textarea-form {
    border: none;
    background: var(--bg-input);
    padding: 1.5rem;
    border-radius: 5px;
    resize: none;
  }
  .textarea-form::placeholder {
    font-family: 'Inter', sans-serif;
  }
`;
