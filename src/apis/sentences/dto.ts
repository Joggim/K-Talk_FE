import { BaseSuccessResponse } from '../util/dto';

export type GetSentenceResponse = BaseSuccessResponse<GetSentenceData>;

export interface GetSentenceData {
  id: number;
  korean: string;
  translation: string;
  audioUrl: string;
}
