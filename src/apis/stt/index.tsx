import { newRequest } from '../util';
import { STTResponse } from './dto';

export const postSentenceFeedbackApi = (audioBase64: string) =>
  newRequest.post<STTResponse>(`/api/convert/stt`, {
    audio: audioBase64,
  });
