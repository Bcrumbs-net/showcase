import { useToggle } from '../hooks';
import CheckBoxStyle from './checkbox.style';

/* eslint-disable-next-line */
export interface CheckboxProps {
    /** ClassName of the Checkbox */
    className?: string;
    /** labelText of the checkbox field */
    labelText?: string;
    /**
     * Note: id and htmlFor must be same.
     */
    htmlFor?: string | number;
    /** Set checkbox id in number || string */
    id?: string | number;
    /** value of the checkbox field */
    value?: string;
    /** labelText of the checkbox field */
    labelPosition?: "right" | "left";
    /** Checkbox toggle state based on isChecked prop */
    isChecked?: boolean;
    /** disabled of the checkbox field */
    disabled?: boolean;
    /** isMaterial of the checkbox field */
    isMaterial?: boolean;
    onChange?: (isChecked: boolean) => void;
}

export const CheckBox = ({
  className,
  isChecked,
  labelText,
  value,
  id,
  htmlFor,
  labelPosition,
  isMaterial,
  disabled,
  onChange,
  ...props
}: CheckboxProps) => {
  // use toggle hooks

  // Add all classs to an array
  const addAllClasses = ['reusecore__checkbox'];

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

  // label control
  const LabelField = labelText && (
    <span className="reusecore__field-label">{labelText}</span>
  );

  const position = labelPosition || 'right';

  return (
    <CheckBoxStyle className={addAllClasses.join(' ')} {...props}>
      <label htmlFor={htmlFor?.toString()}>
        {position === 'left' || position === 'right' ? LabelField : ''}
        <input
          type="checkbox"
          className="checkbox"
          id={id?.toString()}
          value={value}
          checked={isChecked}
          onChange={() => {
            if (onChange) {
              onChange(!isChecked);
            }
          }}
          disabled={disabled}
          {...props}
        />
        <div />
      </label>
    </CheckBoxStyle>
  );
};

CheckBox.defaultProps = {
  isChecked: false,
  labelText: 'Checkbox label',
  labelPosition: 'right',
  disabled: false,
};