import React from 'react';
import { render,test,expect} from '@testing-library/react';
import Button from './Button';

test('renders button with correct label', () => {
  const { getByText } = render(<Button label="Click me" />);
  const buttonElement = getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});