import { atom } from 'recoil';
import { SentenceItemDTO } from '../../apis/topics/dto';

export const selectedSentenceState = atom<SentenceItemDTO | null>({
  key: 'selectedSentenceState',
  default: null,
});
