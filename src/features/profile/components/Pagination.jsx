import React from 'react';

import { WaperPagi, Pew, Next } from './style';

const Pagination = () => {
  return (
    <div className="container">
      <WaperPagi className="pagination">
        <ul>
          <li className="icon">
            <Pew />
          </li>
          <li className="activePaginamation">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li className="hidenHover">...</li>
          <li>22</li>
          <li className="icon">
            <Next />
          </li>
        </ul>
      </WaperPagi>
    </div>
  );
};

export default Pagination;
