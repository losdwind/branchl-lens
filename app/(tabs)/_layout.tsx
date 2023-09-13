import { Ionicons } from "@expo/vector-icons";
import { backgroundColor, useTheme } from "@shopify/restyle";
import { Link, Tabs, Slot } from "expo-router";
import { Pressable, Platform } from "react-native";
import { Theme } from "@/theme";
import { Box, Text } from "@/components";
import LoginButton from "../../components/pattern/LoginButton";
import useLensUser from "@/api/lens/auth/useLensUser";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/Header";
import { Stack } from "expo-router";
import HomeScreen from "./home";
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const theme = useTheme<Theme>();

  if(Platform.OS === 'web'){
    return <>
    <Header />
    <Slot />
    </>
  }
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primaryButtonBackground,
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
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
