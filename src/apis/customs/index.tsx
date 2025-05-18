import { newRequest } from '../util';
import { GetPronunciationIssueListResponse } from './dto';

export const getPronunciationIssueListApi = () => {
  return newRequest.get<GetPronunciationIssueListResponse>(
    `/api/learning/recommendations`
  );
};
