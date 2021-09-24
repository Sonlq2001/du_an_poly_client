import styled from 'styled-components';
import { AiOutlineEye, AiOutlineDoubleLeft } from 'react-icons/ai';
export const HeaderProfile = styled.div`
  &.profile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    /* height: 160px; */
    box-sizing: border-box;
  }
`;
export const Eye = styled(AiOutlineEye)`
  color: #ed8936;
  align-items: center;
  font-size: 1.4rem;
  margin-right: 8px;
`;
export const Avatar = styled.div`
  padding-right: 10px;
  & img {
    float: right;
    border-radius: 50%;
    max-height: 130px;
    width: 110px;
  }
`;
export const Information = styled.div`
  padding-left: 20px;
  display: flex;
  & li {
    list-style: none;
    padding: 5px 2px;
    font-size: 1.5rem;
    font-weight: 550;
  }
  .left {
    padding: 0px 10px 0 0;
  }
  .rigth li {
    font-size: 1.5rem;
    font-weight: 570;
    padding-left: 10px;
  }
  .rigth li a {
    text-decoration: none;
    /* color: #28287bf7; */
    color: #374151;
    font-weight: 550;
  }
`;
// end profile
// start profile  product
export const ProductFile = styled.div`
  padding-top: 5px;
  padding-bottom: 10px;
  & .show {
    display: block;
  }
  & .hidden {
    display: none;
  }
`;
export const Title = styled.div`
  font-size: 1.7rem;
  & button {
    font-size: 1.7rem;
    font-weight: 500;
    background-color: #ffffff;
    padding: 2px 4px;
    border: none;
  }
  & button:hover {
    color: orange;
  }
  & .activeProfile {
    border-bottom: 2px solid orange;
    color: orange;
  }
  & button:nth-child(2) {
    padding-left: 10px;
    margin-left: 5px;
  }
`;
export const Product = styled.div`
  box-sizing: border-box;

  padding: 10px 0px;
  & .productItem {
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .productImage {
    height: 90%;
    overflow: hidden;
    border-radius: 5px;
  }
  & .productItem img {
    overflow: hidden;
    transform: scale(0.98);
    width: 100%;
    height: 230px;
    overflow: hidden;
    border-radius: 5px;
    transform: scale(0.98);
    transition: 1s;
  }
  & .productItem img:hover {
    transform: scale(1.03);
  }
  .productItem a {
    color: #374151;
    text-decoration: none;
    cursor: pointer;
  }
  & .productItem:hover img {
    transform: scale(1.02);
    transition: 1.4s;
  }
  & .contenPro {
    padding: 10px 2px 0px 2px;
    display: flex;
    justify-content: space-between;
  }
  & .contenPro .title {
    font-size: 1.5rem;
    font-weight: 450;
    color: #374151;
  }
  & .contenPro .view {
    font-size: 14px;
    font-weight: 450;
    color: #374151;
    display: flex;
  }
  &.abc {
    display: block;
  }
`;
export const Next = styled(AiOutlineDoubleLeft)`
  transform: rotate(180deg);
  color: #8a8383;
`;
export const Pew = styled(AiOutlineDoubleLeft)`
  color: #8a8383;
`;
export const WaperPagi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 5px 10px;
    margin: 0px 5px;
    border-radius: 5px;
    color: #f1923e;
    border: none;
    box-shadow: 0px 0px 0px -4px;
    font-size: 1.7rem;
    font-weight: 550;
  }
  .activePaginamation {
    background-color: #d8d4d4;
    color: #7c7a7a;
  }
`;
