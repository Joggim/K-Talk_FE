import { BaseSuccessResponse } from '../util/dto';

export type GetTopicListResponse = BaseSuccessResponse<GetTopicListData>;
export type GetSentenceListResponse = BaseSuccessResponse<GetSentenceListData>;

export type GetTopicListData = TopicItem[];

export interface TopicItem {
  id: number;
  title: string;
  description: string;
}

export type GetSentenceListData = SentenceItem[];

export interface SentenceItem {
  id: number;
  korean: string;
  translation: string;
}
