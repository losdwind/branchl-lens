import { StyleSheet } from "react-native";
import { EditScreenInfo } from "@/components";
import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
import LoginButton from "@/components/pattern/LoginButton";
import useLensUser from "@/api/lens/auth/useLensUser";

export default function ScoreScreen() {
  return (
    <Box style={styles.container}>
      <Box alignSelf={"center"} marginTop={"xl"}>
        <LoginButton />
      </Box>
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
