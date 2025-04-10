export interface HighlightedTextProps {
  correct: string; // 정답 문장
  errors?: { char: string; index: number }[]; // 틀린 글자 정보
  size: string;
}
