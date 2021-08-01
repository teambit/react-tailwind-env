import React from 'react';
import { render } from '@testing-library/react';
import { BasicThemedComponent } from './themed-component.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicThemedComponent />);
  const rendered = getByText('hello from ThemedComponent');
  expect(rendered).toBeTruthy();
});
