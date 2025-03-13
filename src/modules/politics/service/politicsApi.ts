import { Actor } from "../types/politics.types";

// Sample data for all platforms
const sampleActors: Actor[] = [
  {
    "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    uid: {
      "@xsi:type": "IdActeur_type",
      "#text": "PA1008",
    },
    etatCivil: {
      ident: {
        civ: "M.",
        prenom: "Alain",
        nom: "David",
        alpha: "DavidA",
        trigramme: "ADA",
      },
      infoNaissance: {
        dateNais: "1949-06-02",
        villeNais: "Libourne",
        depNais: "Gironde",
        paysNais: "France",
      },
      dateDeces: null,
    },
    profession: {
      libelleCourant: "Ingénieur",
      socProcINSEE: {
        catSocPro: "Cadres d'entreprise",
        famSocPro: "Cadres et professions intellectuelles supérieures",
      },
    },
    uri_hatvp: null,
    adresses: {
      adresse: [],
    },
  },
  {
    "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    uid: {
      "@xsi:type": "IdActeur_type",
      "#text": "PA1009",
    },
    etatCivil: {
      ident: {
        civ: "Mme",
        prenom: "Marie",
        nom: "Dupont",
        alpha: "DupontM",
        trigramme: "MDP",
      },
      infoNaissance: {
        dateNais: "1965-03-15",
        villeNais: "Paris",
        depNais: "Paris",
        paysNais: "France",
      },
      dateDeces: null,
    },
    profession: {
      libelleCourant: "Avocate",
      socProcINSEE: {
        catSocPro: "Professions libérales",
        famSocPro: "Cadres et professions intellectuelles supérieures",
      },
    },
    uri_hatvp: null,
    adresses: {
      adresse: [],
    },
  },
  {
    "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    uid: {
      "@xsi:type": "IdActeur_type",
      "#text": "PA1010",
    },
    etatCivil: {
      ident: {
        civ: "M.",
        prenom: "Jean",
        nom: "Martin",
        alpha: "MartinJ",
        trigramme: "JMA",
      },
      infoNaissance: {
        dateNais: "1972-09-21",
        villeNais: "Lyon",
        depNais: "Rhône",
        paysNais: "France",
      },
      dateDeces: null,
    },
    profession: {
      libelleCourant: "Professeur",
      socProcINSEE: {
        catSocPro: "Professeurs, professions scientifiques",
        famSocPro: "Cadres et professions intellectuelles supérieures",
      },
    },
    uri_hatvp: null,
    adresses: {
      adresse: [],
    },
  },
];

// Simple API implementation using sample data
const politicsApi = {
  getActors: async (): Promise<Actor[]> => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      return [sampleActors[0]];
    } catch (error) {
      console.error("Error fetching actor data:", error);
      throw new Error("Failed to fetch actor data");
    }
  },

  getAllActors: async (): Promise<Actor[]> => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      return sampleActors;
    } catch (error) {
      console.error("Error fetching all actors:", error);
      throw new Error("Failed to fetch all actors");
    }
  },
};

export default politicsApi;
