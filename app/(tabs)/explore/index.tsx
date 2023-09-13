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
  Box,
  Text,
  TextButton,
  IconButton,
} from "@/components";
import { Stack, Link } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { Publication, Profile } from "@/api/lens/generated";
import useLensUser from "@/api/lens/auth/useLensUser";
import { useState } from "react";
import {
  PublicationSortCriteria,
  PublicationTypes,
  useExplorePublicationsQuery,
} from "@/api/lens/generated";
import CardBranch from "@/components/pattern/CardBranch";
import { CardMoment } from "@/components/pattern/CardMoment";

export default function ExploreScreen() {
  // Get the SDK and signer for us to use for interacting with the lens smart contract
  // Load the same queries we did on the server-side.
  // Will load data instantly since it's already in the cache.
  const { isSignedIn, profile } = useLensUser();
  console.log("profile", profile);

  const { data: publications, isLoading: loadingPublications } =
    useExplorePublicationsQuery({
      request: {
        publicationTypes: [PublicationTypes.Post],
        sortCriteria: PublicationSortCriteria.TopCommented,
      },
    });

  console.log("explored publication", publications);

  const filters = ["All", "Moment", "Todo", "Person", "Branch"];
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
            {/* <CardMoment
              content={publication.metadata.content}
              images={
                publication.metadata.image ? [publication.metadata.image] : []
              }
            /> */}
            <CardBranch
              publication={publication}
              signedInUser={profile?.defaultProfile as Profile}
            />
          </Box>
        </Pressable>
      </Link>
    </Box>
  );

  if (loadingPublications) {
    return (
      <Box alignSelf={"center"}>
        <Text>Loading Publications...</Text>
      </Box>
    );
  }

  console.log("publications", publications);

  return (
    <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
      <FlatList
        data={publications?.explorePublications.items.filter((item) =>
          filterFunction(item as Publication)
        )}
        renderItem={({ item }) => <Item publication={item as Publication} />}
        keyExtractor={(item) => item.id}
        inverted
        contentContainerStyle={{ flexDirection: "column-reverse" }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
