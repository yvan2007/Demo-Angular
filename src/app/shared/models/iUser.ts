export interface IUser {
    id?: number;
    nom: string;
    prenom: string;
    photo_profil?: string | null;
    description?: string | null;
    age?: number | null;
    email: string;
    lien_cv?: string | null;
    telephone?: string | null;
    date_creation?: string;
    date_modification?: string;
  }