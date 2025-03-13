import styled from 'styled-components';
import { StyledText } from '../StyledText/StyledText.styles';

interface TextContainerProps {
  gap?: number;
}

export const TextContainer = styled.div<TextContainerProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap }) => gap}px; // gap을 props로 받음
`;

export const WordSpan = styled.span`
  display: flex;
  gap: 0px;
`;

interface CharSpanProps {
  isError?: boolean;
}

export const CharSpan = styled(StyledText)<CharSpanProps>`
  display: inline-block;
  color: ${({ isError, theme }) =>
    isError ? theme.colors.state.error : theme.colors.state.success};
`;
