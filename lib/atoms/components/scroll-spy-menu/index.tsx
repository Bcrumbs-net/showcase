import { useContext } from 'react';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { DrawerContext } from '../drawer-context';

export interface ScrollSpyMenuProps {
  rating: number;

  /** className of the ScrollSpyMenu. */
  className?: string;
  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: any[];
  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName?: string;
  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName?: string;
  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag?: string;
  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style?: object;
  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset?: number;
  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl?: string;
  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate?(...args: unknown[]): unknown;
  drawerClose?: boolean;
}

const ScrollSpyMenuItem = ({
  index,
  itemData,
  toggleDrawer,
  drawerClose,
}: {
  index: number;
  itemData: any;
  toggleDrawer: () => void;
  drawerClose: boolean;
}) => {
  return (
    <li key={`menu-item-${index}`}>
      {itemData.staticLink ? (
        <a href={itemData.path}>{itemData.label}</a>
      ) : drawerClose ? (
        <AnchorLink
          href={itemData.path}
          offset={itemData.offset}
          onClick={toggleDrawer}
        >
          {itemData.label}
        </AnchorLink>
      ) : (
        <AnchorLink href={itemData.path} offset={itemData.offset}>
          {itemData.label}
        </AnchorLink>
      )}
    </li>
  );
};

/* eslint-disable-next-line */
export const ScrollSpyMenu = ({
  className,
  menuItems,
  drawerClose,
  ...props
}: ScrollSpyMenuProps) => {
  const { dispatch } = useContext(DrawerContext);
  // empty array for scrollspy items
  const scrollItems: string[] = [];

  // convert menu path to scrollspy items
  menuItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  // Add all classs to an array
  const addAllClasses = ['scrollspy__menu'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Close drawer when click on menu item
  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <Scrollspy
      items={scrollItems}
      className={addAllClasses.join(' ')}
      // @ts-ignore: TS is complaining about color property
      drawerClose={drawerClose}
      {...props}
    >
      {menuItems.map((itemData, index) => (
        <ScrollSpyMenuItem
          key={`ScrollSpyMenuItem${index}`}
          index={index}
          itemData={itemData}
          toggleDrawer={toggleDrawer}
          drawerClose={drawerClose}
        />
      ))}
    </Scrollspy>
  );
};

ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current',
};
