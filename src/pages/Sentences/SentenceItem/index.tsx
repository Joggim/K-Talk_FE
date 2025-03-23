import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Left } from './styles';
import { SentenceItemProps } from './dto';
import { StyledText } from '../../../components/StyledText/StyledText.styles';
import theme from '../../../styles/theme';

const SentenceItem: React.FC<SentenceItemProps> = ({
  korean,
  translation,
  id,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/practice/${id}`);
  };

  return (
    <Container onClick={handleClick}>
      <Left>
        <StyledText $variant="headingM" color={theme.colors.text.primary}>
          {korean}
        </StyledText>
        <StyledText $variant="captionRegular" color={theme.colors.text.primary}>
          {translation}
        </StyledText>
      </Left>
    </Container>
  );
};

export default SentenceItem;
