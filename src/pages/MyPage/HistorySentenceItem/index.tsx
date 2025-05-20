import React from 'react';
import { Container, ErrorTypeList, ErrorTypeItem } from './styles';
import { StyledText } from '../../../components/StyledText/StyledText.styles';
import HighlightedText from '../../../components/HighlightedText';
import theme from '../../../styles/theme';
import { LearningHistory } from '../../../apis/user/dto';

const HistorySentenceItem: React.FC<LearningHistory> = ({
  korean,
  translation,
  correct,
  pronunciationErrors,
  errorTypes,
}) => {
  const errors = pronunciationErrors.map((e) => ({
    char: e.correct,
    index: e.index,
  }));

  return (
    <Container>
      <HighlightedText
        correct={korean}
        isFeedback
        errors={errors}
        size="headingM"
      />
      <StyledText $variant="captionRegular" color={theme.colors.text.tertiary}>
        {translation}
      </StyledText>
      {errorTypes && (
        <ErrorTypeList>
          {errorTypes.map((error, idx) => (
            <ErrorTypeItem key={idx}>
              <StyledText
                $variant="captionSemiBold"
                color={theme.colors.state.error}
              >
                {error}
              </StyledText>
            </ErrorTypeItem>
          ))}
        </ErrorTypeList>
      )}
    </Container>
  );
};

export default HistorySentenceItem;
