import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Left, Passed } from './styles';
import { SentenceItemProps } from './dto';
import { StyledText } from '../StyledText/styles';
import theme from '../../styles/theme';
import XIcon from '../../components/Icons/X';
import CheckIcon from '../../components/Icons/Check';

const SentenceItem: React.FC<SentenceItemProps> = ({
  korean,
  translation,
  id,
  backTo,
  isPassed,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/practice', {
      replace: true,
      state: {
        sentenceId: id,
        backTo,
      },
    });
  };

  //console.log(korean, isPassed);

  return (
    <Container onClick={handleClick}>
      <Left>
        <StyledText $variant="headingM" color={theme.colors.text.primary}>
          {korean}
        </StyledText>
        <StyledText
          $variant="captionRegular"
          color={theme.colors.text.tertiary}
        >
          {translation}
        </StyledText>
      </Left>
      {isPassed !== null && (
        <Passed $passed={isPassed}>
          {isPassed ? <CheckIcon width="20px" /> : <XIcon width="20px" />}
        </Passed>
      )}
    </Container>
  );
};

export default SentenceItem;
