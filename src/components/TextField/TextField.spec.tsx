import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextField, { TextFieldProps } from './TextField';

describe('TextField', () => {
  const setup = (props: TextFieldProps) => render(<TextField {...props} />);
  const onChangeMock = jest.fn();
  const props: TextFieldProps = {
    label: 'Test',
    placeholder: 'Test placeholder',
    value: 'Test value',
    onChange: onChangeMock,
    errorMessage: 'Test error',
  };

  beforeEach(() => {
    setup(props);
  });

  describe('render', () => {
    it('should render label', () => {
      expect(screen.getByText(props.label!)).toBeInTheDocument();
    });

    it('should render placeholder', () => {
      expect(
        screen.getByPlaceholderText(props.placeholder!)
      ).toBeInTheDocument();
    });

    it('should render value', () => {
      expect(screen.getByDisplayValue(props.value!)).toBeInTheDocument();
    });

    it('should render error', () => {
      expect(screen.getByText(props.errorMessage!)).toBeInTheDocument();
    });
  });

  describe('events', () => {
    it('should call onChange when input value changed', () => {
      const input = screen.getByDisplayValue(props.value!);
      fireEvent.change(input, { target: { value: 'New value' } });
      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});
