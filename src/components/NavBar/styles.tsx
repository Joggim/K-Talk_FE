import { styled } from 'styled-components';

export const NavBarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.bg.white};
  margin: 0;
  border-radius: 1.25rem 1.25rem 0 0;
  filter: drop-shadow(0rem 0rem 0.25rem rgba(0, 0, 0, 0.25));
  z-index: 10;
`;

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
  cursor: pointer;
`;

export const Icon = styled.div`
  object-fit: cover;
`;
