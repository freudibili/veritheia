import React from "react";
import { ScrollView } from "react-native";
import { Text, YStack, Avatar, Button } from "tamagui";
import { useAuthStore } from "../../auth/store/auth.store";

export const ProfileScreen = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <ScrollView>
      <YStack padding="$4" gap="$4" alignItems="center">
        <Avatar circular size="$12">
          <Avatar.Image source={{ uri: "https://placekitten.com/200/200" }} />
          <Avatar.Fallback backgroundColor="$gray5" />
        </Avatar>
        <Text fontSize="$6" fontWeight="bold">
          {user?.email}
        </Text>
        <Button variant="outlined">Edit Profile</Button>
      </YStack>
    </ScrollView>
  );
};
