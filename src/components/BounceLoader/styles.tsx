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
  min-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const Bounce = styled.div<{
  $delay: string;
  $color: string;
  $size: 'small' | 'medium' | 'large';
}>`
  width: ${({ $size }) =>
    $size === 'small' ? '4px' : $size === 'medium' ? '8px' : '10px'};
  height: ${({ $size }) =>
    $size === 'small' ? '4px' : $size === 'medium' ? '8px' : '10px'};
  background-color: ${({ theme, $color }) => {
    const [group, key] = $color.split('.');
    if (key) {
      return (
        (theme.colors as any)[group]?.[key] ||
        theme.colors[group] ||
        theme.colors.text.primary
      );
    }
    return theme.colors[$color] || theme.colors.text.primary;
  }};
  border-radius: 100%;
  animation: ${bounceDelay} 1.4s infinite ease-in-out both;
  animation-delay: ${({ $delay }) => $delay};
  align-self: center;
`;
