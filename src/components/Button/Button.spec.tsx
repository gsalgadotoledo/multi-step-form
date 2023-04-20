import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button component', () => {
  it('should render the button component', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeVisible();
  });

  it('should render the button component with children content', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeVisible();
  });

  it('should trigger the onClick event when click on the button', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should render the button component with secondary color', () => {
    render(<Button color="secondary">Click me</Button>);
    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: 'rgb(72, 62, 255);',
    });
  });
});
