// ResetAppModal.tsx
import React from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ColorValue,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/styles/home.styles";

interface ResetAppModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ResetAppModal: React.FC<ResetAppModalProps> = ({
  visible,
  onClose,
  onConfirm,
}) => {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);

  // Helpful when your gradients are typed as string[]:
  const dangerGradient = colors.gradients.danger as [ColorValue, ColorValue];

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      {/* Dark backdrop */}
      <Pressable
        style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)" }}
        onPress={onClose}
      >
        {/* Dialog card */}
        <View
          style={{
            marginHorizontal: 32,
            marginTop: "auto",
            marginBottom: "auto",
            borderRadius: 16,
            backgroundColor: colors.surface,
            padding: 24,
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.12,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          {/* Warning icon */}
          <View style={{ alignItems: "center", marginBottom: 16 }}>
            <Ionicons name="warning-outline" size={48} color={colors.warning} />
          </View>

          {/* Title */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: colors.text,
              textAlign: "center",
              marginBottom: 8,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Reset App
          </Text>

          {/* Body text */}
          <Text
            style={{
              fontSize: 16,
              color: colors.textMuted,
              textAlign: "center",
              lineHeight: 22,
              fontFamily: "Poppins-Regular",
            }}
          >
            ⚠️ This will delete{" "}
            <Text style={{ fontWeight: "700" }}>ALL</Text> your todos
            permanently. This action cannot be undone.
          </Text>

          {/* Buttons */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 24,
              justifyContent: "space-between",
            }}
          >
            {/* Cancel */}
            <TouchableOpacity onPress={onClose} style={{ flex: 1, marginRight: 8 }}>
              <View
                style={{
                  paddingVertical: 12,
                  borderRadius: 10,
                  backgroundColor: colors.border,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: colors.text,
                    fontWeight: "600",
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  Cancel
                </Text>
              </View>
            </TouchableOpacity>

            {/* Delete All */}
            <TouchableOpacity onPress={onConfirm} style={{ flex: 1, marginLeft: 8 }}>
              <LinearGradient
                colors={dangerGradient}
                style={{
                  paddingVertical: 12,
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Delete All
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ResetAppModal;
