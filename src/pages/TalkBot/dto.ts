import { SentMessageProps } from './SentMessage/dto';
import { RcvdMessageProps } from './RcvdMessage/dto';

export type MessageProps = SentMessageProps | RcvdMessageProps;

export interface FeedbackProps {
  grammar?: GrammarFeedbackProps; // 문법 오류 피드백 (선택적)
  pronunciation?: PronunciationFeedbackProps; // 발음 오류 피드백 (선택적)
}

// 문법 오류 피드백
export interface GrammarFeedbackProps {
  suggestion: string; // 수정된 문장
  explanation: string; // 문법 피드백 설명
}

// 발음 오류 피드백
export interface PronunciationFeedbackProps {
  userText: string;
  pronunciationErrors: PronunciationError[]; // 발음 오류 정보
}

// 발음 오류 정보
export interface PronunciationError {
  index: number; // 틀린 글자의 인덱스
  char: string; // 틀린 글자
}
