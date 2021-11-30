import styled, { keyframes } from 'styled-components';

export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--white-color);
`;

export const LoaderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingAnimation = keyframes`
  50% {
    transform: translateY(1.5rem);
  }
`;

export const LoaderDot = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: var(--first-color);
  border-radius: 100%;

  & + & {
    margin-left: 5px;
  }
`;

export const LoaderDot1 = styled(LoaderDot)`
  animation: ${LoadingAnimation} 0.5s 0.1s ease-in-out infinite;
  background-color: ${(props) => props?.color};
`;

export const LoaderDot2 = styled(LoaderDot)`
  animation: ${LoadingAnimation} 0.5s 0.2s ease-in-out infinite;
  background-color: ${(props) => props?.color};
`;

export const LoaderDot3 = styled(LoaderDot)`
  animation: ${LoadingAnimation} 0.5s 0.3s ease-in-out infinite;
  background-color: ${(props) => props?.color};
`;

// loading search
export const WrapLoader = styled.div`
  .loader {
    border: 1.5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 1.5px solid var(--first-color);
    border-bottom: 1.5px solid var(--first-color);
    width: 15px;
    height: 15px;
    animation: spin 0.8s linear infinite;
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
