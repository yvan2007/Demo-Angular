export type TypeContrat = 'CDI' | 'CDD' | 'Stage' | 'Freelance' | 'Alternance' | 'Interim' | 'Autre';

export interface Experience {
  id?: number;
  date_debut: string; // Format: "YYYY-MM-DD"
  date_fin?: string | null;
  nom_entreprise: string;
  description?: string | null;
  type_contrat: TypeContrat;
  date_creation?: string;
  date_modification?: string;
}