import styled from 'styled-components';
import { StyledText } from '../../../components/StyledText/StyledText.styles';

// 기존 StyledText의 Props를 확장 (오버라이딩)
interface CharSpanProps {
  isError?: boolean;
}

export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px; // 단어 간 글자 간격
`;

export const WordSpan = styled.span`
  display: flex;
  gap: 0px;
`;

export const CharSpan = styled(StyledText)<CharSpanProps>`
  display: inline-block;
  color: ${({ isError, theme }) =>
    isError ? theme.colors.state.error : theme.colors.state.success};
`;
