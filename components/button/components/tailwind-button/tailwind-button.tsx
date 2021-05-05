import React from 'react';
import '@shohamgilad/tailwind-test.styles.tailwind-styles';

export type TailwindButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string,
  className: string
};

export function TailwindButton({ text, className }: TailwindButtonProps) {
  return (
    <button className={className}>
      {text}
    </button>
  );
}
