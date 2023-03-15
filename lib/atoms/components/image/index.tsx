import styled from 'styled-components';
import { base, themed } from '../base';

const ImageWrapper = styled('img')(
  {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  base,
  themed('Image')
);

/* eslint-disable-next-line */
export interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt, ...props }: ImageProps) => (
  <ImageWrapper src={src} alt={alt} {...props} />
);

Image.defaultProps = {
  m: 0,
};
