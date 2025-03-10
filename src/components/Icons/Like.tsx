import React from 'react';
import type { IconsProps } from './dto';

const Like: React.FC<IconsProps> = ({
  color = '',
  isFilled = false,
  width = '26',
  height = '26',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 10.5C15 10.5 15 10.5 14.05 9.25C12.95 7.8 11.325 6.75 9.375 6.75C6.2625 6.75 3.75 9.2625 3.75 12.375C3.75 13.5375 4.1 14.6125 4.7 15.5C5.7125 17.0125 15 26.75 15 26.75M15 10.5C15 10.5 15 10.5 15.95 9.25C17.05 7.8 18.675 6.75 20.625 6.75C23.7375 6.75 26.25 9.2625 26.25 12.375C26.25 13.5375 25.9 14.6125 25.3 15.5C24.2875 17.0125 15 26.75 15 26.75"
        fill={isFilled ? color : 'none'}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Like;
