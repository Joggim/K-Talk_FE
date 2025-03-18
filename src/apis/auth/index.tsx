import { newRequest } from '../util';
import { GoolgeLoginRequest, GoogleLoginResponse } from './dto';

export const googleLogin = async (
  requestBody: GoolgeLoginRequest
): Promise<GoogleLoginResponse> => {
  try {
    const response = await newRequest.post<GoogleLoginResponse>(
      '/auth/google-login',
      requestBody
    );

    // JWT 토큰을 로컬 스토리지에 저장
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);

    return response;
  } catch (error) {
    console.error('Google Login API Error:', error);
    throw error;
  }
};
