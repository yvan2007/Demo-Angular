export interface Localisation {
    id?: number;
    points?: string | null;
    pays: string;
    ville: string;
    quartier?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    date_creation?: string;
    date_modification?: string;
  }