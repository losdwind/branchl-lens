import React from "react";
import {ThirdwebProvider as Provider} from "@/utils/thirdwebWrapper";
import {
  EXPO_PUBLIC_THIRDWEB_ACTIVE_CHAIN,
  EXPO_PUBLIC_THIRDWEB_CLIENT_ID,
} from "@env";

export function ThirdwebProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider
      activeChain={EXPO_PUBLIC_THIRDWEB_ACTIVE_CHAIN}
      clientId={EXPO_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      {children}
    </Provider>
  );
}
