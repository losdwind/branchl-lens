import "../utils/shims";
import { ThirdwebProvider } from "@/provider/ThirdwebProvider";
import { ReactQueryProvider } from "@/provider/ReactQueryProvider";
import { lightTheme, darkTheme, Theme } from "@/theme";
import { ThemeProvider, useTheme } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, Slot } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { Header } from "@/components/Header";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "EncodeSans-Regular": require("../assets/fonts/EncodeSans-Regular.ttf"),
    "EncodeSans-Medium": require("../assets/fonts/EncodeSans-Medium.ttf"),
    "EncodeSans-Bold": require("../assets/fonts/EncodeSans-Bold.ttf"),
    ...Ionicons.font,
  });

  const colorScheme = useColorScheme();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThirdwebProvider>
      <ReactQueryProvider>
        <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{ presentation: "modal", headerTitle: "modals" }}
            />
          </Stack>
        </ThemeProvider>
      </ReactQueryProvider>
    </ThirdwebProvider>
  );
}
