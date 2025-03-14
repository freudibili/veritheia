import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { usePoliticsStore } from "../store/politicsStore";
import { Actor } from "../types/politics.types";

export const ActorSelector: React.FC = () => {
  const { actors, loading, error, fetchActors } = usePoliticsStore();

  useEffect(() => {
    fetchActors();
  }, [fetchActors]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Select an Actor</Text>
      <View>
        {actors.map((actor: Actor) => (
          <Text key={actor.uid["#text"]}>
            {actor.etatCivil.ident.civ} {actor.etatCivil.ident.prenom}{" "}
            {actor.etatCivil.ident.nom}
          </Text>
        ))}
      </View>
    </View>
  );
};
