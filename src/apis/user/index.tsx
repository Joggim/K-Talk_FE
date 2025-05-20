import { newRequest } from '../util';
import { GetUserInfoResponse, GetUserLearningHistoryResponse } from './dto';

export const getUserInfoApi = () =>
  newRequest.get<GetUserInfoResponse>(`/api/user`, {});

export const getUserLearningHistoryApi = () =>
  newRequest.get<GetUserLearningHistoryResponse>(
    `/api/user/learing-history`,
    {}
  );
