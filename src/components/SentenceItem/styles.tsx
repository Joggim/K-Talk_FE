import styled from 'styled-components';

interface ContainerProps {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.bg.white};
  cursor: pointer;
`;

export const Left = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
`;

interface PassedProps {
  $passed: boolean | null;
}

export const Passed = styled.div<PassedProps>`
  display: flex;
  width: 26px;
  height: 26px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 13px;
  background: ${({ $passed, theme }) =>
    $passed === true
      ? theme.colors.state.success
      : $passed === false
        ? theme.colors.state.error
        : theme.colors.bg.white}; // feedback이 없는 경우 중립 배경
  color: ${({ theme }) => theme.colors.text.white};
  font-size: 14px;
  font-weight: bold;
`;
