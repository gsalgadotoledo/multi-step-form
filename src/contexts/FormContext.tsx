import React, { createContext, useState, useContext } from 'react';

export interface FormState {
  currentStep: number;
  step1: {
    name: string | null;
    emailAddress: string | null;
    phoneNumber: string | null;
  };
  step2: {
    plan: number | null; // 0, 1, 2
    billing: boolean; // false, true, Monthly and Yearly
  };
  step3: {
    addOns: number[]; // 0, 1, 2
  };
}

interface FormProviderProps {
  children: React.ReactNode;
}

const initialState: FormState = {
  currentStep: 0,
  step1: {
    name: null,
    emailAddress: null,
    phoneNumber: null,
  },
  step2: {
    plan: null, // 0, 1, 2
    billing: false, // false, true, Monthly and Yearly
  },
  step3: {
    addOns: [], // 0, 1, 2
  },
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
