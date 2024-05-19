import type { ComponentProps } from "react";
import { Text as RNWText } from "react-native";

type TextProps = ComponentProps<typeof RNWText>;

const Text = (props: TextProps) => {
  return <RNWText {...props} />;
};

export default Text;
