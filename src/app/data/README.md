# 📋 Guide d'Utilisation - Fichier de Données Centralisé

## 🎯 Vue d'ensemble

Toutes les informations de votre portfolio sont centralisées dans **un seul fichier** : `portfolio.data.ts`

Ce fichier contient toutes les données affichées sur votre site portfolio, organisées par sections.

---

## 📁 Emplacement du Fichier

```
portfolio/src/app/data/portfolio.data.ts
```

---

## ✏️ Comment Modifier les Informations

### Étapes simples :

1. **Ouvrez le fichier** `portfolio/src/app/data/portfolio.data.ts`
2. **Trouvez la section** que vous voulez modifier (utilisez les commentaires pour naviguer)
3. **Modifiez uniquement les valeurs** entre guillemets (chaînes de caractères) ou les nombres
4. **Sauvegardez** le fichier

⚠️ **IMPORTANT** : Ne supprimez pas les clés (comme `title:`, `name:`, etc.), modifiez uniquement les valeurs !

---

## 📖 Sections Disponibles

### SECTION 1 : Introduction (Hero Section)
- Texte d'accueil
- Rôles/Métiers affichés
- Votre nom
- Image de fond
- Bouton d'action

### SECTION 2 : About (À propos)
- Titre et sous-titre
- Nom complet, âge, expérience
- Localisation, email, téléphone
- Site web
- Description personnelle
- Compétences principales

### SECTION 3 : Social Links (Réseaux sociaux)
- Liens Facebook, LinkedIn, GitHub, etc.
- Lien de téléchargement du CV

### SECTION 4 : Facts / Statistics (Statistiques)
- Années d'expérience
- Nombre de clients satisfaits
- Nombre de projets réalisés
- Autres métriques

### SECTION 5 : Services (Services offerts)
- Liste des services que vous proposez
- Titre, description, icône pour chaque service

### SECTION 6 : Portfolio (Projets)
- Liste de vos projets
- Images, titres, catégories, liens

### SECTION 7 : Resume (CV)
- **Formation** : Diplômes, études
- **Expérience** : Postes occupés, entreprises
- **Compétences techniques** : Langages, technologies avec niveaux

### SECTION 8 : Testimonials (Témoignages)
- Citations de clients
- Noms, rôles, photos des auteurs

### SECTION 9 : Contact
- Informations de contact (email, téléphone, adresse)
- Configuration du formulaire de contact

### SECTION 10 : Blog
- Articles de blog
- Titres, descriptions, dates, catégories

### SECTION 11 : Video
- URL vidéo YouTube
- Image de prévisualisation
- Texte du bouton

### SECTION 12 : Project CTA (Call-to-action)
- Section "Create a Website" en bas de page
- Titre, description, bouton

---

## 📝 Exemples de Modifications

### Exemple 1 : Modifier votre nom

**Avant :**
```typescript
name: "Kevin Miller",
```

**Après :**
```typescript
name: "Votre Nom",
```

### Exemple 2 : Modifier votre email

**Avant :**
```typescript
email: "kevinmiller@alb.com",
```

**Après :**
```typescript
email: "votre.email@exemple.com",
```

### Exemple 3 : Ajouter un projet au portfolio

Copiez un objet existant et modifiez les valeurs :

```typescript
{
  id: "3",                              // Nouvel ID unique
  title: "Mon Nouveau Projet",          // Titre de votre projet
  category: "frontenddevelopment",      // Catégorie
  imageUrl: "chemin/vers/image.jpg",    // Image du projet
  type: "image",                        // Type: "image" ou "video"
  link: "https://mon-projet.com",       // Lien vers le projet
  icon: "mbri-photos"                   // Icône
}
```

### Exemple 4 : Ajouter une compétence

```typescript
skills: [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Votre Nouvelle Compétence", level: 75 }  // Ajoutez ici
]
```

---

## ⚠️ Conseils Importants

1. **Ne supprimez pas les guillemets** : Toutes les chaînes de caractères doivent être entre guillemets `"..."`

2. **Respectez la structure** : Ne supprimez pas les virgules `,` entre les propriétés

3. **Niveaux de compétences** : Les niveaux sont entre 0 et 100 (ex: `level: 90`)

4. **URLs** : Pour les images et liens, utilisez des URLs complètes ou des chemins relatifs

5. **Tableaux** : Pour ajouter des éléments dans un tableau, copiez un élément existant et modifiez-le

---

## 🔍 Recherche Rapide

Pour trouver rapidement une information dans le fichier :

- **Nom** : Cherchez `name:`
- **Email** : Cherchez `email:`
- **Téléphone** : Cherchez `phone:`
- **Projets** : Cherchez `portfolioData`
- **Formation** : Cherchez `education:`
- **Expérience** : Cherchez `experience:`
- **Contact** : Cherchez `contactData`

---

## 🆘 Aide

Si vous avez besoin d'aide ou si quelque chose ne fonctionne pas :

1. Vérifiez que vous avez bien fermé toutes les guillemets et parenthèses
2. Vérifiez que vous n'avez pas supprimé de virgules entre les propriétés
3. Vérifiez que les valeurs correspondent au type attendu (texte entre guillemets, nombres sans guillemets)

---

## 📚 Structure du Fichier

Le fichier est organisé comme suit :

```
portfolio.data.ts
├── Introduction (Hero)
├── About
├── Social Links
├── Facts/Stats
├── Services
├── Portfolio
├── Resume
│   ├── Education
│   ├── Experience
│   └── Skills
├── Testimonials
├── Contact
├── Blog
├── Video
└── Project CTA
```

Chaque section est clairement délimitée avec des commentaires pour faciliter la navigation.

---

**🎉 C'est tout ! Modifiez simplement ce fichier pour personnaliser votre portfolio !**

