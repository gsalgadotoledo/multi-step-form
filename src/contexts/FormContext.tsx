import React, { createContext, useState, useContext } from 'react';

interface FormState {
  currentStep: number;
  step1: any;
  step2: any;
  step3: any;
  step4: any;
  step5: any;
}

interface FormProviderProps {
  children: React.ReactNode;
}

const initialState: FormState = {
  currentStep: 0,
  step1: {},
  step2: {},
  step3: {},
  step4: {},
  step5: {},
};

const FormContext = createContext<{
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}>({ formState: initialState, setFormState: () => {} });

export const useFormContext = () => useContext(FormContext);

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formState, setFormState] = useState<FormState>(initialState);

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};
