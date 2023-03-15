import { render } from '@testing-library/react';

import Rating from '.';

describe('Rating', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rating />);
    expect(baseElement).toBeTruthy();
  });
});
