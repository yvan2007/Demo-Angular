export type Plateforme = 'LinkedIn' | 'GitHub' | 'Twitter' | 'Facebook' | 'Instagram' | 'YouTube' | 'Portfolio' | 'Autre';

export interface IReseauSocial {
  id?: number;
  nom_plateforme: Plateforme;
  lien: string;
  date_creation?: string;
  date_modification?: string;
}
