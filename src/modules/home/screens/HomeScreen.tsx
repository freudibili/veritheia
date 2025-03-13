import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { Text, YStack, Card, XStack, Spinner } from "tamagui";
import { usePoliticsStore } from "@/modules/politics/store/politicsStore";

export const HomeScreen = () => {
  const { actors, loading, error, fetchActors } = usePoliticsStore();

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

  return (
    <ScrollView>
      <YStack padding={16} space={16}>
        <Text fontSize={24} fontWeight="bold">
          French Politicians
        </Text>
        {actors.map((actor) => (
          <Card key={actor.uid["#text"]} padding={16} space={8}>
            <XStack space={8}>
              <Text fontSize={18} fontWeight="bold">
                {actor.etatCivil.ident.civ} {actor.etatCivil.ident.prenom}{" "}
                {actor.etatCivil.ident.nom}
              </Text>
            </XStack>
            <Text color="$gray11">{actor.profession.libelleCourant}</Text>
            <Text color="$gray10" fontSize={14}>
              Born: {actor.etatCivil.infoNaissance.dateNais} in{" "}
              {actor.etatCivil.infoNaissance.villeNais}
            </Text>
          </Card>
        ))}
      </YStack>
    </ScrollView>
  );
};
