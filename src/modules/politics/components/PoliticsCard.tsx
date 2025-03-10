import React from "react";
import { Card, Text, Avatar, XStack, YStack } from "tamagui";
import { useRouter } from "expo-router";

interface PoliticsCardProps {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export const PoliticsCard = ({
  id,
  name,
  email,
  avatar,
}: PoliticsCardProps) => {
  const router = useRouter();
  const handlePress = () => {
    router.push(`/politics/${id}`);
  };

  return (
    <Card onPress={handlePress} marginVertical={8} padding={16}>
      <XStack space={16} alignItems="center">
        <Avatar circular size="$4">
          <Avatar.Image src={avatar} />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <YStack>
          <Text fontWeight="bold">{name}</Text>
          <Text color="$gray10">{email}</Text>
        </YStack>
      </XStack>
    </Card>
  );
};
