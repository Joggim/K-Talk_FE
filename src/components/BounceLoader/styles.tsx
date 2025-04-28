import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';

const bounceDelay = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  }
  40% { 
    transform: scale(1.0);
  }
`;

export const Spinner = styled.div`
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const Bounce = styled.div<{ delay: string }>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 100%;
  animation: ${bounceDelay} 1.4s infinite ease-in-out both;
  animation-delay: ${({ delay }) => delay};
`;
