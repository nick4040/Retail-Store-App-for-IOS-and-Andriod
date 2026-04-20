export default ({ config }) => ({
  ...config,
  name: "nick40",
  slug: "nick40",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  owner: "nick40",
  runtimeVersion: {
    policy: "appVersion",
  },

  updates: {
    url: "",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.nick40.nick40",
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.nick40.nick40",
    targetSdkVersion: 35,
    compileSdkVersion: 35,
    buildToolsVersion: "35.0.0",
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    "expo-font",
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: "",
    },
    PARSE_APP_ID: process.env.PARSE_APP_ID,
    PARSE_JS_KEY: process.env.PARSE_JS_KEY,
    PARSE_SERVER_URL: process.env.PARSE_SERVER_URL,
  },
});