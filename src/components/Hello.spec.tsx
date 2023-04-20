import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hello, HelloProps } from './Hello';

describe('Hello', () => {
  it('renders with default props', () => {
    render(<Hello />);
    const helloElement = screen.getByText('Hello') as HTMLHeadingElement;
    expect(helloElement).toBeInTheDocument();
    expect(helloElement.style.fontWeight).toBe('normal');
  });

  it('renders with primary prop', () => {
    const props: HelloProps = { primary: true };
    render(<Hello {...props} />);
    const helloElement = screen.getByText('Hello') as HTMLHeadingElement;
    expect(helloElement).toBeInTheDocument();
    expect(helloElement.style.fontWeight).toBe('bold');
  });
});
