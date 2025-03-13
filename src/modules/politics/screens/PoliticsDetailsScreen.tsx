import React from "react";
import { ScrollView } from "react-native";
import { Text, Avatar, YStack, XStack, Card } from "tamagui";

interface PoliticsDetailsScreenProps {
  politicsId: string;
}

export const PoliticsDetailsScreen = ({
  politicsId,
}: PoliticsDetailsScreenProps) => {
  const politics = {
    id: politicsId,
    name: `Politician ${politicsId}`,
    email: `politician${politicsId}@example.com`,
    avatar: `https://i.pravatar.cc/300?u=${politicsId}`,
    party: "Democratic Party",
    position: "Senator",
    state: "California",
  };

  return (
    <ScrollView>
      <YStack padding={16} space={16}>
        <XStack space={16} alignItems="center">
          <Avatar circular size="$6">
            <Avatar.Image source={{ uri: politics.avatar }} />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <YStack>
            <Text fontSize={24} fontWeight="bold">
              {politics.name}
            </Text>
            <Text fontSize={16} color="$gray10">
              {politics.email}
            </Text>
          </YStack>
        </XStack>

        <Card padding={16}>
          <YStack space={8}>
            <Text fontWeight="bold">Party</Text>
            <Text>{politics.party}</Text>

            <Text fontWeight="bold" marginTop={8}>
              Position
            </Text>
            <Text>{politics.position}</Text>

            <Text fontWeight="bold" marginTop={8}>
              State
            </Text>
            <Text>{politics.state}</Text>
          </YStack>
        </Card>
      </YStack>
    </ScrollView>
  );
};
