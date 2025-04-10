import styled from 'styled-components';

export const Container = styled.button<{
  $size: 'big' | 'small';
  $bgColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => ($size === 'big' ? '80px' : '50px')};
  height: ${({ $size }) => ($size === 'big' ? '80px' : '50px')};
  border-radius: 50%;
  background-color: ${({ $bgColor }) => $bgColor};
  border: none;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

export const IconWrapper = styled.div<{ $size: 'big' | 'small' }>`
  width: ${({ $size }) => ($size === 'big' ? '30px' : '24px')};
  height: ${({ $size }) => ($size === 'big' ? '30px' : '24px')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
