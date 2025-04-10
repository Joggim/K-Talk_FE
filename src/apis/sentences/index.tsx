import { newRequest } from '../util';
import { GetSentenceResponse, FeedbackResponse } from './dto';

export const getSentenceApi = (sentenceId: number) =>
  newRequest.get<GetSentenceResponse>(`/api/sentences/${sentenceId}`, {});

export const postSentenceFeedbackApi = (
  sentenceId: number,
  audioBase64: string
) =>
  newRequest.post<FeedbackResponse>(`/api/sentences/${sentenceId}/feedback`, {
    audio: audioBase64,
  });
