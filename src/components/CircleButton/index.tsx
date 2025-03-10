import React from 'react';
import { Container, IconWrapper } from './styles';
import { CircleButtonProps } from './dto';

const CircleButton: React.FC<CircleButtonProps> = ({
  size,
  bgColor,
  icon,
  onClick,
  disabled = false,
}) => {
  return (
    <Container
      $size={size}
      $bgColor={bgColor}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <IconWrapper $size={size}>{icon}</IconWrapper>
    </Container>
  );
};

export default CircleButton;
