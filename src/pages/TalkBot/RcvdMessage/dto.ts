export interface RcvdMessageProps {
  type: 'received'; // 메시지 타입 (받은 메시지)
  korean: string; // 원문
  translation?: string; // 번역 (선택)
  modelAudioUrl?: string;
}
