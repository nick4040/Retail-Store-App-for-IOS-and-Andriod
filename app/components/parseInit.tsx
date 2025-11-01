import Parse from "parse/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Configure Parse only once
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(process.env.PARSE_APP_ID, process.env.PARSE_JS_KEY);
Parse.serverURL = process.env.PARSE_SERVER_URL;

export default Parse;

