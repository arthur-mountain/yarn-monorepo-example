import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text>click</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
  },
});

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
