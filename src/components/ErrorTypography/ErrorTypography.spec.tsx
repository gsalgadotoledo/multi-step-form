import React from 'react';
import { render } from '@testing-library/react';
import { ErrorTypography } from './ErrorTypography';

describe('ErrorTypography', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <ErrorTypography>Please select at least one plan</ErrorTypography>
    );
    const element = getByText(/Please select at least one plan/i);
    expect(element).toBeInTheDocument();
  });
});
