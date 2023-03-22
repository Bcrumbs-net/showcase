import { useState } from 'react';
import InputField, { EyeButton } from './input.style';

/* eslint-disable-next-line */
export interface InputProps {
  /** className of the Input component. */
  className?: string;
  /** Set input label value. */
  label?: string;
  /** The input value, required for a controlled component. */
  value?: 'string' | 'number';
  /** Make default input into material style input. */
  isMaterial?: boolean;
  /** Password show hide icon button prop [*only for password field]. */
  passwordShowHide?: boolean;
  /** Set input type of the input element. Default type is text. */
  inputType?: 'text' | 'email' | 'password' | 'number' | 'textarea';
  /** Add icon in input field. This prop will not work with password
   * and textarea field.
   */
  icon?: any;
  /** Set input field icon position. Default position is 'left'. */
  iconPosition?: 'left' | 'right';
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
  placeholder?: string;
  onChange?(...args: unknown[]): unknown;
}

export const Input = ({
  label,
  value,
  onBlur,
  onFocus,
  onChange,
  inputType,
  isMaterial,
  icon,
  iconPosition,
  passwordShowHide,
  className,
  placeholder,
  ...props
}: InputProps) => {
  // use toggle hooks
  const [state, setState] = useState({
    toggle: false,
    focus: false,
    value: '',
  });

  // toggle function
  const handleToggle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  // add focus class
  const handleOnFocus = (event: any) => {
    setState({
      ...state,
      focus: true,
    });
    onFocus?.(event);
  };

  // remove focus class
  const handleOnBlur = (event: any) => {
    setState({
      ...state,
      focus: false,
    });
    onBlur?.(event);
  };

  // handle input value
  const handleOnChange = (event: any) => {
    setState({
      ...state,
      value: event.target.value,
    });
    onChange?.(event.target.value);
  };

  // get input focus class
  const getInputFocusClass = () => {
    if (state.focus === true || state.value !== '') {
      return 'is-focus';
    } else {
      return '';
    }
  };

  // init variable
  let inputElement, htmlFor;

  // Add all classs to an array
  const addAllClasses = ['reusecore__input'];

  // Add is-material class
  if (isMaterial) {
    addAllClasses.push('is-material');
  }

  // Add icon position class if input element has icon
  if (icon && iconPosition) {
    addAllClasses.push(`icon-${iconPosition}`);
  }

  // Add new class
  if (className) {
    addAllClasses.push(className);
  }

  // if lable is not empty
  if (label) {
    htmlFor = label.replace(/\s+/g, '_').toLowerCase();
  }

  // Label position
  const LabelPosition = isMaterial === true ? 'bottom' : 'top';

  // Label field
  const LabelField = label && <label htmlFor={htmlFor}>{label}</label>;

  // Input type check
  switch (inputType) {
    case 'textarea':
      inputElement = (
        <textarea
          {...props}
          id={htmlFor}
          name={htmlFor}
          value={state.value}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
        />
      );
      break;

    case 'password':
      inputElement = (
        <div className="field-wrapper">
          <input
            {...props}
            id={htmlFor}
            name={htmlFor}
            type={state.toggle ? 'password' : 'text'}
            value={state.value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
          />
          {passwordShowHide && (
            <EyeButton
              onClick={handleToggle}
              className={state.toggle ? 'eye' : 'eye-closed'}
            >
              <span />
            </EyeButton>
          )}
        </div>
      );
      break;

    default:
      inputElement = (
        <div className="field-wrapper">
          <input
            {...props}
            id={htmlFor}
            name={htmlFor}
            type={inputType}
            value={state.value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            placeholder={placeholder}
            onFocus={handleOnFocus}
          />
          {icon && <span className="input-icon">{icon}</span>}
        </div>
      );
  }

  return (
    <InputField
      className={`${addAllClasses.join(' ')} ${getInputFocusClass()}`}
    >
      {LabelPosition === 'top' && LabelField}
      {inputElement}
      {isMaterial && <span className="highlight" />}
      {LabelPosition === 'bottom' && LabelField}
    </InputField>
  );
};

Input.defaultProps = {
  inputType: 'text',
  isMaterial: false,
  iconPosition: 'left',
  onBlur: () => null,
  onFocus: () => null,
  onChange: () => null,
};
