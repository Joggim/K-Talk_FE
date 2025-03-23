export type MessageProps = SentMessageProps | RcvdMessageProps;

export interface SentMessageProps {
  type: 'sent'; // 메시지 타입 (보낸 메시지)
  content: string; // 필수값
  feedback?: FeedbackProps; // 문법 및 발음 피드백 객체
  userAudioUrl?: string; // 사용자의 녹음본 URL
  modelAudioUrl?: string; // 모범 발음 URL
}

export interface RcvdMessageProps {
  type: 'received'; // 메시지 타입 (받은 메시지)
  korean: string; // 원문
  translation?: string; // 번역 (선택)
  modelAudioUrl?: string; // 모범 발음 URL
}

export interface FeedbackProps {
  grammar?: GrammarFeedbackProps; // 문법 오류 피드백 (선택적)
  pronunciation?: PronunciationFeedbackProps; // 발음 오류 피드백 (선택적)
}

// 문법 오류 피드백
export interface GrammarFeedbackProps {
  suggestion: string; // 수정된 문장
  explanation: string; // 문법 피드백 설명
}

// 발음 오류 피드백
export interface PronunciationFeedbackProps {
  pronunciationErrors: PronunciationError[]; // 발음 오류 정보
}

// 발음 오류 정보
export interface PronunciationError {
  index: number; // 틀린 글자의 인덱스
  char: string; // 틀린 글자
}

export const dummyMessages: MessageProps[] = [
  {
    type: 'received',
    korean:
      '안녕! 나는 너의 한국어 스피킹 메이트야. 만나서 반가워! 너는 이름이 뭐야?',
    translation:
      "Hi! I'm your Korean speaking mate. Nice to meet you! What's your name?",
    modelAudioUrl: 'path_to_model_audio.mp3',
  },
  {
    type: 'sent',
    content: '안녕! 내 이름은 다니엘이야.',
    userAudioUrl: 'path_to_user_audio_1.mp3',
    modelAudioUrl: 'path_to_model_audio_1.mp3',
  },
  {
    type: 'received',
    korean: '반가워, 다니엘! 너에 대해 더 알고 싶어. 오늘 뭐 했어?',
    translation:
      "Nice to meet you, Daniel! I'd like to know more about you. What did you do today?",
    modelAudioUrl: 'path_to_model_audio.mp3',
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
    userAudioUrl: 'path_to_user_audio_2.mp3',
    modelAudioUrl: 'path_to_model_audio_2.mp3',
  },
  {
    type: 'received',
    korean: '좋았겠다! 무슨 수업 들었어?',
    translation: 'That sounds great! What class did you take?',
    modelAudioUrl: 'path_to_model_audio.mp3',
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
    userAudioUrl: 'path_to_user_audio_3.mp3',
    modelAudioUrl: 'path_to_model_audio_3.mp3',
  },
  {
    type: 'received',
    korean: '그렇구나! 교수님은 설명을 잘 해주셔?',
    translation: 'I see! Does your professor explain things well?',
    modelAudioUrl: 'path_to_model_audio.mp3',
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
    userAudioUrl: 'path_to_user_audio_4.mp3',
    modelAudioUrl: 'path_to_model_audio_4.mp3',
  },
];
