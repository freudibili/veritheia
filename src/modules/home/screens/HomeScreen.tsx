import React from "react";
import { ScrollView } from "react-native";
import { YStack } from "tamagui";
import { UserCard } from "../../user/components/UserCard";

export const HomeScreen = () => {
  // In a real app, this would come from an API or database
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://i.pravatar.cc/300?u=1",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "https://i.pravatar.cc/300?u=2",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      avatar: "https://i.pravatar.cc/300?u=3",
    },
  ];

  return (
    <ScrollView>
      <YStack padding="$4" gap="$4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </YStack>
    </ScrollView>
  );
};
