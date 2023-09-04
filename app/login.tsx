import React from "react";
import {
  ChainId,
  useAddress,
  useSDK,
  useNetworkMismatch,
  ConnectWallet,
  useSwitchChain,
} from "@/utils/thirdwebWrapper";
import login from "@/utils/login";
import useLensUser from "@/hooks/useLensUser";
import { Text, TextButton, Box, IconButton } from "@/components";
import Avatar from "@/components/Avatar";
import { Link } from "expo-router";

export default function LoginScreen() {
  const sdk = useSDK();
  const address = useAddress();
  const isWrongNetwork = useNetworkMismatch();
  const switchChain = useSwitchChain();
  const { isSignedIn, setIsSignedIn, loadingSignIn, profile, loadingProfile } =
    useLensUser();

  // connected a wallet
  console.log("address", address)
  if (!address) {
    return (
        <ConnectWallet />
    );
    
  }

  // sign in to lens
  async function signIn() {
    if (!address || !sdk) return;

    if (isWrongNetwork) {
      switchChain(ChainId.Polygon);
    }

    await login(address, sdk);
  }

  // if not signed in, then sign in
  if (!isSignedIn) {
    return (
      <TextButton
        onPress={signIn}
        label={isWrongNetwork ? "Switch Network" : "Sign In with Lens"}
      />
    );
  }

  // Loading profile
  if (loadingSignIn) {
    <Text variant="subheadline">Signing In...</Text>;
  }

  async function generateLensProfile() {}

  // check if profile exists
  if (!profile) {
    return (
      <>
        <Text>No Lens Profile</Text>
        <TextButton onPress={generateLensProfile} label={"Generate"} />
      </>
    );
  }

  if (profile) {
    return (
      <Box justifyContent={"center"} alignItems={"center"} gap={"m"} padding={"l"}>
        <Avatar variant={"l"} url={profile.picture.original.url} />
        <Text variant={"headline"}>{profile.handle}</Text>

        <Link href="/(tabs)/_layout">
          <TextButton label="home" onPress={() => {}} />
        </Link>
        <Link href="/login">
          <TextButton label="login" onPress={() => {}} />
        </Link>
      </Box>
    );
  }
};


