import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { Text, YStack, Spinner, XStack } from "tamagui";
import { usePoliticsStore } from "@/modules/politics/store/politicsStore";
import { PoliticsCard } from "@/modules/politics/components/PoliticsCard";
import { useRouter } from "expo-router";

export const HomeScreen = () => {
  const { actors, loading, error, fetchActors } = usePoliticsStore();
  const router = useRouter();

  useEffect(() => {
    fetchActors();
  }, [fetchActors]);

  if (loading) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center">
        <Spinner size="large" />
      </YStack>
    );
  }

  if (error) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" padding={16}>
        <Text color="$red10" textAlign="center">
          Error: {error}
        </Text>
      </YStack>
    );
  }

  const handleCardPress = (actorId: string) => {
    router.push(`/politics/${actorId}`);
  };

  return (
    <ScrollView>
      <YStack padding={16} gap={16}>
        <Text fontSize={24} fontWeight="bold">
          French Politicians
        </Text>

        <XStack flexWrap="wrap" justifyContent="space-between">
          {actors.map((actor) => (
            <PoliticsCard
              key={actor.uid["#text"]}
              actor={actor}
              onPress={() => handleCardPress(actor.uid["#text"])}
            />
          ))}
        </XStack>
      </YStack>
    </ScrollView>
  );
};
