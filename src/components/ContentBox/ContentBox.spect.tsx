import React from 'react';
import { render } from '@testing-library/react';
import { ContentBox } from './ContentBox';

describe('ContentBox', () => {
  it('should render with children', () => {
    const { baseElement } = render(<ContentBox>lorem ipsum</ContentBox>);
    expect(baseElement).toBeTruthy();
  });

  it('should render the children content', () => {
    const { getByText } = render(<ContentBox>lorem ipsum</ContentBox>);
    expect(getByText('lorem ipsum')).toBeTruthy();
  });
});
