import styled, { css } from 'styled-components';

import { StyledTextProps } from './dto';

export const StyledText = styled.span<StyledTextProps>`
  ${({ $variant, theme }) => css`
    ${theme.fontStyles[$variant]}
  `}
  color: ${({ color, theme }) => color || theme.colors.text.primary};
`;
