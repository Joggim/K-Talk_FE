import { newRequest } from '../util';
import {
  GetPronunciationIssueListResponse,
  GetPronunciationIssueDetailResponse,
} from './dto';

export const getPronunciationIssueListApi = () => {
  return newRequest.get<GetPronunciationIssueListResponse>(
    `/api/pronunciation-issue`
  );
};

export const getPronunciationIssueDetailApi = (issueId: number) => {
  return newRequest.get<GetPronunciationIssueDetailResponse>(
    `/api/pronunciation-issue/${issueId}`
  );
};
