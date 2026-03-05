/**
 * ====================================================================
 * FICHIER DE CONFIGURATION CENTRALISÉ DU PORTFOLIO
 * ====================================================================
 * 
 * ⚠️ IMPORTANT : C'EST LE SEUL ENDROIT OÙ VOUS DEVEZ MODIFIER VOS INFORMATIONS
 * 
 * Toutes les données affichées sur votre portfolio sont définies ici.
 * Pour modifier une information, cherchez la section correspondante ci-dessous
 * et modifiez uniquement les valeurs entre guillemets.
 * 
 * Structure du fichier :
 * - Introduction (Section Hero/Accueil)
 * - About (À propos)
 * - Social Links (Liens réseaux sociaux)
 * - Facts/Stats (Statistiques)
 * - Services (Services offerts)
 * - Portfolio (Projets)
 * - Resume (CV - Formation et Expérience)
 * - Skills (Compétences techniques)
 * - Testimonials (Témoignages)
 * - Contact (Contact)
 * - Blog (Articles de blog)
 * - Video (Section vidéo)
 * - Project CTA (Call-to-action pour projets)
 * ====================================================================
 */

import {
  Introduction,
  About,
  ServicesSection,
  PortfolioSection,
  ResumeSection,
  TestimonialSection,
  ContactSection,
  BlogSection,
  VideoSection,
  SocialLinks,
  FactsData,
  ProjectCtaData
} from '../models';

// ====================================================================
// SECTION 1 : INTRODUCTION (Hero Section - Page d'accueil)
// ====================================================================
// Cette section apparaît en haut de la page d'accueil
export const introductionData: Introduction = {
  welcomeText: "I'm a",           // Texte d'accueil avant les rôles
  roles: ["Computer Scientist", "Software Engineer"],  // Rôles affichés (animation)
  name: "KOUAKOU EBOUHO FRANCK YVAN",            // Votre nom complet
  backgroundImageUrl: "/assets/images/profile.jpg",  // Image de fond (votre photo de profil)
  buttonText: "Learn More",        // Texte du bouton
  buttonLink: "#about"             // Lien du bouton (#about pour aller à la section About)
};

// ====================================================================
// SECTION 2 : ABOUT (À propos)
// ====================================================================
// Informations personnelles affichées dans la section "About Me"
export const aboutData: About = {
  title: "Who Am I",               // Titre principal
  subtitle: "About Me",            // Sous-titre
  description: "Get to know me",   // Description courte
  info: {
    fullName: "KOUAKOU EBOUHO FRANCK YVAN",      // Nom complet
    age: "Bachelor's Degree Student (Year 3)",           // Statut/Âge
    experience: "3+ years",        // Années d'expérience
    location: "Grand-Bassam, Côte d'Ivoire",     // Localisation
    email: "kouayavana20@gmail.com",  // Email (affiché dans About)
    phone: "+225 0160398864",      // Téléphone
    website: undefined, // Site web (optionnel)
    description: "Computer Scientist specializing in Software Engineering. Creative, curious and persevering, I build digital solutions for real business operations: fleet management, import workflows, sales analytics and professional dashboards.", // Description personnelle
    skills: ["Web Development", "Mobile Applications", "Python", "Flutter", "Django", "IoT"] // Compétences principales (liste courte)
  }
};

// ====================================================================
// SECTION 3 : SOCIAL LINKS (Réseaux sociaux)
// ====================================================================
// Liens vers vos réseaux sociaux (affichés dans la section About)
export const socialLinks: SocialLinks = {
  facebook: undefined,    // Lien Facebook (à ajouter si disponible)
  linkedin: "https://www.linkedin.com/in/yvan-kouakou-488564394/", // Lien LinkedIn
  pinterest: undefined,  // Lien Pinterest
  github: "https://github.com/yvan2007",            // Lien GitHub
  twitter: undefined,          // Lien Twitter (optionnel)
  instagram: undefined,  // Lien Instagram (optionnel)
  youtube: undefined,      // Lien YouTube (optionnel)
  cvDownloadLink: "assets/documents/CV-KOUAKOU-EBOUHO-FRANCK-YVAN.txt"                                    // Lien de téléchargement du CV
};

// ====================================================================
// SECTION 4 : FACTS / STATISTICS (Statistiques)
// ====================================================================
// Statistiques affichées dans la section "Facts"
export const factsData: FactsData = {
  yearsExperience: 3,    // Nombre d'années d'expérience
  happyClients: 10,      // Nombre de clients satisfaits / Projets collaboratifs
  projectsDone: 8,     // Nombre de projets réalisés (selon le CV)
  downloads: 0         // Nombre de téléchargements (ou autre métrique)
};

// ====================================================================
// SECTION 5 : SERVICES (Services offerts)
// ====================================================================
// Liste des services que vous proposez
export const servicesData: ServicesSection = {
  title: "What I Do",     // Titre de la section
  subtitle: "Services",   // Sous-titre
  description: "Development of innovative web, mobile and IoT solutions to meet your needs", // Description
  services: [
    {
      icon: "mbri-code",  // Icône (classe CSS) - voir documentation des icônes
      title: "Web Development",   // Titre du service
      description: "Creation of dynamic websites and web applications with Django, Flask, PHP and modern frameworks." // Description du service
    },
    {
      icon: "mbri-tablet",
      title: "Mobile Applications",
      description: "Development of cross-platform mobile applications with Flutter for iOS and Android."
    },
    {
      icon: "mbri-database",
      title: "Data Analysis",
      description: "Data analysis, web scraping and creation of decision-making applications with Python and MySQL."
    },
    {
      icon: "mbri-rocket",
      title: "Robotics & IoT",
      description: "Development of IoT solutions and robot programming with environmental and motion sensors."
    }
    // Ajoutez d'autres services en copiant un objet ci-dessus
  ]
};

// ====================================================================
// SECTION 6 : PORTFOLIO (Projets)
// ====================================================================
// Liste de vos projets/portfolio
export const portfolioData: PortfolioSection = {
  title: "My Projects",   // Titre de la section
  subtitle: "Portfolio",  // Sous-titre
  description: "Academic and professional projects in web development, mobile applications, data analysis, IoT and fleet management.", // Description
  items: [
    {
      id: "1",
      title: "E-commerce Website (Jumia-style)",
      category: "webdevelopment",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=510&h=600&fit=crop&q=80",  // E-commerce shopping cart with products
      type: "image",
      link: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1024&h=1200&fit=crop&q=80",
      icon: "mbri-shopping-cart",
      description: "Design and development of a complete e-commerce workflow with product management, ordering flow and clean customer journey."
    },
    {
      id: "2",
      title: "Competition Reservation Application",
      category: "webdevelopment",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=510&h=600&fit=crop&q=80",  // Calendar with events/sports scheduling
      type: "image",
      link: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1024&h=1200&fit=crop&q=80",
      icon: "mbri-calendar",
      description: "Reservation and planning interface with date management, participant tracking and operational visibility."
    },
    {
      id: "3",
      title: "Flutter Mobile App (Academic Project)",
      category: "mobiledevelopment",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=510&h=600&fit=crop&q=80",  // Mobile phone with app interface
      type: "image",
      link: "#",
      icon: "mbri-video-play",
      description: "Cross-platform mobile implementation with Flutter, emphasizing UI quality, maintainable code and user-first flows."
    },
    {
      id: "4",
      title: "Flutter Mobile App (Personal Project)",
      category: "mobiledevelopment",
      imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=510&h=600&fit=crop&q=80",  // Smartphone with colorful app UI
      type: "image",
      link: "#",
      icon: "mbri-video-play",
      description: "Personal Flutter application delivered from concept to deployment-ready prototype with robust navigation and state management."
    },
    {
      id: "5",
      title: "School Management Interface",
      category: "webdevelopment",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=510&h=600&fit=crop&q=80",  // Dashboard/analytics interface
      type: "image",
      link: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1024&h=1200&fit=crop&q=80",
      icon: "mbri-layers",
      description: "Administrative platform for school operations with structured modules, secure access and decision-ready dashboards."
    },
    {
      id: "6",
      title: "Decision Support Application",
      category: "dataanalysis",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=510&h=600&fit=crop&q=80",  // Data visualization charts and graphs
      type: "image",
      link: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1024&h=1200&fit=crop&q=80",
      icon: "mbri-database",
      description: "Decision-support application with KPI tracking, reporting and actionable analytics for operational steering."
    },
    {
      id: "7",
      title: "Web Scraping",
      category: "dataanalysis",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=510&h=600&fit=crop&q=80",  // Code/terminal/data extraction
      type: "image",
      link: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1024&h=1200&fit=crop&q=80",
      icon: "mbri-code",
      description: "Automated web data extraction pipelines for market monitoring, structured datasets and reporting."
    },
    {
      id: "8",
      title: "Robotics & IoT",
      category: "iot",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=510&h=600&fit=crop&q=80",  // Robotics circuit board/technology
      type: "image",
      link: "#",
      icon: "mbri-video-play",
      description: "IoT and robotics experimentation integrating sensors, data collection and real-time control logic."
    },
    {
      id: "9",
      title: "FLOTTE - Fleet Management Platform",
      category: "webdevelopment",
      imageUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=510&h=600&fit=crop&q=80",
      type: "image",
      link: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&h=1400&fit=crop&q=80",
      icon: "mbri-delivery",
      description: "Professional fleet platform: vehicles, rentals, maintenance, fuel logs, compliance alerts, TCO metrics and audit-ready traceability."
    },
    {
      id: "10",
      title: "SANKOFA - Artisan Business Digital Platform",
      category: "webdevelopment",
      imageUrl: "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?w=510&h=600&fit=crop&q=80",
      type: "image",
      link: "https://github.com/yvan2007",
      icon: "mbri-briefcase",
      description: "Designed a digital solution for artisan production and commerce: article generation, imports, sales tracking, category volumes, revenue analytics and white/black theme choice."
    }
    // Ajoutez d'autres projets en copiant un objet ci-dessus
  ]
};

// ====================================================================
// SECTION 7 : RESUME (CV - Formation et Expérience)
// ====================================================================
export const resumeData: ResumeSection = {
  title: "My Experience",    // Titre de la section
  subtitle: "Resume",        // Sous-titre
  description: "Academic education and skills in software development", // Description
  
  // Formation (Education)
  education: [
    {
      title: "Bachelor's Degree Year 3 - Software Engineering",           // Titre de la formation
      institution: "Institut Ivoirien de Technologie", // Établissement
      period: "2025 - 2026",               // Période (année début - année fin)
      description: "Currently studying Software Engineering, specializing in web development, mobile applications and intelligent systems." // Description
    },
    {
      title: "Bachelor's Degree Year 2 - Software Engineering",
      institution: "Institut Ivoirien de Technologie",
      period: "2024 - 2025",
      description: "Advanced training in programming, databases, web and mobile development. Completion of practical team projects."
    },
    {
      title: "Bachelor's Degree Year 1 - Software Engineering",
      institution: "Institut Ivoirien de Technologie",
      period: "2023 - 2024",
      description: "Computer science fundamentals, algorithms, object-oriented programming and introduction to web technologies."
    },
    {
      title: "High School Diploma (Scientific)",
      institution: "Collège Robert-Léon",
      period: "2022 - 2023",
      description: "Scientific high school diploma specializing in Mathematics and Life and Earth Sciences."
    }
    // Ajoutez d'autres formations en copiant un objet ci-dessus
  ],
  
  // Expérience professionnelle (Work Experience)
  experience: [
    {
      title: "Product Developer - SANKOFA Artisan Platform",
      company: "SANKOFA",
      period: "2025 - 2026",
      description: "Built a digital management solution for an artisan company: article generation, imports, sales, quantity by category, turnover dashboards, and dual visual themes (white/black) for usability in different environments."
    },
    {
      title: "Full-Stack Developer - Fleet Management Project",
      company: "FLOTTE",
      period: "2025 - 2026",
      description: "Designed and delivered a professional automotive fleet management platform: vehicle lifecycle (parc/import/sold), rentals, maintenance, fuel logs, regulatory deadlines (CT/insurance/documents/licenses), dashboard alerts, role-based access (Admin/Manager/User), revenue reporting, import workflows, TCO indicators, and audit-ready traceability."
    }
  ],
  
  // Compétences techniques avec niveaux (Skills)
  skills: [
    // Langages & Frameworks
    { name: "Python", level: 85 },    // Nom de la compétence et niveau (0-100)
    { name: "Django", level: 80 },
    { name: "Flask", level: 75 },
    { name: "Flutter", level: 75 },
    { name: "Dart", level: 70 },
    { name: "PHP", level: 70 },
    { name: "Laravel", level: 65 },
    { name: "JavaScript", level: 75 },
    { name: "HTML/CSS", level: 85 },
    { name: "Java", level: 65 },
    { name: "C#", level: 60 },
    { name: "ASP.NET Core", level: 55 },
    // Bases de données
    { name: "MySQL", level: 80 },
    { name: "SQLite", level: 75 },
    // Outils
    { name: "Git/GitHub", level: 75 },
    { name: "Web Scraping", level: 70 },
    { name: "API REST", level: 75 },
    // IoT & Robotique
    { name: "Robotique", level: 60 },
    { name: "IoT", level: 60 }
    // Ajoutez d'autres compétences en copiant un objet ci-dessus
  ]
};

// ====================================================================
// SECTION 8 : TESTIMONIALS (Témoignages clients)
// ====================================================================
export const testimonialData: TestimonialSection = {
  backgroundImageUrl: "https://via.placeholder.com/1920x1080", // Image de fond de la section
  testimonials: [
    {
      id: "1",                                                           // Identifiant unique
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tenetur nisi iste, ipsa obcaecati quis laudantium error distinctio excepturi", // Citation
      authorName: "Linzi Landry",                                       // Nom de l'auteur
      authorRole: "Graphic Designer",                                   // Rôle/titre de l'auteur
      authorImageUrl: "https://via.placeholder.com/70x70"               // Photo de l'auteur
    },
    {
      id: "2",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tenetur nisi iste, ipsa obcaecati quis laudantium error distinctio excepturi",
      authorName: "John Doe",
      authorRole: "Web Developer",
      authorImageUrl: "https://via.placeholder.com/70x70"
    }
    // Ajoutez d'autres témoignages en copiant un objet ci-dessus
  ]
};

// ====================================================================
// SECTION 9 : CONTACT (Contact)
// ====================================================================
export const contactData: ContactSection = {
  title: "Get in Touch",      // Titre de la section
  subtitle: "Contact Me",     // Sous-titre
  description: "Feel free to contact me to discuss your projects or collaborations", // Description
  contactInfos: [
    {
      type: "email",                          // Type: "email", "phone", ou "location"
      icon: "mbri-letter",                    // Icône
      label: "Email Us",                      // Label affiché
      value: "kouayavana20@gmail.com",           // Valeur (email, téléphone, adresse)
      link: "mailto:kouayavana20@gmail.com"      // Lien cliquable (mailto:, tel:, ou URL)
    },
    {
      type: "phone",
      icon: "mbri-mobile",
      label: "Call",
      value: "+225 0160398864",
      link: "tel:+2250160398864"              // Format: tel:+[code pays][numéro sans espaces]
    },
    {
      type: "location",
      icon: "mbri-pin",
      label: "Location",                      // Label (peut être "Visit", "Location", etc.)
      value: "Grand-Bassam, Côte d'Ivoire",
      link: undefined                         // Pas de lien pour la localisation (ou URL Google Maps)
    }
    // Ajoutez d'autres informations de contact si nécessaire
  ],
  formAction: "php/form.php"                 // URL pour soumettre le formulaire de contact
};

// ====================================================================
// SECTION 10 : BLOG (Articles de blog)
// ====================================================================
export const blogData: BlogSection = {
  title: "Latest News",                      // Titre de la section
  subtitle: "Blog",                          // Sous-titre
  description: "Articles about my projects, technologies and experiences in development", // Description
  posts: [
    {
      id: "1",
      title: "Recommandations et normes en gestion de flotte automobile",
      excerpt: "Retour d'experience sur un projet FLOTTE couvrant echeances, conformite, alertes, maintenance, TCO et audit log.",
      imageUrl: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&h=530&fit=crop&q=80",
      author: "KOUAKOU EBOUHO FRANCK YVAN",
      date: "2026-03-05",
      category: "Fleet Management",
      tags: ["Flotte Automobile", "Conformite", "TCO", "Audit Log"],
      link: "https://github.com/yvan2007"
    }
  ]
};

// ====================================================================
// SECTION 11 : VIDEO (Section vidéo)
// ====================================================================
export const videoData: VideoSection = {
  title: "Project Highlights",                    // Titre de la section
  subtitle: "Overview",                         // Sous-titre
  description: "Selected project highlights and outcomes", // Description
  videoUrl: "#", // Liens video retires
  thumbnailImageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop", // Image de prévisualisation
  buttonText: "Preview"                  // Texte du bouton
};

// ====================================================================
// SECTION 12 : PROJECT CTA (Call-to-action pour projets)
// ====================================================================
// Section "Create a Website" en bas de page
export const projectCtaData: ProjectCtaData = {
  title: "Creons votre prochain projet",                 // Titre
  description: "Collaborons pour concevoir une solution innovante, claire et performante.", // Description
  buttonText: "Me contacter",              // Texte du bouton
  buttonLink: "#contact"                     // Lien du bouton (généralement #contact)
};

// ====================================================================
// EXPORT DE TOUTES LES DONNÉES
// ====================================================================
// Les données ci-dessus sont automatiquement exportées et utilisées
// par les composants Angular. Vous n'avez pas besoin de modifier quoi
// que ce soit en dehors de ce fichier.
// ====================================================================


