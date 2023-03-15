/* eslint-disable react/jsx-no-useless-fragment */
import { Fragment } from 'react';
import ButtonStyle from './button.style';
import { Loader } from '../loader';
import { themeGet } from 'styled-system';

/* eslint-disable-next-line */
export interface ButtonProps {
  title?: string;
  className?: string;
  /** Add icon */
  type?: "button" | "submit" | "reset";
  /** Add icon */
  icon?: any;
  /** Add loader */
  loader?: any;
  /** Add Material effect */
  isMaterial?: boolean;
  /** Button Loading state */
  isLoading?: boolean;
  /** Button Loading state */
  loaderColor?: string;
  /** If true button will be disabled */
  disabled?: boolean;
  /** Adjust your icon and loader position [if you use loader] */
  iconPosition?: "left" | "right";
  /** Variant change button shape */
  variant?: "textButton" | "outlined" | "fab" | "extendedFab";
  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors?: "primary" | "secondary" | "warning" | "error" | "primaryWithBg" | "secondaryWithBg" | "warningWithBg" | "errorWithBg";
  /**
   * Gets called when the user clicks on the button
   */
  onClick?(...args: unknown[]): unknown;
}

export const Button = ({
  type,
  title,
  icon,
  disabled,
  iconPosition,
  onClick,
  loader,
  loaderColor,
  isMaterial,
  isLoading,
  className,
  ...props
}: ButtonProps) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__button'];

  // isLoading prop checking
  if (isLoading) {
    addAllClasses.push('is-loading');
  }

  // isMaterial prop checking
  if (isMaterial) {
    addAllClasses.push('is-material');
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Checking button loading state
  const buttonIcon =
    isLoading !== false ? (
      <Fragment>
        {loader ? loader : <Loader loaderColor={loaderColor || '#30C56D'} />}
      </Fragment>
    ) : (
      icon && <span className="btn-icon">{icon}</span>
    );

  // set icon position
  const position = iconPosition || 'right';

  return (
    <ButtonStyle
      type={type}
      className={addAllClasses.join(' ')}
      // @ts-expect-error: Property 'icon' does not exist on type
      icon={icon}
      disabled={disabled}
      icon-position={position}
      onClick={onClick}
      {...props}
    >
      {position === 'left' && buttonIcon}
      {title && <span className="btn-text">{title}</span>}
      {position === 'right' && buttonIcon}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button',
};