import {
  SpacingProps,
  VariantProps,
  createRestyleComponent,
  createTheme,
  createVariant,
  spacing,
} from "@shopify/restyle";
import { Theme } from "../theme";
import { ComponentProps } from "react";
import { Image, PressableProps } from "react-native";
import { Box } from "./Box";
import { Text } from "./Text";
import { Ionicons } from "@expo/vector-icons";
import MediaRender, { ImageRender, VideoRender } from "./MediaRender";

type Props = VariantProps<Theme, "cardVariants"> &
  PressableProps &
  React.ComponentProps<typeof Box>;

export const Card = createRestyleComponent<Props, Theme>(
  [createVariant({ themeKey: "cardVariants" })],
  Box
);
