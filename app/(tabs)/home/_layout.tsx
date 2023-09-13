import { Stack } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
export default function HomeLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="compose" />
    </Stack>
  );
}