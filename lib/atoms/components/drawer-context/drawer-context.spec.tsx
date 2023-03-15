import { render } from '@testing-library/react';

import DrawerContext from '.';

describe('DrawerContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DrawerContext />);
    expect(baseElement).toBeTruthy();
  });
});
