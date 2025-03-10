import React from "react";
import { ScrollView } from "react-native";
import { Text, YStack, Avatar } from "tamagui";

interface UserDetailsScreenProps {
  userId: string;
}

export const UserDetailsScreen = ({ userId }: UserDetailsScreenProps) => {
  // In a real app, you would fetch user details based on userId
  const user = {
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`,
    avatar: `https://i.pravatar.cc/300?u=${userId}`,
  };

  return (
    <ScrollView>
      <YStack padding="$4" gap="$4" alignItems="center">
        <Avatar circular size="$16">
          <Avatar.Image source={{ uri: user.avatar }} />
          <Avatar.Fallback backgroundColor="$gray5" />
        </Avatar>
        <Text fontSize="$8" fontWeight="bold">
          {user.name}
        </Text>
        <Text fontSize="$6" color="$gray11">
          {user.email}
        </Text>
      </YStack>
    </ScrollView>
  );
};
