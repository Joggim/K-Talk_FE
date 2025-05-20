import React from 'react';
import { Container, Box } from './styles';
import { StyledText } from '../../../components/StyledText/styles';
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
        shapeRendering="crispEdges"
      >
        <path d="M8.5 17L0 0L17 0L8.5 17Z" fill="#5249DC" />
      </svg>
    </Container>
  );
};

export default Tooltip;
