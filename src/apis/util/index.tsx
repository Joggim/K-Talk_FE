import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { refreshTokenApi } from '../auth';

const JWT_KEY = 'accessToken';
const REFRESH_KEY = 'refreshToken';

interface CustomInstance extends AxiosInstance {
  getUri(config?: AxiosRequestConfig): string;
  request<T>(config: AxiosRequestConfig): Promise<T>;
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

export const newRequest: CustomInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 20000,
  headers: {
    Accept: 'application/json',
  },
});

// 요청 인터셉터
newRequest.interceptors.request.use(
  (config) => {
    const jwt = localStorage.getItem(JWT_KEY);
    if (jwt) {
      config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 + 자동 토큰 재발급
newRequest.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;

    // accessToken 만료 시 && 아직 재시도 안 했을 때
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const success = await refreshTokens();
      if (success) {
        const newAccessToken = localStorage.getItem(JWT_KEY);
        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return newRequest(originalRequest); // 재요청
        }
      }

      // refreshToken도 만료 → 강제 로그아웃 처리 가능
      localStorage.removeItem(JWT_KEY);
      localStorage.removeItem(REFRESH_KEY);
      window.location.href = '/login'; // or navigate
    }

    return Promise.reject(error);
  }
);

// 자동 갱신 함수
export const refreshTokens = async (): Promise<boolean> => {
  const accessToken = localStorage.getItem(JWT_KEY);
  const refreshToken = localStorage.getItem(REFRESH_KEY);

  if (!accessToken || !refreshToken) return false;

  try {
    const response = await refreshTokenApi({ accessToken, refreshToken });

    if (response.success) {
      localStorage.setItem(JWT_KEY, response.data.accessToken);
      localStorage.setItem(REFRESH_KEY, response.data.refreshToken);
      return true;
    }
    return false;
  } catch (error) {
    console.error('토큰 갱신 실패:', error);
    return false;
  }
};
