export const profileData = {
  name: "Jean Dupont",
  title: "Développeur Full-Stack",
  avatar: "/professional-developer-avatar.png",
  email: "jean@example.com",
  phone: "+33 (1) 23 45 67 89",
  birthday: "15 Juin 1995",
  location: "San Francisco, Californie, États-Unis",
  social: {
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
  },
}

export const aboutData = {
  description: [
    "Je suis un développeur Full-Stack basé à San Francisco, Californie, spécialisé dans le développement web et la création de solutions numériques innovantes. J'aime transformer les problèmes complexes en applications simples, belles et intuitives.",
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
      title: "Développement Mobile",
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
      text: "Jean a été embauché pour créer une identité d'entreprise. Nous avons été très satisfaits du travail effectué. Il a beaucoup d'expérience et se préoccupe beaucoup des besoins des clients.",
    },
    {
      avatar: "/professional-woman-diverse.png",
      name: "Jessica Miller",
      text: "Jean a été embauché pour créer une identité d'entreprise. Nous avons été très satisfaits du travail effectué. Il a beaucoup d'expérience et se préoccupe beaucoup des besoins des clients.",
    },
    {
      avatar: "/professional-man.jpg",
      name: "Michael Chen",
      text: "Travail exceptionnel ! Jean a livré un produit de haute qualité qui a dépassé nos attentes. Son attention aux détails est remarquable.",
    },
    {
      avatar: "/professional-woman-diverse.png",
      name: "Sarah Johnson",
      text: "Professionnel, créatif et hautement compétent. Jean est le développeur que vous voulez dans votre équipe pour tout projet complexe.",
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
  categories: ["tous", "web design", "applications", "développement web"],
  projects: [
    {
      title: "Plateforme E-Commerce",
      category: "développement web",
      image: "/modern-ecommerce-website.png",
      description: "Solution e-commerce complète avec intégration de paiement",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/ecommerce",
    },
    {
      title: "Application de Gestion de Tâches",
      category: "applications",
      image: "/task-management-interface.png",
      description: "Gestionnaire de tâches collaboratif avec mises à jour en temps réel",
      tech: ["React", "Firebase", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/taskmanager",
    },
    {
      title: "Site Portfolio",
      category: "web design",
      image: "/minimalist-portfolio-design.jpg",
      description: "Design de portfolio moderne pour les professionnels créatifs",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/portfolio",
    },
    {
      title: "Tableau de Bord Réseaux Sociaux",
      category: "développement web",
      image: "/analytics-dashboard.png",
      description: "Tableau de bord analytique avec visualisation de données",
      tech: ["React", "D3.js", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/dashboard",
    },
    {
      title: "Application Bancaire Mobile",
      category: "applications",
      image: "/banking-app-interface.png",
      description: "Application bancaire mobile sécurisée",
      tech: ["React Native", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/banking",
    },
    {
      title: "Site Restaurant",
      category: "web design",
      image: "/restaurant-website-design.png",
      description: "Site restaurant élégant avec commande en ligne",
      tech: ["Next.js", "Sanity CMS", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/restaurant",
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
      title: "Architecture Microservices : Un Guide Complet",
      category: "Architecture",
      date: "8 Mar 2024",
      readTime: "12 min",
      image: "/software-architecture.jpg",
      excerpt: "Concevoir des microservices évolutifs avec des exemples du monde réel.",
      tags: ["Architecture", "Backend", "DevOps"],
      slug: "microservices-architecture-guide",
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
  email: "jean@example.com",
  phone: "+33 (1) 23 45 67 89",
  location: "San Francisco, Californie",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14220298434!2d-122.50764017406082!3d37.75767381338211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
}
