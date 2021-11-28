import React from 'react';

import {
  Loader,
  LoaderContent,
  LoaderDot1,
  LoaderDot2,
  LoaderDot3,
} from './Loading.styles';

const Loading = ({ nowrap = true }) => {
  return nowrap ? (
    <Loader>
      <LoaderContent>
        <LoaderDot1 />
        <LoaderDot2 />
        <LoaderDot3 />
      </LoaderContent>
    </Loader>
  ) : (
    <LoaderContent>
      <LoaderDot1 />
      <LoaderDot2 />
      <LoaderDot3 />
    </LoaderContent>
  );
};

export default Loading;
