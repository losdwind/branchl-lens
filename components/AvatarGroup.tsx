import React from "react";
import { Box } from "./Box";
import Avatar from "./Avatar";
import {
  VariantProps,
  createVariant,
  createRestyleComponent,
  LayoutProps,
} from "@shopify/restyle";
import { Theme } from "../theme";

type HorizontalStackedAvatarsProps = VariantProps<Theme, "imageVariants"> & {
  urls: string[];
};

const HorizontalStackedAvatars: React.FC<HorizontalStackedAvatarsProps> = ({
  urls,
  variant,
}) => {
  return (
    <Box flexDirection="row">
      {urls.map((url, index) => (
        <Box
          key={url}
          zIndex={urls.length - index} // Higher zIndex for avatars on the left
          style={{ marginLeft: index > 0 ? -10 : 0 }}
        >
          <Avatar url={url} variant={variant} />
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalStackedAvatars;
