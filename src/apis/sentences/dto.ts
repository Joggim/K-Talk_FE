import { BaseSuccessResponse } from '../util/dto';

export type PostSentenceAudioResponse =
  BaseSuccessResponse<PostSentenceAudioData>;
export type FeedbackResponse = BaseSuccessResponse<FeedbackResponseData>;

export interface PronunciationError {
  wrong: string;
  correct: string;
  index: number;
}

export interface FeedbackResponseData {
  sentenceId?: number;
  passed: boolean;
  userText: string;
  userIpa?: string;
  pronunciationErrors: PronunciationError[];
}

export interface PostSentenceAudioData {
  audioUrl: string;
}
