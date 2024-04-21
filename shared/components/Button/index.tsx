import type { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => {
  return <button type="button">{children}</button>;
};

export default Button;
