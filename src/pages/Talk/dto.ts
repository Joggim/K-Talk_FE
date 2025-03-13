export type MessageProps = SentMessageProps | RcvdMessageProps;

export interface SentMessageProps {
  type: 'sent'; // 메시지 타입 (보낸 메시지)
  content: string; // 필수값
  feedback?: FeedbackProps; // 문법 및 발음 피드백 객체
  userAudio?: string; // 사용자의 녹음본 URL
  correctAudio?: string; // 정답 발음 URL
}

export interface RcvdMessageProps {
  type: 'received'; // 메시지 타입 (받은 메시지)
  korean: string; // 원문
  translation?: string; // 번역 (선택)
  audio?: string;
}

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
  pronunciationErrors: PronunciationError[]; // 발음 오류 정보
}

// 발음 오류 정보
export interface PronunciationError {
  index: number; // 틀린 글자의 인덱스
  char: string; // 틀린 글자
}
