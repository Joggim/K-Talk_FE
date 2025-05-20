import React from 'react';
import { MoreBtnWrapper } from './styles';
import { StyledText } from '../StyledText/styles';
import ArrowRight from '../Icons/ArrowRight';
import { MoreBtnProps } from './dto';

const MoreBtn: React.FC<MoreBtnProps> = (onCLick) => {
  return (
    <MoreBtnWrapper onClick={() => onCLick}>
      <StyledText $variant="captionMedium">more</StyledText>
      <ArrowRight color="black" width="18" height="18" />
    </MoreBtnWrapper>
  );
};

export default MoreBtn;
