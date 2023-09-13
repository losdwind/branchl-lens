import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  TextInput,
} from "react-native";
import {
  EditScreenInfo,
  Box,
  Text,
  TextButton,
  IconButton,
} from "@/components";
import { CardMoment } from "@/components/pattern/CardMoment";
import { Stack, Link } from "expo-router";

import { Publication, PublicationTypes } from "@/api/lens/generated";
import useLensUser from "@/api/lens/auth/useLensUser";
import { useState } from "react";
import LoginButton from "@/components/pattern/LoginButton";
import { usePublicationsQuery } from "@/api/lens/generated";

export default function HomeScreen() {
  // Get the SDK and signer for us to use for interacting with the lens smart contract
  // Load the same queries we did on the server-side.
  // Will load data instantly since it's already in the cache.
  const { isSignedIn, profile } = useLensUser();
  console.log("profile", profile);

  // When the profile is loaded, load the publications for that profile
  const { data: publications, isLoading: loadingPublications } =
    usePublicationsQuery(
      {
        request: {
          profileId: profile?.defaultProfile?.id,
          limit: 10,
          publicationTypes: [PublicationTypes.Post],
        },
      },
      {
        enabled: !!profile?.defaultProfile?.id,
      }
    );

  const filters = ["All", "Moment", "Todo", "Person", "Branch"]; // Replace with your actual filters
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filterFunction = (item: Publication) => {
    if (selectedFilter === "All") {
      return true;
    }

    if (item.metadata.tags) {
      return item.metadata.tags[0] === selectedFilter;
    }

    return true;
  };

  const Item = ({ publication }: { publication: Publication }) => (
    <Box marginVertical={"s"} marginHorizontal={"m"}>
      <CardMoment
        content={publication.metadata.content}
        images={publication.metadata.image ? [publication.metadata.image] : []}
      />
    </Box>
  );

  console.log("publications", publications);

  return (
    <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
      <Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Box
            flexDirection="row"
            justifyContent="flex-start"
            paddingVertical="s"
            gap="s"
            marginHorizontal={"m"}
          >
            {filters.map((filter) => (
              <TextButton
                key={filter}
                label={filter}
                onPress={() => setSelectedFilter(filter)}
                isActive={filter === selectedFilter}
              />
            ))}
          </Box>
        </ScrollView>
      </Box>

      <FlatList
        data={publications?.publications.items.filter((item) =>
          filterFunction(item as Publication)
        )}
        renderItem={({ item }) => <Item publication={item as Publication} />}
        keyExtractor={(item) => item.id}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        inverted
        contentContainerStyle={{ flexDirection: "column-reverse" }}
        ListEmptyComponent={
          <Box alignSelf={"center"}>
            <Text variant={"footnote"}>Loading Publications...</Text>
          </Box>
        }
      />
      <Box alignSelf={"center"} marginVertical={"m"} marginHorizontal={"m"}>
        <Link href={"/(tabs)/home/compose"} asChild>
          <IconButton icon="add" />
        </Link>
      </Box>
    </SafeAreaView>
  );
}
