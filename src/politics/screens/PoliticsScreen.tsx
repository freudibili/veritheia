import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Text, YStack, Spinner, XStack } from "tamagui";
import { usePoliticsStore } from "@/politics/store/politicsStore";
import { PoliticsCard } from "@/politics/components/PoliticsCard";
import { PaginationControls } from "@/politics/components/PaginationControls";
import { PoliticsTabs } from "@/politics/components/PoliticsTabs";
import { usePoliticsFilters } from "@/politics/hooks/usePoliticsFilters";
import { usePagination } from "@/politics/hooks/usePagination";
import { useRouter } from "expo-router";

export const PoliticsScreen = () => {
  const { actors, loading, error, fetchActors } = usePoliticsStore();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const itemsPerPage = 9;

  useEffect(() => {
    fetchActors();
  }, [fetchActors]);

  const filteredActors = usePoliticsFilters(actors, activeTab);

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    currentItems: currentActors,
    goToNextPage,
    goToPrevPage,
  } = usePagination(filteredActors, itemsPerPage, [activeTab]);

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

        <PoliticsTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredActors.length}
          startIndex={startIndex}
          endIndex={endIndex}
          onNextPage={goToNextPage}
          onPrevPage={goToPrevPage}
        />

        <XStack flexWrap="wrap" justifyContent="space-between">
          {currentActors.map((actor) => (
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
