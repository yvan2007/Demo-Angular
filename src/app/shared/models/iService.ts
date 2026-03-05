export type TypeService = 'Développement Web' | 'Développement Mobile' | 'Design' | 'Consulting' | 'Formation' | 'Autre';

export interface Service {
  id?: number;
  nom: string;
  detail: string;
  type_service: TypeService;
  outil?: string | null;
  date_creation?: string;
  date_modification?: string;
}