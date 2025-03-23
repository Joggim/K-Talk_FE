import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import MyPage from './pages/MyPage/MyPage';
import TopicsPage from './pages/Topics';
import SentencesPage from './pages/Sentences';
import PracticePage from './pages/Pactice';
import CustomTrainingPage from './pages/CustomTraining';
import TalkBotPage from './pages/TalkBot';

const App: React.FC = () => {
  console.log('VITE_API_BASE_URL:', import.meta.env.VITE_API_BASE_URL);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/topics/:topicId/sentences" element={<SentencesPage />} />
        <Route path="/practice/:sentenceId" element={<PracticePage />} />
        <Route path="/custom-training" element={<CustomTrainingPage />} />
        <Route path="/talk-bot" element={<TalkBotPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
