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

type CardMomentProps = {
  title: string;
  content: string;
  images?: string[];
  videos?: string[];
};

export const CardMoment: React.FC<CardMomentProps> = ({
  title,
  content,
  images,
  videos,
}) => {
  return (
    <Card margin="m">
      <Text variant="headline" numberOfLines={2} ellipsizeMode="tail">
        {title}
      </Text>
      <Text variant="body" numberOfLines={5} ellipsizeMode="tail">
        {content}
      </Text>
      <Text variant="footnote" numberOfLines={1} ellipsizeMode="tail">
        {images?.length} images, {videos?.length} videos
      </Text>
      <ImageRender uri={images ? "https://ipfs.io/" + images[0] : ""} />
      <VideoRender uri={videos ? "https://ipfs.io/" + videos[0] : ""} />
    </Card>
  );
};

interface CardTodoProps {
  title: string;
  content: string;
  isCompleted: boolean;
}

export const CardTodo: React.FC<CardTodoProps> = ({
  title,
  content,
  isCompleted,
}) => {
  return (
    <Card margin="m">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Ionicons
          name={isCompleted ? "checkmark-circle-outline" : "ellipse-outline"}
          size={24}
          color="black"
        />

        <Box flex={1} marginLeft="m" flexDirection="column">
          <Text variant="headline" numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
          <Text variant="body" numberOfLines={2} ellipsizeMode="tail">
            {content}
          </Text>
        </Box>
      </Box>
    </Card>
  );
};

interface CardPersonProps {
  name: string;
  title: string;
  contact: string;
  content: string;
  images?: string[];
}

export const CardPerson: React.FC<CardPersonProps> = ({
  name,
  title,
  contact,
  content,
  images,
}) => {
  return (
    <Card flex={1} flexDirection="column" margin="m">
      <Box flexDirection="row" alignItems="center">
        <ImageRender
          uri={
            images
              ? "https://ipfs.io/" + images[0]
              : "https://i.pravatar.cc/300"
          }
        />
        <Box flexDirection="column" marginLeft="m">
          <Text variant="headline" numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Text>
          <Text variant="subheadline" numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <Text variant="subheadline" numberOfLines={1} ellipsizeMode="tail">
            {contact}
          </Text>
        </Box>
      </Box>
      <Box>
        <Text variant="body" numberOfLines={5} ellipsizeMode="tail">
          {content}
        </Text>
      </Box>
    </Card>
  );
};
