import "../utils/shims";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { lightTheme, darkTheme, Theme } from "../theme";
import { ThemeProvider, useTheme } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ThirdwebProvider } from "@thirdweb-dev/react-native";
import {
  EXPO_PUBLIC_THIRDWEB_ACTIVE_CHAIN,
  EXPO_PUBLIC_THIRDWEB_CLIENT_ID,
} from "@env";

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
  const queryClient = new QueryClient();

  return (
    <ThirdwebProvider
      activeChain={EXPO_PUBLIC_THIRDWEB_ACTIVE_CHAIN}
      clientId={EXPO_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </ThirdwebProvider>
  );
}
