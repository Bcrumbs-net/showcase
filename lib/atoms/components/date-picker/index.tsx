import { Component } from 'react';
import styled from 'styled-components';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import DatePickerStyle from './datepicker.style';

/* eslint-disable-next-line */
export interface DatePickerProps {
  item?: any;
  className?: string;
  /** labelText of the date-picker field */
  labelText?: string;
  /** labelText of the date-picker field */
  labelPosition?: 'top' | 'bottom' | 'right' | 'left';
  /** placeholder of the date-picker field */
  placeholder?: string;
  /** disabled of the date-picker field */
  disabled?: boolean;
  /** showClearDate of the date-picker field */
  showClearDate?: boolean;
  /** isRTL of the date-picker field */
  isRTL?: boolean;
  /** orientation of the date-picker field */
  orientation?: 'horizontal' | 'vertical';
  /** anchorDirection of the date-picker field */
  anchorDirection?: 'left' | 'right';
  /** withPortal of the date-picker field */
  withPortal?: boolean;
  /** withFullScreenPortal of the date-picker field */
  withFullScreenPortal?: boolean;
}

export class DatePicker extends Component<
  DatePickerProps,
  { focused: boolean; date: Date | null; dateFormat: string }
> {
  constructor(props: DatePickerProps) {
    super(props);
    const date = null;
    this.state = {
      focused: false,
      date,
      dateFormat: 'l',
    };
    this.onDateChangeFunc = this.onDateChangeFunc.bind(this);
    this.onFocusChangeFunc = this.onFocusChangeFunc.bind(this);
  }

  onDateChangeFunc = (date: any) => {
    // ********* Date passing will be START here.... *********
    // const { dateFormat } = this.state;
    // const newDate = date.format(dateFormat);
    // ********* Date passing will be END here.... *********
    this.setState({ date });
  };

  onFocusChangeFunc = ({ focused }: { focused: boolean }) => {
    this.setState({ focused });
  };

  override render() {
    const { focused, date } = this.state;
    const {
      className,
      labelText = 'DatePicker',
      labelPosition = 'top',
      item,
      placeholder,
      disabled,
      showClearDate,
      isRTL,
      orientation,
      anchorDirection,
      withPortal,
      withFullScreenPortal,
      ...props
    } = this.props;

    // Add all classs to an array **************
    const addAllClasses = ['reusecore__DatePicker'];
    // Add label position class **************
    if (labelPosition) {
      addAllClasses.push(`label_${labelPosition}`);
    }
    // label control **************
    const position = labelPosition || 'right';
    const LabelField = labelText && (
      <span className="reusecore__field-label">{labelText}</span>
    );
    // className prop checking **************
    if (className) {
      addAllClasses.push(className);
    }

    // DatePicker Props List
    const datePickerPropsOptions = {
      id: item && item.id ? item.id : 'unique_id',
      date,
      focused,
      placeholder,
      disabled,
      isRTL,
      showClearDate,
      orientation,
      anchorDirection,
      withPortal,
      withFullScreenPortal,
      onFocusChange: this.onFocusChangeFunc,
      onDateChange: this.onDateChangeFunc,
      ...props,
    };
    // moment.locale('pl');
    return (
      <DatePickerStyle className={addAllClasses.join(' ')}>
        <label>
          {position === 'left' || position === 'right' || position === 'top'
            ? LabelField
            : null}
          {/*@ts-ignore: Unreachable code error*/}
          <SingleDatePicker {...datePickerPropsOptions} />
          <div>
            <div />
          </div>
          {position === 'bottom' && LabelField}
        </label>
      </DatePickerStyle>
    );
  }
}
