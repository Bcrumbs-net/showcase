import React from 'react';
import { GlideSlideWrapper } from './glide.style';

// Glide Slide wrapper component
export const GlideSlide = ({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: React.HTMLProps<HTMLLIElement>;
}) => {
  return <GlideSlideWrapper {...{ props }}>{children}</GlideSlideWrapper>;
};
