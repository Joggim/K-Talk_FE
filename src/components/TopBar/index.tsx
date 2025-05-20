import React from 'react';
import { useNavigate } from 'react-router-dom';

import theme from '../../styles/theme';

import { StyledText } from '../StyledText/styles';
import { TopBarContainer, Icon } from './styles';

import ArrowLeft from '../Icons/ArrowLeft';

import { TopBarProps } from './dto';

const TopBar: React.FC<TopBarProps> = ({ name = '', backTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (backTo) {
      navigate(backTo, { replace: true }); // 히스토리 쌓지 않도록 replace 사용
    } else {
      navigate(-1);
    }
  };

  return (
    <TopBarContainer>
      <Icon onClick={handleClick}>
        <ArrowLeft color="black" />
      </Icon>
      <StyledText $variant="headingMMedium">{name}</StyledText>
    </TopBarContainer>
  );
};

export default TopBar;
