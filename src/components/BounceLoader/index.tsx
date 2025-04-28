import React from 'react';
import { Spinner, Bounce } from './styles';

const BounceLoader = () => {
  return (
    <Spinner>
      <Bounce $delay="-0.32s" />
      <Bounce $delay="-0.16s" />
      <Bounce $delay="0s" />
    </Spinner>
  );
};

export default BounceLoader;
