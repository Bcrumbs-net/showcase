import { useContext } from 'react';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { DrawerContext } from '../../../atoms';

interface ScrollSpyMenuProps {
  /** className of the ScrollSpyMenu. */
  className?: string;

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: string;
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

  isAR?: boolean;
  model: any;
  drawerClose?: any;
}
export const ScrollSpyMenu = ({
  className,
  drawerClose,
  model,
  isAR,
  ...props
}: ScrollSpyMenuProps) => {
  const { dispatch } = useContext(DrawerContext);
  // empty array for scrollspy items
  const scrollItems: any[] = [];


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
      //drawerClose={drawerClose}
      style={{ textAlign: isAR ? 'right' : 'left' }}
      {...props}
    >
      {model.children &&
        model.children
          .filter((m: any) => m.online && m.modelId !== 403193)
          .map((menuItem: any, index: number) => {
            const menu = menuItem.data.reduce(function (map: any, obj: any) {
              map[obj.Key] = obj.Value;
              return map;
            }, {});

            // convert menu path to scrollspy items
            if (menu.path) scrollItems.push(menu.path.slice(1));

            return (
              <li
                key={`menu-item-${index}`}
                style={{ textAlign: isAR ? 'right' : 'left' }}
              >
                {menu && menu.path && menu.path.indexOf('#') !== 0 ? (
                  <a
                    href={menu.path}
                    target={
                      menu.openInNewPage && menu.openInNewPage === 'True'
                        ? '_blank'
                        : '_self'
                    }
                    rel="noreferrer"
                  >
                    {menu.label}
                  </a>
                ) : drawerClose ? (
                  <AnchorLink
                    href={menu.path}
                    offset={menu.offset}
                    onClick={toggleDrawer}
                  >
                    {menu.label}
                  </AnchorLink>
                ) : (
                  <AnchorLink href={menu.path} offset={menu.offset}>
                    {menu.label}
                  </AnchorLink>
                )}
              </li>
            );
          })}
    </Scrollspy>
  );
};

ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current',
};
