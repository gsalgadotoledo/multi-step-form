import React from 'react';
import { render, screen } from '@testing-library/react';
import { StepsList } from './StepsList';

describe('StepsList component', () => {
  it('should render the StepsList component', () => {
    render(<StepsList />);
    const paragraphElement = screen.getByText(
      'YOUR INFO'
    ) as HTMLParagraphElement;
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render the StepsList component with children content', () => {
    render(<StepsList />);
    expect(screen.getByText('STEP 1')).toBeVisible();
    expect(screen.getByText('STEP 2')).toBeVisible();
    expect(screen.getByText('STEP 3')).toBeVisible();
    expect(screen.getByText('STEP 4')).toBeVisible();
  });
});
