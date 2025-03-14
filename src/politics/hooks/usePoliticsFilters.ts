import { useMemo } from "react";
import { Actor } from "../types/politics.types";

export const usePoliticsFilters = (
  actors: Actor[] | undefined,
  activeTab: string
) => {
  const filteredActors = useMemo(() => {
    if (!actors) return [];

    switch (activeTab) {
      case "engineers":
        return actors.filter(
          (actor) =>
            actor.profession?.libelleCourant
              ?.toLowerCase()
              .includes("ingénieur") ||
            actor.profession?.libelleCourant?.toLowerCase().includes("engineer")
        );
      case "lawyers":
        return actors.filter(
          (actor) =>
            actor.profession?.libelleCourant
              ?.toLowerCase()
              .includes("avocat") ||
            actor.profession?.libelleCourant?.toLowerCase().includes("lawyer")
        );
      case "professors":
        return actors.filter(
          (actor) =>
            actor.profession?.libelleCourant
              ?.toLowerCase()
              .includes("professeur") ||
            actor.profession?.libelleCourant
              ?.toLowerCase()
              .includes("professor") ||
            actor.profession?.libelleCourant
              ?.toLowerCase()
              .includes("enseignant")
        );
      case "all":
      default:
        return actors;
    }
  }, [actors, activeTab]);

  return filteredActors;
};
