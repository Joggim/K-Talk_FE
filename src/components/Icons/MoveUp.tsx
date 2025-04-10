import React from 'react';
import type { IconsProps } from './dto';

const MoveUp: React.FC<IconsProps> = ({
  color = 'white',
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
        d="M10 7.5L15 2.5M15 2.5L20 7.5M15 2.5V27.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MoveUp;
