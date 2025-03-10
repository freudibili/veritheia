import React from "react";
import { PoliticsDetailsScreen } from "@/modules/politics/screens/PoliticsDetailsScreen";
import { useLocalSearchParams } from "expo-router";

export default function PoliticsDetailsPage() {
  const { id } = useLocalSearchParams();
  return <PoliticsDetailsScreen politicsId={id as string} />;
}
