import { newRequest } from '../util';
import { GetTopicListResponse, GetSentenceListResponse } from './dto';

export const getTopicListApi = () =>
  newRequest.get<GetTopicListResponse>(`/api/topics`, {});

export const getSentenceListApi = (topicId: number) =>
  newRequest.get<GetSentenceListResponse>(
    `/api/topics/${topicId}/sentences`,
    {}
  );
