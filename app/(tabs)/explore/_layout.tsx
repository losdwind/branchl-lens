import { Stack } from "expo-router";
export default function ExploreLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="[detail]" />
    </Stack>
  );
}