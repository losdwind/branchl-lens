import { createClient as createUrqlClient, dedupExchange, fetchExchange } from "urql";
import { refreshAccessToken } from "./auth/refreshAccessToken";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EXPO_PUBLIC_LENS_API } from "@env";

// The key we use to store the access token + refresh token + expiry in local storage`
export const STORAGE_KEY = "LH_STORAGE_KEY";

// The contract address of the Lens smart contract
export const LENS_HUB_CONTRACT_ADDRESS =
  "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d";

// Export a basic unauthenticated client for read operations
export const basicClient = createUrqlClient({
  url: EXPO_PUBLIC_LENS_API,
  exchanges: [dedupExchange, fetchExchange],
});

console.log("baseClient", basicClient);


