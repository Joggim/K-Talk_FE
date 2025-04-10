import React from 'react';
import { Container, Box } from './styles';
import { StyledText } from '../../../components/StyledText/StyledText.styles';
import theme from '../../../styles/theme';
import { TooltipDTO } from './dto';

const Tooltip: React.FC<TooltipDTO> = ({ userIpa, userText }) => {
  return (
    <Container>
      <Box>
        {userIpa && (
          <StyledText
            $variant="bodyMediumLight"
            color={theme.colors.text.white}
          >
            {userIpa}
          </StyledText>
        )}
        <StyledText $variant="bodyMediumLight" color={theme.colors.text.white}>
          {userText}
        </StyledText>
      </Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
      >
        <path d="M8.5 17L0.272758 0.5L16.7272 0.5L8.5 17Z" fill="#5249DC" />
      </svg>
    </Container>
  );
};

export default Tooltip;
