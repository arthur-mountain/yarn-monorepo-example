import type { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren;

const Button = (props: ButtonProps) => {
  return <button {...props} />;
};

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
