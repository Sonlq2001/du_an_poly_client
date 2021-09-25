import styled from 'styled-components';
import { AiOutlineEye } from 'react-icons/ai';
import { BsChevronLeft } from 'react-icons/bs';
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
    padding: 8px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 1.2rem;
  }
  .productImage {
    height: 90%;
    overflow: hidden;
    border-radius: 5px;
    position: relative;
  }
  & .productImage .overlay {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    background-color: #41343457;
    width: 100%;
    height: 100%;
  }
  & .productImage:hover .overlay {
    opacity: 0;
    transition: 0.5s;
  }
  & .productItem img {
    width: 100%;
    height: 230px;
    border-radius: 5px;
    transition: 1s;
    overflow: hidden;
    image-rendering: pixelated;
  }
  .productItem a {
    color: #374151;
    text-decoration: none;
    cursor: pointer;
  }
  & .productItem:hover img {
    transform: scale(1.06);
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
export const Next = styled(BsChevronLeft)`
  transform: rotate(180deg);
  font-size: 18px;
`;
export const Pew = styled(BsChevronLeft)`
  font-size: 18px;
`;
export const WaperPagi = styled.div`
  margin-bottom: 4rem;
  & ul {
    display: flex;
    justify-content: right;
    align-items: right;
  }
  & ul li.icon {
    padding: 6px 5px 0px 5px;
    line-height: 20px;
  }
  & ul li :hover .icon {
    background-color: #ffae3e;
    color: var(--white-color) !important;
  }
  & ul li {
    padding: 0px 11px;
    margin: 0px 2.5px;
    border-radius: 4px;
    line-height: 28px;
    cursor: pointer;
    font-size: 1.4rem;
  }
  & ul li:hover {
    background-color: ${(props) => (props.hidenHover ? '' : '#ffae3e')};
    color: var(--white-color);
  }
  & ul li:hover.hidenHover {
    background-color: var(--white-color);
    color: black;
  }
  & ul li.activePaginamation {
    background-color: #ffae3e;
    color: var(--white-color);
  }
`;
