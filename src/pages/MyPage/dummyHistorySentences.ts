import { HistorySentenceItemProps } from './HistorySentenceItem/dto';

export const dummyHistorySentences: HistorySentenceItemProps[] = [
  {
    id: 1,
    korean: '아빠가 빨간 꽃병을 꺼냈어요.',
    translation: 'Dad took out the red flower vase.',
    correct: false,
    pronunciationErrors: [
      {
        wrong: '바',
        correct: '빠',
        index: 1,
      },
      {
        wrong: '곷',
        correct: '꽃',
        index: 7,
      },
    ],
    errorTypes: ['된소리 발음 오류', '경음화 누락'],
  },
  {
    id: 2,
    korean: '기린이 커다란 키를 자랑해요.',
    translation: 'The giraffe proudly shows off its height.',
    correct: true,
    pronunciationErrors: [],
    errorTypes: [],
  },
  {
    id: 3,
    korean: '지하철에서 짐을 주웠어요.',
    translation: 'I picked up my stuff on the subway.',
    correct: false,
    pronunciationErrors: [
      {
        wrong: '짐',
        correct: '침',
        index: 6,
      },
    ],
    errorTypes: ['유성음화 오류'],
  },
];
