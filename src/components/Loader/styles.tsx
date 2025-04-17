import styled, { keyframes } from 'styled-components';

export const bounce = keyframes`
  50%, 100% {
    background-position: 100% 100%, 50% 0, 0 100%;
  }
`;

export const Loader = styled.div`
  width: 40px;
  aspect-ratio: 1.154;
  --_g: no-repeat
    radial-gradient(
      farthest-side,
      ${({ theme }) => theme.colors.brand.secondary} 90%,
      #0000
    );
  background:
    var(--_g) 50% 0,
    var(--_g) 0 100%,
    var(--_g) 100% 100%;
  background-size: 35% calc(35% * 1.154);
  animation: ${bounce} 1s infinite;
`;

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
