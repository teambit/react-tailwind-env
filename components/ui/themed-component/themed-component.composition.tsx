import React from 'react';
import { ThemedComponent } from './themed-component';

export const P16ThemedComponent = () => (
  <ThemedComponent className="p-16">
    This components has a className <strong>p-16</strong> which would have an
    value of <strong>1.6rem</strong> as it was defined in the{" "}
    <strong>tailwind.config.js</strong>
  </ThemedComponent>
);

export const P20ThemedComponent = () => (
  <ThemedComponent className="p-20">
    This components has a className <strong>p-20</strong> which would have an
    value of <strong>2rem</strong> as it was defined in the{" "}
    <strong>tailwind.config.js</strong>
  </ThemedComponent>
);