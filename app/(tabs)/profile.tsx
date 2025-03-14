import { LoginScreen } from "@/auth/screens/LoginScreen";
import { selectIsAuthenticated } from "@/auth/selectors/auth.selectors";
import { useAuthStore } from "@/auth/store/auth.store";
import { ProfileScreen } from "@/user/ProfileScreen";
import React from "react";

export default function ProfilePage() {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  return isAuthenticated ? <ProfileScreen /> : <LoginScreen />;
}
