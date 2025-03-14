import React from "react";
import { ScrollView } from "react-native";
import { Text, YStack, Button, Avatar, Card } from "tamagui";
import { useAuthStore } from "../auth/store/auth.store";

export const ProfileScreen = () => {
  const politics = useAuthStore((state) => state.politics);

  return (
    <ScrollView>
      <YStack padding={16} space={16}>
        <Card padding={16}>
          <YStack space={8} alignItems="center">
            <Avatar circular size="$6">
              <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>
            <Text fontSize={20} fontWeight="bold">
              {politics?.email}
            </Text>
            <Button>Edit Profile</Button>
          </YStack>
        </Card>

        <Card padding={16}>
          <YStack space={8}>
            <Text fontWeight="bold">Political Preferences</Text>
            <Text>You haven&apos;t set any political preferences yet.</Text>
          </YStack>
        </Card>

        <Card padding={16}>
          <YStack space={8}>
            <Text fontWeight="bold">Saved Politicians</Text>
            <Text>You haven&apos;t saved any politicians yet.</Text>
          </YStack>
        </Card>
      </YStack>
    </ScrollView>
  );
};
