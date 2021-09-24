import React from 'react';

import { WaperPagi, Pew, Next } from './style';

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
