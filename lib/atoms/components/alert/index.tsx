import React from 'react';
import AlertStyle from './alert.style';

/* eslint-disable-next-line */
export interface AlertProps {
  className: string;
  isMaterial: boolean;
}

export const Alert = ({ className, isMaterial, children, ...props }: React.PropsWithChildren<AlertProps>) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__alert'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // isMaterial prop checking
  if (isMaterial) {
    addAllClasses.push('is-material');
  }

  return (
    <AlertStyle className={addAllClasses.join(' ')} {...props}>
      {children}
    </AlertStyle>
  );
};
