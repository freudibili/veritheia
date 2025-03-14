import { Tabs } from "expo-router";
import React from "react";
import { Home, User } from "@tamagui/lucide-icons";
import { useAuthStore } from "@/auth/store/auth.store";
import { selectIsAuthenticated } from "@/auth/selectors/auth.selectors";

export default function TabsLayout() {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2196F3",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: isAuthenticated ? "Profile" : "Login",
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
    </Tabs>
  );
}
