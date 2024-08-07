import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { base } from '../base';

const RadioBoxStyle = styled.div`
  display: inline-flex;
  /* Switch label default style */
  .reusecore__field-label {
    color: ${themeGet('colors.textColor', '#484848')};
    font-size: ${themeGet('fontSizes.4', '16')}px;
    font-weight: ${themeGet('fontWeights.4', '500')};

  }

  /* Switch label style when labelPosition on left */
  &.label_left {
    label {
      display: flex;
      align-items: center;
      margin-inline: 0px 50px;
      margin-block:7px 10px;
      .reusecore__field-label {
        margin-right: ${themeGet('space.2', '10')}px;
      }
    }
  }

  /* Switch label style when labelPosition on right */
  &.label_right {
    label {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      margin-inline: 0px 50px;
      margin-block:7px 10px;
      .reusecore__field-label {
        margin-right: ${themeGet('space.2', '10')}px;
        margin-left: ${themeGet('space.2', '10')}px;
      }
    }
  }

  /* Checkbox default style */
  input[type='radio'] {
    &.radio {
      opacity: 0;
      position: absolute;
      margin: 0;
      z-index: -1;
      width: 0;
      height: 0;
      overflow: hidden;
      pointer-events: none;

      &:focus {
        + div {
          border-color: ${themeGet('colors.primary', '#028489')};
        }
      }

      &:checked + div {
        &::after {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
        }
      }
    }
    + div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid ${themeGet('colors.borderColor', '#dadada')};
      position: relative;
      transition: background-color 0.3s ease;
      &::after {
        content: '';
        display: flex;
        width: 8px;
        height: 8px;
        transform: scale(0.8);
        border-radius: 50%;
        background-color: ${themeGet('colors.primary', '#028489')};
        opacity: 0;
        visibility: hidden;
        transition-property: opacity, visibility;
        transition-duration: 0.3s;
      }
    }
  }

  /* support base component props */
  ${base}
`;

RadioBoxStyle.displayName = 'RadioBoxStyle';

export default RadioBoxStyle;
