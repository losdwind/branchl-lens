import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import {
  EditScreenInfo,
  CardMoment,
  Box,
  Text,
  TextButton,
  IconButton,
} from "@/components";
import { Stack, Link } from "expo-router";

import getPublications from "@/api/lens/query/getPublications";
import { wallet } from "@/utils/wallet";
import { useQuery } from "@tanstack/react-query";
import { Publication } from "@/src / graphql / generated";
import useLensUser from "@/hooks/useLensUser";
import { useState } from "react";
import LoginButton from "@/components/LoginButton";

export default function ExploreScreen() {
  // Get the SDK and signer for us to use for interacting with the lens smart contract
  // Load the same queries we did on the server-side.
  // Will load data instantly since it's already in the cache.
  const { isSignedIn, profile } = useLensUser();
  console.log("profile", profile);

  // When the profile is loaded, load the publications for that profile
  const { data: publications, isLoading: loadingPublications } = useQuery(
    ["publications"],
    () => getPublications(profile?.id as string, 10),
    {
      // Only run this query if the profile is loaded
      enabled: !!profile,
    }
  );

  const filters = ["All", "Moment", "Todo", "Person", "Branch"]; // Replace with your actual filters
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filterFunction = (item: Publication) => {
    if (selectedFilter === "All") {
      return true;
    }

    if (!item.metadata.tags) {
      return item.metadata.tags[0] === selectedFilter;
    }

    return true;
  };

  const Item = ({ publication }: { publication: Publication }) => (
    <Box marginVertical={"s"}>
      <Link
        href={{
          pathname: "/(tabs)/explore/[detail]",
          params: { detail: publication.id },
        }}
        asChild
      >
        <Pressable>
          <Box marginHorizontal={"m"}>
            <CardMoment
              content={publication.metadata.content}
              images={
                publication.metadata.image ? [publication.metadata.image] : []
              }
            />
          </Box>
        </Pressable>
      </Link>
    </Box>
  );

  if (loadingPublications) {
    return <Text>Loading Publications...</Text>;
  }

  console.log("publications", publications);

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <FlatList
        data={publications.filter(filterFunction)}
        renderItem={({ item }) => <Item publication={item} />}
        keyExtractor={(item) => item.id}
        inverted
        contentContainerStyle={{ flexDirection: "column-reverse" }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
