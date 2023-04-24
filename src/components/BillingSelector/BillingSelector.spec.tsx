import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BillingSelector from './BillingSelector';

describe('BillingSelector', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<BillingSelector />);
    expect(getByRole('checkbox')).toBeInTheDocument();
  });

  it('changes value when clicked', () => {
    const { getByRole } = render(<BillingSelector />);
    const switchElement = getByRole('checkbox');
    expect(switchElement).not.toBeChecked();
    fireEvent.click(switchElement);
    expect(switchElement).toBeChecked();
  });
});
