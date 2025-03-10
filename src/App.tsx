import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import TalkPage from './pages/Talk';
import MyPage from './pages/MyPage/MyPage';
import LoginPage from './pages/Login/Login';
import SentenceListPage from './pages/SentenceList';
import CustomSentencePage from './pages/CustomSentence';
import SpeakPage from './pages/Speak';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/talk" element={<TalkPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/sentence-list" element={<SentenceListPage />} />
        <Route path="/custom-sentence" element={<CustomSentencePage />} />
        <Route path="/speak" element={<SpeakPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
