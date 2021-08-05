import React, { ReactElement } from "react";

export type ThemedComponentProps = {
  className: string;
  children: (ReactElement<any> | string)[];
};

export function ThemedComponent({ children, className }: ThemedComponentProps) {
  return <div className={className}>{children}</div>;
}
