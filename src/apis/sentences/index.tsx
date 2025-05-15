import { newRequest } from '../util';
import { FeedbackResponse } from './dto';

/*
export const getSentenceApi = (sentenceId: number) =>
  newRequest.get<GetSentenceResponse>(`/api/sentences/${sentenceId}`, {});
*/

export const postSentenceFeedbackApi = (
  sentenceId: number,
  audioFile: File
) => {
  const formData = new FormData();
  formData.append('file', audioFile);

  return newRequest.post<FeedbackResponse>(
    `/api/sentences/${sentenceId}/feedback`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};
