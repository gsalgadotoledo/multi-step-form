import React from 'react';

export interface HelloProps {
  primary?: boolean;
}

export const Hello = ({ primary = false }: HelloProps) => {
  return <h1 style={{ fontWeight: primary ? 'bold' : 'normal' }}>Hello</h1>;
};
