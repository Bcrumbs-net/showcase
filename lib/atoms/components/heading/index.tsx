import styled from "styled-components";
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
} from "styled-system";
import { base, themed } from "../base";
import { string } from "prop-types";

const HeadingWrapper = styled("p")(
  base,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  themed("Heading")
);

/* eslint-disable-next-line */
export interface HeadingProps {
  className?: string;
  content?: string;
  href?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  mt?: string | number | string | number[];
  mb?: string | number | string | number[];
  fontFamily?: string | number | string | number[];
  fontWeight?: string | number | string | number[];
  textAlign?: string | number | boolean | string | number[];
  lineHeight?: string | number | string | number[];
  letterSpacing?: string | number | string | number[];
}

export const Heading = ({ content, ...props }: HeadingProps) => (
  <HeadingWrapper {...props}>{content}</HeadingWrapper>
);

Heading.defaultProps = {
  as: "h2",
  mt: 0,
  mb: "1rem",
  fontWeight: "bold",
};
