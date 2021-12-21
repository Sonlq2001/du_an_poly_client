import styled from 'styled-components';

export const WrapPage = styled.div`
  .text-label {
    font-size: 1.4rem;
    padding: 1.3rem 1.5rem;
    width: 100%;
    border-radius: 5px;
    background-color: var(--bg-input);
  }
  .text-label:hover {
    cursor: not-allowed;
  }
  #snackbar{
    position: fixed;
    z-index: 9999 ;
  }
`;
export const WrapPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  .title-form {
    text-align: center;
    flex-grow: 1;
    font-size: 2rem;
    font-weight: 500;
  }
  .question-form {
    font-size: 1.2rem;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
      color: var(--first-color);
      text-decoration: none;
    }
  }
`;
export const Title = styled.label`
  margin-top: 2.4rem;
  font-size: 1.5rem;

  @media (max-width: 991.98px) {
    display: ${(props) => (props.title ? 'flex' : '')};
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
  }
  @media (max-width: 767.98px) {
    display: ${(props) => (props.title ? 'flex' : '')};
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 575.98px) {
    display: ${(props) => (props.title ? 'flex' : '')};
    justify-content: center;
    align-items: center;
  }
`;
export const WrapForm = styled.div`
  padding-top: 4rem;
  padding-bottom: 2.1rem;
  max-width: 100%;
  @media (max-width: 991.98px) {
    padding: 0px 10rem;
  }
  @media (max-width: 767.98px) {
    padding: 0px 5rem;
  }
  @media (max-width: 575.98px) {
  }
`;
export const ContentForm = styled.div`
  display: flex;
  @media (max-width: 991.98px) {
    display: grid;
    grid-template-columns: 100%;
  }
  @media (max-width: 767.98px) {
  }
  @media (max-width: 575.98px) {
  }
`;
export const FormLeft = styled.div`
  width: 50%;
  @media (max-width: 991.98px) {
    width: 100%;
  }
  @media (max-width: 767.98px) {
  }
  @media (max-width: 575.98px) {
  }
`;
export const FormRight = styled(FormLeft)`
  margin-left: 2rem;
  .XwDyO .ql-container {
    height: 48rem;
  }
  @media (max-width: 991.98px) {
    width: 100%;
    margin-top: 1.5rem;
    margin-left: 0rem;
  }
`;
export const GroupLabel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  &:nth-child(1) {
  }
  & + & {
    margin-top: 2rem;
  }
  & .loading {
    position: absolute;
    top: 11px;
    right: 10px;
    font-size: 19px;
    transition: 2s;
    animation: rotate infinite 1.3s linear;
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
        opacity: 0.5;
      }
    }
  }
`;
export const ListImage = styled.div`
  display: grid;
  margin-top: 1rem;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  & .box-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    height: 130px;
    position: relative;
    overflow: hidden;
    border: 1px dashed gray;
    padding: 2px;
  }
  & .box-item img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  & .box-item .delete {
    position: absolute;
    z-index: 2;
    font-size: 2rem;
    color: red;
    background-color: var(--bg-2);
    border-radius: 7px;
    top: 0;
    right: 3px;
    opacity: 0;
    transition: all 0.5s;
  }
  & .box-item:hover .delete {
    opacity: 1;
  }
`;
export const GroupStudents = styled.div`
  padding-top: 1.4rem;
  display: grid;
  width: 100%;
  grid-template-columns: 27% 1fr;
  & .group {
    width: 100%;
    padding: 5px 0px;
    position: relative;
  }

  & .group .inputE {
    width: 100%;
    padding: 1.3rem 1.5rem;
    border: none;
    border-radius: 5px;
    margin-right: 4px;
    font-size: 1.5rem;
    background-color: var(--bg-input);
  }
  & .group .remove {
    padding: 4px 2px;
    border: none;
    background: none;
    color: gray;
    font-size: 2.4rem;
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 991.98px) {
    width: 100%;
    text-align: left;
    .title {
      text-align: left;
      float: left !important;
    }
  }
`;
export const GroupInput = styled.div`
  width: 100%;

  & .add {
    width: 100%;
    border-radius: 7px;
    border: 1px dashed gray;
    padding: 1rem;
    margin: 5px 0px;
  }
  @media (max-width: 991.98px) {
    padding-left: 10px;
  }
  @media (max-width: 767.98px) {
    padding-left: 3rem;
  }
`;
// editor
export const WrapButton = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .button-add {
    padding: 0.7rem;
    /* padding-top: 0rem; */
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
  }
  .button-add .loader {
    width: 17px;
    height: 17px;
    border-top: 2px solid green;
    border-radius: 50%;
    animation: spin 1s infinite linear;
    margin-right: 8px;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .button-add .error {
    font-size: 20px;
    margin-right: 8px;
    color: red;
    padding-top: 5px;
  }
  .button-add.er {
    border: 1px solid red;
    color: red;
  }
  .button-add:disabled:hover {
    cursor: not-allowed;
  }
  @media (max-width: 991.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
  @media (max-width: 575.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
`;
