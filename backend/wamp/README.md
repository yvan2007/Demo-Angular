# Backend WAMP pour le portfolio

Ce backend permet de modifier le contenu du portfolio sans toucher au code Angular.
Tu peux le faire via phpMyAdmin OU via un CRUD web local inclus.

## 1) Copier le backend dans WAMP

Copie ce dossier vers:

`C:\wamp64\www\portfolio-api`

Tu dois obtenir ce chemin:

`C:\wamp64\www\portfolio-api\api\site-content.php`

## 2) Creer la base de donnees

Dans phpMyAdmin, execute:

`backend/wamp/sql/schema.sql`

Cela cree:
- la base `portfolio_db`
- la table `portfolio_sections`
- des sections d'exemple

## 3) Configurer la connexion MySQL

Edite:

`backend/wamp/config.php`

Par defaut (WAMP local classique):
- host: `127.0.0.1`
- port: `3306`
- user: `root`
- password: vide

## 4) Tester l'API

Dans le navigateur:

`http://localhost/portfolio-api/api/site-content.php`

Tu dois voir un JSON.

## 5) Front Angular deja connecte

Le front utilise:
- `http://localhost/portfolio-api/api/site-content.php` en local
- fallback automatique vers les donnees statiques si l'API est indisponible

Fichier concerne:

`src/app/shared/services/site-content-api.service.ts`

## 6) CRUD sans phpMyAdmin (recommande)

Ouvre:

`http://localhost/portfolio-api/admin/`

Fonctions disponibles:
- initialiser/reparer la base
- ajouter une section
- modifier une section
- supprimer une section

Sections utiles:
- `about`
- `socialLinks`
- `projectCta`
- `services`
- `portfolio`
- `resume`
- `contact`

## 7) Modifier les infos via phpMyAdmin (optionnel)

Dans phpMyAdmin:
1. Ouvre la table `portfolio_sections`
2. Trouve la section (`about`, `projectCta`, `socialLinks`, etc.)
3. Modifie `data_json` (JSON valide)
4. Recharge le front

Le front prend la nouvelle valeur directement depuis le backend.
