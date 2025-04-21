import { BaseSuccessResponse } from '../util/dto';

export type STTResponse = BaseSuccessResponse<STTResponseData>;

export interface STTResponseData {
  passed: boolean;
  userText: string;
  userAudioUrl: string;
}
