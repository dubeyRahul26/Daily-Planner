
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";

import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import ResetAppModal from "./ResetAppModal";



const DangerZone: React.FC = () => {
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);

  // Convex mutation to clear all todos
  const clearAllTodos = useMutation(api.todos.clearAllTodos);

  // Modal visibility state
  const [showResetModal, setShowResetModal] = useState(false);

  /**
   * Show the confirmation modal
   */
  const handleResetApp = () => {
    setShowResetModal(true);
  };

  /**
   * Called when user confirms the destructive action in the modal
   */
  const handleConfirmReset = async () => {
    try {
      const result = await clearAllTodos();
      Alert.alert(
        "App Reset",
        `Successfully deleted ${result.deletedCount} todo${
          result.deletedCount === 1 ? "" : "s"
        }. Your app has been reset.`
      );
    } catch (error) {
      console.error("Error deleting all todos", error);
      Alert.alert("Error", "Failed to reset app");
    } finally {
      setShowResetModal(false);
    }
  };

  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.section}>
      {/* Section title */}
      <Text style={styles.sectionTitleDanger}>Reset Options</Text>

      {/* Reset App Row */}
      <TouchableOpacity
        style={[styles.actionButton, { borderBottomWidth: 0 }]}
        onPress={handleResetApp}
        activeOpacity={0.7}
      >
        <View style={styles.actionLeft}>
          {/* Icon badge */}
          <LinearGradient
            colors={colors.gradients.danger as [string, string]}
            style={styles.actionIcon}
          >
            <Ionicons name="trash" size={18} color="#ffffff" />
          </LinearGradient>
          <Text style={styles.actionTextDanger}>Reset App</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </TouchableOpacity>

      {/* Custom confirmation modal */}
      <ResetAppModal
        visible={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={handleConfirmReset}
      />
    </LinearGradient>
  );
};

export default DangerZone;
