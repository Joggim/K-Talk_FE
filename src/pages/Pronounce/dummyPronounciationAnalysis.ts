export const dummyPronunciationAnalysis = {
  success: true,
  message: 'SUCCESS',
  data: {
    sentenceId: 1, // 분석한 문장의 ID (문장 조회 API와 연결)
    userText: '나는 삼겹샬을 조아해.', // 사용자가 말한 문장
    userPronunciation: 'https://dummy-audio.com/user-pronunciation.mp3', // 사용자가 녹음한 발음
    pronunciationErrors: [
      { char: '샬', index: 6 },
      { char: '조', index: 9 },
    ],
  },
};
