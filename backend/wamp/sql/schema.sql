CREATE DATABASE IF NOT EXISTS portfolio_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE portfolio_db;

CREATE TABLE IF NOT EXISTS portfolio_sections (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  section_key VARCHAR(80) NOT NULL UNIQUE,
  data_json LONGTEXT NOT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Exemples de sections modifiables directement dans phpMyAdmin.
INSERT INTO portfolio_sections (section_key, data_json, is_active)
VALUES
  (
    'projectCta',
    JSON_OBJECT(
      'title', 'Creons votre prochain projet',
      'description', 'Collaborons pour concevoir une solution innovante, claire et performante.',
      'buttonText', 'Me contacter',
      'buttonLink', '#contact'
    ),
    1
  ),
  (
    'about',
    JSON_OBJECT(
      'title', 'Qui suis-je',
      'subtitle', 'A propos',
      'description', 'Decouvrez mon profil',
      'info', JSON_OBJECT(
        'fullName', 'KOUAKOU EBOUHO FRANCK YVAN',
        'age', 'Etudiant en licence (3e annee)',
        'experience', '3+ ans',
        'location', 'Grand-Bassam, Cote d''Ivoire',
        'email', 'kouayavana20@gmail.com',
        'phone', '+225 0160398864',
        'description', 'Ingenieur logiciel, je cree des solutions web, mobile et data pour des besoins metier reels.'
      )
    ),
    1
  ),
  (
    'socialLinks',
    JSON_OBJECT(
      'linkedin', 'https://www.linkedin.com/in/yvan-kouakou-488564394/',
      'github', 'https://github.com/yvan2007',
      'cvDownloadLink', 'assets/documents/CV-KOUAKOU-EBOUHO-FRANCK-YVAN.txt'
    ),
    1
  )
ON DUPLICATE KEY UPDATE
  data_json = VALUES(data_json),
  is_active = VALUES(is_active);
