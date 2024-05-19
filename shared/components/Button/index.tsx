import type { ComponentProps } from "react";
import { Button as RNWButton } from "react-native";

type ButtonProps = ComponentProps<typeof RNWButton>;

const Button = (props: ButtonProps) => {
  return <Button {...props} />;
};

export default Button;
