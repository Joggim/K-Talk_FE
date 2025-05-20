import { SentMessageProps as ApiSentMessageProps } from '../../../apis/chat/dto';
import React from 'react';

export interface SentMessageProps extends ApiSentMessageProps {
  ref?: React.RefObject<HTMLDivElement>;
  isLast?: boolean;
  isNew?: boolean;
  isFeedbackLoading?: boolean;
}
