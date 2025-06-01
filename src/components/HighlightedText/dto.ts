export interface HighlightedTextProps {
  correct: string; // 정답 문장
  isFeedback?: boolean;
  errors?: { char: string; wrong?: string; index: number }[]; // 틀린 글자 정보
  size: string;
  justifyCenter?: boolean;
  isPractice?: boolean;
}
