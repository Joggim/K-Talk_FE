import styled from 'styled-components';

export const Container = styled.button<{
  size: 'big' | 'small';
  bgColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (size === 'big' ? '56px' : '40px')};
  height: ${({ size }) => (size === 'big' ? '56px' : '40px')};
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  cursor: pointer;
`;

export const IconWrapper = styled.div<{ size: 'big' | 'small' }>`
  width: ${({ size }) => (size === 'big' ? '30px' : '24px')};
  height: ${({ size }) => (size === 'big' ? '30px' : '24px')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
