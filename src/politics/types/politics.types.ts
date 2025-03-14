export interface Actor {
  "@xmlns:xsi"?: string;
  uid: {
    "@xsi:type"?: string;
    "#text": string;
  };
  etatCivil: {
    ident: {
      civ: string;
      prenom: string;
      nom: string;
      alpha?: string;
      trigramme?: string;
    };
    infoNaissance: {
      dateNais: string;
      villeNais?: string;
      depNais?: string;
      paysNais?: string;
    };
    dateDeces: string | null;
  };
  profession?: {
    libelleCourant?: string;
    socProcINSEE?: {
      catSocPro?: string;
      famSocPro?: string;
    };
  };
  uri_hatvp?: string | null;
  adresses?: {
    adresse: Array<{
      "@xsi:type"?: string;
      uid?: string;
      type?: string;
      typeLibelle?: string;
      poids?: string | null;
      adresseDeRattachement?: string | null;
      intitule?: string | null;
      numeroRue?: string;
      nomRue?: string;
      complementAdresse?: string | null;
      codePostal?: string;
      ville?: string;
      valElec?: string;
    }>;
  };
}
