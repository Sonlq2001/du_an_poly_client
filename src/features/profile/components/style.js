import styled from 'styled-components';
import { AiOutlineEye } from 'react-icons/ai';
import { BsChevronLeft } from 'react-icons/bs';
export const HeaderProfile = styled.div`
  & div.profile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    /* height: 160px; */
    box-sizing: border-box;
    @media (max-width: 991.98px) {
      display: grid;
      grid-template-columns: 40% 1fr;
    }
    @media (max-width: 767.98px) {
      display: grid;
      grid-template-columns: 30% 1fr;
    }
    @media (max-width: 575.98px) {
      display: flex;
      flex-direction: column;
    }
  }
  & div.update {
    display: flex;
    justify-content: right;
    align-items: right;
  }
  .btn {
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid var(--eee-color);
    font-size: 15px;
    float: right;
  }
`;
export const Eye = styled(AiOutlineEye)`
  color: #ed8936;
  align-items: center;
  font-size: 1.4rem;
  margin-right: 8px;
`;
export const Avatar = styled.div`
text-align: center;
  padding-right: 10px;
  & img {
    border-radius: 50%;
    max-height: 150px;
    width: 140px;
  }
  @media (max-width: 575.98px) {
    text-align: center;
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
    padding-left: 10px;
    color: var(--txt-color);
  }
  .left li.label {
    margin-top: 12px;
  }
  .rigth li a {
    text-decoration: none;
    /* color: #28287bf7; */
    color: #374151;
    font-weight: 550;
  }
  .rigth li input {
    border: none;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--txt-color);
    background-color: var(--white-color);
  }
  .rigth .inputForm {
    height: 70px;
    margin-bottom: 15px;
  }
  .rigth li input.inputGroup {
    border: 1px solid #d9cdcd;
    padding: 5px;
    border-radius: 5px;
    background-color: var(--bg-input);
  }

  .rigth .btn.update {
    background-color: #55cb5d;
    color: var(--white-color);
    margin-top: 40px;
    float: right;
  }
  @media (max-width: 991.98px) {
    & li {
      font-size: 1.3rem;
    }
    .rigth li {
      font-size: 1.3rem;
    }
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
  & .message {
    font-size: 15px;
    text-align: center;
    color: #374151;
    margin: 1.5rem 0px;
  }
  & .message a {
    color: #5a5952;
    font-size: 16px;
    font-weight: 550;
  }
  & .messenger{
    display:flex;
    font-size: 1.4rem;
    margin: 4rem 0px;
    font-weight: 500;
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
    margin-right: 0.8rem;
    border-radius: 3px;
  }
  & button:hover {
    color: orange;
  }
  & .active-tabs {
    border-bottom: 2px solid orange;
    color: orange;
  }
  & button:nth-child(2) {
    padding-left: 4px;
    margin-left: 5px;
  }
  @media (max-width: 991.98px) {
    & button {
      font-size: 1.5rem;
    }
  }
`;
export const Product = styled.div`
  box-sizing: border-box;
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  @media (max-width: 991.98px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.4rem;
    & .productItem {
      height: 23rem !important;
    }
    & .contenPro .title {
      font-size: 1.3rem !important;
    }
    & .contenPro .view {
      font-size: 1.3rem !important;
    }
    &.productImage {
      height: 80%;
    }
  }
  @media (max-width: 767.98px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    & .productItem {
      height: 22rem !important;
    }
  }
  @media (max-width: 575.98px) {
    max-width: 100%;
    overflow: hidden;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    padding: 0px 15px;
    margin-top: 1rem;
    & .productItem {
      width: 100%;
      overflow: hidden;
      height: 24rem !important;
    }
    & .productItem img {
      width: 100% !important;
    }
  }
  & .productItem {
    padding: 8px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 1.2rem;
    height: 26rem;
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
    background-color: #58555536;
    width: 100%;
    height: 100%;
  }
  & .productImage:hover .overlay {
    opacity: 0;
    transition: 0.4s;
  }
  & .productItem img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    transition: 1s;
    overflow: hidden;
    image-rendering: pixelated;
    image-orientation: flip;
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
`;
export const Next = styled(BsChevronLeft)`
  transform: rotate(180deg);
  font-size: 18px;
`;
export const Pew = styled(BsChevronLeft)`
  font-size: 18px;
`;
export const WaperPagi = styled.div`
  margin: 3rem 0rem;
  & ul {
    display: flex;
    justify-content: right;
    align-items: right;
  }
  @media (max-width: 767.98px) {
    & ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & ul li {
      font-size: 1.3rem !important;
    }
  }
  @media (max-width: 575.98px) {
    & ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & ul li {
      font-size: 1.2rem !important;
    }
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
