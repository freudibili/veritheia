import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { Text, Avatar, YStack, XStack, Card, Spinner } from "tamagui";
import { usePoliticsStore } from "../store/politicsStore";

interface PoliticsDetailsScreenProps {
  politicsId: string;
}

export const PoliticsDetailsScreen = ({
  politicsId,
}: PoliticsDetailsScreenProps) => {
  const { actor, loading, error, fetchActor } = usePoliticsStore();

  useEffect(() => {
    fetchActor(politicsId);
  }, [fetchActor, politicsId]);

  if (loading) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center">
        <Spinner size="large" />
      </YStack>
    );
  }

  if (error || !actor) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" padding={16}>
        <Text color="$red10" textAlign="center">
          Error: {error}
        </Text>
      </YStack>
    );
  }

  return (
    <ScrollView>
      <YStack padding={16} gap={16}>
        <XStack gap={16} alignItems="center">
          <Avatar circular size="$6">
            <Avatar.Image source={{ uri: "" }} />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <YStack>
            <Text fontSize={24} fontWeight="bold">
              {actor.etatCivil.ident.prenom}
            </Text>
            <Text fontSize={16} color="$gray10">
              {actor.etatCivil.ident.nom}
            </Text>
          </YStack>
        </XStack>

        <Card padding={16}>
          <YStack gap={8}>
            <Text fontWeight="bold">Profession</Text>
            <Text>{actor.profession?.libelleCourant}</Text>

            <Text fontWeight="bold" marginTop={8}>
              Date de naissance
            </Text>
            <Text>{actor.etatCivil.infoNaissance.dateNais}</Text>
          </YStack>
        </Card>
      </YStack>
    </ScrollView>
  );
};
