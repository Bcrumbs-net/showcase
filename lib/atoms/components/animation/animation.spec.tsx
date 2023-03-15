import { render } from '@testing-library/react';

import Animation from '.';

describe('Animation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Animation />);
    expect(baseElement).toBeTruthy();
  });
});
