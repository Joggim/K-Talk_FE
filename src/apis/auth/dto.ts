import { BaseSuccessResponse } from '../util/dto';

// 구글 로그인
//request
export type GoolgeLoginRequest = GoogleLogin;
//response
export type GoogleLoginResponse = BaseSuccessResponse<GoogleLoginResponseData>;

export type TokenRefreshResponse =
  BaseSuccessResponse<TokenRefreshResponseData>;

export interface GoogleLogin {
  token: string;
}

export interface GoogleLoginResponseData {
  accessToken: string;
  refreshToken: string;
}

export interface TokenRefreshRequest {
  accessToken: string;
  refreshToken: string;
}

export interface TokenRefreshResponseData {
  accessToken: string;
  refreshToken: string;
}
