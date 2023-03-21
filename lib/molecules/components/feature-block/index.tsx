import React, { Fragment } from 'react';
import FeatureBlockWrapper, {
  IconWrapper,
  ContentWrapper,
  ButtonWrapper,
} from './featureBlock.style';

interface FeatureBlockProps {
  id?: string;
  /** ClassName of the FeatureBlock */
  className?: string;
  /** title prop contain a react component. You can use our Heading component from reusecore */
  title?: React.ReactElement;
  /** description prop contain a react component. You can use our Text component from reusecore */
  description?: React.ReactElement;
  /** button prop contain a react component. You can use our Button component from reusecore */
  button?: React.ReactElement;
  /** Set icon position of the FeatureBlock */
  iconPosition?: 'top' | 'left' | 'right';
  /** wrapperStyle prop contain these style system props:  display, flexWrap, width, height, alignItems,
   * justifyContent, position, overflow, space, color, borders, borderColor, boxShadow and borderRadius. */
  wrapperStyle?: object;
  /** iconStyle prop contain these style system props: display, width, height, alignItems, justifyContent,
   * position, space, fontSize, color, borders, overflow, borderColor, boxShadow and borderRadius. */
  iconStyle?: object;
  /** contentStyle prop contain these style system props: width, textAlign and space. */
  contentStyle?: object;
  /** btnWrapperStyle prop contain these style system props: display, space, alignItems,
   * flexDirection and justifyContent. */
  btnWrapperStyle?: object;
  style?: React.CSSProperties;
  icon?: any;
  image?: any;
  additionalContent?: any;
  imgStyle?: any;
  onClick?: any;
  isAR?: boolean;
}

export const FeatureBlock = ({
  id,
  className,
  icon,
  image,
  title,
  button,
  description,
  iconPosition,
  additionalContent,
  wrapperStyle,
  iconStyle,
  imgStyle,
  contentStyle,
  btnWrapperStyle,
  onClick,
  isAR,
  style,
  ...props
}: FeatureBlockProps) => {
  // Add all classs to an array
  const addAllClasses = ['feature__block'];

  // Add icon position class
  if (iconPosition) {
    addAllClasses.push(`icon_${iconPosition}`);
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // check icon value and add
  const Icon = icon && (
    <IconWrapper className="icon__wrapper" {...iconStyle}>
      {icon}
    </IconWrapper>
  );

  const Image = image && (
    <IconWrapper className="img__wrapper" {...iconStyle}>
      {image}
    </IconWrapper>
  );

  return (
    <FeatureBlockWrapper
      className={addAllClasses.join(' ')}
      id={id}
      {...wrapperStyle}
      {...props}
      style={{
        direction: isAR ? 'rtl' : 'ltr',
        cursor: onClick ? 'pointer' : 'default',
      }}
      onClick={onClick ? onClick : () => null}
    >
      {icon ? Icon : null}
      {image ? Image : null}

      {title || description || button ? (
        <Fragment>
          <ContentWrapper
            className="content__wrapper"
            {...contentStyle}
            style={style || { textAlign: isAR ? 'right' : 'left' }}
          >
            {title}
            {description}
            {button && (
              <ButtonWrapper className="button__wrapper" {...btnWrapperStyle}>
                {button}
              </ButtonWrapper>
            )}
          </ContentWrapper>
          {additionalContent}
        </Fragment>
      ) : null}
    </FeatureBlockWrapper>
  );
};

FeatureBlock.defaultProps = {
  iconPosition: 'top',
};
