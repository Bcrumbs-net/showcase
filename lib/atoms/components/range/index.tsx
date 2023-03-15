
import Rheostat from 'rheostat';
import 'rheostat/initialize';
import RangeBoxStyle from './range.style';

/* eslint-disable-next-line */
export interface RangeProps {
  className?: string;
  /** labelText of the range-box field */
  labelText?: string;
  /** labelText of the range-box field */
  labelPosition?: 'top' | 'bottom' | 'right' | 'left';
  // /** type of the range-box  */
  type: 'range' | 'slide';
  // /** toolitip-placement of the range-box [for type="range" only]  */
  // placement: PropTypes.oneOf([
  //   'left',
  //   'right',
  //   'top',
  //   'bottom',
  //   'topLeft',
  //   'topRight',
  //   'bottomLeft',
  //   'bottomRight'
  // ]),

  /** Minimum value of the range-box field */
  min: number;
  /** Maximum value of the range-box field */
  max: number;
}

const handleChange = (props: any) => {
  console.log(props, 'current range value');
};

//Main Component
export const Range = ({
  className,
  labelText,
  labelPosition,
  type,
  ...props
}: RangeProps) => {
  const { min, max } = props;
  const initValue = min ? min : 0;
  const lastValue = max ? max : 100;

  // Add all classs to an array
  const addAllClasses = ['reusecore__rangebox'];
  // Add label position class
  if (labelPosition) {
    addAllClasses.push(`label_${labelPosition}`);
  }
  // label control
  const position = labelPosition || 'right';
  const LabelField = labelText && (
    <span className="reusecore__field-label">{labelText}</span>
  );
  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
      <RangeBoxStyle className={addAllClasses.join(' ')}>
        <label>
          {position === 'left' || position === 'right' || position === 'top'
            ? LabelField
            : ''}
          <Rheostat
            min={initValue}
            max={lastValue}
            values={[initValue, lastValue]}
            onChange={handleChange}
          />
          <div>
            <div />
          </div>
          {position === 'bottom' && LabelField}
        </label>
      </RangeBoxStyle>
  );
};

Range.defaultProps = {
  labelText: 'ReuseCore RangeBox',
  labelPosition: 'top',
  // type: 'range',
  // disabled: false,
  min: 0,
  max: 100,
  // stepper: 5
  // unit: ' BDT',
  // placement: 'top',
  // slideDefaultValue: 3,
  // rangeDefaultValue: [20, 50],
  // dots: true,
  // vertical: false
};
