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
          {word.split('').map((char, index) => {
            const isError = errors.some((error) => error.index === index);

            return (
              <CharSpan key={index} $isError={isError} $variant={size}>
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
