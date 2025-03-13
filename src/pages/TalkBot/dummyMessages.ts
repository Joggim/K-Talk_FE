import { MessageProps } from './dto';

export const dummyMessages: MessageProps[] = [
  {
    type: 'received',
    korean:
      '안녕! 나는 너의 한국어 스피킹 메이트야. 만나서 반가워! 너는 이름이 뭐야?',
    translation:
      "Hi! I'm your Korean speaking mate. Nice to meet you! What's your name?",
    audio: 'path_to_audio.mp3',
  },
  {
    type: 'sent',
    content: '안녕! 내 이름은 다니엘이야.',
    userAudio: 'path_to_user_audio_1.mp3',
    correctAudio: 'path_to_correct_audio_1.mp3',
  },
  {
    type: 'received',
    korean: '반가워, 다니엘! 너에 대해 더 알고 싶어. 오늘 뭐 했어?',
    translation:
      "Nice to meet you, Daniel! I'd like to know more about you. What did you do today?",
    audio: 'path_to_audio.mp3',
  },
  {
    type: 'sent',
    content: '아까 학교 다녀왔었어.',
    feedback: {
      grammar: {
        suggestion: '아까 학교 다녀왔어.',
        explanation:
          '‘다녀왔었어’ emphasizes past experience, but in everyday conversation, ‘다녀왔어’ is enough to convey the past meaning. Simplifying the tense makes the sentence more natural and concise!',
      },
    },
    userAudio: 'path_to_user_audio_2.mp3',
    correctAudio: 'path_to_correct_audio_2.mp3',
  },
  {
    type: 'received',
    korean: '좋았겠다! 무슨 수업 들었어?',
    translation: 'That sounds great! What class did you take?',
    audio: 'path_to_audio.mp3',
  },
  {
    type: 'sent',
    content: '인공지능 수업 들었는데 너무 어려웠어.',
    feedback: {
      pronunciation: {
        pronunciationErrors: [
          { char: '어', index: 16 },
          { char: '려', index: 17 },
          { char: '웠', index: 18 },
        ],
      },
    },
    userAudio: 'path_to_user_audio_3.mp3',
    correctAudio: 'path_to_correct_audio_3.mp3',
  },
  {
    type: 'received',
    korean: '그렇구나! 교수님은 설명을 잘 해주셔?',
    translation: 'I see! Does your professor explain things well?',
    audio: 'path_to_audio.mp3',
  },
  {
    type: 'sent',
    content: '교수님 말 빠르고 어려워서 이해하기 힘들었다.',
    feedback: {
      grammar: {
        suggestion: '교수님 말이 너무 빨라서 이해하기 힘들었어.',
        explanation:
          '‘말 빠르고 어려워서’ sounds unnatural. A more natural way to say it is "말이 너무 빨라서 이해하기 힘들었어."',
      },
      pronunciation: {
        pronunciationErrors: [{ char: '빠', index: 6 }],
      },
    },
    userAudio: 'path_to_user_audio_4.mp3',
    correctAudio: 'path_to_correct_audio_4.mp3',
  },
];
