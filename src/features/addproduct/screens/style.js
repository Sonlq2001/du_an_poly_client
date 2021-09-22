import styled from 'styled-components';
import Select from 'react-select';
import { MdDeleteForever } from 'react-icons/md';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { TiDelete } from 'react-icons/ti';
export const WrapPage = styled.div`
  margin: auto;
  padding: 12px 0px 15px 0px;
`;
export const Title = styled.h2`
  text-align: ${(props) => props.mota || 'center'};
  padding: ${(props) => props.padding || '0px'};
  font-size: 1.7rem;
  font-weight: ${(props) => props.fontWeight || '0'};
`;
export const TiDeletes = styled(TiDelete)`
  position: absolute;
  border: none;
  background: #ffff;
  color: red;
  font-size: 2.2rem;
  flex: right;
  right: 0;
  opacity: 0;
  transition: 0.3s;
`;
export const HeaderFrom = styled.div`
  padding: 15px 0px;
  display: grid;
  grid-template-columns: 45% 54%;
  grid-gap: 1.5rem;
  overflow: hidden;

  .fromGrup {
    padding: 10px 0px;
  }
  .fromGrup input {
    width: 74%;
    padding: 5px;
    font-size: 1.5rem;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 0px 0px 4px -1px #353535;
  }
  .fromGrup input:focus {
    border: 2px solid blue;
  }
  .fromGrup label {
    margin-right: 10px;
    font-size: 1.6rem;
    line-height: 35px;
  }
  .fromGrup select {
    box-shadow: 0px 0px 5px -1px #353535;
    width: 60%;
    padding: 3px;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    outline: none;
    overflow: hidden;
  }
  .fromGrup li {
    list-style-type: none;
    font-size: 1.5rem;
    padding: 8px 0px 0px 120px;
    font-weight: 550;
    position: relative;
    width: 500px;
    cursor: pointer;
  }

  .fromGrup li:hover .tidelete {
    opacity: 1;
  }
  .rigthForm {
    overflow: hidden;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
  .rigthForm .imageLable {
    background-color: #fcf0f0;
    width: 100%;
    height: 45px;
    box-shadow: 0px 0px 3.6px -1px #353535;
    border-radius: 8px;
    line-height: 40px;
    position: relative;
    overflow: hidden;
  }
  .rigthForm .imageLable label {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #faf6f6;
    text-align: center;
    line-height: 45px;
    font-weight: 600;
  }
  .rigthForm .listImage {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    box-sizing: border-box;
  }
  .rigthForm .listImage .box-item {
    border: 1px dashed black;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    padding: 3px;
    position: relative;
  }
  .rigthForm .listImage .box-item img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    image-rendering: pixelated;
  }
  .rigthForm .listImage .box-item:hover .deleteIcon {
    opacity: 1;
    transition: 1s;
  }
`;
export const Input = styled.input`
  margin-left: ${(props) => props.video || '0px'};
  height: 40px;
`;
export const DeleteIcon = styled(MdDeleteForever)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  color: var(--first-color);
  z-index: 100;
  opacity: 0;
`;
// compojnment select
export const Selects = styled(Select)`
  float: right;
  font-size: 1.5rem;
  width: 74%;
  border: ${(props) => (props.erors ? '2px solid red' : 'none')};
  outline: none !important;
  border-radius: 5px;
  padding: 0px;
  .css-yk16xz-control {
    min-height: 28px;
  }
  .css-yk16xz-control {
    box-shadow: 0px 0px 2.8px -1px #353535;
  }
  .css-g1d714-ValueContainer {
    padding: 0px 8px;
  }
  .css-1okebmr-indicatorSeparator {
    margin: 0px !important;
  }
`;
// editor
export const Editor = styled.div`
  width: 100%;
  /* background-color: red; */
  padding: 10px 0px;
  position: relative;
`;
export const CKEditors = styled(CKEditor)``;
export const Button = styled.div`
  text-align: center;
  font-size: 1.8rem;
  button {
    padding: 10px;
    border-radius: 5px;
    background-color: blue;
    color: #ffff;
    outline: none;
    font-size: 1.7rem;
    border: none;
  }
`;
