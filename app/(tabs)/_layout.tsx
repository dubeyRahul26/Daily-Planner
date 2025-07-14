import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '@/hooks/useTheme';

const TabsLayout = () => {
  const { colors } = useTheme();          

  return (
    <Tabs
      screenOptions={{
  
        tabBarActiveTintColor:   colors.success,     
        tabBarInactiveTintColor: colors.textMuted,   

        // themed bar styling
        tabBarStyle: {
          backgroundColor: colors.surface,        
          borderTopWidth: 1,
          borderTopColor: colors.border,           
          height: 90,
          paddingTop: 15,
        },

        // label look
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: '600',
        },

        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'todos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkbox-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
