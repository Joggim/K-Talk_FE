export interface HistorySentenceItemProps {
  id: number;
  korean: string;
  translation: string;
  correct: boolean;
  pronunciationErrors: Array<{
    wrong: string;
    correct: string;
    index: number;
  }>;
  errorTypes: string[];
}
