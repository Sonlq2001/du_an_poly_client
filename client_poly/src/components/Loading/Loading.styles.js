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
