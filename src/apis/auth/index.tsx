import { AxiosError } from 'axios';
import { newRequest } from '../util';
import {
  GoolgeLoginRequest,
  GoogleLoginResponse,
  TokenRefreshRequest,
  TokenRefreshResponse,
} from './dto';

export const googleLogin = async (
  requestData: GoolgeLoginRequest
): Promise<GoogleLoginResponse> => {
  try {
    const response = await newRequest.post<GoogleLoginResponse>(
      '/api/auth/google-login',
      requestData, // { token: credentialResponse.credential }
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // 필요할 경우 추가
      }
    );

    //console.log('Login API Response:', response);
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);

    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(
        'Google Login API Error:',
        error.response?.data || error.message
      );
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};

export const refreshTokenApi = (body: TokenRefreshRequest) =>
  newRequest.post<TokenRefreshResponse>('/api/auth/refresh', body);
