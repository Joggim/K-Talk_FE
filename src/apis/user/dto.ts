import { BaseSuccessResponse } from '../util/dto';

export type GetUserInfoResponse = BaseSuccessResponse<GetUserInfoData>;
export type GetUserLearningHistoryResponse =
  BaseSuccessResponse<GetUserLearningHistoryData>;

export type GetUserInfoData = UserInfo;

export interface UserInfo {
  userId: number;
  nickname: string;
}

export type GetUserLearningHistoryData = LearningHistory[];

export interface LearningHistory {
  id: number;
  sentenceId: number;
  korean: string;
  translation: string;
  correct: boolean;
  studiedAt: string;
  pronunciationErrors: Array<{
    wrong: string;
    correct: string;
    index: number;
  }>;
  errorTypes?: string[];
}
