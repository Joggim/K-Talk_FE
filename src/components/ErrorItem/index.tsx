import React from 'react';
import { Container, Left } from './styles';
import { ErrorItemProps } from './dto';
import { StyledText } from '../StyledText/StyledText.styles';
import theme from '../../styles/theme';

const ErrorItem: React.FC<ErrorItemProps> = ({
  translation,
  correctText,
  correctIpa,
  userText,
  userIpa,
}) => {
  return (
    <Container>
      <StyledText $variant="captionMedium" color={theme.colors.text.secondary}>
        {translation}
      </StyledText>
    </Container>
  );
};

export default ErrorItem;
