// import React from 'react';
// import { GlideSlideWrapper } from './glide.style';

// // Glide Slide wrapper component
// export const GlideSlide = ({
//   children,
//   props,
// }: {
//   children: React.ReactNode;
//   props?: React.HTMLProps<HTMLLIElement>;
// }) => {
//   return <GlideSlideWrapper {...{ props }}>{children}</GlideSlideWrapper>;
// };

import React from 'react';
import { GlideSlideWrapper } from './glide.style';

// Glide Slide wrapper component
  export const GlideSlide = ({ children }: React.PropsWithChildren<Record<string, never>>) => {
  return (
    <GlideSlideWrapper className="glide__slide">{children}</GlideSlideWrapper>
  );
};