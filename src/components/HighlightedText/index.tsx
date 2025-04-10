import React from 'react';
import { HighlightedTextProps } from './dto';
import { TextContainer, WordSpan, CharSpan } from './styles';

const HighlightedText: React.FC<HighlightedTextProps> = ({
  original,
  correct,
  errors = [],
  size = 'bodyMediumLight',
}) => {
  const words = correct.split(' '); // 단어 단위로 나눔

  return (
    <TextContainer size={size}>
      {words.map((word, wordIndex) => (
        <WordSpan key={wordIndex}>
          {word.split('').map((char, charIndex) => {
            const globalIndex = original.indexOf(word) + charIndex; // 전체 문장에서의 인덱스 계산
            const $isError = errors.some(
              (error) => error.index === globalIndex && error.char === char
            );

            return (
              <CharSpan key={globalIndex} $isError={$isError} $variant={size}>
                {char}
              </CharSpan>
            );
          })}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </WordSpan>
      ))}
    </TextContainer>
  );
};

export default HighlightedText;
