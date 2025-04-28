import styled, { keyframes, css } from 'styled-components';

import { StyledText } from '../../../components/StyledText/StyledText.styles';

const bubbleSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) scale(0.8);
  }
  60% {
    opacity: 0.8;
    transform: translateX(10%) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateX(0%) scale(1);
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SentMessageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
`;

export const MessageContainer = styled.div<{ $isNew?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  ${({ $isNew }) =>
    $isNew &&
    css`
      animation: ${fadeInUp} 0.4s ease-out;
      transform-origin: bottom center;
      /*
      animation: {bubbleSlideIn} 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      transform-origin: right center;
      */
    `};
`;

export const SentMessageBox = styled.div<{ $isNew?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  padding: 10px;
  gap: 4px;
  border-radius: 10px 10px 0px 10px;
  background: ${({ theme }) => theme.colors.bg.white};
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
