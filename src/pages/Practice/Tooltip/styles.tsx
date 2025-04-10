import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  //width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 110px;
  z-index: 1;
`;

export const Box = styled.div`
  display: inline-flex;
  padding: 10px 16px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.brand.primary};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
