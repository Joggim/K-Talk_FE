import { BaseSuccessResponse } from '../util/dto';

export type GetSentenceResponse = BaseSuccessResponse<GetSentenceData>;
export type FeedbackResponse = BaseSuccessResponse<FeedbackResponseData>;

export interface GetSentenceData {
  id: number;
  korean: string;
  translation: string;
  audioUrl: string;
}

export interface PronunciationError {
  wrong: string;
  correct: string;
  index: number;
}

export interface FeedbackResponseData {
  sentenceId: number;
  passed: boolean;
  userText: string;
  userAudioUrl: string;
  pronunciationErrors: PronunciationError[];
  feedBack?: string;
}
