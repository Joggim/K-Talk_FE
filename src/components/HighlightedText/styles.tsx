import styled from 'styled-components';
import { StyledText } from '../StyledText/StyledText.styles';

interface TextContainerProps {
  size: string;
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
  gap: ${({ size }) => getGapBySize(size)}px; // gap을 props로 받음
`;

export const WordSpan = styled.span`
  display: flex;
  gap: 0px;
`;

interface CharSpanProps {
  $isError?: boolean;
}

export const CharSpan = styled(StyledText)<CharSpanProps>`
  display: inline-block;
  color: ${({ $isError, theme }) =>
    $isError ? theme.colors.state.error : theme.colors.state.success};
`;
