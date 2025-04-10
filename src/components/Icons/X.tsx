import React from 'react';
import type { IconsProps } from './dto';

const X: React.FC<IconsProps> = ({
  color = 'white',
  isFilled = false,
  width = '30',
  height = '30',
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
        d="M9.5 9L22 21.5M9.5 21.5L22 9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default X;
