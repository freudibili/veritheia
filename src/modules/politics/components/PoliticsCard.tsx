import React from "react";
import { Card, Text, XStack, YStack, Avatar, View } from "tamagui";
import { Actor } from "../types/politics.types";
import { useWindowDimensions } from "react-native";

interface PoliticsCardProps {
  actor: Actor;
  onPress?: () => void;
}

export const PoliticsCard = ({ actor, onPress }: PoliticsCardProps) => {
  const { width } = useWindowDimensions();

  // Generate a placeholder image URL based on the actor's name
  const imageUrl = `https://ui-avatars.com/api/?name=${actor.etatCivil.ident.prenom}+${actor.etatCivil.ident.nom}&background=random`;

  const getCardWidth = () => {
    if (width < 640) return "100%";
    if (width < 1024) return "48%";
    return "31%";
  };

  return (
    <Card
      elevate
      bordered
      scale={0.97}
      onPress={onPress}
      width={getCardWidth()}
      height={220}
      margin={4}
      overflow="hidden"
    >
      <Card.Background>
        <View
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="$backgroundStrong"
          opacity={0.9}
        />
      </Card.Background>

      <YStack padding={16} gap={12} flex={1}>
        <XStack gap={12} alignItems="center">
          <Avatar circular size="$5" backgroundColor="$blue5">
            <Avatar.Image source={{ uri: imageUrl }} />
            <Avatar.Fallback backgroundColor="$blue9">
              <Text color="$blue1" fontWeight="bold">
                {actor.etatCivil.ident.prenom.charAt(0)}
                {actor.etatCivil.ident.nom.charAt(0)}
              </Text>
            </Avatar.Fallback>
          </Avatar>

          <YStack flex={1}>
            <Text
              fontSize={18}
              fontWeight="bold"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {actor.etatCivil.ident.civ} {actor.etatCivil.ident.prenom}{" "}
              {actor.etatCivil.ident.nom}
            </Text>
            <Text color="$gray11" numberOfLines={1} ellipsizeMode="tail">
              {actor.profession?.libelleCourant || "Politician"}
            </Text>
          </YStack>
        </XStack>

        <YStack flex={1} justifyContent="space-between">
          <Card
            bordered
            size="$2"
            backgroundColor="$backgroundTransparent"
            borderColor="$borderColor"
            padding={8}
          >
            <Text fontSize={14} color="$gray10">
              Born: {actor.etatCivil.infoNaissance.dateNais || "N/A"}
            </Text>
            <Text fontSize={14} color="$gray10">
              Location: {actor.etatCivil.infoNaissance.villeNais || "N/A"},{" "}
              {actor.etatCivil.infoNaissance.paysNais || "N/A"}
            </Text>
          </Card>

          <XStack justifyContent="space-between" alignItems="flex-end">
            <Text fontSize={12} color="$gray9">
              ID: {actor.uid["#text"]}
            </Text>
            <Text fontSize={12} color="$blue9" fontWeight="bold">
              View Profile
            </Text>
          </XStack>
        </YStack>
      </YStack>
    </Card>
  );
};
