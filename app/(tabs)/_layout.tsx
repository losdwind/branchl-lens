import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@shopify/restyle";
import { Link, Tabs, Slot } from "expo-router";
import {
  Pressable,
  useColorScheme,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { Theme } from "../../theme";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function Layout() {
  const colorScheme = useColorScheme();
  const theme = useTheme<Theme>();

  if (Platform.OS === "web") {
    // use a basic layout on web which has a sidebar on the left and the main content on the right.
    return (
      <View style={styles.container}>
        <View style={styles.sidebar}>
          <Link href="/" style={styles.link}>
            Home
          </Link>
          <Link href="/score" style={styles.link}>
            Score
          </Link>
          <Link href="/squads" style={styles.link}>
            Squads
          </Link>
          <Link href="/explore" style={styles.link}>
            Explore
          </Link>
        </View>
        <View style={styles.mainContent}>
          <Slot />
        </View>
      </View>
    );
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primaryButtonBackground,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Commits",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
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
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="squads"
        options={{
          title: "Squads",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sidebar: {
    width: 150,
    backgroundColor: "#f5f8fa",
    padding: 10,
    alignItems: "center",
  },
  mainContent: {
    flex: 1,
  },
  link: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
