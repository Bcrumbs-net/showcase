import { useState } from 'react';
import ComponentWrapper from './radioGroup.style';

interface RadioGroupProps {
  /** className of the RadioGroup. */
  className?: string;
  name?: string;
  /** active item value of the RadioGroup. The prop should be a string but in camelCase. */
  value?: string
  /** RadioGroup data in array of object form. Each object item should has 3 properties id, title and text. */
  items?: any[];
  /** This prop contain active radio field value.*/
  onUpdate?(...args: unknown[]): unknown
}

export const RadioGroup = ({ className, name, value, items, onUpdate }: RadioGroupProps) => {
  const [state, setState] = useState({ value: value });

  const onChange = (e: any) => {
    const currentValue = e.target.value;
    setState({
      ...state,
      value: currentValue,
    });
    onUpdate?.(e.target.value);
  };

  const addAllClasses = ['radio_group'];

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ComponentWrapper className={addAllClasses.join(' ')}>
      {items?.map(item => (
        <label
          htmlFor={item.title
            .toLowerCase()
            .split(' ')
            .join('-')}
          key={`radio__group-id${item.id}`}
          className={state.value === item.value ? 'active' : ''}
        >
          <input
            type="radio"
            id={item.title
              .toLowerCase()
              .split(' ')
              .join('-')}
            name={name}
            onChange={onChange}
            value={item.value}
            checked={state.value === item.value}
            disabled={item.disabled}
          />
          {item.title || item.text ? (
            <div className="content">
              <h4>{item.title && item.title}</h4>
              <p>{item.text && item.text}</p>
            </div>
          ) : (
            ''
          )}
        </label>
      ))}
    </ComponentWrapper>
  );
};

/** RadioGroup default type. */
RadioGroup.defaultProps = {
  onUpdate: () => null,
};
