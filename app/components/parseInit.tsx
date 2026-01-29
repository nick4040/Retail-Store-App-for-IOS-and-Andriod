import Parse from "parse/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import * as Crypto from "expo-crypto";

// Polyfill for crypto.getRandomValues using expo-crypto
if (typeof global.crypto === "undefined") {
  global.crypto = {} as any;
}

if (typeof global.crypto.getRandomValues === "undefined") {
  global.crypto.getRandomValues = function getRandomValues(array: Uint8Array) {
    const randomBytes = Crypto.getRandomBytes(array.length);
    for (let i = 0; i < array.length; i++) {
      array[i] = randomBytes[i];
    }
    return array;
  };
}

const { PARSE_APP_ID, PARSE_JS_KEY, PARSE_SERVER_URL } = Constants.expoConfig.extra;

// Configure Parse only once
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
Parse.serverURL = PARSE_SERVER_URL;

//WARNING remove this and nothing works
console.log("✅ Parse Config Loaded:");
console.log("PARSE_APP_ID:", PARSE_APP_ID?.slice(0, 6) + "*****");
console.log("PARSE_JS_KEY:", PARSE_JS_KEY ? "Loaded ✔️" : "❌ Missing");
console.log("PARSE_SERVER_URL:", PARSE_SERVER_URL);

export default Parse;

