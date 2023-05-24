import { ErrorMessage } from "./styled";
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function MessageError({ children }: Props) {
  return (
    <ErrorMessage>
      {children}
    </ErrorMessage>
  );
}
