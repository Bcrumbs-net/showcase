import { useToggle } from '../hooks';
import SwitchStyle from './switch.style';

/* eslint-disable-next-line */
export interface SwitchProps {
    /** ClassName of the Switch */
    className?: string;
    /** Add Material effect */
    isMaterial?: boolean;
    /** labelText of the switch field */
    labelText?: string;
    /** switchSize control switch width and height */
    switchSize?: string;
    /** Set label position of the switch field */
    labelPosition?: "top" | "bottom" | "left" | "right";
    /** Switch toggle state based on isChecked prop */
    isChecked?: boolean;
    /** Set color for Switch */
    SwitchColor?: string;
    /** Set material bar color for Switch */
    barColor?: string;
    /**
     * @ignore
     */
    onBlur?(...args: unknown[]): unknown;
    /**
     * @ignore
     */
    onFocus?(...args: unknown[]): unknown;
    /**
     * Callback fired when the value is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     */
    onChange?(...args: unknown[]): unknown;
    handleOnChange?(...args: unknown[]): unknown;
    switchColor?(...args: unknown[]): unknown;
}

export const Switch = ({
  className,
  switchColor,
  isChecked,
  labelText,
  labelPosition,
  switchSize,
  isMaterial,
  barColor,
  onChange,
  onFocus,
  onBlur,
  handleOnChange,
  ...props
}: SwitchProps) => {
  // use toggle hooks
  const [toggleValue, toggleHandler] = useToggle(isChecked);

  // Add all classs to an array
  const addAllClasses = ['reusecore__switch'];

  // Add label position class
  if (labelPosition) {
    addAllClasses.push(`label_${labelPosition}`);
  }

  // isMaterial prop checking
  if (isMaterial) {
    addAllClasses.push('is-material');
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  handleOnChange = event => {
    toggleHandler();
    onChange?.(!toggleValue);
  };

  const LabelField = labelText && (
    <span className="reusecore__field-label">{labelText}</span>
  );

  const position = labelPosition || 'top';

  return (
    <SwitchStyle
      className={addAllClasses.join(' ')}
      // @ts-ignore: TS is complaining about color property
      switchColor={switchColor}
      switchSize={switchSize}
      barColor={barColor}
      {...props}
    >
      <label>
        {position === 'left' || position === 'right' || position === 'top'
          ? LabelField
          : ''}

        <input
          checked={toggleValue}
          onChange={handleOnChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className="switch"
          type="checkbox"
          value={toggleValue}
        />
        <div>
          <div />
        </div>
        {position === 'bottom' && LabelField}
      </label>
    </SwitchStyle>
  );
};

Switch.defaultProps = {
  isChecked: false,
  labelPosition: 'top',
  onBlur: () => null,
  onFocus: () => null,
  onChange: () => null,
};