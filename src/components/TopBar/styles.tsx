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
  z-index: 1;
  background: ${({ theme }) => theme.colors.bg.black3};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const Icon = styled.div`
  object-fit: cover;
`;
