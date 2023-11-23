import { PropsWithChildren } from 'react';
import NavbarStyle from './navbar.style';

/* eslint-disable-next-line */
export interface NavbarProps {
  /** ClassName of the Navbar. Default class is reusecore__navbar*/
  className?: string;
  /** Used to render menu, logo, button or any component that
   * you want to show in navbar. */
  children?: React.ReactElement;
  width?: string | number | string | number[];
  height?: string | number | string | number[];
  space?: string | number | string | number[];
  borderRadius?: string | number | string | number[];
  boxShadow?: string;
  color?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  flexWrap?: string;
  style?: any
}

export const NavbarWrapper = ({
  className,
  children,
  style,
  ...props
}: PropsWithChildren<NavbarProps>) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__navbar'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <NavbarStyle className={addAllClasses.join(' ')} {...props}>
      {children}
    </NavbarStyle>
  );
};
