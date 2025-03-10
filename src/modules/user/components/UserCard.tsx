import { router } from "expo-router";
import React from "react";
import { Avatar, Card, Text, XStack, YStack } from "tamagui";

interface UserCardProps {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export const UserCard = ({ id, name, email, avatar }: UserCardProps) => {
  const handlePress = () => {
    router.push(`/user/${id}`);
  };

  return (
    <Card onPress={handlePress} elevate bordered padding="$4">
      <XStack gap="$4" alignItems="center">
        <Avatar circular size="$10">
          <Avatar.Image source={{ uri: avatar }} />
          <Avatar.Fallback backgroundColor="$gray5" />
        </Avatar>
        <YStack>
          <Text fontSize="$6" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="$4" color="$gray11">
            {email}
          </Text>
        </YStack>
      </XStack>
    </Card>
  );
};
