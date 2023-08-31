import React, { PropsWithChildren } from "react";
import { TextProps, createText, useTheme } from "@shopify/restyle";
import { Theme } from "../theme";

type TextChildrenProps = TextProps<Theme> & { children: React.ReactNode };

export const Text = createText<Theme>();

export const LargeTitle = ({ children, ...props }: TextChildrenProps) => {
  return (
    <Text variant="largeTitle" {...props}>
      {children}
    </Text>
  );
};

export const Title = ({ children, ...props }: TextChildrenProps) => {
  return (
    <Text variant="title" {...props}>
      {children}
    </Text>
  );
};

export const Headline = ({ children, ...props }: TextChildrenProps) => {
  return (
    <Text variant="headline" {...props}>
      {children}
    </Text>
  );
};

export const Body = ({ children, ...props }: TextChildrenProps) => {
  return (
    <Text variant="body" {...props}>
      {children}
    </Text>
  );
};
export const Subheadline = ({ children, ...props }: TextChildrenProps) => {
  return (
    <Text variant="subheadline" {...props}>
      {children}
    </Text>
  );
};
export const Footnote = ({ children, ...props }: TextChildrenProps) => {
  return (
    <Text variant="footnote" {...props}>
      {children}
    </Text>
  );
};
