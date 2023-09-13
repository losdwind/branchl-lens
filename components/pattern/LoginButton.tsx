import React from "react";
import {
  ChainId,
  useAddress,
  useSDK,
  useNetworkMismatch,
  ConnectWallet,
  useSwitchChain,
} from "@/utils/thirdwebWrapper";
import login from "@/api/lens/auth/useLogin";
import useLensUser from "@/api/lens/auth/useLensUser";
import { Text, TextButton, Box, IconButton } from "@/components";
import Avatar from "@/components/Avatar";
import { Link } from "expo-router";
import useLogin from "@/api/lens/auth/useLogin";

export default function LoginButton() {
  const sdk = useSDK();
  const address = useAddress();
  const isWrongNetwork = useNetworkMismatch();
  const { isSignedIn, loadingSignIn, profile, loadingProfile } = useLensUser();
  const { mutate: requestLogin } = useLogin();
  const switchNetwork = useSwitchChain();
  // connected a wallet
  console.log("address", address);
  console.log("isWrongNetwork", isWrongNetwork);
  if (!address) {
    return <ConnectWallet />;
  }

  // if (isWrongNetwork) {
  //   return (
  //     <TextButton
  //       onPress={() =>  switchNetwork?.(ChainId.Polygon)}
  //       label={"Swtich Network"}
  //     />
  //   );
  // }

  // Loading profile
  if (loadingSignIn) {
    <Text variant="subheadline">Signing In...</Text>;
  }

  if (!isSignedIn) {
    return (
      <TextButton
        onPress={() => {
          if (isWrongNetwork) {
            switchNetwork(ChainId.Polygon);
          }
          requestLogin();
        }}
        label={isWrongNetwork ? "Switch Network" : "Sign In with Lens"}
      />
    );
  }

  // if not signed in, then sign in

  // async function generateLensProfile() {}

  // check if profile exists
  if (!profile) {
    return (
      <>
        <Text>No Lens Profile</Text>
        {/* <TextButton onPress={generateLensProfile} label={"Generate"} /> */}
      </>
    );
  }

  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      gap={"m"}
      padding={"l"}
    >
      {/* <Avatar variant={"l"} url={""} /> */}
      <Text variant={"headline"}>{profile.defaultProfile?.handle}</Text>
      {/* 
        <Link href="/(tabs)/home/">
          <TextButton label="home" onPress={() => {}} />
        </Link>
        <Link href="/login">
          <TextButton label="login" onPress={() => {}} />
        </Link> */}
    </Box>
  );
}
