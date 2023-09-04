import React from "react";
import { Image } from "expo-image";
import {
  VariantProps,
  createVariant,
  createRestyleComponent,
  LayoutProps,
} from "@shopify/restyle";
import { Theme } from "../theme";

type Props = VariantProps<Theme, "imageVariants"> &
  React.ComponentProps<typeof Image>;

const RestyleImage = createRestyleComponent<Props, Theme>(
  [createVariant({ themeKey: "imageVariants" })],
  Image
);

type AvatarProps = VariantProps<Theme, "imageVariants"> & {
  url: string;
};

const Avatar: React.FC<AvatarProps> = ({ url, variant }) => {
  return <RestyleImage source={{ uri: url }} variant={variant}/>;
};

export default Avatar;
