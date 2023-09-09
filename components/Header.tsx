import { Link } from "expo-router";
import { Box } from "./Box";
import { Text } from "./Text";

export const Header = () => {
    return (
      <Box flexDirection={"row"} padding={"m"} alignItems={"center"} gap={"m"}>
        <Link href="/home">
          <Text variant="headline">Home</Text>
        </Link>
        <Link href="/score">
          <Text variant="headline">Score</Text>
        </Link>
        <Link href="/squad">
          <Text variant="headline">Squads</Text>
        </Link>
        <Link href="/explore">
          <Text variant="headline">Explore</Text>
        </Link>
      </Box>
    );
}