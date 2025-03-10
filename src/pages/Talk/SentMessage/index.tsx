import { memo, useState } from 'react';
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
import HighlightedText from '../HighlightedText';

const SentMessage: React.FC<SentMessageProps> = memo(
  ({ content, feedback, userAudio, correctAudio }) => {
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    const handleFeedbackToggle = () => {
      setIsFeedbackOpen((prev) => !prev);
    };

    // 발음 오류가 있는 경우 오류 인덱스 설정, 없으면 전체 초록색 표시
    const pronunciationErrors =
      feedback?.pronunciation?.pronunciationErrors || [];
    const isAllCorrect = pronunciationErrors.length === 0;

    return (
      <MessageLayout>
        <MessageContainer>
          {feedback?.grammar && (
            <ErrorBtn onClick={handleFeedbackToggle}>
              <Error color={theme.colors.brand.primary} width="24px" />
            </ErrorBtn>
          )}
          <MessageBox>
            <HighlightedText
              original={content}
              correct={content} // 문법 오류가 없으므로 원래 문장 그대로 전달
              errors={isAllCorrect ? [] : pronunciationErrors} // 발음 오류가 없으면 초록색으로 표시
            />
            <IconList>
              {correctAudio && (
                <Sound color={theme.colors.brand.primary} width="20px" />
              )}
              {userAudio && (
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
);

export default SentMessage;
