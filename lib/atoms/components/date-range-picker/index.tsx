import moment from 'moment';
import { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import DateRangePickerStyle from './daterangepicker.style';

/* eslint-disable-next-line */
export interface DateRangePickerProps {
  showClearDates?: boolean;
  className?: string;
  item?: any;
  /** labelText of the date-picker field */
  labelText?: string;
  /** labelText of the date-picker field */
  labelPosition?: 'top' | 'bottom' | 'right' | 'left';
  /** startDateId of the date-picker field */
  startDateId: string;
  /** endDateId of the date-picker field */
  endDateId: string;
  /** startDatePlaceholderText of the date-picker field */
  startDatePlaceholderText?: string; //;
  /** endDatePlaceholderText of the date-picker field */
  endDatePlaceholderText?: string;
  /** disabled of the date-picker field */
  disabled?:  boolean | 'startDate' | 'endDate';
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

export class DateRangePickerBox extends Component<
  DateRangePickerProps,
  { focusedInput: any; startDate: moment.Moment | null; endDate: moment.Moment  | null; dateFormat: string }
> {
  constructor(props: DateRangePickerProps) {
    super(props);
    const { item } = this.props;
    const separator = item && item.separator ? item.separator : '-';
    const dateFormat = item && item.format ? item.format : 'llll';
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
      dateFormat,
    };
    this.onDateChangeFunc = this.onDateChangeFunc.bind(this);
    this.onFocusChangeFunc = this.onFocusChangeFunc.bind(this);
  }

  onDateChangeFunc = ({ startDate, endDate }: { startDate: moment.Moment | null; endDate: moment.Moment  | null; }) => {
    // ********* Date passing will be START here.... *********
    // const { item } = this.props;
    // const { dateFormat, separator } = this.state;
    // if (!startDate && !endDate) {
    //   this.props.updateData(item, separator);
    //   return;
    // }
    // this.setState({
    //   startDate,
    //   endDate
    // });
    // if (startDate !== null && endDate !== null) {
    //   moment.locale('en');
    //   this.props.updateData(
    //     item,
    //     `${startDate.format(dateFormat)} ${separator} ${endDate.format(
    //       dateFormat
    //     )}`
    //   );
    // }
    // ********* Date passing will be END here.... *********
    this.setState({ startDate, endDate });
  };

  onFocusChangeFunc = (focusedInput: any) => {
    return this.setState({ focusedInput });
  };

  override render() {
    const { focusedInput, startDate, endDate } = this.state;
    const {
      className,
      labelText = 'DateRangePickerBox',
      labelPosition = 'top',
      item,
      startDateId,
      endDateId,
      startDatePlaceholderText,
      endDatePlaceholderText,
      disabled,
      showClearDates,
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
      startDateId: startDateId ? startDateId : 'start_unique_id',
      endDateId: endDateId ? endDateId : 'end_date_unique_id',
      startDate,
      endDate,
      focusedInput,
      startDatePlaceholderText,
      endDatePlaceholderText,
      disabled,
      isRTL,
      showClearDates,
      orientation,
      anchorDirection,
      withPortal,
      withFullScreenPortal,
      onFocusChange: this.onFocusChangeFunc,
      onDatesChange: this.onDateChangeFunc,
      ...props,
    };
    // if (item && item.locale) {
    //   moment.locale(item.locale);
    // } else {
    //   moment.locale('en');
    // }
    // console.log(datePickerPropsOptions, 'datePickerPropsOptions');
    return (
        <DateRangePickerStyle className={addAllClasses.join(' ')}>
          <label>
            {position === 'left' || position === 'right' || position === 'top'
              ? LabelField
              : null}
            <DateRangePicker {...datePickerPropsOptions} />
            {/* <DateRangePicker
              startDate={startDate} // momentPropTypes.momentObj or null,
              startDateId={startDateId} // PropTypes.string.isRequired,
              endDate={endDate} // momentPropTypes.momentObj or null,
              endDateId={endDateId} // PropTypes.string.isRequired,
              onDatesChange={onDateChangeFunc} // PropTypes.func.isRequired,
              focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={onFocusChangeFunc} // PropTypes.func.isRequired,
            /> */}
            <div>
              <div />
            </div>
            {position === 'bottom' && LabelField}
          </label>
        </DateRangePickerStyle>
    );
  }
}
