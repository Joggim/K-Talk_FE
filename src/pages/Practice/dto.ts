// types 또는 dto 폴더에
export interface PronunciationError {
  char: string;
  index: number;
}

export interface PronunciationAnalysisResult {
  sentenceId: number;
  passed: boolean;
  userText: string;
  userAudioUrl: string;
  pronunciationErrors: PronunciationError[];
  feedBack: string;
}
