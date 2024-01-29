import { useToggle } from '../hooks';
import RadioBoxStyle from './radio.style';

/* eslint-disable-next-line */
export interface RadioProps {
    /** ClassName of the radio */
    className?: string;
    /** labelText of the radio field */
    labelText?: string;
    key?:string;
    /**
     * Note: id and htmlFor must be same.
     */
    htmlFor?: string | number;
    /** Set radio id in number || string */
    id?: string | number;
    /** value of the radio field */
    value?: string;
    /** labelText of the radio field */
    labelPosition?: "right" | "left";
    /** radio toggle state based on isChecked prop */
    isChecked?: boolean;
    /** disabled of the radio field */
    disabled?: boolean;
    isMaterial?: boolean;
    onChange?: (value: string) => void;
}

export const Radio = ({
  className,
  isChecked,
  labelText,
  value,
  id,
  htmlFor,
  isMaterial,
  labelPosition,
  disabled,
  onChange,
  ...props
}: RadioProps) => {

  // Add all classs to an array
  const addAllClasses = ['reusecore__radio'];

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

  const position = labelPosition || 'right';

  // label control
  const LabelField = labelText && (
    <span className="reusecore__field-label">{labelText}</span>
  );

  return (
    <RadioBoxStyle className={addAllClasses.join(' ')} {...props}>
      <label>
        {position === 'left' || position === 'right' ? LabelField : ''}
        <input
          type="radio"
          className="radio"
          id={id?.toString()}
          value={value}
          checked={isChecked}
          onChange={() => {
            if (onChange) {
              onChange(value);
            }
          }}
          disabled={disabled}
          {...props}
        />
        <div />
      </label>
    </RadioBoxStyle>
  );
};

/** Radio default proptype */
Radio.defaultProps = {
  isChecked: false,
  labelText: 'Radio label',
  labelPosition: 'right',
  disabled: false,
};
