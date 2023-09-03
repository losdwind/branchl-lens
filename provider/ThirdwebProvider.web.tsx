import React from "react";
import { ThirdwebProvider as Provider } from "@thirdweb-dev/react";
import {
  EXPO_PUBLIC_THIRDWEB_ACTIVE_CHAIN,
  EXPO_PUBLIC_THIRDWEB_CLIENT_ID,
} from "@env";

export function ThirdWebProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider
      activeChain={EXPO_PUBLIC_THIRDWEB_ACTIVE_CHAIN}
      clientId={EXPO_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      {children}
    </Provider>
  );
}
