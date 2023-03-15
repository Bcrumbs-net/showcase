import React, { Fragment } from 'react';
import RcDrawer from 'rc-drawer';
//import 'rc-drawer/assets/index.css';

/* eslint-disable-next-line */
export interface DrawerProps {
  /** ClassName of the Drawer */
  className?: string;
  /** Used to render icon, button, text or any elements inside the closeButton prop. */
  closeButton?: React.ReactElement;
  /** Set drawer width. Default value is 300px. */
  width?: string;
  /** Set drawer position left || right || top || bottom. */
  placement?: 'left' | 'right' | 'top' | 'bottom';
  /** drawerHandler could be button, icon, string or any component */
  drawerHandler: React.ReactElement;
  closeButtonStyle?: React.CSSProperties;
  toggleHandler: any;
  open?: boolean;
}

export const Drawer = ({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  placement,
  ...props
}: React.PropsWithChildren<DrawerProps>) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__drawer'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <Fragment>
      {/*@ts-ignore: Unreachable code error*/}
      <RcDrawer
        open={open}
        onMaskClick={toggleHandler}
        className={addAllClasses.join(' ')}
        {...props}
      >
        <>
          <div
            className="reusecore-drawer__close"
            onClick={toggleHandler}
            style={closeButtonStyle}
          >
            {closeButton}
          </div>
          {children}
        </>
      </RcDrawer>
      <div
        className="reusecore-drawer__handler"
        style={{ display: 'inline-block' }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </div>
    </Fragment>
  );
};

Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null,
};
