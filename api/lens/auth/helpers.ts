import AsyncStorage from "@react-native-async-storage/async-storage";
const STORAGE_KEY = "LH_STORAGE_KEY";

// Simple function to say if the token is expired or not
export function isTokenExpired(exp: number) {
    if (!exp) return true;

    if (Date.now() >= exp * 1000) {
        return false;
    }
    return true;
}

// 1. Reading the access token from storage
export async function readAccessToken() {

    const localStorageValue = await AsyncStorage.getItem(STORAGE_KEY);

    if (!localStorageValue) {
        throw new Error("local storage is not available");
    }

    return JSON.parse(localStorageValue) as {
        accessToken: string;
        refreshToken: string;
        exp: number;
    };
}

// 2. Setting the  access token in storage
export async function setAccessToken(accessToken: string, refreshToken: string) {
    // 1. Parse the JWT token to get the expiration date
    const { exp } = parseJwt(accessToken);

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ accessToken, refreshToken, exp }));
}

// 3. Parse the JWT token that comes back and extract the exp date field
function parseJwt(token: string) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );

    return JSON.parse(jsonPayload);
}