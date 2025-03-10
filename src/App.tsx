import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/Home';
import TalkPage from './pages/Talk/Talk';
import MyPage from './pages/MyPage/MyPage';
import LoginPage from './pages/Login/Login';
import SentenceListPage from './pages/SentenceList';
import CustomSentencePage from './pages/CustomSentence';
import SpeakPage from './pages/Speak';

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/talk',
    element: <TalkPage />,
  },
  {
    path: '/my-page',
    element: <MyPage />,
  },
  {
    path: '/sentence-list',
    element: <SentenceListPage />,
  },
  {
    path: '/custom-sentence',
    element: <CustomSentencePage />,
  },
  {
    path: '/speak',
    element: <SpeakPage />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
