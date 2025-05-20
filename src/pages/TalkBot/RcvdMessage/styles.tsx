import { styled } from 'styled-components';
import theme from '../../../styles/theme';

import { StyledText } from '../../../components/StyledText/styles';

export const RcvdMessageLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

export const RcvdMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 75%;
  padding: 10px;
  gap: 4px;
  border-radius: 10px 10px 10px 0px;
  background: ${({ theme }) => theme.colors.bg.black2};
`;

export const Message = styled(StyledText)`
  overflow-wrap: break-word;
`;

export const BtnList = styled.div`
  display: flex;
  width: auto;
  height: 20px;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

export const IconWrapper = styled.button`
  width: 24px;
  height: 24px;
`;

export const TranslateBtn = styled(StyledText)``;
