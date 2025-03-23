import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_'); // .env 파일 로드

  console.log('🔍 Vite 환경 변수 로드:', env);

  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
    },
    define: {
      'import.meta.env': env, // 환경 변수를 Vite에서 사용 가능하게 설정
    },
  };
});
