import { BaseSuccessResponse } from '../util/dto';

export type GetTopicListResponse = BaseSuccessResponse<GetTopicListData>;

export type GetTopicListData = TopicItem[];

export interface TopicItem {
  id: number;
  title: string;
  description: string;
}
