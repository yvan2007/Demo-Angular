export interface Projet {
    id?: number;
    titre: string;
    resume: string;
    image?: string | null;
    lien?: string | null;
    date_creation?: string;
    date_modification?: string;
  }