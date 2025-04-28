import React from 'react';
import { Spinner, Bounce } from './styles';
import { BounceLoaderProps } from './dto';

const BounceLoader: React.FC<BounceLoaderProps> = ({
  color = 'white',
  size = 'midium',
}) => {
  return (
    <Spinner>
      <Bounce $delay="-0.32s" $color={color} $size={size} />
      <Bounce $delay="-0.16s" $color={color} $size={size} />
      <Bounce $delay="0s" $color={color} $size={size} />
    </Spinner>
  );
};

export default BounceLoader;
