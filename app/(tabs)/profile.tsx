import React from "react";

import { LoginScreen } from "@/modules/auth/screens/LoginScreen";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { selectIsAuthenticated } from "@/modules/auth/selectors/auth.selectors";
import { ProfileScreen } from "@/modules/politics/screens/ProfileScreen";

export default function ProfilePage() {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  return isAuthenticated ? <ProfileScreen /> : <LoginScreen />;
}
