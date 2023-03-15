import React, { ReactElement, useState } from 'react';
import TabWrapper, {
  TabMenu,
  MenuItem,
  TabContent,
  TabPanel,
} from './tabs.style';

interface TabProps {
  active: number;
  className?: string;
  children: ReactElement[];
}

export const Tab = ({ active, className, children }: TabProps) => {
  const [state, setState] = useState({
    active: active || 0,
  });

  const handleChange = (index: number) => {
    setState({ active: index });
  };

  const addAllClasses = ['rq_tab'];
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <TabWrapper className={addAllClasses.join(' ')}>
      <TabMenu className="tab_menu">
        {children.map((element, index) => {
          const activeClass = index === state.active ? 'active' : '';

          return (
            <MenuItem
              key={index}
              className={activeClass}
              onClick={() => handleChange(index)}
            >
              {element.props.title}
            </MenuItem>
          );
        })}
      </TabMenu>
      <TabContent className="tab_content">{children[state.active]}</TabContent>
    </TabWrapper>
  );
};

export const Panel = ({ children }: React.PropsWithChildren<Record<string, never>>) => (
  <TabPanel className="tab_panel">{children}</TabPanel>
);
