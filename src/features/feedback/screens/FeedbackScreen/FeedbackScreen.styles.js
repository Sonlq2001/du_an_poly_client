import styled from 'styled-components';

export const WrapForm = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  margin-bottom: 5rem;
  .title-form {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon-form {
    padding-left: 2rem;
    font-size: 2rem;
  }
  .group-from {
    margin-top: 4rem;
    display: flex;
    justify-content: flex-end;
  }
  .btn-form {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    background-color: var(--first-color);
    color: var(--white-color);
    &:hover {
      opacity: 0.9;
    }
  }
  .btn-form:disabled {
    background-color: var(--eee-color);
    color: var(--txt-color);
    cursor: default;
  }
  .loader {
    border-radius: 50%;
    border-top: 1.5px solid var(--first-color);
    border-right: 1.5px solid var(--first-color);
    width: 1.5rem;
    height: 1.5rem;
    animation: spin 0.6s linear infinite;
    margin-right: 5px;
    transition: 0.3s ease-in-out;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
