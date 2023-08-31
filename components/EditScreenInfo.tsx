import React from "react";
import { StyleSheet } from "react-native";
import { Box } from "./Box";
import { Text } from "./Text";
import { ExternalLink } from "./ExternalLink";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <Box>
      <Box style={styles.getStartedContainer}>
        <Text variant={"title"}>Open up the code for this screen:</Text>

        <Box style={styles.codeHighlightContainer}>
          <Text>{path}</Text>
        </Box>

        <Text style={styles.getStartedText}>
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </Box>

      <Box style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <Text style={styles.helpLinkText}>
            Tap here if your app doesn't automatically update after making
            changes
          </Text>
        </ExternalLink>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
