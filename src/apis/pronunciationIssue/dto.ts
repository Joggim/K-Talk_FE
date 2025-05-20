import { BaseSuccessResponse } from '../util/dto';
import { SentenceItemDTO } from '../topics/dto';

export type GetPronunciationIssueListResponse = BaseSuccessResponse<
  PronunciationIssue[]
>;
export type GetPronunciationIssueDetailResponse =
  BaseSuccessResponse<PronunciationIssueDetail>;

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
  errorId: number;
  korean: string;
  translation: string;
  correctIpa: string;
  userIpa: string;
  correctText: string; // 정답 전체 문장
  userText: string; // 사용자의 발음 추정 전체 문장
}
