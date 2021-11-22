import styled from 'styled-components';

import BgLogin from './../../../../assets/images/bg-login.jpg';

export const PageSingIn = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  @media (max-width: 991.98px){
    display: flex;
  }
  @media (max-width: 767.98px){
    
  }
  @media (max-width: 575.98px){
    
  }
`;

export const PageSingInLeft = styled.div`
  width: 65%;
  height: 100%;
  background-image: url(${BgLogin});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 991.98px){
     width: 100%;
     height: 100vh;
     position: absolute;
     z-index: 1;
     top: 0;
     right:0;
     left: 0;
     bottom: 0;
  }
`;

export const PageSingInRight = styled.div`
  width: 35%;
  position: relative;
  @media (max-width: 991.98px){
    width:55%;
    position: absolute;
    z-index: 2;
    top: 25%;
    left:25%;
    background-image: url(${BgLogin});
 }
 @media (max-width: 767.98px){
    width: 70%;
    left: 15%;
}
@media (max-width: 575.98px){
  width: 80%;
  left: 10%;
}

`;
export const BoxSelect = styled.div`
  padding-top: 2rem;
  text-align: left;
  .select-option {
    font-size: 1.4rem;
    border-radius: 5px;
    padding: 2.5px 0;
    background-color: var(--eee-color);
  }
  .css-1s2u09g-control {
    background-color: var(--eee-color);
    border: none;
    height: 100%;
  }
  .css-1pahdxg-control {
    background-color: var(--eee-color);
    border: none;
    box-shadow: none;
  }
  .css-qc6sy-singleValue {
    font-size: 1.3rem;
  }
  .css-yk16xz-control {
    background-color: var(--eee-color);
    border: none;
  }
  .error {
    padding-top: 1rem;
    font-size: 1.3rem;
    color: red;
  }
`;
export const FormLogin = styled.div`
  position: absolute;
  text-align: center;
  width: 70%;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);


  .logo-from {
    width: 18rem;
    @media (max-width: 767.98px){
       width: 50%;
    }
  }

  .des-from {
    font-size: 1.4rem;
    font-family: Arial, sans-serif;
    color: var(--txt-color);
    margin-top: 1rem;
  }

  .icon-form {
    font-size: 2rem;
    padding-right: 1rem;
  }

  .button-form {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: var(--pink-color);
    margin-top: 2rem;
    border-radius: 5px;
    padding: 1rem 0;
    color: var(--white-color);
    width: 100%;
    transition: linear 0.2s;
    font-weight: 600;
  }

  .button-form:hover {
    opacity: 0.9;
  }
  @media (max-width: 767.98px){
    // width: 70%;
    // left: 15%;
    .button-form{
      height: 15px;
    }
}
@media (max-width: 575.98px){
  .button-form{
    height: 20px;
  }
}

`;
