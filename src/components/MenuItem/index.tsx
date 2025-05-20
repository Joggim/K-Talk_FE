import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Left } from './styles';
import { MenuItemProps } from './dto';
import { StyledText } from '../StyledText/styles';
import ArrowRight from '../Icons/ArrowRight';
import theme from '../../styles/theme';

const MenuItem: React.FC<MenuItemProps> = ({
  bgColor,
  fontColor,
  title,
  content,
  route,
  state,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route, { state });
  };

  return (
    <Container onClick={handleClick} color={bgColor}>
      <Left>
        <StyledText $variant="headingM" color={fontColor}>
          {title}
        </StyledText>
        <StyledText $variant="captionRegular" color={fontColor}>
          {content}
        </StyledText>
      </Left>
      <ArrowRight width="30" height="30" color={theme.colors.black} />
    </Container>
  );
};

export default MenuItem;
