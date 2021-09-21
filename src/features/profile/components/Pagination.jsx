import React from 'react';
import styled from 'styled-components';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
const Next = styled(AiOutlineDoubleLeft)`
  transform: rotate(180deg);
  color: black;
`;
const Pew = styled(AiOutlineDoubleLeft)`
  color: black;
`;
const WaperPagi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 5px 10px;
    margin: 0px 5px;
    border-radius: 5px;
    color: #f67d15;
    border: none;
    box-shadow: 0px 0px 0px -4px;
    font-size: 1.7rem;
    font-weight: 550;
  }
  .activePaginamation {
    background-color: #ada2a2;
    color: #636161;
  }
`;
const Pagination = () => {
  return (
    <div className="container">
      <WaperPagi className="pagination">
        <button>
          <Pew />
        </button>
        <button className="activePaginamation">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>
          <Next />
        </button>
      </WaperPagi>
    </div>
  );
};

export default Pagination;
