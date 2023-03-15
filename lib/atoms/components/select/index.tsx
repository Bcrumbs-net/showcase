import ReactSelect from 'react-select';
import SelectStyle from './select.style';

/* eslint-disable-next-line */
export interface SelectProps {
    /** You can add your custom class for select wrapper component.
     * note: We manualy add react-select className and classNamePrefix props value */
    className?: string;
    /** labelText of the select field */
    labelText?: string;
    /** Set label position of the select field. By default it's top */
    labelPosition?: "top" | "bottom" | "left" | "right";
}

export const Select = ({ className, labelText, labelPosition, ...props }: SelectProps) => {
  // Add all classes to an array
  const addAllClasses = ['reusecore__select'];

  // Add label position class
  if (labelPosition) {
    addAllClasses.push(`label_${labelPosition}`);
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  const LabelField = labelText && (
    <span className="reusecore__field-label">{labelText}</span>
  );

  const position = labelPosition || 'top';

  return (
    <SelectStyle className={addAllClasses.join(' ')}>
      {position === 'left' || position === 'right' || position === 'top'
        ? LabelField
        : ''}

      <ReactSelect
        className="select-field__wrapper"
        classNamePrefix="select"
        {...props}
      />
      {position === 'bottom' && LabelField}
    </SelectStyle>
  );
};

Select.defaultProps = {
  as: 'div',
  labelPosition: 'top',
};