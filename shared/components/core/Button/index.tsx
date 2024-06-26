import type { PropsWithChildren, ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return <button {...props}>{children}</button>;
};

export default Button;
