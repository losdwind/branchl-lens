import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableHighlight,
  Modal,
  useColorScheme,
} from "react-native";
// import Video from "react-native-media-console";
import { useContext, useState } from "react";
import { formatDistanceStrict } from "date-fns";
import { Profile, Publication } from "@/api/lens/generated";
import { returnIpfsPathOrUrl } from "@/utils/ipfs";
import { IconButton } from "../Button";
import { lightTheme as ThemeColors, darkTheme, Theme } from "@/theme";
import { Video, ResizeMode, VideoFullscreenUpdate } from "expo-av";
const width = Dimensions.get("window").width;
const IPFSGateway = "https://cloudflare-ipfs.com/ipfs";


export default function CardBranch({
  publication,
  signedInUser,
  hideLikes = false,
  hideComments = false,
  hideMirrors = false,
  hideCollects = false,
  onCollectPress = (publication) => console.log({ publication }),
  onCommentPress = (publication) => console.log({ publication }),
  onMirrorPress = (publication) => console.log({ publication }),
  onLikePress = (publication) => console.log({ publication }),
  onProfileImagePress = (publication) => console.log({ publication }),
}: {
  publication: Publication;
  signedInUser?: Profile;
  hideLikes?: boolean;
  hideComments?: boolean;
  hideMirrors?: boolean;
  hideCollects?: boolean;
  onCollectPress?: (publication: Publication) => void;
  onCommentPress?: (publication: Publication) => void;
  onMirrorPress?: (publication: Publication) => void;
  onLikePress?: (publication: Publication) => void;
  onProfileImagePress?: (publication: Publication) => void;
}) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const ComponentType = isFullScreen ? Modal : View;

  return (
    <View key={publication.id} style={styles.publicationWrapper}>
      <View style={styles.publicationContainer}>
        <View style={styles.userProfileContainer}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => onProfileImagePress(publication)}
          >
            {publication?.profile?.picture?.__typename === "NftImage" ? (
              <Image
                source={{
                  uri: publication?.profile?.picture?.uri,
                }}
                style={styles.smallAvatar}
              />
            ) : publication?.profile?.picture?.__typename !== "MediaSet" ||
              publication.profile.picture ? (
              <View style={styles.missingAvatarPlaceholder} />
            ) : (
              <Image
                source={{
                  uri: publication?.profile?.picture?.original.url,
                }}
                style={styles.smallAvatar}
              />
            )}
          </TouchableHighlight>
        </View>
        <View style={styles.postContentContainer}>
          {publication.__typename === "Mirror" && publication.mirrorOf && (
            <View style={styles.mirrorContainer}>
              <IconButton icon={"aperture-outline"} />
              <Text style={styles.mirrorText}>
                {/* Mirrored by {publication?.originalProfile?.name} */}
                Mirrored by ..
              </Text>
            </View>
          )}
          <View style={styles.postOwnerDetailsContainer}>
            <Text style={styles.postOwnerName}>{publication.profile.name}</Text>
            <Text style={styles.postOwnerHandle}>
              @{publication.profile.handle}
            </Text>
            <Text style={styles.timestamp}>
              • {reduceDate(publication.createdAt)}
            </Text>
          </View>
          {publication.metadata.content && (
            <Text style={styles.postText}>{publication.metadata.content}</Text>
          )}
          {Number(publication.metadata.media.length) > 0 &&
            (publication.metadata.media[0].original.mimeType.includes(
              "image"
            ) ? (
              <Image
                resizeMode="contain"
                source={{
                  uri: returnIpfsPathOrUrl(
                    publication.metadata.media[0].original.url,
                    IPFSGateway
                  ),
                }}
                style={styles.metadataImage}
              />
            ) : (
              <View style={styles.videoContainer}>
                <ComponentType
                  style={{
                    width: "100%",
                    height: 220,
                  }}
                >
                  {/* <Video
                    videoStyle={styles.video}
                    paused={true}
                    showOnStart
                    isFullscreen={isFullScreen}
                    ignoreSilentSwitch={"ignore"}
                    toggleResizeModeOnFullscreen={false}
                    onExitFullscreen={() => {
                      setIsFullScreen(false);
                      setIsPaused(false);
                    }}
                    onEnterFullscreen={() => {
                      setIsFullScreen(true);
                      setIsPaused(false);
                      setTimeout(() => {
                        setIsFullScreen(true);
                      }, 100);
                    }}
                    onBack={() => setIsFullScreen(false)}
                  /> */}
                  <Video
                    source={{
                      uri: publication.metadata.media[0].original.url,
                    }}
                    style={styles.video}
                    useNativeControls={true}
                    isLooping
                    shouldPlay={false}
                    resizeMode={
                      isFullScreen
                        ? ResizeMode.CONTAIN
                        : ResizeMode.COVER
                    }
                    onFullscreenUpdate={(event) => {
                      if (
                        event.fullscreenUpdate === VideoFullscreenUpdate.PLAYER_DID_PRESENT
                      ) {
                        setIsFullScreen(true);
                        setIsPaused(false);
                      } else if (
                        event.fullscreenUpdate === VideoFullscreenUpdate.PLAYER_WILL_DISMISS
                      ) {
                        setIsFullScreen(false);
                        setIsPaused(false);
                      }
                    }}
                  />
                </ComponentType>
              </View>
            ))}
          {publication.stats && (
            <View style={styles.statsContainer}>
              {!hideComments && (
                <View style={styles.statsDetailContainer}>
                  <IconButton
                    icon="chatbox-outline"
                    onPress={() => onCommentPress(publication)}
                  />

                  <Text style={styles.statsDetailText}>
                    {publication.stats.totalAmountOfComments}
                  </Text>
                </View>
              )}
              {!hideMirrors && (
                <View style={styles.statsDetailContainer}>
                  <IconButton
                    icon={"aperture-outline"}
                    onPress={() => onMirrorPress(publication)}
                  />

                  <Text style={styles.statsDetailText}>
                    {publication.stats.totalAmountOfMirrors}
                  </Text>
                </View>
              )}
              {!hideCollects && (
                <View style={styles.statsDetailContainer}>
                  <IconButton
                    icon="file-tray-full-outline"
                    onPress={() => onCollectPress(publication)}
                  />
                  <Text style={styles.statsDetailText}>
                    {publication.stats.totalAmountOfCollects}
                  </Text>
                </View>
              )}
              {!signedInUser && !hideLikes && (
                <View style={styles.statsDetailContainer}>
                  <IconButton
                    icon="heart-outline"
                    onPress={() => onLikePress(publication)}
                  />
                  <Text style={styles.statsDetailText}>
                    {publication.stats.totalUpvotes}
                  </Text>
                </View>
              )}
              {signedInUser && !hideLikes && (
                <View style={styles.statsDetailContainer}>
                  <IconButton
                    icon="heart-sharp"
                    onPress={() => onLikePress(publication)}
                  />
                  <Text style={styles.statsDetailText}>
                    {publication.stats.totalUpvotes}
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

function reduceDate(date: any) {
  const formattedDate = formatDistanceStrict(new Date(date), new Date());
  const dateArr = formattedDate.split(" ");
  const dateInfo = dateArr[1].charAt(0);
  return `${dateArr[0]}${dateInfo}`;
}

const styles = StyleSheet.create({
  videoContainer: {
    width: "100%",
    height: 220,
    marginTop: 10,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  publicationWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, .05)",
    padding: 20,
  },
  publicationContainer: {
    flexDirection: "row",
  },
  userProfileContainer: {},
  missingAvatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
  smallAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postContentContainer: {
    flexShrink: 1,
    paddingLeft: 15,
  },
  postText: {
    flexShrink: 1,
    marginTop: 7,
    marginBottom: 5,
  },
  metadataImage: {
    marginTop: 10,
    flex: 1,
    width: width - 100,
    height: width - 100,
  },
  statsContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  statsDetailContainer: {
    flexDirection: "row",
    marginRight: 20,
    alignItems: "center",
  },
  statsDetailText: {
    marginLeft: 10,
    fontSize: 12,
  },
  postOwnerDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  postOwnerName: {
    fontWeight: "600",
  },
  postOwnerHandle: {
    marginLeft: 4,
    color: "rgba(0, 0, 0, .5)",
  },
  timestamp: {
    marginLeft: 4,
    color: "rgba(0, 0, 0, .5)",
    fontSize: 12,
    fontWeight: "600",
  },
  activityIndicatorContainer: {
    height: 60,
    justifyContent: "center",
    marginBottom: 10,
  },
  mirrorContainer: {
    flexDirection: "row",
  },
  mirrorText: {
    fontWeight: "600",
    color: "rgba(0, 0, 0, .6)",
    fontSize: 12,
    marginBottom: 7,
    marginLeft: 5,
  },
});

const darkThemeStyles = StyleSheet.create({
  videoContainer: {
    width: "100%",
    height: 220,
    marginTop: 10,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  publicationWrapper: {
    borderBottomWidth: 1,
    padding: 20,
    backgroundColor: ThemeColors.colors.cardBackground,
    borderBottomColor: ThemeColors.colors.bodyText,
  },
  publicationContainer: {
    flexDirection: "row",
  },
  userProfileContainer: {},
  missingAvatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
  smallAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postContentContainer: {
    flexShrink: 1,
    paddingLeft: 15,
  },
  postText: {
    flexShrink: 1,
    marginTop: 7,
    marginBottom: 5,
    color: ThemeColors.colors.bodyText,
  },
  metadataImage: {
    marginTop: 10,
    flex: 1,
    width: width - 100,
    height: width - 100,
  },
  statsContainer: {
    marginTop: 20,
    flexDirection: "row",
    paddingLeft: 20,
  },
  statsDetailContainer: {
    flexDirection: "row",
    marginRight: 20,
    alignItems: "center",
  },
  statsDetailText: {
    marginLeft: 10,
    fontSize: 12,
    color: ThemeColors.colors.bodyText,
  },
  postOwnerDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  postOwnerName: {
    fontWeight: "600",
    color: ThemeColors.colors.bodyText,
  },
  postOwnerHandle: {
    marginLeft: 4,
    color: ThemeColors.colors.bodyText,
  },
  timestamp: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "600",
    color: ThemeColors.colors.bodyText,
  },
  activityIndicatorContainer: {
    height: 60,
    justifyContent: "center",
    marginBottom: 10,
  },
  mirrorContainer: {
    flexDirection: "row",
  },
  mirrorText: {
    fontWeight: "600",
    fontSize: 12,
    marginBottom: 7,
    marginLeft: 5,
    color: ThemeColors.colors.bodyText,
  },
});
