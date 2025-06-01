import { newRequest } from '../util';
import {
  GetPronunciationIssueListResponse,
  GetPronunciationIssueDetailResponse,
  GetErrorLogsResponse,
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

export const getErrorLogsApi = (issueId: number) => {
  return newRequest.get<GetErrorLogsResponse>(
    `/api/pronunciation-issue/${issueId}/error-logs`
  );
};
