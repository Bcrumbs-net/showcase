import React, { ComponentType } from 'react';
import styled from 'styled-components';
import { base, themed } from '../base';

const LinkWrapper = styled('a')(
  { textDecoration: 'none' },
  base,
  themed('Link')
);

/* eslint-disable-next-line */
export interface LinkProps {
  as?: string | ComponentType<any>;
  children: any;
}

export const Link = ({ children, ...props }: React.PropsWithChildren<LinkProps>) => (
  <LinkWrapper {...props}>{children}</LinkWrapper>
);

Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block',
};
