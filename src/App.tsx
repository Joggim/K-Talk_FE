import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import TopicListPage from './pages/TopicList';
import TalkBotPage from './pages/TalkBot';
import MyPage from './pages/MyPage/MyPage';
import LoginPage from './pages/Login/Login';
import SentenceListPage from './pages/SentenceList';
import CustomTrainingPage from './pages/CustomTraining';
import PronouncePage from './pages/Pronounce';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/talk-bot" element={<TalkBotPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/topic-list" element={<TopicListPage />} />
        <Route path="/sentence-list/:topicId" element={<SentenceListPage />} />
        <Route path="/custom-training" element={<CustomTrainingPage />} />
        <Route path="/pronounce" element={<PronouncePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
