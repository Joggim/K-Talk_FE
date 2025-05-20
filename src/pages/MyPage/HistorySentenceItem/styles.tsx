import styled from 'styled-components';

interface ContainerProps {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-self: stretch;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.bg.white};
  gap: 10px;
`;

export const ErrorTypeList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ErrorTypeItem = styled.div`
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.state.errorLight};
`;
