import React from 'react';
import { render } from '@testing-library/react';
import { BasicTailwindButton } from './tailwind-button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTailwindButton />);
  const rendered = getByText('hello from TailwindButton');
  expect(rendered).toBeTruthy();
});
