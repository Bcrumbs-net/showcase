import { render } from '@testing-library/react';

import ScrollSpyMenu from '.';

describe('ScrollSpyMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScrollSpyMenu />);
    expect(baseElement).toBeTruthy();
  });
});
