import React from "react";
import { Video, ResizeMode } from "expo-av";
import { Image } from "expo-image";
import { useQuery } from "@tanstack/react-query";
import { Box } from "./Box";

interface MediaRenderProps {
  url: string;
}

const fetchMedia = async (url: string): Promise<Blob> => {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
};

const MediaRender: React.FC<MediaRenderProps> = ({ url }) => {
  const {
    data: mediaBlob,
    isLoading,
    isError,
  } = useQuery(["media", url], () => fetchMedia(url));

  if (isLoading) {
    return <Box />;
  }

  if (isError || !mediaBlob) {
    return <Box />;
  }

  const uri = URL.createObjectURL(mediaBlob);
  const mimeType = mediaBlob.type;

  if (mimeType.startsWith("image")) {
    return <Image source={{ uri }} style={{ width: 200, height: 200 }} />;
  } else if (mimeType.startsWith("video")) {
    return (
      <Video
        source={{ uri }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
        isLooping
        style={{ width: 300, height: 300 }}
        onReadyForDisplay={() => console.log("Video is ready for display!")}
      />
    );
  }

  // Unsupported media type
  return <Box />;
};

export default MediaRender;

export const ImageRender = ({ uri }: { uri: string }) => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const [isLoading, setIsLoading] = React.useState(true);

  //   // Detect if the URL is from IPFS or Arweave
  //   const isIpfs = uri.startsWith("ipfs:");
  //   const isArweave = uri.startsWith("ar:");

  //   // If it's neither, don't render anything
  //   if (!isIpfs && !isArweave) return null;

  if (isLoading) {
    return <Box />;
  }

  return (
    <Image
      source={uri}
      style={{ width: 200, height: 200 }}
      cachePolicy="disk"
      placeholder={blurhash}
      contentFit="cover"
      transition={1000}
      onLoad={() => setIsLoading(false)}
    />
  );
};

export const VideoRender = ({ uri }: { uri: string }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  if (isLoading) {
    return <Box />;
  }
  return (
    <Video
      source={{ uri }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode={ResizeMode.CONTAIN}
      shouldPlay
      isLooping
      style={{ width: 300, height: 300 }}
      onLoad={() => setIsLoading(false)}
    />
  );
};
