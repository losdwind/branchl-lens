import { Pressable, StyleSheet } from "react-native";
import { Text } from "./Text";
import React from "react";
import { Box } from "./Box";

// Define TypeScript types for props
type TextButtonProps = {
  label: string;
  onPress: () => void;
  isActive?: boolean;
};

type IconButtonProps = {
  icon: React.ReactNode;
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

export const IconButton: React.FC<IconButtonProps> = ({ icon, onPress }) => {
  return (
    <Box>
      <Pressable onPress={onPress}>{icon}</Pressable>
    </Box>
  );
};
