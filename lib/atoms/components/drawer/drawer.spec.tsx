import { render } from '@testing-library/react';

import Drawer from '.';

describe('Drawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Drawer />);
    expect(baseElement).toBeTruthy();
  });
});
