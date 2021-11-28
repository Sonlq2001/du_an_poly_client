import React, { memo } from 'react';

import { WrapLoader } from './Loading.styles';

const LoadingSearch = () => {
  return (
    <WrapLoader>
      <div className="loader"></div>
    </WrapLoader>
  );
};

export default memo(LoadingSearch);
