import { SentMessageProps as ApiSentMessageProps } from '../../../apis/talkbot/dto';
import React from 'react';

export interface SentMessageProps extends ApiSentMessageProps {
  ref?: React.RefObject<HTMLDivElement>;
  isLast?: boolean;
  isNew?: boolean;
}
