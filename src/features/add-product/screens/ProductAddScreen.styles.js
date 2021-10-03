import styled from 'styled-components';
export const WrapPage = styled.div`
  margin: auto;
  padding: 12px 0px 15px 0px;
`;
export const Title = styled.h2`
  margin-top: 2.4rem;
  text-align: ${(props) => props.mota || 'center'};
  padding: ${(props) => props.padding || '0px'};
  font-size: 1.7rem;
  font-weight: ${(props) => props.fontWeight || '0'};
`;
export const Warform = styled.div`
  padding-top: 4rem;
  padding-bottom: 2.1rem;
  max-width: 100%;
`;
export const From = styled.form`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  width: 100%;
`;
export const FromGroup = styled.div`
  display: grid;
  grid-template-columns: 20% 77%;
  grid-column-gap: 1em;
  margin-bottom: 1.3rem;
  & input {
    font-size: 15px;
    font-weight: 350;
    width: 100%;
  }
  & input > .error {
    border: 1px solid red;
  }
  & .label-title {
    line-height: 3.6rem;
    font-size: 14px;
    font-weight: 500;
  }
  & .filed-input {
    padding: 10px 0px;
    padding-left: 9px;
    border-radius: 5px;
    border: 1px solid #7d787878;
    outline: none;
  }
  & span {
    font-size: 10px;
    width: 100%;
    color: red;
    grid-column: 1/3;
    text-align: center;
    padding-top: 5px;
  }
  & span.hidden {
    display: none;
  }
  & .filed-input:focus {
    border: 2px solid #0e7fe1;
  }
  & .error:focus {
    border: 1px solid red;
  }
  & .css-1wa3eu0-placeholder,
  .css-1uccc91-singleValue {
    font-size: 14px;
    font-weight: 550;
  }
  & .css-1okebmr-indicatorSeparator {
    display: none;
  }
`;
export const LisGroup = styled.div`
  padding-left: 22%;
  & h4 {
    font-size: 13px;
    font-weight: 500;
    padding-bottom: 10px;
  }
  & li {
    list-style-type: none;
    padding-left: 10px;
    font-weight: 500;
    font-size: 12px;
    max-width: 250px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    overflow: hidden;
  }
  & li span {
    color: red;
    font-size: 17px;
    opacity: 0;
    transition: all 0.3;
    cursor: pointer;
  }
  & li:hover span {
    /* display: block; */
    opacity: 1;
  }
`;
export const BoxFile = styled.div`
  width: 100%;
  height: 4rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color || ''};
  border: 1px solid ${(props) => props.color || ''} !important;
  & .document {
    width: 100%;
    background-color: red;
    display: inline-block;
    height: 100%;
    border-radius: 5px;
    background-color: var(--bg-2);
    padding-top: 10px;
    padding-left: 8px;
    font-size: 14px;
    border: none;
  }
  & .error {
    border: 1px solid red;
  }
`;
export const GroupImage = styled.div`
  & h4 {
    font-weight: 400;
    font-size: 15px;
    margin: 2px 0px 1.5rem 0px;
  }
`;
export const GroupHeaderImage = styled.div`
  width: 100%;
  border: 2px dashed #7d787878;
  border-radius: 5px;
  padding: 2px;

  & label {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 10px 0px;
  }
  & .icon {
    font-size: 30px;
    display: block;
  }
  & span {
    font-weight: 400;
    font-size: 13px;
  }
`;
export const ListImage = styled.div`
  padding: 15px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  box-sizing: border-box;
`;
export const BoxImage = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px dotted black;
  height: 105px;
  overflow: hidden;
  padding: 2px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  & img {
    width: 100%;
    border-radius: 5px;
    image-rendering: pixelated;
    height: 100%;
  }
  & .delete {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 1px;
    font-size: 27px;
    color: red;
    /* display: none; */
    opacity: 0;
    transition: ease-in 0.2s;
    visibility: hidden;
  }
  &:hover .delete {
    opacity: 1;
    visibility: visible;
  }
`;
// editor
export const Editor = styled.div`
  width: 100%;
  padding: 10px 0px;
  position: relative;
`;

export const WapItem = styled.div`
  /* text-align: center; */
  font-size: 1.8rem;
  margin: 2.5rem 0rem;
  float: left;
  & button {
    padding: 10px;
    border-radius: 5px;
    background-color: #2b649b;
    color: var(--white-color);
    outline: none;
    font-size: 1.7rem;
    border: none;
    line-height: 2.4rem;
  }
  & .review {
    margin-right: 1.5rem;
  }
  & button:hover {
    transition: 1s;
    background-color: #3f99ee;
  }
  &:nth-child(3) {
    grid-column: 1/3;
    text-align: center;
  }
`;

export const WrapCkeditor = styled.div`
  & .ck-editor__editable {
    height: 30rem;
  }
`;
