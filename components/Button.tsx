import { Pressable, StyleSheet } from "react-native";
import { Text } from "./Text";
import React, { forwardRef } from "react";
import { Box } from "./Box";
import { Ionicons } from "@expo/vector-icons";

// Define TypeScript types for props
type TextButtonProps = {
  label: string;
  onPress: () => void;
  isActive?: boolean;
};

type IconButtonProps = {
  icon: string;
  onPress?: () => void;
};

export const TextButton: React.FC<TextButtonProps> = ({
  label,
  onPress,
  isActive,
}) => {
  return (
    <Box
      backgroundColor={
        isActive ? "primaryButtonBackground" : "inActiveButtonBackground"
      }
      paddingVertical="xs"
      paddingHorizontal="m"
      borderRadius="s"
    >
      <Pressable onPress={onPress}>
        <Text color={isActive ? "buttonTextActive" : "buttonTextInactive"}>
          {label}
        </Text>
      </Pressable>
    </Box>
  );
};

export const IconButton = forwardRef((props: IconButtonProps, ref) => {
  const { icon, onPress } = props;

  return (
    <Box ref={ref}>
      <Pressable onPress={onPress}>
        <Ionicons name={icon} size={24} color="black" />
      </Pressable>
    </Box>
  );
});
