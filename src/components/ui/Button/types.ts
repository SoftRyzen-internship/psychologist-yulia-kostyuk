export interface ButtonProps {
  tag: 'a' | 'button';
  accent: boolean;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  buttonType?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
