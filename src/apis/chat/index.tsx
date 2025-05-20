import { newRequest } from '../util';
import {
  STTResponse,
  GetMessageListResponse,
  GetFeedbackResponse,
  GetReplyResponse,
} from './dto';

// 채팅 메시지 리스트 조회
export const getMessageListApi = () => {
  return newRequest.get<GetMessageListResponse>(`/api/chat/messages`);
};

// STT 변환 요청
export const postSTTApi = (audioFile: File) => {
  const formData = new FormData();
  formData.append('file', audioFile);

  return newRequest.post<STTResponse>('/api/convert/stt', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 문장 피드백 요청
export const getFeedbackApi = (transcription: string, audioFile: File) => {
  const formData = new FormData();
  formData.append('transcription', transcription);
  formData.append('audioFile', audioFile);

  return newRequest.post<GetFeedbackResponse>('/api/chat/feedback', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 챗봇 응답 요청
export const postChatReplyApi = (text: string) => {
  return newRequest.post<GetReplyResponse>(`/api/chat/reply`, {
    text,
  });
};
