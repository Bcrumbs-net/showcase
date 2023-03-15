import React from 'react';
import styled, { css } from 'styled-components';
import { base, themed } from '../base';
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
} from 'styled-system';

/* eslint-disable-next-line */
export interface BoxProps {
  flexBox?: boolean;
  as?:
    | 'div'
    | 'article'
    | 'section'
    | 'address'
    | 'header'
    | 'footer'
    | 'nav'
    | 'main';
  width?: string | number | string | number[];
  height?: string | number | string | number[];
  fontSize?: string | number | string | number[];
  color?: string | number | string | number[];
  flex?: string | number | string | number[];
  order?: string | number | string | number[];
  alignSelf?: string | number | string | number[];
  display?: string | number | string | number[];
  border?: string | number | string | number[];
  borderTop?: string | number | string | number[];
  borderRight?: string | number | string | number[];
  borderBottom?: string | number | string | number[];
  borderLeft?: string | number | string | number[];
  borderColor?: string | number | string | number[];
}

const BoxWrapper = styled('div')<{ flexBox: boolean }>(
  base,
  themed('Box'),
  props =>
    props.flexBox &&
    css(
      { display: 'flex' },
      flexWrap,
      flexDirection,
      alignItems,
      justifyContent,
      themed('FlexBox')
    )
);

export const Box = ({ children, ...props }: React.PropsWithChildren<BoxProps>) => (
  // @ts-expect-error: TS is complaining about color property
  <BoxWrapper {...props}>{children}</BoxWrapper>
);

Box.defaultProps = {
  as: 'div',
};