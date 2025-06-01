import styled from 'styled-components';
import { StyledText } from '../StyledText/styles';

interface TextContainerProps {
  size: string;
  $justifyCenter: boolean;
}

// 글자 크기에 따라 gap 값을 결정하는 함수
const getGapBySize = (size: string) => {
  switch (size) {
    case 'headingXL':
      return 1.5;
    case 'bodyMediumLight':
    default:
      return 0;
  }
};

export const TextContainer = styled.div<TextContainerProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ $justifyCenter }) =>
    $justifyCenter ? 'center' : 'flex-start'};
  gap: ${({ size }) => getGapBySize(size)}px; // gap을 props로 받음
`;

export const WordSpan = styled.span`
  display: flex;
  gap: 0px;
`;

interface CharSpanProps {
  $isError?: boolean;
  $isSpace?: boolean;
  $isFeedback?: boolean;
  $isPractice?: boolean;
  $isOmitted?: boolean;
}

export const CharSpan = styled(StyledText)<CharSpanProps>`
  display: inline-block;
  color: ${({ $isFeedback, $isError, $isPractice, $isOmitted, theme }) =>
    !$isFeedback
      ? $isPractice
        ? theme.colors.text.tertiary
        : theme.colors.text.primary
      : $isOmitted
        ? theme.colors.text.tertiary
        : $isError
          ? theme.colors.state.error
          : theme.colors.state.success};

  ${({ $isSpace }) =>
    $isSpace &&
    `
    width: 0.27rem;
    font-size: iherit;
    line-height: inherit;
    letter-spacing: inherit;
  `};
`;
