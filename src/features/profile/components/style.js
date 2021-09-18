import styled from 'styled-components';
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
  & ul li {
    list-style: none;
  }
  & ul li h3 {
    font-size: 16px;
  }
`;
// end profile
// start profile  product
export const ProductFile = styled.div`
  padding-top: 5px;
  padding-bottom: 10px;
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 15px;
`;
export const Product = styled.div`
  box-sizing: border-box;
  padding: 10px 0px;
  & .productItem {
    padding: 10px;
  }
  & .productItem img {
    width: 100%;
    height: 230px;
    border-radius: 5px;
  }
  & .contenPro {
    padding: 10px 2px 0px 2px;
    display: flex;
    justify-content: space-between;
  }
  & .contenPro .title {
    font-size: 17px;
    font-weight: 550;
    color: #374151;
  }
  & .contenPro .view {
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    display: flex;
  }
`;
