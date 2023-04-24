import React from 'react';
import { render } from '@testing-library/react';
import Plan from './Plan';

describe('Plan', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <Plan>
        <h1>Plan</h1>
      </Plan>
    );
    const element = getByText(/Plan/i);
    expect(element).toBeInTheDocument();
  });
});
