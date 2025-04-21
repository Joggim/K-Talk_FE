import { SentMessageProps } from './SentMessage/dto';
import { MessageListData } from '../../apis/talkbot/dto';

export const dummyNewMessage: SentMessageProps = {
  id: 8,
  type: 'sent',
  content: '교수님 말 빠르고 어려워서 이해하기 힘들었다.',
  isFeedback: true,
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
  userAudioUrl: 'path_to_user_audio_4.mp3',
  modelAudioUrl: 'path_to_model_audio_4.mp3',
};

export const dummyMessages: MessageListData[] = [
  {
    id: 7,
    type: 'received',
    korean: '그렇구나! 교수님은 설명을 잘 해주셔?',
    translation: 'I see! Does your professor explain things well?',
    modelAudioUrl: 'path_to_model_audio.mp3',
  },
  {
    id: 6,
    type: 'sent',
    content: '인공지능 수업 들었는데 너무 어려웠어.',
    isFeedback: true,
    feedback: {
      pronunciation: {
        pronunciationErrors: [
          { char: '어', index: 16 },
          { char: '려', index: 17 },
          { char: '웠', index: 18 },
        ],
      },
    },
    userAudioUrl: 'path_to_user_audio_3.mp3',
    modelAudioUrl: 'path_to_model_audio_3.mp3',
  },
  {
    id: 5,
    type: 'received',
    korean: '좋았겠다! 무슨 수업 들었어?',
    translation: 'That sounds great! What class did you take?',
    modelAudioUrl: 'path_to_model_audio.mp3',
  },
  {
    id: 4,
    type: 'sent',
    content: '아까 학교 다녀왔었어.',
    isFeedback: true,
    feedback: {
      grammar: {
        suggestion: '아까 학교 다녀왔어.',
        explanation:
          '‘다녀왔었어’ emphasizes past experience, but in everyday conversation, ‘다녀왔어’ is enough to convey the past meaning. Simplifying the tense makes the sentence more natural and concise!',
      },
    },
    userAudioUrl: 'path_to_user_audio_2.mp3',
    modelAudioUrl: 'path_to_model_audio_2.mp3',
  },
  {
    id: 3,
    type: 'received',
    korean: '반가워, 다니엘! 너에 대해 더 알고 싶어. 오늘 뭐 했어?',
    translation:
      "Nice to meet you, Daniel! I'd like to know more about you. What did you do today?",
    modelAudioUrl: 'path_to_model_audio.mp3',
  },
  {
    id: 2,
    type: 'sent',
    content: '안녕! 내 이름은 다니엘이야.',
    userAudioUrl: 'path_to_user_audio_1.mp3',
    modelAudioUrl: 'path_to_model_audio_1.mp3',
    isFeedback: true,
  },
  {
    id: 1,
    type: 'received',
    korean:
      '안녕! 나는 너의 한국어 스피킹 메이트야. 만나서 반가워! 너는 이름이 뭐야?',
    translation:
      "Hi! I'm your Korean speaking mate. Nice to meet you! What's your name?",
    modelAudioUrl: 'path_to_model_audio.mp3',
  },
];
