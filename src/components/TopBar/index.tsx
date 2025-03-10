import React from 'react';
import { useNavigate } from 'react-router-dom';

import theme from '../../styles/theme';

import { StyledText } from '../StyledText/StyledText.styles';
import { TopBarContainer, Icon } from './styles';

import ArrowLeft from '../Icons/ArrowLeft';

import { TopBarProps } from './dto';

const TopBar: React.FC<TopBarProps> = ({ name = '' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <TopBarContainer>
      <Icon onClick={handleClick}>
        <ArrowLeft color="black" />
      </Icon>
      <StyledText $variant="headingL">{name}</StyledText>
    </TopBarContainer>
  );
};

export default TopBar;
