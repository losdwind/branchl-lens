import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Box } from "../../components/Box";
import { Text } from "../../components/Text";
export default function ScoreScreen() {
  return (
    <Box style={styles.container}>
      <Text style={styles.title}>Score</Text>
      <Box style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/score.tsx" />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
