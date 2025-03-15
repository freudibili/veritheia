import { Actor } from "../types/politics.types";
import combinedActorsData from "../data/combinedActors.json";

const actors = combinedActorsData as Actor[];

const politicsApi = {
  getActors: async (): Promise<Actor[]> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return actors;
    } catch {
      throw new Error("Failed to fetch actor data");
    }
  },

  getActor: async (id: string): Promise<Actor> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return actors.find((actor) => actor.uid["#text"] === id) as Actor;
    } catch {
      throw new Error("Failed to fetch all actors");
    }
  },
};

export default politicsApi;
