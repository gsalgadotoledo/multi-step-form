import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FormProvider, useFormContext } from './FormContext';

const TestComponent = () => {
  const { formState, setFormState } = useFormContext();

  return (
    <div>
      <div data-testid="currentStep">{formState.currentStep}</div>
      <button
        onClick={() =>
          setFormState((state) => ({
            ...state,
            currentStep: state.currentStep + 1,
          }))
        }
      >
        increment current step
      </button>
    </div>
  );
};

describe('FormContext', () => {
  it('should increment current step', () => {
    const { getByTestId, getByText } = render(
      <FormProvider>
        <TestComponent />
      </FormProvider>
    );
    const currentStep = getByTestId('currentStep');
    expect(currentStep.textContent).toBe('0');
    fireEvent.click(getByText('increment current step'));
    expect(currentStep.textContent).toBe('1');
  });
});
