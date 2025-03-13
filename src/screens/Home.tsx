import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ActorSelector } from "../modules/politics/components/ActorSelector";
import { usePoliticsStore } from "../modules/politics/store/politicsStore";
import { colors } from "../theme/colors";

export const Home: React.FC = () => {
  const { actors } = usePoliticsStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>French Politicians</Text>
      <FlatList
        data={actors}
        keyExtractor={(item) => item.uid["#text"]}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>
              {item.etatCivil.ident.civ} {item.etatCivil.ident.prenom}{" "}
              {item.etatCivil.ident.nom}
            </Text>
            <Text style={styles.profession}>
              {item.profession.libelleCourant}
            </Text>
            <Text style={styles.details}>
              Born: {item.etatCivil.infoNaissance.dateNais} in{" "}
              {item.etatCivil.infoNaissance.villeNais}
            </Text>
          </View>
        )}
        ListEmptyComponent={<ActorSelector />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    marginBottom: 12,
    padding: 16,
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 16,
  },
  details: {
    color: colors.text.tertiary,
    fontSize: 14,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  profession: {
    color: colors.text.secondary,
    fontSize: 16,
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
