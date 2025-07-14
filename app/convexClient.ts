// convexClient.ts
import { ConvexReactClient } from 'convex/react';
import Constants from 'expo-constants';

const convexUrl = Constants.expoConfig?.extra?.convexUrl;

if (!convexUrl) {
  console.error("❌ Convex URL is missing! Did you configure it in app.config.js?");
}

export const convex = new ConvexReactClient(convexUrl);
