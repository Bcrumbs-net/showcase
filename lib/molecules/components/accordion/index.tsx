import React from 'react';
import {
  AccordionWrapper,
  AccordionItemWrapper,
  AccordionTitleWrapper,
  AccordionItemButtonWrapper,
  AccordionBodyWrapper,
  IconWrapper,
  IconWrapperAR,
  OpenIcon,
  CloseIcon,
} from './accordion.style';

interface AccordionProps {
  /** ClassName of the Accordion. Default class is reusecore__accordion*/
  className?: string
  allowZeroExpanded?: boolean;
}

const Accordion = ({ className, children, allowZeroExpanded = true }: React.PropsWithChildren<AccordionProps>) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__accordion'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <AccordionWrapper
      allowZeroExpanded={allowZeroExpanded}
      className={addAllClasses.join(' ')}
    >
      {children}
    </AccordionWrapper>
  );
};

const AccordionItem = ({ className, children }: React.PropsWithChildren<AccordionProps>) => {
  // Add all classs to an array
  const addAllClasses = ['accordion__item'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <AccordionItemWrapper className={addAllClasses.join(' ')}>
      {children}
    </AccordionItemWrapper>
  );
};

const AccordionTitle = ({ className, children }: React.PropsWithChildren<AccordionProps>) => {
  // Add all classs to an array
  const addAllClasses = ['accordion__header'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <AccordionTitleWrapper className={addAllClasses.join(' ')}>
      <AccordionItemButtonWrapper>{children}</AccordionItemButtonWrapper>
    </AccordionTitleWrapper>
  );
};

const AccordionBody = ({ className, children }: React.PropsWithChildren<AccordionProps>) => {
  // Add all classs to an array
  const addAllClasses = ['accordion__body'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <AccordionBodyWrapper className={addAllClasses.join(' ')}>
      {children}
    </AccordionBodyWrapper>
  );
};

export {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  IconWrapperAR,
  OpenIcon,
  CloseIcon,
};
