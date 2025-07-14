import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import Toast, {
  BaseToast,
  ErrorToast,
  ToastConfig,
  BaseToastProps,
} from "react-native-toast-message";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export const toastConfig: ToastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: "#4CAF50",
        height: 60,
        justifyContent: "center", // vertically center content
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingVertical: 12,
        alignItems: "center", // horizontally center content
      }}
      text1Style={{
        fontSize: 20, // slightly reduced to balance space
        fontWeight: "600",
        textAlign: "center", // center text
      }}
      text2Style={{
        fontSize: 16,
        color: "#333",
        textAlign: "center", // center text
      }}
    />
  ),

  error: (props: BaseToastProps) => (
   <ErrorToast
  {...props}
  style={{
    borderLeftColor: "#f44336",
    height: 55,
    justifyContent: "center",      // vertically center content
  }}
  contentContainerStyle={{
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",          // horizontally center content
  }}
  text1Style={{
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",           // center text
  }}
  text2Style={{
    fontSize: 14,
    textAlign: "center",           // center text
  }}
/>

  ),
};

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
        <Toast config={toastConfig} />
      </ThemeProvider>
    </ConvexProvider>
  );
}
