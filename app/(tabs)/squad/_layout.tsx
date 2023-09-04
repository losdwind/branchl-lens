import { StyleSheet } from "react-native";

import { EditScreenInfo } from "@/components";
import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
export default function SquadScreen() {
  return (
    <Box style={styles.container}>
      <Text style={styles.title}>Squad</Text>
      <Box style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/squad.tsx" />
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
