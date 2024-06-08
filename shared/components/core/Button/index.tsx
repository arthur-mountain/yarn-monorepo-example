import type { PropsWithChildren, ButtonHTMLAttributes } from "react";

const Button = (
  props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>,
) => {
  return <button {...props} />;
};

export default Button;
