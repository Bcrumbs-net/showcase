import { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks';
import ComponentWrapper, {
  Input,
  SelectWrapper,
  CurrentOption,
  Dropdown,
} from './inputGroup.style';

interface InputGroupProps {
  /** className of the InputGroup. */
  className?: string;
  /** inputType prop for input field type. This should be a number or text. */
  inputType?: "number" | "text";
  /** placeholder text for input field type. */
  placeholder?: string;
  /** Call back function for inout onChange event. */
  inputOnChange?(...args: any[]): any;
  /** currency prop shoude be a string with currency name and symbol. */
  currency?: string;
  /** selectedValue pron shoube be a currency string without symbol but in lowercase. */
  selectedValue?: string;
  /** selectOptions prop contain a set of data in array of object form. It has 3 properties id, value and title. */
  selectOptions?: unknown[];
  /** It contain selected data. */
  selectOnUpdate?(...args: unknown[]): unknown;

  inputValue?: string;
}

export const InputGroup = ({
  className,
  inputType,
  placeholder,
  selectOptions,
  inputValue,
  inputOnChange,
  selectOnUpdate,
  selectedValue,
  currency,
}: InputGroupProps) => {
  const [state, setState] = useState({
    open: false,
    currency,
    selectedValue,
  });

  const handleDropdown = () => {
    setState({
      ...state,
      open: !state.open,
    });
  };

  const handleSelectedData = (item: any) => {
    setState({
      ...state,
      open: false,
      currency: item.title,
      selectedValue: item.value,
    });

    selectOnUpdate?.(item.value);
  };

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setState({ ...state, open: false }));

  const addAllClasses = ['input_group'];
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ComponentWrapper className={addAllClasses.join(' ')}>
      <Input
        type={inputType}
        value={inputValue}
        placeholder={placeholder}
        onChange={inputOnChange}
        required={true}
        aria-label="input"
      />
      <SelectWrapper className="select_wrapper">
        <CurrentOption className="current_option" onClick={handleDropdown}>
          <span className="text">{state.currency}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.994"
            height="10.993"
            viewBox="0 0 14.994 10.993"
          >
            <path
              d="M1452.115,6490.792l-7.028-10.076a.449.449,0,0,1-.083-.26.441.441,0,0,1,.055-.212.467.467,0,0,1,.414-.244h14.056a.467.467,0,0,1,.414.244.445.445,0,0,1-.028.472l-7.028,10.077a.473.473,0,0,1-.773,0Zm0,0"
              transform="translate(-1445.005 -6480)"
              fill="#bac2c9"
            />
          </svg>
        </CurrentOption>
        <Dropdown
          className={`dropdown ${state.open ? 'active' : 'hide'}`}
          ref={dropdownRef}
        >
          {selectOptions?.map((item: any) => (
            <li
              className={
                state.selectedValue === item.value.toLowerCase()
                  ? 'selected'
                  : ''
              }
              key={`option_key${item.id}`}
              //data={item.value.toLowerCase()}
              onClick={() => handleSelectedData(item)}
            >
              {item.title}
            </li>
          ))}
        </Dropdown>
      </SelectWrapper>
    </ComponentWrapper>
  );
};

InputGroup.defaultProps = {
  inputType: 'number',
  selectOptions: [],
  inputOnChange: () => null,
  selectOnUpdate: () => null,
};
