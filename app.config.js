// app.config.js
import "dotenv/config"; // loads env vars from EAS and .env files

export default {
  expo: {
    name: "Todo-App",
    slug: "daily-planner",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "todoapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    updates: {
      url: "https://u.expo.dev/87d44aef-514e-4dec-bb5b-efd5eedd717e",
    },
    runtimeVersion: {
      policy: "appVersion",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.rahuldubey.dailyplanner",
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
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      // 👇 Expose the Convex URL here
      convexUrl: process.env.EXPO_PUBLIC_CONVEX_URL,
      eas: {
        projectId: "87d44aef-514e-4dec-bb5b-efd5eedd717e",
      },
    },
    owner: "rahul-dubey",
  },
};
