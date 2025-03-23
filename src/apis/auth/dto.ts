import { BaseSuccessResponse } from '../util/dto';

// 구글 로그인
//request
export type GoolgeLoginRequest = GoogleLogin;
//response
export type GoogleLoginResponse = BaseSuccessResponse<GoogleLoginData>;

export interface GoogleLogin {
  token: string;
}

export interface GoogleLoginData {
  accessToken: string;
  refreshToken: string;
}
