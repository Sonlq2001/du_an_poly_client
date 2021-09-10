import React from 'react';

import {
  Loader,
  LoaderContent,
  LoaderDot1,
  LoaderDot2,
  LoaderDot3,
} from './Loading.styles';

const Loading = () => {
  return (
    <Loader>
      <LoaderContent>
        <LoaderDot1 />
        <LoaderDot2 />
        <LoaderDot3 />
      </LoaderContent>
    </Loader>
  );
};

export default Loading;
