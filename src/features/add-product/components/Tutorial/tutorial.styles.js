import styled from "styled-components"
export const Wappage = styled.div`
  @media (max-width: 991.98px) {
    width:650px ;
    height:500px;
    left: 8%;
   font-size: 12px;
  }
  @media (max-width: 767.98px) {
    width:500px ;
    height:550px;
    left: 8%;
    font-size: 12px;
  }
  @media (max-width: 575.98px) {
    width:330px ;
    height:450px;
    left: 8%;
    font-size: 12px !important;
  }
    position: absolute;
    top: 10%;
    left: 13%;
    z-index: 999;
    height: 600px;
    width: 1124px;
    max-width : 1124px;
    background: #f7eded;
    right: 50px;
    box-shadow : 1px 1px 0.2px 1px #ece4e4 ;
    border-radius : 10px ;
    padding : 2rem ;
    overflow-y: scroll;
    max-height: 600px;
    opacity : 1;
    transform: translateY(-20%);
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-button{
        
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 15px;
      background: #ff9900;
    }
    transition: ease-in-out 0.5s;
    &.activeContent {
        visibility: visible;
        transform: translateY(0);
        opacity: 1;
  }
  & .item h3{
      font-size : 13px;
      font-weight: ;
      font: bold;

  }
  & .item ul{
      padding: 5px 0px 5px 4rem;
      font-size : 13px;
      list-style : circle;
  }
  & .item ul li{
      padding: 2px 0px;
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
export const NodeTitel = styled.div`
  color: #ec1414;
  font-size: 15px;
    padding: 10px 0px;
`
