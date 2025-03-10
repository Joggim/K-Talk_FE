import { styled } from 'styled-components';

export const TopBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 100%;
  height: 46px;
  align-items: center;
  padding: 10px;
  gap: 10px;
  z-index: 10;
  background: ${({ theme }) => theme.colors.bg.white};
`;

export const Icon = styled.div`
  object-fit: cover;
`;
