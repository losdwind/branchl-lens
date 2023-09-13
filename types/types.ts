export enum Theme {
    light = 'light',
    dark = 'dark'
}

export enum Environment {
    testnet = 'testnet',
    mainnet = 'mainnet',
    sandbox = 'sandbox',
}

export interface LensContextType {
    environment: Environment;
    theme: Theme;
    IPFSGateway: string;
}
