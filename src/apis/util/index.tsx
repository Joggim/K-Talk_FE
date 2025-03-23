import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const JWT_KEY = 'accessToken';

interface CustomInstance extends AxiosInstance {
  getUri(config?: AxiosRequestConfig): string;
  request<T>(config: AxiosRequestConfig): Promise<T>;
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>; // 수정된 delete 메서드
  head<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

// 새로운 서버 axios 인스턴스
export const newRequest: CustomInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 20000,
  headers: {
    Accept: 'application/json',
  },
});

// 요청 인터셉터 추가
newRequest.interceptors.request.use(
  (config) => {
    const jwt = window.localStorage.getItem(JWT_KEY);
    if (jwt) {
      config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
newRequest.interceptors.response.use(
  (response) => {
    console.log('Network log:', response);
    return response.data;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);
