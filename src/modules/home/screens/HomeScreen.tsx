import React from "react";
import { ScrollView } from "react-native";
import { PoliticsCard } from "@/modules/politics/components/PoliticsCard";
import { Text, YStack } from "tamagui";

export const HomeScreen = () => {
  const politicians = [
    {
      id: "1",
      name: "Joe Biden",
      email: "joe.biden@whitehouse.gov",
      avatar: "https://i.pravatar.cc/300?u=1",
      party: "Democratic Party",
      position: "President",
    },
    {
      id: "2",
      name: "Kamala Harris",
      email: "kamala.harris@whitehouse.gov",
      avatar: "https://i.pravatar.cc/300?u=2",
      party: "Democratic Party",
      position: "Vice President",
    },
    {
      id: "3",
      name: "Nancy Pelosi",
      email: "nancy.pelosi@house.gov",
      avatar: "https://i.pravatar.cc/300?u=3",
      party: "Democratic Party",
      position: "Former Speaker",
    },
  ];

  return (
    <ScrollView>
      <YStack padding={16} space={16}>
        <Text fontSize={24} fontWeight="bold">
          Politicians
        </Text>
        {politicians.map((politician) => (
          <PoliticsCard key={politician.id} {...politician} />
        ))}
      </YStack>
    </ScrollView>
  );
};
