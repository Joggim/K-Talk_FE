import { memo, useState } from 'react';
import theme from '../../../styles/theme';

import type { RcvdMessageProps } from '../../../apis/talkbot/dto';

import { MessageLayout, MessageBox, Message, TranslateBtn } from './styles';
import { StyledText } from '../../../components/StyledText/StyledText.styles';

const RcvdMessage: React.FC<RcvdMessageProps> = memo(
  ({ korean, translation }) => {
    const [mode, setMode] = useState<'korean' | 'translation'>('korean');

    const handleModeChange = () => {
      setMode((prevMode) => (prevMode === 'korean' ? 'translation' : 'korean'));
    };

    return (
      <MessageLayout>
        <MessageBox>
          <Message $variant="bodyMediumLight">
            {mode === 'korean' ? korean : translation}
          </Message>
          <TranslateBtn
            onClick={handleModeChange}
            $variant="captionRegular"
            color={theme.colors.text.tertiary}
          >
            {mode === 'korean' ? 'translate' : 'show original'}
          </TranslateBtn>
        </MessageBox>
      </MessageLayout>
    );
  }
);

export default RcvdMessage;
