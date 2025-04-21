import { memo, useState, useEffect, forwardRef } from 'react';
import theme from '../../../styles/theme';

import type { SentMessageProps } from './dto';

import {
  MessageLayout,
  MessageContainer,
  MessageBox,
  IconList,
  ErrorBtn,
  FeedbackBox,
} from './styles';
import Sound from '../../../components/Icons/Sound';
import MySound from '../../../components/Icons/MySound';
import Error from '../../../components/Icons/Error';
import { StyledText } from '../../../components/StyledText/StyledText.styles';
import HighlightedText from '../../../components/HighlightedText';

const SentMessage = memo(
  forwardRef<HTMLDivElement, SentMessageProps & { isLast: boolean }>(
    (
      { content, feedback, userAudioUrl, modelAudioUrl, isLast, isNew },
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

      // 발음 오류가 있는 경우 오류 인덱스 설정, 없으면 전체 초록색 표시
      const pronunciationErrors =
        feedback?.pronunciation?.pronunciationErrors || [];
      const isAllCorrect = pronunciationErrors.length === 0;

      return (
        <MessageLayout ref={ref}>
          <MessageContainer $isNew={isNew}>
            {feedback?.grammar && (
              <ErrorBtn onClick={handleFeedbackToggle}>
                <Error color={theme.colors.brand.primary} width="24px" />
              </ErrorBtn>
            )}
            <MessageBox $isNew={isNew}>
              <HighlightedText
                correct={content} // 문법 오류가 없으므로 원래 문장 그대로 전달
                errors={isAllCorrect ? [] : pronunciationErrors} // 발음 오류가 없으면 초록색으로 표시
                size="bodyMediumLight"
              />
              <IconList>
                {modelAudioUrl && (
                  <Sound color={theme.colors.brand.primary} width="20px" />
                )}
                {userAudioUrl && (
                  <MySound color={theme.colors.brand.primary} width="20px" />
                )}
              </IconList>
            </MessageBox>
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
        </MessageLayout>
      );
    }
  )
);

export default SentMessage;
