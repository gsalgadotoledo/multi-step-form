import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddOnSelector from './AddOnSelector';

describe('AddOnSelector', () => {
  const testOptions = [
    {
      title: 'Option 1',
      subtitle: 'Subtitle 1',
      price: '$10',
      id: 1,
    },
    {
      title: 'Option 2',
      subtitle: 'Subtitle 2',
      price: '$20',
      id: 2,
    },
  ];

  it('renders correctly', () => {
    const { getByRole } = render(<AddOnSelector options={testOptions} />);
    expect(
      getByRole('checkbox', { name: `Checkbox for ${testOptions[0].title}` })
    ).toBeInTheDocument();
    expect(
      getByRole('checkbox', { name: `Checkbox for ${testOptions[1].title}` })
    ).toBeInTheDocument();
  });

  it('handles onChange callback', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <AddOnSelector options={testOptions} onChange={handleChange} />
    );

    fireEvent.click(
      getByRole('checkbox', { name: `Checkbox for ${testOptions[0].title}` })
    );
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith({ 1: true });
  });
});
