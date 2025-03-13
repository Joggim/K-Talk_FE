import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  flex-grow: 1;
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.brand.primary};
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 75%;
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 20px;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 20px 20px 0px 0px;
  background-color: ${({ theme }) => theme.colors.white};
`;
