import { Fragment } from 'react';
import styled from 'styled-components';
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system';
import { base, themed } from '../base';

/* eslint-disable-next-line */
export interface TextProps {
  content?: string;
  as?: string;
  mt?: string | number | string | number[];
  mb?: string | number | string | number[];
  fontFamily?: string | number | string | number[];
  fontWeight?: string | number | string | number[];
  textAlign?: string | number | string | number[];
  lineHeight?: string | number | string | number[];
  letterSpacing?: string | number | string | number[];
}

const TextWrapper = styled('p')(
  base,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  themed('Text')
);

export const Text = ({ content, ...props }: TextProps) => (
  // @ts-expect-error: TS is complaining about color property
  <TextWrapper {...props}>
    {content && content.indexOf('\n') >= 0
      ? content.split('\n').map(function(item, idx) {
          return (
            <Fragment key={`text-${idx}`}>
              {item}
              <br />
            </Fragment>
          );
        })
      : content}
  </TextWrapper>
);

Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem',
};
