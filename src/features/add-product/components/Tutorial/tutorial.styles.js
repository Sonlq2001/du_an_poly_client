import styled from "styled-components"
export const Wappage = styled.div`
    position: absolute;
    top: 10%;
    left: 13%;
    z-index: 999;
    height: 600px;
    width: 1124px;
    background: #e0d6d6;
    right: 50px;
    box-shadow : 1px 1px 0.2px 1px #ece4e4 ;
    border-radius : 10px ;
    padding : 20px   ;
    opacity : 0;
    transform: translateY(-20%);
    transition: ease-in-out 0.4s;
    &.activeContent {
        visibility: visible;
        transform: translateY(0);
        opacity: 1;
  }
`
export const Overlay = styled.div`
   position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  background-color: #e8dcdc36;
  z-index: 10000;
  opacity: 0;
  visibility: hidden;
  &.active {
    opacity: 1;
    visibility: visible;
  }
`
export const Title = styled.h3 `
        text-align :center ;
        font-size : 15px  
`
