import styled from 'styled-components';
import { themeGet } from 'styled-system';

const SelectStyle = styled.div<{ as?: string }>`
  /* Select label default style */
  .reusecore__field-label {
    color: ${themeGet('colors.labelColor', '#767676')};
    font-size: ${themeGet('fontSizes.4', '16')}px;
    font-weight: ${themeGet('fontWeights.4', '500')};
  }
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid ${themeGet('colors.inactiveIcon', ' #a4a4a4')};
  /* Select label style when labelPosition on left */
  &.label_left {
    display: flex;
    align-items: center;
    .reusecore__field-label {
      margin-right: ${themeGet('space.3', '10')}px;
    }
  }

  /* Select label style when labelPosition on right */
  &.label_right {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    .reusecore__field-label {
      margin-left: ${themeGet('space.3', '10')}px;
    }
  }

  /* Switch label style when labelPosition on top || bottom */
  &.label_top {
    margin-top: ${themeGet('space.2', '8')}px;
    .reusecore__field-label {
      display: flex;
      margin-bottom: ${themeGet('space.2', '8')}px;
    }
  }
  &.label_bottom {
    .reusecore__field-label {
      display: flex;
      margin-top: ${themeGet('space.2', '8')}px;
    }
  }
`;

SelectStyle.displayName = 'SelectStyle';

SelectStyle.defaultProps = {
  as: 'div',
};

export default SelectStyle;
