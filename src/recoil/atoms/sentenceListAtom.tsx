import { atom } from 'recoil';
import { SentenceItemDTO } from '../../apis/topics/dto';

export const sentenceListState = atom<SentenceItemDTO[]>({
  key: 'sentenceListAtom',
  default: [],
});
