import React, { useState } from 'react';
import {
  TooltipStyle,
  TriggerStyle,
  BubbleSize,
  BubbleStyle,
} from './tooltip.style';

/* eslint-disable-next-line */
export interface TooltipProps {
  message?: string;
  /** ClassName of the Tooltip */
  className?: string;
  /** Change tooltip tooltipColor */
  tooltipColor?: string;
  /** triggerStyle prop allow to change tooltip trigger fontSize, fontWeight, margin, padding, color and bg color.*/
  triggerStyle?: object;
  /** bubbleSize prop allow to change tooltip's buble width including min and max width.
   * And height including min and max height */
  bubbleSize?: object;
  /** bubbleStyle prop allow to change tooltip's buble boxShadow, color, fontSize, borderRadius */
  bubbleStyle?: object;
  /** Set tooltip position left || right || top || bottom. */
  position?: 'left' | 'right' | 'top' | 'bottom';
}

export const Tooltip = ({
  className,
  position,
  tooltipColor,
  bubbleSize,
  bubbleStyle,
  triggerStyle,
  message,
  children,
  ...props
}: React.PropsWithChildren<TooltipProps>) => {
  // tooltip local state
  const [state, setState] = useState({
    open: false,
  });

  // Add all classs to an array
  const addAllClasses = ['reusecore__tooltip'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // hide tooltip on mouse leave
  const hideTooltip = () => {
    setState({ open: false });
  };

  // show tooltip on mouse over
  const showTooltip = () => {
    setState({ open: true });
  };

  return (
    <TooltipStyle
      className={addAllClasses.join(' ')}
      onMouseLeave={hideTooltip}
      tooltipColor={tooltipColor}
      {...props}
    >
      {state.open && (
        <BubbleSize
          className={`tooltip-bubble tooltip-${position}`}
          {...bubbleSize}
        >
          <BubbleStyle className="tooltip-message" {...bubbleStyle}>
            {message}
          </BubbleStyle>
        </BubbleSize>
      )}
      <TriggerStyle
        className="tooltip-trigger"
        onMouseOver={showTooltip}
        {...triggerStyle}
      >
        {children}
      </TriggerStyle>
    </TooltipStyle>
  );
};

Tooltip.defaultProps = {
  isChecked: false,
};
