import React from 'react';
import type { IconsProps } from './dto';

const ArrowLeft: React.FC<IconsProps> = ({
  color = '',
  width = '26',
  height = '26',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2188 6.5625L10.7812 15L19.2188 23.4375"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeft;
