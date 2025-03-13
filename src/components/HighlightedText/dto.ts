export interface HighlightedTextProps {
  original: string; // 사용자가 말한 문장
  correct: string; // 정답 문장
  errors?: { char: string; index: number }[]; // 틀린 글자 정보
}
