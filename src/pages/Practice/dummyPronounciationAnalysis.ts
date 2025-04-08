import { PronunciationAnalysisResult } from './dto';

export const dummyPronunciationAnalysis: {
  success: boolean;
  message: string;
  data: PronunciationAnalysisResult;
} = {
  success: true,
  message: 'SUCCESS',
  data: {
    sentenceId: 1,
    passed: false,
    userText: '가방을 들고 나갔어요', // 사용자가 말한 문장
    userAudioUrl: 'https://dummy-audio.com/user-pronunciation.mp3', // 사용자가 녹음한 발음
    pronunciationErrors: [{ char: '고', index: 5 }],
    feedBack: 'Try to pronounce “어 (eo)” instead of “아 (a)”.',
  },
};
