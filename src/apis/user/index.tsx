import { newRequest } from '../util';
import { GetUserInfoResponse } from './dto';

export const getUserInfoApi = () =>
  newRequest.get<GetUserInfoResponse>(`/api/user`, {});
