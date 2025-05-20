import styled from 'styled-components';
import theme from '../../styles/theme';
import { StyledText } from '../../components/StyledText/StyledText.styles';

export const Container = styled.div`
  flex-grow: 1;
  height: 100vh;
  width: 100%;
  background-color: ${theme.colors.bg.white};
  position: relative;
`;

export const DashBoardContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
  margin-top: 46px;
  padding-bottom: 140px;
  background-color: ${({ theme }) => theme.colors.bg.black3};
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.text.primary};
`;

export const IssueCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 10px;
  width: 100%;
`;

export const IssueHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  gap: 10px;
  align-self: stretch;
  background: ${theme.colors.brand.primaryLight};
`;

export const IssueTitle = styled(StyledText)`
  flex: 1 0 0;
`;

export const IssueScoreBadge = styled.div`
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 22px;
  color: ${theme.colors.state.error};
  border: 1px solid ${theme.colors.state.error};
  background: ${theme.colors.state.errorLight};

  span {
    color: ${theme.colors.state.error};
    font-weight: 700;
  }
`;

export const SentenceSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const SentenceList = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const SentenceItem = styled.div<{ $hasBottomBorder?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 10px;
  flex: 1 0 0;
  width: 100%;

  ${({ $hasBottomBorder, theme }) =>
    $hasBottomBorder &&
    `border-bottom: 1px solid ${theme.colors.border.divider};`}
`;
