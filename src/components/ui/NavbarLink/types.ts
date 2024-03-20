export interface NavbarLinkProps {
  title: string;
  href: string;
  variant: 'mobile-menu' | 'header';
  onClick?: () => void;
}
