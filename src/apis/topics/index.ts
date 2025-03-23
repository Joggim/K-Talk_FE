import { newRequest } from '../util';
import { GetTopicListResponse } from './dto';

export const getTopicListApi = () =>
  newRequest.get<GetTopicListResponse>(`/api/topics`, {});
