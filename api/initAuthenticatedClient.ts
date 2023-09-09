import { EXPO_PUBLIC_LENS_API } from '@env';
import { createClient as createUrqlClient, dedupExchange, fetchExchange } from 'urql';
import { basicClient } from './initClient';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEY } from './initClient';
import { refreshAccessToken } from './lens/auth/refreshAccessToken';

// Create an authenticated client on behalf of the current user.
export async function createAuthenticatedClient() {
  // Read their access token from local storage
  const localStorageValue = await AsyncStorage.getItem(STORAGE_KEY);

  // If we can't find one, the user is not logged in. Return the basic client.
  if (!localStorageValue) {
    return basicClient;
  }

  // Same as above, but we parse the JSON
  const storageData = JSON.parse(localStorageValue);
  if (!storageData) {
    return basicClient;
  }

  // Get a fresh access token by using the refresh token that we just read from storage.
  const accessTokenReq = await refreshAccessToken();
  if (!accessTokenReq) {
    return basicClient;
  }

  // Create a new authenticated client with the new access token as the auth header
  const urqlClient = createUrqlClient({
    url: EXPO_PUBLIC_LENS_API,
    exchanges: [dedupExchange, fetchExchange],
    fetchOptions: {
      headers: {
        "x-access-token": `Bearer ${accessTokenReq.accessToken}`,
      },
    },
  });
  return urqlClient;
}