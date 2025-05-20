import styled, { keyframes, css } from 'styled-components';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  //width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 110px;
  z-index: 1;

  animation: ${fadeInUp} 0.2s ease-out;
  transform-origin: bottom center;
`;

export const Box = styled.div`
  display: inline-flex;
  padding: 10px 16px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.brand.primary};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
