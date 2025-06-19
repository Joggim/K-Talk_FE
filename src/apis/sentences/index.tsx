import { newRequest } from '../util';
import { PostSentenceAudioResponse, FeedbackResponse } from './dto';

export const postSentenceAudioApi = (sentenceId: number) =>
  newRequest.post<PostSentenceAudioResponse>(
    `/api/sentences/${sentenceId}/audio`,
    {}
  );

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
