import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";

const LoadingSpinner = () => {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={[
        styles.container,
        {
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      {/* Designer spinner */}
      <LottieView
        source={require("@/assets/animations/spinner.json")}
        autoPlay
        loop
        style={{
          width: 230,
          height: 230,
        }}
      />

      {/* Loading text */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: colors.text || "#ffffff",
          textAlign: "center",
          letterSpacing: 0.75,
          lineHeight: 32,
          fontFamily: "Poppins",
        }}
      >
        Loading your todos…
      </Text>
    </LinearGradient>
  );
};

export default LoadingSpinner;
