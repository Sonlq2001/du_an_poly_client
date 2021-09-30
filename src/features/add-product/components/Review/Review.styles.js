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
  display: none;
  &.active {
    display: block;
  }
`;
export const Content = styled.div`
  background-color: var(--white-color);
  padding: 2rem 1rem 1rem 1rem;
  position: absolute;
  z-index: 11;
  left: 15%;
  height: 90%;
  visibility: hidden;
  overflow: hidden;
  transform: translateY(-150%);
  transition: ease-in-out 0.4s;
  opacity: 0;
  &.activeContent {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
    transition: ease-in-out 0.4s;
  }
  &:hover {
    overflow-y: scroll;
  }
`;
