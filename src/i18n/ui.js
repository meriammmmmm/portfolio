// Interface copy in the three site languages.
//
// Sentences that carry an inline <span className="purple"> highlight are split
// into numbered parts (a, b, c...) so each language can put the emphasis where
// its own grammar wants it. Assemble them in the component, not here.

export const UI = {
  en: {
    brand: {
      name: "Meriam Mhadhbi",
      codeFile: "meriam.js",
    },

    meta: {
      title: "Meriam Mhadhbi | Portfolio",
    },

    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      resume: "Resume",
      toDark: "Switch to dark mode",
      toLight: "Switch to light mode",
      language: "Language",
    },

    home: {
      eyebrow: "Front-end developer",
      title: "Hi, I'm Meriam Mhadhbi",
      blurb:
        "4+ years building responsive, high-performance web interfaces with React, Next.js and TypeScript.",
      viewWork: "View my work",
      downloadCV: "Download CV",
      role1: "Software Developer",
      role2: "Front-End Developer",
      available: "Available for work",
      photoAlt: "Meriam Mhadhbi",
      codeStack: "React / Next.js",
      codeStatus: "Open to work",
    },

    home2: {
      eyebrow: "A little about me",
      title: "Let me introduce myself",
      p1a: "I fell in love with programming, and I'm still learning something new every day. I'm fluent in ",
      p1b: "JavaScript, TypeScript, React.js and Next.js",
      p1c: " — the core tools behind modern web experiences.",
      p2a: "My passion is building sleek, scalable, user-centric front-end applications. Outside client work I explore ",
      p2b: "React Native",
      p2c: " for mobile and dip into ",
      p2d: "Node.js",
      p2e: " for full-stack solutions.",
      factExperience: "Experience",
      factExperienceValue: "4+ years · 7 production platforms",
      factBased: "Based in",
      factBasedValue: "Sousse, Tunisia — open to remote",
      factStack: "Daily stack",
      factStackValue: "React · Next.js · TypeScript",
      factAlso: "Also works with",
      factAlsoValue: "Node.js · React Native · Docker",
      ctaTitle: "Let's work together",
      ctaSub:
        "I'm open to front-end roles and freelance projects. The fastest way to reach me is email — or find me on the links below.",
      ctaButton: "Get in touch",
    },

    about: {
      eyebrow: "Know who I am",
      cardTitleA: "Frontend-focused full-stack developer with ",
      cardTitleB: "4+ years",
      cardTitleC: " of experience",
      cardP1a: "I build responsive, high-performance web interfaces in ",
      cardP1b: "React, Next.js and TypeScript",
      cardP1c:
        ", and I've worked across the full delivery cycle — UI/UX collaboration, frontend architecture, performance optimisation and API integration.",
      cardP2a: "At ",
      cardP2b: "Softylines",
      cardP2c: " I've delivered ",
      cardP2d: "7 production platforms",
      cardP2e:
        " spanning e-learning, recruitment and business dashboards, working in Agile teams alongside designers, backend engineers and QA.",
      skillsEyebrow: "What I work with",
      skillsTitleA: "Professional ",
      skillsTitleB: "skillset",
      toolsEyebrow: "Day to day",
      toolsTitleA: "Tools",
      toolsTitleB: " I use",
      job1Period: "2022 — Present",
      job1Title: "Frontend Developer",
      job1Org: "Softylines · Sousse, Tunisia",
      job1Note1: "7 production platforms delivered in Agile sprints",
      job1Note2: "Reusable component libraries across client projects",
      job1Note3: "Performance work on data-heavy dashboards",
      job2Period: "2022 — 2025",
      job2Title: "Bachelor's Degree in Digital Technologies",
      job2Org: "Horizon School of Digital Technologies · Sousse",
    },

    resume: {
      eyebrow: "Curriculum vitae",
      title: "Résumé",
      sub: "Browse it below, or download the PDF to keep a copy.",
      download: "Download CV",
      loading: "Loading résumé…",
      error:
        "The résumé could not be displayed — use the download button above.",
      prevPage: "Previous page",
      nextPage: "Next page",
      pageLabel: "Page",
      pageOf: "of",
    },

    projects: {
      eyebrow: "Portfolio",
      titleA: "My recent ",
      titleB: "works",
      sub: "A selection of platforms and products I've designed and shipped.",
      filterLabel: "Filter projects",
      all: "All",
    },

    type: {
      Professional: "Professional",
      Personal: "Personal",
    },

    card: {
      caseStudy: "Case study",
      visit: "Visit",
    },

    detail: {
      back: "All projects",
      projectPrefix: "",
      projectSuffix: " project",
      visitSite: "Visit site",
      moreScreens: "More screens",
      overview: "Overview",
      whatIBuilt: "What I built",
      techStack: "Tech stack",
      nextProject: "Next project",
      role: "Role",
      year: "Year",
      type: "Type",
      builtAt: "Built at",
      screenshotAlt: "screenshot",
    },

    footer: {
      tagline: "Front-end developer · Tunisia · ©",
    },
  },

  fr: {
    brand: {
      name: "Meriam Mhadhbi",
      codeFile: "meriam.js",
    },

    meta: {
      title: "Meriam Mhadhbi | Portfolio",
    },

    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      resume: "CV",
      toDark: "Passer en mode sombre",
      toLight: "Passer en mode clair",
      language: "Langue",
    },

    home: {
      eyebrow: "Développeuse front-end",
      title: "Bonjour, je suis Meriam Mhadhbi",
      blurb:
        "Plus de 4 ans à concevoir des interfaces web responsives et performantes avec React, Next.js et TypeScript.",
      viewWork: "Voir mes projets",
      downloadCV: "Télécharger le CV",
      role1: "Développeuse logiciel",
      role2: "Développeuse front-end",
      available: "Disponible pour un poste",
      photoAlt: "Meriam Mhadhbi",
      codeStack: "React / Next.js",
      codeStatus: "Ouverte aux opportunités",
    },

    home2: {
      eyebrow: "Un mot sur moi",
      title: "Laissez-moi me présenter",
      p1a: "Je suis tombée amoureuse de la programmation, et j'apprends encore quelque chose de nouveau chaque jour. Je maîtrise ",
      p1b: "JavaScript, TypeScript, React.js et Next.js",
      p1c: " — les outils au cœur des expériences web modernes.",
      p2a: "Ma passion : créer des applications front-end élégantes, évolutives et centrées sur l'utilisateur. En dehors des projets clients, j'explore ",
      p2b: "React Native",
      p2c: " pour le mobile et je touche à ",
      p2d: "Node.js",
      p2e: " pour des solutions full-stack.",
      factExperience: "Expérience",
      factExperienceValue: "4+ ans · 7 plateformes en production",
      factBased: "Basée à",
      factBasedValue: "Sousse, Tunisie — ouverte au télétravail",
      factStack: "Stack quotidienne",
      factStackValue: "React · Next.js · TypeScript",
      factAlso: "Également",
      factAlsoValue: "Node.js · React Native · Docker",
      ctaTitle: "Travaillons ensemble",
      ctaSub:
        "Je suis ouverte aux postes front-end et aux missions freelance. Le plus rapide est de m'écrire par e-mail — ou de me retrouver via les liens ci-dessous.",
      ctaButton: "Me contacter",
    },

    about: {
      eyebrow: "Qui je suis",
      cardTitleA: "Développeuse full-stack orientée front-end avec ",
      cardTitleB: "plus de 4 ans",
      cardTitleC: " d'expérience",
      cardP1a: "Je conçois des interfaces web responsives et performantes en ",
      cardP1b: "React, Next.js et TypeScript",
      cardP1c:
        ", et j'interviens sur tout le cycle de livraison — collaboration UI/UX, architecture front-end, optimisation des performances et intégration d'API.",
      cardP2a: "Chez ",
      cardP2b: "Softylines",
      cardP2c: " j'ai livré ",
      cardP2d: "7 plateformes en production",
      cardP2e:
        " dans l'e-learning, le recrutement et les tableaux de bord métier, en équipe Agile aux côtés de designers, développeurs back-end et QA.",
      skillsEyebrow: "Mes technologies",
      skillsTitleA: "Compétences ",
      skillsTitleB: "professionnelles",
      toolsEyebrow: "Au quotidien",
      toolsTitleA: "Outils",
      toolsTitleB: " que j'utilise",
      job1Period: "2022 — aujourd'hui",
      job1Title: "Développeuse front-end",
      job1Org: "Softylines · Sousse, Tunisie",
      job1Note1: "7 plateformes livrées en production, en sprints Agile",
      job1Note2:
        "Bibliothèques de composants réutilisables sur les projets clients",
      job1Note3:
        "Optimisation des performances sur des tableaux de bord à forte densité de données",
      job2Period: "2022 — 2025",
      job2Title: "Licence en technologies numériques",
      job2Org: "Horizon School of Digital Technologies · Sousse",
    },

    resume: {
      eyebrow: "Curriculum vitae",
      title: "CV",
      sub: "Consultez-le ci-dessous, ou téléchargez le PDF pour en garder une copie.",
      download: "Télécharger le CV",
      loading: "Chargement du CV…",
      error:
        "Le CV n'a pas pu s'afficher — utilisez le bouton de téléchargement ci-dessus.",
      prevPage: "Page précédente",
      nextPage: "Page suivante",
      pageLabel: "Page",
      pageOf: "sur",
    },

    projects: {
      eyebrow: "Portfolio",
      titleA: "Mes derniers ",
      titleB: "projets",
      sub: "Une sélection de plateformes et de produits que j'ai conçus et livrés.",
      filterLabel: "Filtrer les projets",
      all: "Tous",
    },

    type: {
      Professional: "Professionnel",
      Personal: "Personnel",
    },

    card: {
      caseStudy: "Étude de cas",
      visit: "Visiter",
    },

    detail: {
      back: "Tous les projets",
      projectPrefix: "Projet ",
      projectSuffix: "",
      visitSite: "Visiter le site",
      moreScreens: "Autres écrans",
      overview: "Aperçu",
      whatIBuilt: "Ce que j'ai réalisé",
      techStack: "Stack technique",
      nextProject: "Projet suivant",
      role: "Rôle",
      year: "Année",
      type: "Type",
      builtAt: "Réalisé chez",
      screenshotAlt: "capture d'écran",
    },

    footer: {
      tagline: "Développeuse front-end · Tunisie · ©",
    },
  },

  ar: {
    brand: {
      // Arabic spelling of the name for the navbar and footer. The copy inside
      // the meriam.js card stays Latin — it is a JS string literal, and Arabic
      // inside that LTR monospace block renders with broken bidi.
      name: "مريم المهذبي",
      codeFile: "meriam.js",
    },

    meta: {
      title: "مريم المهذبي | أعمالي",
    },

    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      projects: "المشاريع",
      resume: "CV",
      toDark: "التبديل إلى الوضع الداكن",
      toLight: "التبديل إلى الوضع الفاتح",
      language: "اللغة",
    },

    home: {
      eyebrow: "مطوّرة واجهات أمامية",
      title: "مرحباً، أنا مريم المهذبي",
      blurb:
        "أكثر من 4 سنوات في بناء واجهات ويب متجاوبة وعالية الأداء باستخدام React وNext.js وTypeScript.",
      viewWork: "استعرض أعمالي",
      downloadCV: "تحميل السيرة الذاتية",
      role1: "مطوّرة برمجيات",
      role2: "مطوّرة واجهات أمامية",
      available: "متاحة للعمل",
      photoAlt: "مريم المهذبي",
      codeStack: "React / Next.js",
      codeStatus: "متاحة للعمل",
    },

    home2: {
      eyebrow: "نبذة قصيرة",
      title: "دعني أعرّفك بنفسي",
      p1a: "أحببت البرمجة منذ البداية، وما زلت أتعلّم شيئاً جديداً كل يوم. أتقن ",
      p1b: "JavaScript وTypeScript وReact.js وNext.js",
      p1c: " — الأدوات الأساسية وراء تجارب الويب الحديثة.",
      p2a: "شغفي هو بناء تطبيقات واجهة أمامية أنيقة وقابلة للتوسّع تضع المستخدم في المقدمة. وخارج مشاريع العملاء أستكشف ",
      p2b: "React Native",
      p2c: " للتطبيقات المحمولة، وأعمل بـ ",
      p2d: "Node.js",
      p2e: " في الحلول المتكاملة.",
      factExperience: "الخبرة",
      factExperienceValue: "أكثر من 4 سنوات · 7 منصات في الإنتاج",
      factBased: "مقر الإقامة",
      factBasedValue: "سوسة، تونس — منفتحة على العمل عن بُعد",
      factStack: "الأدوات اليومية",
      factStackValue: "React · Next.js · TypeScript",
      factAlso: "أعمل أيضاً بـ",
      factAlsoValue: "Node.js · React Native · Docker",
      ctaTitle: "لنعمل معاً",
      ctaSub:
        "أنا منفتحة على وظائف تطوير الواجهات الأمامية وعلى المشاريع المستقلة. أسرع طريقة للتواصل معي هي البريد الإلكتروني — أو عبر الروابط أدناه.",
      ctaButton: "تواصل معي",
    },

    about: {
      eyebrow: "من أنا",
      cardTitleA: "مطوّرة متكاملة متخصّصة في الواجهات الأمامية بخبرة ",
      cardTitleB: "تتجاوز 4 سنوات",
      cardTitleC: "",
      cardP1a: "أبني واجهات ويب متجاوبة وعالية الأداء باستخدام ",
      cardP1b: "React وNext.js وTypeScript",
      cardP1c:
        "، وقد عملت على دورة التسليم كاملة — التعاون في تصميم تجربة المستخدم، وبنية الواجهة الأمامية، وتحسين الأداء، وربط واجهات البرمجة.",
      cardP2a: "في ",
      cardP2b: "Softylines",
      cardP2c: " أنجزت ",
      cardP2d: "7 منصات في الإنتاج",
      cardP2e:
        " تشمل التعليم الإلكتروني والتوظيف ولوحات تحكم الأعمال، ضمن فرق Agile إلى جانب المصمّمين ومطوّري الخوادم وفرق الجودة.",
      skillsEyebrow: "ما أعمل به",
      skillsTitleA: "المهارات ",
      skillsTitleB: "المهنية",
      toolsEyebrow: "يومياً",
      toolsTitleA: "الأدوات",
      toolsTitleB: " التي أستخدمها",
      job1Period: "2022 — حتى الآن",
      job1Title: "مطوّرة واجهات أمامية",
      job1Org: "Softylines · سوسة، تونس",
      job1Note1: "7 منصات سُلّمت في الإنتاج ضمن دورات Agile",
      job1Note2: "مكتبات مكوّنات قابلة لإعادة الاستخدام عبر مشاريع العملاء",
      job1Note3: "تحسين الأداء على لوحات تحكم كثيفة البيانات",
      job2Period: "2022 — 2025",
      job2Title: "إجازة في التقنيات الرقمية",
      job2Org: "Horizon School of Digital Technologies · سوسة",
    },

    resume: {
      eyebrow: "السيرة الذاتية",
      title: "CV",
      sub: "تصفّحها أدناه، أو حمّل ملف PDF للاحتفاظ بنسخة.",
      download: "تحميل السيرة الذاتية",
      loading: "جارٍ تحميل السيرة الذاتية…",
      error:
        "تعذّر عرض السيرة الذاتية — استخدم زر التحميل أعلاه.",
      prevPage: "الصفحة السابقة",
      nextPage: "الصفحة التالية",
      pageLabel: "صفحة",
      pageOf: "من",
    },

    projects: {
      eyebrow: "أعمالي",
      titleA: "أحدث ",
      titleB: "مشاريعي",
      sub: "مجموعة مختارة من المنصات والمنتجات التي صمّمتها وأطلقتها.",
      filterLabel: "تصفية المشاريع",
      all: "الكل",
    },

    type: {
      Professional: "مهني",
      Personal: "شخصي",
    },

    card: {
      caseStudy: "دراسة الحالة",
      visit: "زيارة",
    },

    detail: {
      back: "كل المشاريع",
      projectPrefix: "مشروع ",
      projectSuffix: "",
      visitSite: "زيارة الموقع",
      moreScreens: "لقطات إضافية",
      overview: "نظرة عامة",
      whatIBuilt: "ما قمت ببنائه",
      techStack: "التقنيات المستخدمة",
      nextProject: "المشروع التالي",
      role: "الدور",
      year: "السنة",
      type: "النوع",
      builtAt: "أُنجز في",
      screenshotAlt: "لقطة شاشة",
    },

    footer: {
      tagline: "مطوّرة واجهات أمامية · تونس · ©",
    },
  },
};

export default UI;
