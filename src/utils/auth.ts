import { refreshTokenApi } from '../apis/auth';

export const refreshTokens = async (): Promise<boolean> => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken || !refreshToken) return false;

  try {
    const response = await refreshTokenApi({ accessToken, refreshToken });

    if (response.success) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      return true;
    }
    return false;
  } catch (error) {
    console.error('토큰 갱신 실패:', error);
    return false;
  }
};
