import React from 'react';
import { Container, SentenceWrapper, IconWrapper, Right } from './styles';
import { ErrorItemProps } from './dto';
import { StyledText } from '../StyledText/styles';
import HighlightedText from '../HighlightedText';
import theme from '../../styles/theme';
import Microphone from '../Icons/Microphone';
import MySound from '../Icons/MySound';

const ErrorItem: React.FC<ErrorItemProps> = ({
  translation,
  correctText,
  correctIpa,
  userText,
  userIpa,
  errors,
}) => {
  return (
    <Container>
      <StyledText $variant="captionMedium" color={theme.colors.text.tertiary}>
        {translation}
      </StyledText>

      <SentenceWrapper>
        <IconWrapper>
          <Microphone
            width="24px"
            height="24px"
            color={theme.colors.brand.primary}
          />
        </IconWrapper>
        <Right>
          <StyledText $variant="headingM">{correctText}</StyledText>
          <StyledText
            $variant="captionMedium"
            color={theme.colors.text.secondary}
          >
            {correctIpa}
          </StyledText>
        </Right>
      </SentenceWrapper>

      <SentenceWrapper>
        <IconWrapper>
          <MySound
            width="20px"
            height="20px"
            color={theme.colors.brand.primary}
          />
        </IconWrapper>
        <Right>
          <HighlightedText
            correct={userText}
            isFeedback
            errors={errors}
            size="headingM"
          />
          <StyledText
            $variant="captionMedium"
            color={theme.colors.text.secondary}
          >
            {userIpa}
          </StyledText>
        </Right>
      </SentenceWrapper>
    </Container>
  );
};

export default ErrorItem;
