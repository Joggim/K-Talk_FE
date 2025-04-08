import { newRequest } from '../util';
import { GetSentenceResponse } from './dto';

export const getSentenceApi = (sentenceId: number) =>
  newRequest.get<GetSentenceResponse>(`/api/sentences/${sentenceId}`, {});
