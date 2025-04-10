import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import MyPage from './pages/MyPage/MyPage';
import TopicsPage from './pages/Topics';
import SentencesPage from './pages/Sentences';
import PracticePage from './pages/Practice';
import CustomTrainingPage from './pages/CustomTraining';
import TalkBotPage from './pages/TalkBot';
import { refreshTokens } from './utils/auth';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const success = await refreshTokens(); // accessToken을 갱신 시도
      setIsAuthenticated(success);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) return <div>로딩 중...</div>;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 인증 필요 없는 로그인 */}
        <Route path="/login" element={<LoginPage />} />

        {/* 인증 필요한 페이지 */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-page"
          element={
            <ProtectedRoute>
              <MyPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/topics"
          element={
            <ProtectedRoute>
              <TopicsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/topics/:topicId/sentences"
          element={
            <ProtectedRoute>
              <SentencesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/practice"
          element={
            <ProtectedRoute>
              <PracticePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/custom-training"
          element={
            <ProtectedRoute>
              <CustomTrainingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/talk-bot"
          element={
            <ProtectedRoute>
              <TalkBotPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
