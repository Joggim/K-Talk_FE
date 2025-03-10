import { styled } from 'styled-components';

import { StyledText } from '../../../components/StyledText/StyledText.styles';

export const MessageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  flex-direction: row;
  gap: 10px;
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  padding: 10px;
  gap: 4px;
  border-radius: 10px 10px 0px 10px;
  background: ${({ theme }) => theme.colors.bg.white};
`;

export const Message = styled(StyledText)`
  overflow-wrap: break-word;
`;

export const IconList = styled.div`
  display: flex;
  width: auto;
  height: 20px;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

export const ErrorBtn = styled.button`
  width: 24px;
  height: 24px;
`;

export const FeedbackBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  background: #e5e2fc;
`;
