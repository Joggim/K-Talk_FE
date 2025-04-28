import theme from '../../styles/theme';

export interface StyledTextProps {
  $variant: keyof typeof theme.fontStyles;
  color?: string;
}


