import { BaseSuccessResponse } from '../util/dto';

export type GetUserInfoResponse = BaseSuccessResponse<GetUserInfoData>;

export type GetUserInfoData = UserInfo;

export interface UserInfo {
  userId: number;
  nickname: string;
}
