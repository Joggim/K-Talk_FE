import { BaseSuccessResponse } from '../util/dto';

export type GetMessageListResponse = BaseSuccessResponse<MessageData[]>;
export type STTResponse = BaseSuccessResponse<STTResponseData>;
export type GetFeedbackResponse = BaseSuccessResponse<FeedbackResponseData>;
export type GetReplyResponse = BaseSuccessResponse<RcvdMessageProps>;

export type MessageData = SentMessageProps | RcvdMessageProps;

export interface RcvdMessageProps {
  id: number;
  type: 'received'; // 메시지 타입 (받은 메시지)
  content: string; // 원문
  translation?: string; // 번역 (선택)
  modelAudioUrl?: string;
}

export interface SentMessageProps {
  id: number;
  type: 'sent';
  content: string; // 필수값
  isFeedback: boolean; // 피드백 수신 완료 여부
  feedback?: FeedbackProps; // 문법 및 발음 피드백 객체
  userAudioUrl?: string; // 사용자의 녹음본 URL
  modelAudioUrl?: string; // 정답 발음 URL
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

export interface STTResponseData {
  text: string;
}

export type FeedbackResponseData = SentMessageProps;
