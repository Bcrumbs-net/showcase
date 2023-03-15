import { render } from '@testing-library/react';

import DateRangePicker from '.';

describe('DateRangePicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateRangePicker />);
    expect(baseElement).toBeTruthy();
  });
});
