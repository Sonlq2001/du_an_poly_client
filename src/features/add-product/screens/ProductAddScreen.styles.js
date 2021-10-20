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
export const WrapForm = styled.div`
  padding-top: 4rem;
  padding-bottom: 2.1rem;
  max-width: 100%;
`;
export const ContentForm = styled.div`
  display: flex;
`;
export const FormLeft = styled.div`
  width: 50%;
`;
export const FormRight = styled(FormLeft)`
  margin-left: 2rem;
  .XwDyO .ql-container {
    height: 48rem;
  }
`;
export const ListImage = styled.div`
  display: grid;
  /* background-color: red; */
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
// editor
export const Editor = styled.div`
  width: 100%;
  padding: 10px 0px;
  position: relative;
`;

export const WrapButton = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .button-add {
    padding: 1rem;
    border: none;
    border-radius: 5px;
  }
  .button-add:disabled:hover {
    cursor: not-allowed;
  }
`;

export const WrapCkeditor = styled.div`
  & .ck-editor__editable {
    height: 25rem;
  }
`;
