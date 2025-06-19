import { BaseSuccessResponse } from '../util/dto';
import { SentenceItemDTO } from '../topics/dto';

export type GetPronunciationIssueListResponse = BaseSuccessResponse<
  PronunciationIssue[]
>;
export type GetPronunciationIssueDetailResponse =
  BaseSuccessResponse<PronunciationIssueDetail>;

export type GetErrorLogsResponse = BaseSuccessResponse<ErrorLogs>;

export interface PronunciationIssue {
  id: number;
  title: string;
  accuracy: number;
  sentences: SentenceItemDTO[];
}

export interface PronunciationIssueDetail {
  id: number;
  title: string;
  accuracy: number;
  totalErrorLogCount: number;
  errorLogs: ErrorLog[];
  recommendedSentences: SentenceItemDTO[];
}

export interface ErrorLog {
  id: number;
  translation: string;
  correctText: string; // 정답 전체 문장
  correctIpa: string;
  userText: string; // 사용자의 발음 추정 전체 문장
  userIpa: string;
  error: { character: string; index: number };
}

export interface ErrorLogs {
  totalErrorLogCount: number;
  errorLogs: ErrorLog[];
}
