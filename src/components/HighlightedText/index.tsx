import React from 'react';
import { HighlightedTextProps } from './dto';
import { TextContainer, WordSpan, CharSpan } from './styles';

const HighlightedText: React.FC<HighlightedTextProps> = ({
  correct,
  isFeedback,
  errors = [],
  size = 'bodyMediumLight',
  justifyCenter = false,
  isPractice = false,
}) => {
  const words = correct.split(' ');
  let globalIndex = 0;

  return (
    <TextContainer size={size} $justifyCenter={justifyCenter}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const wordSpans = wordChars.map((char) => {
          const isError = errors.some((error) => error.index === globalIndex);
          const span = (
            <CharSpan
              key={globalIndex}
              $isError={isError}
              $isFeedback={isFeedback}
              $isPractice={isPractice}
              $isSpace={false}
              $variant={size}
            >
              {char}
            </CharSpan>
          );
          globalIndex += 1;
          return span;
        });

        // 공백 처리
        if (wordIndex < words.length - 1) {
          const isError = errors.some((error) => error.index === globalIndex);
          wordSpans.push(
            <CharSpan
              key={globalIndex}
              $isError={isError}
              $isSpace={true}
              $variant={size}
            >
              {'\u00A0'}
            </CharSpan>
          );
          globalIndex += 1;
        }

        return <WordSpan key={wordIndex}>{wordSpans}</WordSpan>;
      })}
    </TextContainer>
  );
};

export default HighlightedText;
