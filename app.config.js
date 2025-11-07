import appJson from "./app.json";

export default ({ config }) => ({
  ...appJson,
  expo: {
    ...appJson.expo,
    extra: {
      ...appJson.expo.extra,
      PARSE_APP_ID: process.env.PARSE_APP_ID,
      PARSE_JS_KEY: process.env.PARSE_JS_KEY,
      PARSE_SERVER_URL: process.env.PARSE_SERVER_URL,
    },
  },
});
