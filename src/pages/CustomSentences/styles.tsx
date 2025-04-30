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

export const ContentArea = styled.div`
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
  padding-bottom: 66px;
  background-color: ${({ theme }) => theme.colors.bg.black3};
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.text.primary};
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
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
