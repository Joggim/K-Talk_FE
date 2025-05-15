import { memo, useEffect, useState } from 'react';
import theme from '../../../styles/theme';
import Sound from '../../../components/Icons/Sound';

import type { RcvdMessageProps } from '../../../apis/talkbot/dto';

import {
  RcvdMessageLayout,
  RcvdMessageBox,
  Message,
  BtnList,
  TranslateBtn,
  IconWrapper,
} from './styles';

const RcvdMessage: React.FC<RcvdMessageProps> = memo(
  ({ content, translation, modelAudioUrl }) => {
    const [mode, setMode] = useState<'korean' | 'translation'>('korean');

    const handleModeChange = () => {
      setMode((prevMode) => (prevMode === 'korean' ? 'translation' : 'korean'));
    };

    const playModelPronunciation = () => {
      new Audio(modelAudioUrl).play();
      console.log('model audio play click');
    };

    return (
      <RcvdMessageLayout>
        <RcvdMessageBox>
          <Message $variant="bodyMediumLight">
            {mode === 'korean' ? content : translation}
          </Message>
          <BtnList>
            {modelAudioUrl && (
              <IconWrapper onClick={playModelPronunciation}>
                <Sound color={theme.colors.text.tertiary} width="20px" />
              </IconWrapper>
            )}
            <TranslateBtn
              onClick={handleModeChange}
              $variant="captionRegular"
              color={theme.colors.text.tertiary}
            >
              {mode === 'korean' ? 'translate' : 'show original'}
            </TranslateBtn>
          </BtnList>
        </RcvdMessageBox>
      </RcvdMessageLayout>
    );
  }
);

export default RcvdMessage;
