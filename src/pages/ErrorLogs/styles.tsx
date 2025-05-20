import styled from 'styled-components';
import theme from '../../styles/theme';
import { StyledText } from '../../components/StyledText/styles';

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

export const ErrorLogSummaryCard = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #e0e0eb;
  //background: ${({ theme }) => theme.colors.bg.black4};
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ErrorCountBadge = styled.div`
  background-color: ${({ theme }) => theme.colors.brand.primaryLight};
  display: flex;
  width: 26px;
  height: 26px;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
`;
