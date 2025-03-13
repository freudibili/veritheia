import React from "react";
import { Text, Tabs } from "tamagui";

interface PoliticsTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

export const PoliticsTabs = ({ activeTab, onTabChange }: PoliticsTabsProps) => {
  return (
    <Tabs
      defaultValue="all"
      value={activeTab}
      onValueChange={onTabChange}
      orientation="horizontal"
      flexDirection="column"
      width="100%"
      height="auto"
      borderRadius="$4"
      overflow="hidden"
    >
      <Tabs.List>
        <Tabs.Tab value="all">
          <Text>All</Text>
        </Tabs.Tab>
        <Tabs.Tab value="engineers">
          <Text>Engineers</Text>
        </Tabs.Tab>
        <Tabs.Tab value="lawyers">
          <Text>Lawyers</Text>
        </Tabs.Tab>
        <Tabs.Tab value="professors">
          <Text>Professors</Text>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
