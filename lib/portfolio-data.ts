export const profileData = {
  name: "Fatou Seye",
  title: "Développeuse Full-Stack",
  avatar: "/profile.jpg",
  email: "fatouseyefass@gmail.com",
  phone: "+221 77 880 08 22",
  birthday: "06 Mars 2000",
  location: "Dakar, Fass Mbao, Sénégal",
  social: {
    github: "https://github.com/seyefatou",
    linkedin: "https://www.linkedin.com/in/fatou-seye-104aaa247/",
    whatsapp: "https://wa.me/221778800822",
    snapchat: "https://snapchat.com/t/HomNws7E",
  },
}

export const aboutData = {
  description: [
    "Je suis une développeuse Full-Stack basée à Dakar, Sénégal, spécialisée dans le développement web et la création de solutions numériques innovantes. J'aime transformer les problèmes complexes en applications simples, belles et intuitives.",
    "Mon travail consiste à construire votre site web ou application pour qu'il soit fonctionnel et convivial, tout en étant attrayant. De plus, j'ajoute une touche personnelle à votre produit et m'assure qu'il soit captivant et facile à utiliser. Mon objectif est de communiquer votre message et votre identité de la manière la plus créative possible. J'ai travaillé avec diverses technologies incluant React, Next.js, Node.js et les plateformes cloud modernes.",
  ],
  services: [
    {
      icon: "Code",
      title: "Développement Frontend",
      description: "Création d'applications web modernes et réactives avec React, Next.js et TypeScript.",
    },
    {
      icon: "Zap",
      title: "Développement Backend",
      description: "Création d'API robustes et de solutions côté serveur avec Node.js et les frameworks modernes.",
    },
    {
      icon: "Smartphone",
      title: "Développement App web",
      description: "Développement professionnel d'applications mobiles avec React Native et les outils modernes.",
    },
    {
      icon: "PenTool",
      title: "Design UI/UX",
      description: "Conception d'interfaces utilisateur intuitives et belles qui améliorent l'expérience utilisateur.",
    },
  ],
  testimonials: [
    {
      avatar: "/professional-man.jpg",
      name: "Daniel Lewis",
      text: "Fatou a été embauchée pour créer une identité d'entreprise. Nous avons été très satisfaits du travail effectué. Elle a beaucoup d'expérience et se préoccupe beaucoup des besoins des clients.",
    },
    {
      avatar: "/professional-woman-diverse.png",
      name: "Jessica Miller",
      text: "Fatou a été embauchée pour créer une identité d'entreprise. Nous avons été très satisfaits du travail effectué. Elle a beaucoup d'expérience et se préoccupe beaucoup des besoins des clients.",
    },
    {
      avatar: "/professional-man.jpg",
      name: "Michael Chen",
      text: "Travail exceptionnel ! Fatou a livré un produit de haute qualité qui a dépassé nos attentes. Son attention aux détails est remarquable.",
    },
    {
      avatar: "/professional-woman-diverse.png",
      name: "Sarah Johnson",
      text: "Professionnelle, créative et hautement compétente. Fatou est la développeuse que vous voulez dans votre équipe pour tout projet complexe.",
    },
  ],
  clients: [
    { name: "TechCorp", logo: "/tech-company-logo.jpg" },
    { name: "StartupHub", logo: "/startup-logo.png" },
    { name: "DesignStudio", logo: "/design-agency-logo.png" },
    { name: "CodeLabs", logo: "/software-company-logo.png" },
    { name: "WebSolutions", logo: "/web-agency-logo.jpg" },
    { name: "AppMakers", logo: "/app-development-logo.jpg" },
  ],
}

export const resumeData = {
  education: [
    {
      title: "Université de Californie, Berkeley",
      period: "2013 — 2017",
      description:
        "Étudié l'Informatique avec une spécialisation dans les technologies web et les principes d'ingénierie logicielle.",
    },
    {
      title: "Bootcamp Développement Frontend",
      period: "2017 — 2018",
      description:
        "Programme intensif couvrant les frameworks JavaScript modernes, le design réactif et les principes UX.",
    },
  ],
  experience: [
    {
      title: "Développeur Full-Stack Senior",
      period: "2020 — Présent",
      description:
        "Diriger le développement d'applications web évolutives utilisant React, Node.js et les technologies cloud. Mentorer les développeurs juniors et implémenter les meilleures pratiques.",
    },
    {
      title: "Développeur Full-Stack",
      period: "2018 — 2020",
      description:
        "Développé et maintenu plusieurs projets clients utilisant les technologies web modernes. Collaboré avec les équipes de conception pour créer des expériences utilisateur transparentes.",
    },
  ],
  skills: [
    { name: "Web Design", level: 90 },
    { name: "Développement Frontend", level: 95 },
    { name: "Développement Backend", level: 85 },
    { name: "Conception Base de Données", level: 80 },
  ],
}

export const portfolioData = {
  categories: ["tous", "application web", "site web"],
  projects: [
    {
      title: "Mysubito",
      category: "application web",
      image: "/subito.png",
      description: "Plateforme de réservation de navettes aéroport et courses inter-villes au Sénégal et en Côte d'Ivoire. Service de transport simplifié avec réservation en ligne.",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://mysubito.net/",
      githubUrl: "https://mysubito.net/",
      preview: {
        headline: "Plateforme complète de réservation de transport et de services de voyage",
        target: "Sénégal & Afrique de l'Ouest",
        features: [
          {
            category: "Services de Transport",
            icon: "Car",
            items: [
              { name: "Transfert Aéroport", desc: "Navettes aller/retour, suivi de vol, options (siège bébé, animaux, bagages)" },
              { name: "Inter-Villes", desc: "Transport entre villes sénégalaises, trajets multiples, options bagages" },
              { name: "Location de Voiture", desc: "Sélection de véhicules, périodes de location flexibles" },
            ]
          },
          {
            category: "Assistance Visa",
            icon: "FileCheck",
            items: [
              { name: "Billets d'avion", desc: "Organisation et réservation de vols" },
              { name: "Hôtel", desc: "Réservation d'hébergement" },
              { name: "Assurance voyage", desc: "Couverture complète pour vos déplacements" },
              { name: "Prix groupés", desc: "Calcul automatique des tarifs pour services combinés" },
            ]
          },
          {
            category: "Espace Client",
            icon: "User",
            items: [
              { name: "Authentification", desc: "Inscription/connexion via email ou téléphone" },
              { name: "Tableau de bord", desc: "Vue personnalisée de vos réservations" },
              { name: "Historique", desc: "Accès à toutes vos réservations passées" },
              { name: "Factures", desc: "Téléchargement de factures PDF" },
            ]
          },
          {
            category: "Dashboard Admin",
            icon: "LayoutDashboard",
            items: [
              { name: "Gestion réservations", desc: "Vue globale avec filtres, modification des statuts" },
              { name: "Utilisateurs", desc: "Gestion des clients, admins et chauffeurs" },
              { name: "Trajets & Tarifs", desc: "Configuration des routes et prix" },
              { name: "Analytics", desc: "Statistiques de réservations, revenus, performance" },
            ]
          },
        ],
        stats: [
          { label: "Villes desservies", value: "15+" },
          { label: "Chauffeurs", value: "50+" },
          { label: "Réservations/mois", value: "500+" },
        ]
      }
    },
    {
      title: "Jolof Mobility",
      category: "site web",
      image: "/jolofmobility.png",
      description: "Site vitrine institutionnel pour Jolof Mobility, startup sénégalaise qui réinvente le transport durable, connecté et accessible au Sénégal avec Jolof Taxi, Yessal et Topoto.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://jolofmobility.com/",
      githubUrl: "https://jolofmobility.com/",
      preview: {
        headline: "Réinventer le transport au Sénégal : durable, connecté et accessible",
        target: "Dakar, Sénégal",
        features: [
          {
            category: "Jolof Taxi",
            icon: "Car",
            items: [
              { name: "VTC pour taxis traditionnels", desc: "Application permettant aux clients de commander un taxi facilement" },
              { name: "Réservation simplifiée", desc: "Interface intuitive pour réserver un trajet en quelques clics" },
              { name: "Suivi en temps réel", desc: "Localisation du chauffeur et estimation du temps d'arrivée" },
              { name: "Paiement intégré", desc: "Options de paiement mobile et en espèces" },
            ]
          },
          {
            category: "Yessal",
            icon: "CreditCard",
            items: [
              { name: "Inclusion économique", desc: "Programme d'aide aux chauffeurs pour accéder au crédit" },
              { name: "Renouvellement véhicule", desc: "Financement pour renouveler les véhicules des chauffeurs" },
              { name: "Accompagnement financier", desc: "Conseils et suivi pour une gestion financière saine" },
              { name: "Partenariats bancaires", desc: "Collaboration avec institutions financières locales" },
            ]
          },
          {
            category: "Topoto",
            icon: "Wrench",
            items: [
              { name: "Gestion de véhicules", desc: "Plateforme complète de suivi et gestion de flotte" },
              { name: "Pièces auto", desc: "Accès aux pièces détachées à prix compétitifs" },
              { name: "Entretien & maintenance", desc: "Planification et suivi des maintenances préventives" },
              { name: "Assistance routière", desc: "Service d'aide en cas de panne ou d'urgence" },
            ]
          },
          {
            category: "Pages du site",
            icon: "Layout",
            items: [
              { name: "Hero animé", desc: "Page d'accueil avec carrousel dynamique des services" },
              { name: "Valeurs", desc: "Carrousel interactif : Innovation, Excellence, Responsabilité, Transparence, Engagement" },
              { name: "Vision & Investissement", desc: "Présentation de la mission avec CTA vers invest.jolofmobility.com" },
              { name: "Téléchargement app", desc: "Redirection automatique vers Play Store / App Store" },
            ]
          },
        ],
        stats: [
          { label: "Services", value: "3" },
          { label: "Valeurs", value: "5" },
          { label: "Téléphone", value: "+221 78 537 47 92" },
        ]
      }
    },
    {
      title: "Weg Admin",
      category: "application web",
      image: "/weg-admin.png",
      description: "Back-office complet pour la plateforme VTC/taxi WEG en Côte d'Ivoire. Gestion des chauffeurs, partenaires, administrateurs, courses et tarifs avec interfaces modernes et animations.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Axios", "Recharts"],
      liveUrl: "https://admin-ci.weg.taxi/",
      githubUrl: "#",
      preview: {
        headline: "Back-office complet pour la gestion d'une plateforme VTC/taxi",
        target: "Côte d'Ivoire",
        features: [
          {
            category: "Gestion Chauffeurs",
            icon: "Users",
            items: [
              { name: "Liste paginée avec filtres", desc: "Présence, statut, validation en temps réel" },
              { name: "Création en 2 étapes", desc: "Infos personnelles + véhicule, puis upload documents" },
              { name: "Validation documents", desc: "Permis, carte grise, carte compteur avec approbation" },
              { name: "Contrôle activité", desc: "Activer/désactiver, mettre en ligne/hors ligne" },
            ]
          },
          {
            category: "Partenaires & Admins",
            icon: "Building",
            items: [
              { name: "Gestion partenaires", desc: "CRUD complet des entreprises partenaires" },
              { name: "Gestion administrateurs", desc: "Création et gestion des comptes admin" },
              { name: "Toggle statut", desc: "Activer/désactiver les comptes" },
              { name: "Portefeuille", desc: "Crédit et débit via WalletService" },
            ]
          },
          {
            category: "Services & Tarifs",
            icon: "Car",
            items: [
              { name: "Types de voitures", desc: "Gestion des catégories de véhicules" },
              { name: "Tarification", desc: "Configuration des prix par type" },
              { name: "TypeCarService", desc: "CRUD complet des services" },
              { name: "Multi-pays", desc: "Support CI, SN, BF, ML, BJ, TG" },
            ]
          },
          {
            category: "Dashboard & Courses",
            icon: "LayoutDashboard",
            items: [
              { name: "Statistiques temps réel", desc: "Métriques clés avec graphiques Recharts" },
              { name: "Suivi des courses", desc: "Liste, filtres par statut, carte interactive" },
              { name: "Horloge temps réel", desc: "Header avec heure actualisée" },
              { name: "Toast notifications", desc: "Success, error, warning, info" },
            ]
          },
        ],
        stats: [
          { label: "Services API", value: "7" },
          { label: "Modules", value: "8+" },
          { label: "API", value: "api-ci.weg.taxi" },
        ]
      }
    },
    {
      title: "Weg Partner",
      category: "application web",
      image: "/weg-partner.png",
      description: "Application de gestion de partenaires taxi pour WEG Taxi en Côte d'Ivoire. Permet aux entreprises partenaires de gérer leur flotte de chauffeurs, valider leurs documents et suivre les courses.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "JWT"],
      liveUrl: "https://partner-ci.weg.taxi/",
      githubUrl: "#",
      preview: {
        headline: "Outil de back-office métier pour la gestion de flotte taxi en Côte d'Ivoire",
        target: "Côte d'Ivoire",
        features: [
          {
            category: "Gestion Chauffeurs",
            icon: "Users",
            items: [
              { name: "CRUD complet", desc: "Ajouter, modifier, supprimer des chauffeurs" },
              { name: "Liste avec pagination", desc: "Navigation fluide parmi tous les chauffeurs" },
              { name: "Fiche détaillée", desc: "Infos personnelles, véhicule, statut, portefeuille" },
              { name: "Statuts de validation", desc: "NOT_STARTED, IN_PROGRESS, COMPLETED, FAILED" },
            ]
          },
          {
            category: "Documents",
            icon: "FileCheck",
            items: [
              { name: "Upload documents", desc: "Téléversement des pièces justificatives (recto/verso)" },
              { name: "Validation avec commentaires", desc: "Processus de validation par l'administrateur" },
              { name: "Suivi des statuts", desc: "Visualisation de l'état de chaque document" },
              { name: "Conformité légale", desc: "Garantir la conformité avant mise en service" },
            ]
          },
          {
            category: "Dashboard",
            icon: "LayoutDashboard",
            items: [
              { name: "Total chauffeurs", desc: "Vue d'ensemble de la flotte" },
              { name: "Chauffeurs en attente", desc: "En cours de validation" },
              { name: "Chauffeurs validés", desc: "Prêts à opérer" },
              { name: "Chauffeurs en ligne/actifs", desc: "Suivi en temps réel de l'activité" },
            ]
          },
          {
            category: "Authentification",
            icon: "Shield",
            items: [
              { name: "Connexion sécurisée", desc: "Authentification JWT avec token manager" },
              { name: "Inscription partenaire", desc: "Création de compte entreprise" },
              { name: "Mot de passe oublié", desc: "Réinitialisation par email" },
              { name: "Routes protégées", desc: "Accès sécurisé au dashboard" },
            ]
          },
        ],
        stats: [
          { label: "Modules", value: "5+" },
          { label: "Routes", value: "6" },
          { label: "API", value: "api-ci.weg.taxi" },
        ]
      }
    },
    {
      title: "Startup Landing Page",
      category: "site web",
      image: "/landing-page.png",
      description: "Landing page moderne et responsive pour startup, avec sections actualités, fonctionnalités et design épuré.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      liveUrl: "https://startup-landing-zeta.vercel.app/",
      githubUrl: "#",
      preview: {
        headline: "Landing page moderne et convertissante",
        target: "Startups & Entreprises",
        features: [
          {
            category: "Sections",
            icon: "Layout",
            items: [
              { name: "Hero Section", desc: "Accroche impactante et CTA" },
              { name: "Fonctionnalités", desc: "Présentation des avantages" },
              { name: "Actualités", desc: "Section blog/news intégrée" },
              { name: "Contact", desc: "Formulaire de contact optimisé" },
            ]
          },
        ],
        stats: [
          { label: "Score Lighthouse", value: "98%" },
          { label: "Temps chargement", value: "<1s" },
        ]
      }
    },
  ],
}

export const blogData = {
  posts: [
    {
      title: "Construire des Applications Web Modernes avec Next.js 15",
      category: "Développement",
      date: "15 Mar 2024",
      readTime: "8 min",
      image: "/web-development-coding.png",
      excerpt: "Plongée approfondie dans les fonctionnalités de Next.js 15 et les améliorations de l'App Router.",
      tags: ["Next.js", "React", "Développement Web"],
      slug: "building-modern-web-apps-nextjs-15",
    },
        {
      title: "L'Art de l'UI/UX : Créer des Expériences Délicieuses",
      category: "Design",
      date: "28 Fév 2024",
      readTime: "6 min",
      image: "/ui-ux-design-concept.png",
      excerpt: "Principes du design UI/UX exceptionnel pour les interfaces que les utilisateurs adorent.",
      tags: ["Design", "UI/UX", "Frontend"],
      slug: "art-of-uiux-delightful-experiences",
    },
    {
      title: "Bonnes Pratiques TypeScript pour les Grandes Applications",
      category: "Développement",
      date: "20 Fév 2024",
      readTime: "10 min",
      image: "/web-development-coding.png",
      excerpt: "Maîtriser les modèles TypeScript pour un code maintenable et type-safe.",
      tags: ["TypeScript", "JavaScript", "Bonnes Pratiques"],
      slug: "typescript-best-practices",
    },
    {
      title: "Construire des Applications en Temps Réel avec WebSockets",
      category: "Développement",
      date: "12 Fév 2024",
      readTime: "9 min",
      image: "/software-architecture.jpg",
      excerpt: "Implémenter des fonctionnalités en temps réel en utilisant WebSockets et les frameworks modernes.",
      tags: ["WebSockets", "Temps Réel", "Backend"],
      slug: "realtime-apps-websockets",
    },
    {
      title: "Maîtriser les Mises en Page CSS Grid et Flexbox",
      category: "Design",
      date: "5 Fév 2024",
      readTime: "7 min",
      image: "/ui-ux-design-concept.png",
      excerpt: "Techniques modernes de mise en page CSS avec des exemples pratiques.",
      tags: ["CSS", "Mise en page", "Frontend"],
      slug: "mastering-css-grid-flexbox",
    },
  ],
}

export const contactData = {
  email: "fatouseyefass@gmail.com",
  phone: "+221 77 880 08 22",
  location: "Dakar, Fass Mbao, Sénégal",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15433.840834498095!2d-17.3599824!3d14.7372448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d3e7a3b4c93%3A0x5c6c5b5d5c5c5c5c!2sFass%20Mbao%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2ssn!4v1234567890123!5m2!1sfr!2ssn",
}
