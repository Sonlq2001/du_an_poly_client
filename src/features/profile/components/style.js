import styled from 'styled-components';
import { AiOutlineEye } from 'react-icons/ai';
export const Eye = styled(AiOutlineEye)`
  color: #ed8936;
  align-items: center;
  font-size: 15px;
  margin-right: 8px;
`;
export const HeaderProfile = styled.div`
  &.profile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 15px;
    height: 160px;
    box-sizing: border-box;
  }
`;
export const Avatar = styled.div`
  padding-right: 10px;
  & img {
    float: right;
    border-radius: 50%;
    max-height: 30%;
  }
`;
export const Information = styled.div`
  padding-left: 20px;
  display: ${(props) => (props.info ? 'flex' : 'block')};
  align-items: ${(props) => (props.info ? 'center' : '')};
  justify-content: ${(props) => (props.info ? 'center' : '')};
  li {
    list-style-type: none;
    font-size: 14px;
    font-weight: 550;
    padding: 5px 0px;
  }
  .left {
    padding-right: 17px;
  }
  ul {
    padding-left: ${(props) => (props.info ? '450px' : '')};
  }
  & ul li {
    list-style: none;
    padding: 5px 0px;
    font-size: 15px;
    font-weight: 500;
  }
  & ul li h3 {
    font-size: 16px;
    font-weight: 550;
  }
  .Adress {
    font-weight: 450;
    font-size: 14px;
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
  }
  & .productItem img {
    overflow: hidden;
    transform: scale(0.98);
    width: 100%;
    height: 230px;
    border-radius: 5px;
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
    font-size: 1.2rem;
    font-weight: 430;
    color: #374151;
    display: flex;
  }
  &.abc {
    display: block;
  }
`;
