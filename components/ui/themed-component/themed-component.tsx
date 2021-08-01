import React, { ReactElement } from "react";
import "@shohamgilad/tailwind-test.styles.tailwind-styles/dist/styles.css";

export type ThemedComponentProps = {
  className: string;
  children: (ReactElement<any> | string)[];
};

export function ThemedComponent({ children, className }: ThemedComponentProps) {
  return <div className={className}>{children}</div>;
}
