export interface CircleButtonProps {
  size: 'big' | 'small';
  bgColor: string;
  icon: React.ReactNode;
  onClick?: () => void;
}
