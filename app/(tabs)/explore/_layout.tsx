import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { EditScreenInfo, CardMoment, Box, Text } from "@/components";
import getProfileByAddress from "@/gql/query/getProfileByAddress";
import getProfile from "@/gql/query/getProfile";
import getPublications from "@/gql/query/getPublications";
import { wallet } from "@/utils/wallet";
import { useQuery } from "@tanstack/react-query";
import Publication from "@/types/Publication";
import useLensUser from "@/hooks/useLensUser";
// import {
//   useAddress,
//   useContract,
//   useSDK,
//   useSigner,
//   Web3Button,
// } from "../../utils/thirdwebWapper";

export default function ExploreScreen() {
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

  // When the profile is loaded, load the publications for that profile
  const { data: publications, isLoading: loadingPublications } = useQuery(
    ["publications"],
    () => getPublications(profile?.id as string, 10),
    {
      // Only run this query if the profile is loaded
      enabled: !!profile,
    }
  );

  const Item = ({ publication }: { publication: Publication }) => (
    <CardMoment
      title={publication.metadata.name}
      content={publication.metadata.content}
      images={publication.metadata.image ? [publication.metadata.image] : []}
    />
  );

  if (loadingPublications) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={publications}
        renderItem={({ item }) => <Item publication={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
