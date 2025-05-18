import { BaseSuccessResponse } from '../util/dto';

export type GetPronunciationIssueListResponse = BaseSuccessResponse<
  PronunciationIssue[]
>;
export type GetPronunciationIssueDetailResponse =
  BaseSuccessResponse<PronunciationIssueDetail>;

export interface Sentence {
  id: number;
  korean: string;
  translation: string;
}

export interface PronunciationIssue {
  id: number;
  title: string;
  accuracy: number;
  sentences: Sentence[];
}

export interface PronunciationIssueDetail {
  id: number;
  title: string;
  accuracy: number;
  totalErrorLogCount: number;
  errorLogs: ErrorLog[];
  recommendSentences: Sentence[];
}

export interface ErrorLog {
  errorId: number;
  korean: string;
  translation: string;
  correctIpa: string;
  userIpa: string;
  correctText: string; // 정답 전체 문장
  userText: string; // 사용자의 발음 추정 전체 문장
}
