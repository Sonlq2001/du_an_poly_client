import styled from 'styled-components';
export const OverLay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  background-color: #6e6c6c36;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;
export const Content = styled.div`
  background-color: var(--white-color);
  padding: 2rem 1rem 1rem 1rem;
  position: absolute;
  /* text-align: center; */
  width: 70%;
  z-index: 11;
  left: 15%;
  height: 90%;
  top: 5%;
  visibility: hidden;
  overflow: hidden;
  transform: translateY(-20%);
  transition: ease-in-out 0.4s;
  opacity: 0;
  &.activeContent {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
  }
  &:hover {
    overflow-y: scroll;
  }
  & img {
    image-rendering: pixelated;
    /* width: 100%; */
  }
`;
