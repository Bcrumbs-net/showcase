import styled from 'styled-components';
import {
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
} from 'styled-system';
import { cards } from '../theme/customVariant';
import { base, themed } from '../base';

/* eslint-disable-next-line */
export interface CardProps {
  boxShadow?: string;
  children: React.ReactNode;
  className?: string;
}

const CardWrapper = styled('div')(
  base,
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  cards,
  themed('Card')
);

export const Card = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<CardProps>) => (
  <CardWrapper className={className} {...props}>{children}</CardWrapper>
);

Card.defaultProps = {
  boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.05)',
};
