import { BaseSuccessResponse } from '../util/dto';

export type GetPronunciationIssueListResponse = BaseSuccessResponse<
  PronunciationIssue[]
>;

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
