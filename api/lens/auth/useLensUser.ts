import { useAddress } from "../../../utils/thirdwebWrapper";
import { useEffect, useState } from "react";
import { isTokenExpired, readAccessToken } from "@/api/lens/auth/helpers";
import { useDefaultProfileQuery } from "@/api/lens/generated";
import { useQuery } from "@tanstack/react-query";

/**
 * Hook to load the currently signed in Lens user's profile.
 * Returns:
 * - isSignedIn: If they are currently authenticated and their token hasn't expired
 * - loadingSignin: If we are currently checking if they are signed in
 * - profile: The profile of the currently signed in user
 * - loadingProfile: If we are currently loading the profile
 */
export default function useLensUser() {
  const address = useAddress();

  const { data: authenticate, isLoading: loadingSignIn} = useQuery(
    ["lens-user", address],
    // Writing the actual function to check the local storage
    () => readAccessToken()
  )


  const { data: profile, isLoading: loadingProfile } = useDefaultProfileQuery(
    {
      request: {
        ethereumAddress: address,
      },
    },
    {
      enabled: !!address
    }
  );

  const isSignedIn = authenticate?.exp ? isTokenExpired(authenticate?.exp) : false

  return {
    isSignedIn,
    loadingSignIn,
    profile,
    loadingProfile,
  };
}
