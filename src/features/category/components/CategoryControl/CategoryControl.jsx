import React, { memo } from 'react';

import { WrapControl } from './CategoryControl.styles';

const CategoryControl = () => {
  return (
    <WrapControl>
      <div className="container">content</div>
    </WrapControl>
  );
};

export default memo(CategoryControl);
