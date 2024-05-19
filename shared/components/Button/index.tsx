import type { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => <button>{children}</button>;

export default Button;
/*
 *
 *
import type { ComponentProps } from "react";
import { Button as RNWButton } from "react-native";

type ButtonProps = ComponentProps<typeof RNWButton>;

const Button = (props: ButtonProps) => {
  return <Button {...props} />;
};

export default Button;
 * */
