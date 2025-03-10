import { useLocalSearchParams } from "expo-router";
import React from "react";
import { UserDetailsScreen } from "../../src/modules/user/screens/UserDetailsScreen";

export default function UserDetailsPage() {
  const { id } = useLocalSearchParams();
  return <UserDetailsScreen userId={id as string} />;
}
