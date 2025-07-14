import { ColorValue, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";

const EmptyState = () => {
  const { colors, isDarkMode } = useTheme();
  const styles = createHomeStyles(colors);

  const primary50 =
    colors.primary.length === 7
      ? `${colors.primary}80` 
      : colors.primary; 

  return (
    <View
      style={[styles.emptyContainer, { alignItems: "center", padding: 32 }]}
    >
      {/* Outer colorful ring */}
      <LinearGradient
        colors={[colors.primary, primary50]}
        style={{
          width: 110,
          height: 110,
          borderRadius: 55,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 28,
        }}
      >
        {/* Inner subtle frosted circle */}
        <LinearGradient
          colors={[colors.primary, primary50] as [ColorValue, ColorValue]}
          style={{
            width: 94,
            height: 94,
            borderRadius: 47,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: isDarkMode ? "#000" : "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: isDarkMode ? 0.3 : 0.12,
            shadowRadius: 6,
            elevation: 8,
          }}
        >
          <Ionicons name="clipboard" size={50} color={colors.gradients.surface[0]} />
        </LinearGradient>
      </LinearGradient>

      {/* Headline */}
      <Text
        style={{
          fontSize: 22,
          fontWeight: "700",
          color: colors.text,
          marginBottom: 8,
          textAlign: "center",
          fontFamily: "Poppins-SemiBold",
        }}
      >
        No todos yet!
      </Text>

      {/* Sub‑text */}
      <Text
        style={{
          fontSize: 16,
          color: colors.textMuted,
          textAlign: "center",
          lineHeight: 24,
          maxWidth: 280,
          fontFamily: "Poppins-Regular",
        }}
      >
        Add your first todo above to get started
      </Text>
    </View>
  );
};

export default EmptyState;
