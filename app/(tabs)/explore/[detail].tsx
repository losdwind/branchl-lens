import { Text } from "@/components";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
export default function ItemScreen() {
  const { detail } = useLocalSearchParams();
  console.log(detail);
  return (
      <Text>{detail}</Text>
  );
}
