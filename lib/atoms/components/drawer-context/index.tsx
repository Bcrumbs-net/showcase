import React, { useReducer } from 'react';

interface Store {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
}

type initialStateType = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}

export const DrawerContext = React.createContext<Store>({
  state: initialState,
  dispatch: () => null,
});

export const DrawerProvider = ({
  children,
}: React.PropsWithChildren<Record<string, never>>) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};
