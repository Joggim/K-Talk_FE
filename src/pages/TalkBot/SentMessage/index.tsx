import { memo, useState, useEffect, forwardRef } from 'react';
import theme from '../../../styles/theme';

import type { SentMessageProps } from './dto';

import {
  SentMessageLayout,
  MessageContainer,
  SentMessageBox,
  IconList,
  IconWrapper,
  ErrorBtn,
  FeedbackBox,
} from './styles';
import BounceLoader from '../../../components/BounceLoader';
import Sound from '../../../components/Icons/Sound';
import MySound from '../../../components/Icons/MySound';
import Error from '../../../components/Icons/Error';
import { StyledText } from '../../../components/StyledText/styles';
import HighlightedText from '../../../components/HighlightedText';

const SentMessage = memo(
  forwardRef<HTMLDivElement, SentMessageProps & { isLast: boolean }>(
    (
      {
        content,
        isFeedback = true,
        feedback,
        modelAudioUrl,
        isLast = false,
        isNew,
        isFeedbackLoading = false,
      },
      ref
    ) => {
      const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

      useEffect(() => {
        if (isFeedbackOpen && isLast && ref && typeof ref !== 'function') {
          setTimeout(() => {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
          }, 0);
        }
      }, [isFeedbackOpen, isLast, ref]);

      const handleFeedbackToggle = () => {
        setIsFeedbackOpen((prev) => !prev);
      };

      const playModelPronunciation = () => {
        new Audio(modelAudioUrl).play();
      };

      // 발음 오류가 있는 경우 오류 인덱스 설정, 없으면 전체 초록색 표시
      const pronunciationErrors =
        feedback?.pronunciation?.pronunciationErrors || [];
      const isAllCorrect = pronunciationErrors.length === 0;

      return (
        <SentMessageLayout ref={ref}>
          <MessageContainer $isNew={isNew}>
            {feedback?.grammar && (
              <ErrorBtn onClick={handleFeedbackToggle}>
                <Error color={theme.colors.brand.primary} width="24px" />
              </ErrorBtn>
            )}
            <SentMessageBox $isNew={isNew}>
              <HighlightedText
                correct={content}
                isFeedback={isFeedback}
                errors={isAllCorrect ? [] : pronunciationErrors} // 발음 오류가 없으면 초록색으로 표시
                size="bodyMediumLight"
              />

              <IconList>
                {modelAudioUrl && (
                  <IconWrapper onClick={playModelPronunciation}>
                    <Sound color={theme.colors.brand.primary} width="20px" />
                  </IconWrapper>
                )}
                {isFeedbackLoading && isLast && (
                  <BounceLoader size="small" color="bg.black2" />
                )}
              </IconList>
            </SentMessageBox>
          </MessageContainer>

          {isFeedbackOpen && feedback?.grammar && (
            <MessageContainer>
              <FeedbackBox>
                <StyledText
                  $variant="captionRegular"
                  color={theme.colors.brand.primary}
                >
                  {feedback.grammar.suggestion}
                </StyledText>
                <hr
                  style={{
                    border: `0.5px solid ${theme.colors.brand.primary}`,
                    width: '100%',
                  }}
                />
                <StyledText
                  $variant="captionRegular"
                  color={theme.colors.brand.primary}
                >
                  {feedback.grammar.explanation}
                </StyledText>
              </FeedbackBox>
            </MessageContainer>
          )}
        </SentMessageLayout>
      );
    }
  )
);

export default SentMessage;
