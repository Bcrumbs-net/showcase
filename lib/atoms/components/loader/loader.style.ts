import styled from 'styled-components';
import { colorStyle } from '../theme/customVariant';
import { AnimSpinner } from '../animation';
import { base } from '../base';

const LoaderStyle = styled.span<{ loaderColor?: string; }>`
  /* loader default style */
  display: inline-flex;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  overflow: hidden;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => (props.loaderColor ? props.loaderColor : '#000000')};
  border-top-color: transparent !important;

  /* animation goes here */
  ${AnimSpinner}
  /* Style system custome color variant */
  ${colorStyle}
  ${base}
`;

LoaderStyle.displayName = 'LoaderStyle';

export default LoaderStyle;
