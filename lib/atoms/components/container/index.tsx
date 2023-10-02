import React from 'react';
import ContainerWrapper from './style';

export interface ContainerProps {
  className?: string;
  mobileGutter?: boolean;
  noGutter?: boolean;
  fullWidth?: boolean;
  width?: string;
  id?: string;
}

export const Container = ({
  children,
  className,
  fullWidth,
  mobileGutter,
  noGutter,
  width,
  id,
}: React.PropsWithChildren<ContainerProps>) => {
  const addAllClasses = ['container'];

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ContainerWrapper
      id={id}
      className={addAllClasses.join(' ')}
      fullWidth={fullWidth}
      noGutter={noGutter}
      mobileGutter={mobileGutter}
      width={width}
    >
      {children}
    </ContainerWrapper>
  );
};
