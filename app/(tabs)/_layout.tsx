import { Ionicons } from "@expo/vector-icons";
import { backgroundColor, useTheme } from "@shopify/restyle";
import { Link, Tabs, Slot } from "expo-router";
import { Pressable, Platform } from "react-native";
import { Theme } from "@/theme";
import { Box, Text } from "@/components";
import LoginScreen from "../login";
import useLensUser from "@/hooks/useLensUser";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function Layout() {
  const theme = useTheme<Theme>();
  const { isSignedIn } = useLensUser();
  if (Platform.OS === "web") {
    // use a basic layout on web which has a sidebar on the left and the main content on the right.
    return (
      <Box flexDirection={"row"} flexWrap={"wrap"} justifyContent={"center"}>
        <Box width={150} padding={"m"} alignItems={"center"} gap={"m"}>
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
          <Box padding={"m"} justifyContent={"center"} alignItems={"center"}>
            <LoginScreen />
          </Box>
        </Box>
        <Slot />
      </Box>
    );
  }

  console.log("isSignedIN", isSignedIn);

  if (!isSignedIn) {
    return (
      <SafeAreaView>
        <LoginScreen />
      </SafeAreaView>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primaryButtonBackground,
      }}
      initialRouteName="home"
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown:false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-add-circle" color={color} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="information-circle"
                    size={25}
                    color={
                      pressed
                        ? theme.colors.secondaryButtonBackground
                        : theme.colors.inActiveButtonBackground
                    }
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="score"
        options={{
          title: "Score",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-pie-chart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="squad"
        options={{
          title: "Squads",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-people-circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-football" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
