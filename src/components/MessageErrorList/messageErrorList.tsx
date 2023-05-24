import { ErrorMessage } from "./styled";
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  success?: boolean
};

export function MessageErrorList({ children, success }: Props) {
  return (
    <ErrorMessage success={success}>
      {children}
    </ErrorMessage>
  );
}
