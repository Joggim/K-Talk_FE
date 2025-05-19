import styled from 'styled-components';

interface ContainerProps {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.bg.white};
  gap: 12px;
`;

export const Left = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
`;

export const SentenceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  align-self: stretch;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  display: flex;
  width: 269px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;

  span.error {
    color: ${({ theme }) => theme.colors.state.error};
  }
`;
