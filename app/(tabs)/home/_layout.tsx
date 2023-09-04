import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import {
  EditScreenInfo,
  CardMoment,
  Box,
  Text,
  TextButton,
} from "@/components";
import getProfileByAddress from "@/gql/query/getProfileByAddress";
import getProfile from "@/gql/query/getProfile";
import getPublications from "@/gql/query/getPublications";
import { wallet } from "@/utils/wallet";
import { useQuery } from "@tanstack/react-query";
import Publication from "@/types/Publication";
import useLensUser from "@/utils/useLensUser";
import { useState } from "react";
// import {
//   useAddress,
//   useContract,
//   useSDK,
//   useSigner,
//   Web3Button,
// } from "../../utils/thirdwebWapper"

export default function HomeScreen() {
  // Get the SDK and signer for us to use for interacting with the lens smart contract
  // const sdk = useSDK();
  // const signer = useSigner();
  // const address = useAddress();
  // Load the same queries we did on the server-side.
  // Will load data instantly since it's already in the cache.
  const { isSignedIn } = useLensUser();
  const { data: profile, isLoading: loadingProfile } = useQuery(
    ["profile"],
    () => getProfile("atoms.lens")
  );
  console.log(profile);

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
    <CardMoment
      content={publication.metadata.content}
      images={publication.metadata.image ? [publication.metadata.image] : []}
    />
  );

  if (loadingPublications) {
    return <Text>Loading...</Text>;
  }

  console.log(publications);

  return (
    <SafeAreaView >
      <Box
        flexDirection="row"
        justifyContent="space-between"
        gap={"s"}
        paddingVertical={"s"}
        margin="m"
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
      <FlatList
        data={publications.filter(filterFunction)}
        renderItem={({ item }) => <Item publication={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
