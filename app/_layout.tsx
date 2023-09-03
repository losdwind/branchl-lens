import "../utils/shims";
import { ThirdWebProvider } from "../provider/ThirdwebProvider";
import { ReactQueryProvider } from "../provider/ReactQueryProvider";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { lightTheme, darkTheme, Theme } from "../theme";
import { ThemeProvider, useTheme } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

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
    ...FontAwesome.font,
  });

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

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const theme = useTheme<Theme>();

  return (
    <ThirdWebProvider>
      <ReactQueryProvider>
        <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff123",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{ presentation: "modal", headerTitle: "modals" }}
            />
          </Stack>
        </ThemeProvider>
      </ReactQueryProvider>
    </ThirdWebProvider>
  );
}
