// Translated project copy, keyed by slug.
//
// English lives in src/data/projects.js and stays the single source of truth for
// STRUCTURE — slug, images, stack, links, gallery order. Only prose appears
// here. `captions` is a parallel array: entry n translates gallery[n].caption,
// so adding a screenshot on the English side never shifts a translation.
//
// Anything missing here falls back to the English text automatically
// (see localizeProject in LanguageContext.js).

// Values shared across projects — role titles, year ranges, type labels.
export const FIELD_TEXT = {
  fr: {
    role: {
      "Frontend Developer": "Développeuse front-end",
      "Frontend Developer — maintenance": "Développeuse front-end — maintenance",
      "Design, build and operations": "Design, développement et exploitation",
    },
    year: {
      "2024 — present": "2024 — aujourd'hui",
    },
    type: {
      Professional: "Professionnel",
      Personal: "Personnel",
    },
    linkLabel: {
      "Visit (admin login)": "Visiter (connexion admin)",
    },
  },
  ar: {
    role: {
      "Frontend Developer": "مطوّرة واجهات أمامية",
      "Frontend Developer — maintenance": "مطوّرة واجهات أمامية — صيانة",
      "Design, build and operations": "التصميم والتطوير والتشغيل",
    },
    year: {
      "2024 — present": "2024 — حتى الآن",
    },
    type: {
      Professional: "مهني",
      Personal: "شخصي",
    },
    linkLabel: {
      "Visit (admin login)": "زيارة (دخول المشرف)",
    },
  },
};

export const PROJECT_TEXT = {
  fr: {
    "rh-recruitment": {
      summary:
        "Une plateforme de recrutement où les entreprises publient offres et stages, et où les candidats déposent leurs candidatures.",
      overview:
        "Une plateforme de recrutement complète qui permet aux entreprises de publier des offres d'emploi et de stage et de gérer les candidatures reçues, pendant que les candidats consultent les annonces et postulent depuis un compte unique.",
      highlights: [
        "Développement de la plateforme de bout en bout avec React et Next.js",
        "Revue d'architecture et contrôle de la qualité du code côté front-end",
        "Optimisation des performances sur l'ensemble de l'implémentation React et Next.js",
      ],
      captions: [
        "Liste des offres — programmes ouverts, postes disponibles et statut des candidatures",
        "Compte candidat — informations personnelles et détails du diplôme",
      ],
    },

    softydinner: {
      summary:
        "Réservation de repas en entreprise — réserver à l'avance, réduire l'attente et limiter le gaspillage alimentaire.",
      overview:
        "Une solution numérique pour la restauration d'entreprise. Les employés réservent leurs repas à l'avance, ce qui raccourcit les files d'attente au service et donne à la cuisine des chiffres précis, donc moins de nourriture jetée.",
      highlights: [
        "Conception et développement de l'interface du tableau de bord d'administration",
        "Gestion des menus — plats principaux et accompagnements, avec notes et avis",
        "Planning hebdomadaire des dîners avec le nombre de réservations par jour",
        "Tableaux de réservations et de notes avec filtrage par date et pagination",
        "Base de code claire et facile à maintenir, en React et TypeScript",
      ],
      captions: [
        "Plats principaux — éléments du menu avec notes et nombre d'avis",
        "Accompagnements — la même vue de gestion pour les garnitures",
        "Planning des dîners — une semaine à la fois, avec les réservations par jour",
        "Réservations — plat principal, accompagnements et note par réservation, filtrables par date",
        "Notes — avis regroupés par score, d'excellent à à améliorer",
      ],
    },

    annodoc: {
      summary:
        "Une plateforme PDF moderne avec collaboration en temps réel, outils d'annotation intuitifs et partage simple.",
      overview:
        "Annodoc va au-delà d'un éditeur PDF classique : les équipes annotent ensemble en temps réel, commentent directement sur le document et le partagent sans passer par l'e-mail.",
      highlights: [
        "Développement de la landing page avec un design épuré et responsive",
        "Section tarifs avec bascule mensuel / annuel et calcul de l'économie en direct",
        "Carrousel de témoignages et FAQ pour le site vitrine",
        "Formulaire de contact avec champs société, e-mail, téléphone et message",
        "Thèmes clair et sombre, plus un sélecteur de langue",
        "Intégration de la couche de gestion de contenu",
      ],
      captions: [
        "Hero — positionnement, appel à l'action de téléchargement et statistiques d'usage, avec l'éditeur d'annotation en aperçu",
        "Tarifs — formules mensuelles et annuelles avec une bascule qui recalcule l'économie",
        "Témoignages — un carrousel de citations d'enseignants utilisant le produit",
        "Contact — formulaire de demande à côté d'un panneau d'information",
      ],
    },

    "star-business": {
      summary:
        "Cabinet de conseil accompagnant entrepreneurs et startups dans la création et la gestion d'entreprise aux Émirats arabes unis.",
      overview:
        "Une plateforme de conseil qui simplifie la création et la gestion d'une entreprise aux Émirats arabes unis : réglementation locale, constitution de société et accompagnement opérationnel continu.",
      highlights: [
        "Conception et développement de la landing page avec une mise en page moderne et responsive",
        "Intégration de Strapi pour que l'équipe gère elle-même le contenu",
        "Travail SEO sur l'ensemble des pages vitrines",
      ],
      captions: [],
    },

    ostedhy: {
      summary:
        "Des cours en direct interactifs pour tous les niveaux, assurés par des enseignants qualifiés et expérimentés.",
      overview:
        "Une plateforme éducative où les élèves échangent directement avec leurs enseignants via un système d'apprentissage et de suivi de progression, du secondaire jusqu'à la préparation au baccalauréat et aux écoles d'ingénieurs.",
      highlights: [
        "Trois interfaces distinctes — élève, enseignant et administration — sur un même langage de design, plus la landing page publique",
        "Catalogue de matières avec progression par élève, nombre de chapitres et durée, tunnel d'achat et portefeuille de points",
        "Calendrier hebdomadaire des sessions en direct : les élèves les consultent, les réservent et les rejoignent",
        "Formules d'abonnement avec paliers mensuel, 3 mois et 12 mois",
        "Espace enseignant pour publier chapitres et vidéos, filtrés par classe et matière, avec un tableau de bord des sessions récentes",
        "Tables d'administration sur plus de 31 000 fiches élèves : recherche, filtres, colonnes configurables, export CSV et pagination côté serveur",
        "Tableau de bord des revenus ventilés par matière, enseignant, chapitre et classe, sur n'importe quel mois ou année",
        "Prise en charge complète du français, de l'arabe et de l'anglais, mise en page de droite à gauche incluse",
      ],
      captions: [
        "Élève — catalogue de matières avec progression, nombre de chapitres et achat",
        "Élève — calendrier hebdomadaire des sessions en direct",
        "Élève — formules d'abonnement mensuelles et annuelles",
        "Enseignant — tableau de bord des sessions, chapitres et vidéos récents",
        "Enseignant — bibliothèque de cours filtrée par classe et matière",
        "Admin — tableau de bord des revenus par matière, enseignant, chapitre et classe",
        "Admin — fiches élèves avec recherche, filtres et export CSV",
        "Admin — catalogue de chapitres avec tarifs, validation et publication",
      ],
    },

    "imtiyaz-academy": {
      summary:
        "Plateforme mauritanienne diffusant les programmes nationaux en ligne : cours, exercices et évaluations.",
      overview:
        "Une plateforme d'apprentissage numérique qui met le programme national mauritanien en ligne — cours détaillés, exercices interactifs et évaluations régulières, dans un environnement souple et sécurisé.",
      highlights: [
        "Développement de la landing page et des interfaces élève, enseignant et administration sur un langage de design commun",
        "Interface pensée d'abord en arabe, avec mise en page complète de droite à gauche, plus une version française pour les enseignants",
        "Accueil élève réunissant calendrier mensuel, statistiques de temps d'étude et de progression, et abonnements arrivant à échéance",
        "Cartes de matières affichant la progression par thème, les heures de contenu et les dates de fin d'abonnement",
        "Portefeuille payant via les banques locales mauritaniennes — Masrvi, Bankily et Sedad — avec historique de recharge et de virement",
        "Espace enseignant pour publier chapitres et vidéos par classe, avec un tableau de bord des sessions récentes et de la présence",
        "Back-office pour les élèves, enseignants et administrateurs, avec recherche, filtres, colonnes configurables et export CSV",
        "Section finances couvrant transactions, paiements, remboursements et part de revenus par enseignant",
      ],
      captions: [
        "Élève — accueil avec calendrier, statistiques d'étude et abonnements arrivant à échéance",
        "Élève — cartes de matières avec progression et dates de fin",
        "Élève — portefeuille et moyens de paiement locaux",
        "Enseignant — sessions en direct et chapitres récents, en français",
        "Enseignant — chapitres regroupés par classe et matière",
        "Admin — fiches enseignants avec recherche, filtres et export CSV",
        "Admin — file de remboursements avec validation et refus",
        "Admin — abonnements aux offres par classe et par formule",
      ],
    },

    "we-quizz": {
      summary:
        "Création de quiz pour les enseignants — des évaluations qui captivent les élèves et approfondissent la compréhension.",
      overview:
        "Un créateur de quiz pour les enseignants : concevoir des évaluations rapidement, garder les élèves engagés et vérifier la compréhension plutôt que la mémorisation.",
      highlights: [
        "Parcours de création en trois étapes — construire le quiz, définir les résultats, publier — avec un éditeur de texte enrichi pour les questions",
        "Types de questions variés : choix multiples, texte à trous et diapositives d'instruction, chacun avec ses points, son minuteur et ses indices",
        "Arrière-plans thématiques et aperçu du lecteur en direct, pour que l'enseignant voie exactement ce que verront les élèves",
        "Paliers de score associant chaque plage de résultats à son propre message et à son image",
        "Bibliothèque de dossiers imbriqués pour organiser les quiz par classe et matière, avec filtres et favoris",
        "Tableau de bord propriétaire suivant quiz publiés et brouillons, tentatives mensuelles, meilleurs enseignants et quiz par matière",
        "Table des tentatives listant chaque quiz avec son identifiant de partage, sa note et son nombre de tentatives, paginée sur des centaines de pages",
      ],
      captions: [
        "Tableau de bord — quiz publiés et brouillons, tentatives mensuelles",
        "Tableau de bord — meilleurs enseignants, quiz par matière et derniers publiés",
        "Bibliothèque — quiz et dossiers organisés par classe et matière",
        "Éditeur de quiz — types de questions, points, minuteur et indices",
        "Générateur de résultats — plages de score associées à leur message",
        "Aperçu du lecteur — le quiz tel que l'élève le voit, sur le thème choisi",
        "Tentatives — identifiants de partage, notes et nombre de tentatives",
      ],
    },

    "softy-skills": {
      summary:
        "Formation pratique au développement web, construite autour des compétences réellement demandées sur le marché.",
      overview:
        "Une plateforme de formation proposant des cours pratiques de développement web, pensée pour que les étudiants comprennent les concepts en profondeur tout en acquérant les compétences que le marché de l'emploi réclame vraiment.",
      highlights: [
        "Interfaces responsives sur l'ensemble du site vitrine — accueil, cours, bootcamps, ressources et à propos",
        "Carrousel pleine largeur des parcours — développement web, test logiciel, front-end — chaque panneau avec son propre appel à l'action",
        "Carrousel de bootcamps associant la description du cours au contenu appris, aux compétences acquises et au tarif mensuel",
        "Section comparative opposant Softy Skills aux autres organismes, point par point",
        "Inscription à la newsletter avec nom, e-mail et champ téléphone tunisien",
        "Bandeau d'annonce pour les promotions en cours, au-dessus de la navigation flottante",
        "Contenu géré via Strapi pour que l'équipe publie cours et bootcamps sans redéploiement",
      ],
      captions: [
        "Accueil — carrousel des parcours avec un appel à l'action par panneau",
        "Bootcamps — ce que vous apprendrez, compétences acquises et tarifs",
        "Comparatif — Softy Skills face aux autres organismes",
        "Inscription à la newsletter avec nom, e-mail et téléphone",
      ],
    },

    softyword: {
      summary:
        "Un éditeur de texte collaboratif en temps réel : texte enrichi, import/export PDF et Word, dictée vocale et correction orthographique multilingue.",
      overview:
        "Un éditeur de texte collaboratif en temps réel. Plusieurs personnes éditent le même document simultanément, avec texte enrichi complet, import et export PDF et Word, saisie vocale et correction orthographique multilingue. L'éditeur web, l'API, l'application mobile et le langage de design vivent dans une seule base de code, pour la cohérence et la performance.",
      highlights: [
        "Édition collaborative en temps réel bâtie sur TipTap et Yjs, avec présence en direct et partage",
        "Ruban complet façon Word — contrôles de police, paragraphe et styles sur les onglets Accueil, Insertion, Mise en page, Références et Révision",
        "Import et export PDF et Word, plus la dictée vocale",
        "Correction orthographique multilingue, avec suivi des modifications activable par document",
        "Galerie de modèles professionnels prêts à l'emploi — propositions, rapports, communiqués de presse, newsletters, études de cas, CV",
        "Espace documents avec vues grille et liste, favoris, filtres, partagés avec moi, corbeille et quota de stockage",
        "Comptes et organisations, pour qu'un espace de travail réunisse plusieurs membres",
        "Interface entièrement traduite, en français et en anglais",
        "Web, API, mobile et design system unifiés dans un seul monorepo",
      ],
      captions: [
        "Documents — vue grille avec modèles, filtres et quota de stockage",
        "Galerie de modèles professionnels prêts à l'emploi",
        "Éditeur — ruban façon Word, collaboration en direct et suivi des modifications",
        "Profil — compte et appartenance à une organisation",
      ],
    },

    chichkhan: {
      summary:
        "Back-office d'une chaîne de cafés et restaurants — menus, produits, commandes, tarifs de livraison, coupons et avis, sur plus de 180 articles.",
      overview:
        "La plateforme d'administration d'une chaîne de cafés et restaurants : menus, catalogue produits, articles recommandés, commandes, tarifs de livraison, moyens de paiement, remises, coupons, bannières et avis clients, pour plus de 180 produits.",
      highlights: [
        "Correction d'anomalies d'interface, de fonctionnement et d'intégration dans tout le back-office",
        "Saisie bilingue de bout en bout — chaque catégorie et chaque produit porte un nom et une description en arabe et en français",
        "Catalogue de plus de 180 produits sur 19 pages, chacun avec images, catégorie, description et bascule de disponibilité",
        "File de commandes affichant type de livraison, client, adresse, moyen de paiement, prix et statut, avec livreur affecté",
        "Gestion des livreurs avec état de disponibilité et de vérification pour chacun",
        "Répertoire de plus de 100 comptes clients avec recherche, statut de vérification et rôle",
        "Revue de code, dépannage et optimisation pour la stabilité et la fiabilité",
      ],
      captions: [
        "Catégories — saisie bilingue arabe et français, image et icône",
        "Produits — plus de 180 articles avec bascules de disponibilité",
        "Commandes — type de livraison, paiement, prix et statut",
        "Livreurs — disponibilité et vérification pour chacun",
        "Clients — répertoire consultable avec vérification et rôle",
      ],
    },

    "mery-rose": {
      summary:
        "Une boutique de mode d'occasion et de friperie que je conçois, développe et gère moi-même — collections sélectionnées, favoris, panier et comptes.",
      overview:
        "Ma propre boutique de mode d'occasion et de friperie. J'en assure le design, le développement et la gestion quotidienne : sélection de chaque collection, photographie des pièces et sortie d'une nouvelle collection chaque semaine.",
      highlights: [
        "Marque et boutique conçues de zéro — logo, palette et typographie",
        "Sortie hebdomadaire annoncée par un compte à rebours en bandeau, avec un carrousel Nouveautés sur la page d'accueil",
        "Grille boutique où chaque pièce affiche sa marque, sa taille, son état et son prix en dinar tunisien",
        "Fenêtre d'aperçu produit avec carrousel photo, guide des tailles, notes d'état, couleur et matière, et onglets Détails, Mesures et Entretien",
        "Essayage virtuel pour voir la pièce portée avant d'acheter",
        "Favoris, panier et comptes clients",
        "Chaque article photographié, mesuré et décrit par moi — des pièces uniques, donc aucune fiche n'est réutilisée",
      ],
      captions: [
        "Accueil — carrousel Nouveautés et bandeau de la sortie hebdomadaire",
        "Boutique — marque, taille, état et prix sur chaque carte",
        "Aperçu rapide — guide des tailles, état, mesures et entretien",
      ],
    },
  },

  ar: {
    "rh-recruitment": {
      summary:
        "منصة توظيف تنشر فيها الشركات الوظائف والتدريبات، ويقدّم عبرها المرشّحون طلباتهم.",
      overview:
        "منصة توظيف متكاملة تتيح للشركات نشر فرص العمل والتدريب وإدارة الطلبات الواردة، بينما يتصفّح المرشّحون الإعلانات ويتقدّمون إليها من خلال حساب واحد.",
      highlights: [
        "بناء المنصة بالكامل باستخدام React وNext.js",
        "مراجعة البنية البرمجية وفحص جودة الشيفرة في الواجهة الأمامية",
        "تحسين الأداء عبر تنفيذ React وNext.js بأكمله",
      ],
      captions: [
        "قائمة العروض — البرامج المفتوحة والوظائف المتاحة وحالة الطلبات",
        "حساب المرشّح — المعلومات الشخصية وتفاصيل الشهادة",
      ],
    },

    softydinner: {
      summary:
        "حجز الوجبات في مكان العمل — الحجز المسبق يقلّل الانتظار ويحدّ من هدر الطعام.",
      overview:
        "حلّ رقمي لخدمات الإطعام في الشركات. يحجز الموظفون وجباتهم مسبقاً، ما يقصّر طوابير الانتظار وقت التقديم ويمنح المطبخ أعداداً دقيقة، فيقلّ ما يُرمى من الطعام.",
      highlights: [
        "تصميم وبناء واجهة لوحة تحكم الإدارة",
        "إدارة القوائم للأطباق الرئيسية والأطباق الجانبية، مع التقييمات والمراجعات",
        "جدول العشاء الأسبوعي مع عدد الحجوزات لكل يوم",
        "جداول الحجوزات والتقييمات مع التصفية حسب التاريخ وتقسيم الصفحات",
        "شيفرة نظيفة وسهلة الصيانة بلغتي React وTypeScript",
      ],
      captions: [
        "الأطباق الرئيسية — عناصر القائمة مع التقييمات وعدد المراجعات",
        "الأطباق الجانبية — نفس واجهة الإدارة للمرافقات",
        "جدول العشاء — أسبوع كامل، مع الحجوزات لكل يوم",
        "الحجوزات — الطبق الرئيسي والأطباق الجانبية والتقييم لكل حجز، مع تصفية حسب التاريخ",
        "التقييمات — المراجعات مجمّعة حسب الدرجة، من ممتاز إلى بحاجة إلى تحسين",
      ],
    },

    annodoc: {
      summary:
        "منصة PDF حديثة مع تعاون في الوقت الفعلي وأدوات تعليق بديهية ومشاركة بسيطة.",
      overview:
        "تتجاوز Annodoc محرّر PDF التقليدي: تعلّق الفرق على المستندات معاً في الوقت الفعلي، وتضيف التعليقات في مكانها، وتشارك الملفات دون المرور بالبريد الإلكتروني.",
      highlights: [
        "بناء الصفحة التعريفية بتصميم نظيف ومتجاوب",
        "قسم الأسعار مع مبدّل شهري / سنوي وحساب فوري لقيمة التوفير",
        "شريط دوّار للشهادات وقسم للأسئلة الشائعة للموقع التسويقي",
        "نموذج تواصل يضم حقول الشركة والبريد الإلكتروني والهاتف والرسالة",
        "وضعان فاتح وداكن، إضافة إلى مبدّل اللغة",
        "دمج طبقة إدارة المحتوى",
      ],
      captions: [
        "الواجهة الرئيسية — الرسالة التعريفية وزر التحميل وإحصاءات الاستخدام، مع معاينة محرّر التعليقات",
        "الأسعار — باقات شهرية وسنوية مع مبدّل يعيد حساب التوفير",
        "الشهادات — شريط دوّار لآراء المعلّمين المستخدمين للمنتج",
        "التواصل — نموذج الاستفسار إلى جانب لوحة معلومات",
      ],
    },

    "star-business": {
      summary:
        "شركة استشارات ترافق روّاد الأعمال والشركات الناشئة في تأسيس الشركات وإدارتها في الإمارات العربية المتحدة.",
      overview:
        "منصة استشارية تبسّط تأسيس الأعمال وإدارتها في الإمارات العربية المتحدة، وتغطي الأنظمة المحلية وتأسيس الشركات والدعم التشغيلي المستمر.",
      highlights: [
        "تصميم وبناء الصفحة التعريفية بتخطيط حديث ومتجاوب",
        "دمج Strapi ليتمكّن الفريق من إدارة المحتوى بنفسه",
        "أعمال تحسين محرّكات البحث عبر الصفحات التسويقية",
      ],
      captions: [],
    },

    ostedhy: {
      summary:
        "دروس مباشرة تفاعلية لجميع المستويات، يقدّمها معلّمون مؤهّلون وذوو خبرة.",
      overview:
        "منصة تعليمية يتواصل فيها الطلاب مباشرة مع معلّميهم عبر نظام للتعلّم وتتبّع التقدّم، يغطي المستويات من التعليم الثانوي حتى التحضير للبكالوريا والدراسات الهندسية.",
      highlights: [
        "بناء ثلاث واجهات منفصلة — للطالب والمعلّم والإدارة — على لغة تصميم واحدة، إضافة إلى الصفحة التعريفية العامة",
        "دليل المواد مع تقدّم كل طالب وعدد الفصول ومدّتها، ومسار الشراء ومحفظة النقاط",
        "تقويم أسبوعي للجلسات المباشرة يرى فيه الطلاب جلساتهم ويحجزونها وينضمّون إليها",
        "باقات اشتراك بمستويات شهرية و3 أشهر و12 شهراً",
        "مساحة عمل للمعلّم لنشر الفصول ومقاطع الفيديو، مع تصفية حسب الصف والمادة، ولوحة تحكم بالجلسات الأخيرة",
        "جداول إدارية تضم أكثر من 31٬000 سجل طالب: بحث وتصفية وإظهار الأعمدة وتصدير CSV وتقسيم الصفحات من جهة الخادم",
        "لوحة إيرادات تفصّل الدخل حسب المادة والمعلّم والفصل والصف، عبر أي شهر أو سنة",
        "دعم كامل للفرنسية والعربية والإنجليزية، بما في ذلك التخطيط من اليمين إلى اليسار",
      ],
      captions: [
        "الطالب — دليل المواد مع التقدّم وعدد الفصول والشراء",
        "الطالب — التقويم الأسبوعي للجلسات المباشرة",
        "الطالب — باقات الاشتراك الشهرية والسنوية",
        "المعلّم — لوحة تحكم بالجلسات المباشرة والفصول والفيديوهات الأخيرة",
        "المعلّم — مكتبة الدروس مصفّاة حسب الصف والمادة",
        "الإدارة — لوحة الإيرادات حسب المادة والمعلّم والفصل والصف",
        "الإدارة — سجلات الطلاب مع البحث والتصفية وتصدير CSV",
        "الإدارة — دليل الفصول مع التسعير والاعتماد والنشر",
      ],
    },

    "imtiyaz-academy": {
      summary:
        "منصة موريتانية تقدّم المناهج الوطنية عبر الإنترنت بدروس وتمارين وتقييمات.",
      overview:
        "منصة تعلّم رقمية تنقل المنهج الوطني الموريتاني إلى الإنترنت — دروس مفصّلة وتمارين تفاعلية وتقييمات دورية، في بيئة مرنة وآمنة.",
      highlights: [
        "بناء الصفحة التعريفية وواجهات الطالب والمعلّم والإدارة على لغة تصميم مشتركة",
        "واجهة عربية أولاً بتخطيط كامل من اليمين إلى اليسار، إضافة إلى نسخة فرنسية للمعلّمين",
        "صفحة الطالب الرئيسية تجمع التقويم الشهري وإحصاءات وقت الدراسة والتقدّم والاشتراكات المنتهية قريباً",
        "بطاقات المواد تعرض التقدّم في كل موضوع وساعات المحتوى وتواريخ انتهاء الاشتراك",
        "محفظة تدفع عبر البنوك الموريتانية المحلية — مصرفي وبنكيلي وسداد — مع سجل الشحن والتحويلات",
        "مساحة عمل للمعلّم لنشر الفصول والفيديوهات لكل صف، مع لوحة تحكم بالجلسات المباشرة الأخيرة والحضور",
        "مكتب إداري خلفي للطلاب والمعلّمين والمشرفين مع البحث والتصفية وإظهار الأعمدة وتصدير CSV",
        "قسم مالي يغطي المعاملات والمدفوعات والاستردادات وحصص الإيرادات لكل معلّم",
      ],
      captions: [
        "الطالب — الصفحة الرئيسية مع التقويم وإحصاءات الدراسة والاشتراكات المنتهية قريباً",
        "الطالب — بطاقات المواد مع التقدّم وتواريخ الانتهاء",
        "الطالب — المحفظة وخيارات الدفع عبر البنوك المحلية",
        "المعلّم — الجلسات المباشرة والفصول الأخيرة، بالفرنسية",
        "المعلّم — الفصول مجمّعة حسب الصف والمادة",
        "الإدارة — سجلات المعلّمين مع البحث والتصفية وتصدير CSV",
        "الإدارة — قائمة الاستردادات مع الموافقة والرفض",
        "الإدارة — اشتراكات العروض حسب الصف والباقة",
      ],
    },

    "we-quizz": {
      summary:
        "إنشاء الاختبارات للمعلّمين — تقييمات تشدّ انتباه الطلاب وتعمّق الفهم.",
      overview:
        "أداة لإنشاء الاختبارات للمعلّمين: بناء التقييمات بسرعة، والحفاظ على تفاعل الطلاب، وقياس الفهم بدلاً من الحفظ.",
      highlights: [
        "مسار إنشاء من ثلاث خطوات — بناء الاختبار، تحديد النتائج، النشر — مع محرّر نصوص منسّق للأسئلة",
        "أنواع أسئلة متعدّدة تشمل الاختيار من متعدّد وملء الفراغات وشرائح التعليمات، لكلٍّ نقاطه ومؤقّته وتلميحاته",
        "خلفيات مواضيعية للاختبار ومعاينة مباشرة للمشغّل، ليرى المعلّم تماماً ما سيراه الطالب",
        "نطاقات درجات تربط كل مجال نتيجة برسالته وصورته الخاصة",
        "مكتبة مجلّدات متداخلة لتنظيم الاختبارات حسب الصف والمادة، مع التصفية والمفضّلة",
        "لوحة تحكم للمالك تتابع الاختبارات المنشورة مقابل المسوّدات، والمحاولات الشهرية، وأبرز المعلّمين، والاختبارات حسب المادة",
        "جدول المحاولات يسرد كل اختبار مع معرّف المشاركة والتقييم وعدد المحاولات، موزّعاً على مئات الصفحات",
      ],
      captions: [
        "لوحة التحكم — الاختبارات المنشورة والمسوّدات والمحاولات الشهرية",
        "لوحة التحكم — أبرز المعلّمين والاختبارات حسب المادة وآخر ما نُشر",
        "المكتبة — الاختبارات والمجلّدات منظّمة حسب الصف والمادة",
        "محرّر الاختبار — أنواع الأسئلة والنقاط والمؤقّت والتلميحات",
        "منشئ النتائج — نطاقات الدرجات مرتبطة برسائلها",
        "معاينة المشغّل — الاختبار كما يراه الطالب، على السمة المختارة",
        "المحاولات — معرّفات المشاركة والتقييمات وعدد المحاولات",
      ],
    },

    "softy-skills": {
      summary:
        "تدريب عملي على تطوير الويب مبني على المهارات التي يطلبها سوق العمل فعلاً.",
      overview:
        "منصة تدريب تقدّم دورات عملية في تطوير الويب، مصمَّمة ليبني الطلاب فهماً عميقاً للمفاهيم مع اكتساب المهارات التي يطلبها سوق العمل حقاً.",
      highlights: [
        "واجهات متجاوبة عبر الموقع التسويقي بأكمله — الرئيسية والدورات والمعسكرات والموارد ومن نحن",
        "شريط دوّار بعرض الشاشة لمسارات الدورات — تطوير الويب واختبار البرمجيات والواجهات الأمامية — لكل لوحة دعوتها الخاصة للتفاعل",
        "شريط دوّار للمعسكرات يجمع وصف الدورة مع ما يتعلّمه الطالب والمهارات التي يكتسبها والسعر الشهري",
        "قسم مقارنة يضع Softy Skills أمام غيرها من الجهات، نقطة بنقطة",
        "تسجيل في النشرة البريدية بالاسم والبريد الإلكتروني وحقل هاتف تونسي",
        "شريط إعلانات للعروض الحالية، فوق شريط التنقّل العائم الثابت",
        "محتوى يُدار عبر Strapi لينشر الفريق الدورات والمعسكرات دون إعادة نشر الموقع",
      ],
      captions: [
        "الرئيسية — شريط مسارات الدورات مع دعوة للتفاعل في كل لوحة",
        "المعسكرات — ما ستتعلّمه والمهارات المكتسبة والأسعار",
        "المقارنة — Softy Skills مقابل الجهات الأخرى",
        "التسجيل في النشرة البريدية بالاسم والبريد والهاتف",
      ],
    },

    softyword: {
      summary:
        "محرّر نصوص تعاوني في الوقت الفعلي مع نصوص منسّقة واستيراد وتصدير PDF وWord، وتحويل الكلام إلى نص، وتدقيق إملائي متعدّد اللغات.",
      overview:
        "محرّر نصوص تعاوني في الوقت الفعلي. يحرّر عدّة أشخاص المستند نفسه في آنٍ واحد بإمكانات تنسيق كاملة، مع الاستيراد والتصدير إلى PDF وWord، وإدخال الكلام نصاً، والتدقيق الإملائي متعدّد اللغات. محرّر الويب وواجهة الخادم وتطبيق الهاتف ولغة التصميم تعيش كلّها في قاعدة شيفرة واحدة، سعياً للاتساق والأداء.",
      highlights: [
        "تحرير تعاوني في الوقت الفعلي مبني على TipTap وYjs، مع حضور مباشر ومشاركة",
        "شريط أدوات كامل على طراز Word — ضوابط الخط والفقرة والأنماط عبر تبويبات الرئيسية والإدراج والتخطيط والمراجع والمراجعة",
        "الاستيراد والتصدير إلى PDF وWord، إضافة إلى تحويل الكلام إلى نص",
        "تدقيق إملائي متعدّد اللغات، مع تتبّع التغييرات القابل للتفعيل لكل مستند",
        "معرض قوالب مهنية جاهزة — عروض ومقترحات وتقارير وبيانات صحفية ونشرات ودراسات حالة وسير ذاتية",
        "مساحة عمل للمستندات بعرض شبكي وقائمة، مع المفضّلة والتصفية والمشارَك معي وسلة المهملات وحصّة التخزين",
        "حسابات ومنظّمات، بحيث تضم مساحة العمل الواحدة عدّة أعضاء",
        "واجهة مترجمة بالكامل، بالفرنسية والإنجليزية",
        "الويب وواجهة الخادم والتطبيق المحمول ونظام التصميم موحّدة في مستودع واحد",
      ],
      captions: [
        "المستندات — عرض شبكي مع القوالب والتصفية وحصّة التخزين",
        "معرض القوالب المهنية الجاهزة",
        "المحرّر — شريط على طراز Word وتعاون مباشر وتتبّع التغييرات",
        "الملف الشخصي — الحساب والانتماء إلى منظّمة",
      ],
    },

    chichkhan: {
      summary:
        "نظام إدارة خلفي لسلسلة مقاهٍ ومطاعم — القوائم والمنتجات والطلبات وأسعار التوصيل والكوبونات والمراجعات، لأكثر من 180 صنفاً.",
      overview:
        "منصة الإدارة خلف سلسلة مقاهٍ ومطاعم: القوائم ودليل المنتجات والأصناف الموصى بها والطلبات وأسعار التوصيل وطرق الدفع والخصومات والكوبونات واللافتات ومراجعات العملاء، لأكثر من 180 منتجاً.",
      highlights: [
        "معالجة عيوب الواجهة والوظائف والتكامل في نظام الإدارة الخلفي",
        "إدخال بيانات ثنائي اللغة في كل مكان — لكل فئة ومنتج اسم ووصف بالعربية والفرنسية",
        "دليل منتجات يضم أكثر من 180 صنفاً على 19 صفحة، لكلٍّ صوره وفئته ووصفه ومفتاح توفّره",
        "قائمة طلبات تعرض نوع التوصيل والعميل والعنوان وطريقة الدفع والسعر والحالة، مع تعيين المندوب لكل طلب",
        "إدارة المندوبين مع حالة التوفّر والتحقّق لكل مندوب توصيل",
        "دليل عملاء يضم أكثر من 100 حساب مع البحث وحالة التحقّق والدور",
        "مراجعة الشيفرة وتشخيص الأعطال وأعمال التحسين من أجل الاستقرار والموثوقية",
      ],
      captions: [
        "الفئات — إدخال ثنائي اللغة بالعربية والفرنسية، مع صورة وأيقونة",
        "المنتجات — أكثر من 180 صنفاً مع مفاتيح التوفّر",
        "الطلبات — نوع التوصيل والدفع والسعر والحالة",
        "المندوبون — التوفّر والتحقّق لكل مندوب",
        "العملاء — دليل قابل للبحث مع التحقّق والدور",
      ],
    },

    "mery-rose": {
      summary:
        "متجر أزياء مستعملة وخردة فاخرة أصمّمه وأبنيه وأديره بنفسي — تشكيلات منتقاة وقائمة أمنيات وسلّة وحسابات.",
      overview:
        "متجري الخاص للأزياء المستعملة. أتولّى تصميمه وبناءه وتشغيله اليومي: انتقاء كل تشكيلة، وتصوير القطع، وإطلاق تشكيلة جديدة كل أسبوع.",
      highlights: [
        "علامة تجارية ومتجر مصمّمان من الصفر — الشعار ولوحة الألوان والخطوط",
        "إطلاق أسبوعي بعدّ تنازلي في شريط يعمّ الموقع، مع شريط دوّار للوافدات الجديدة في الصفحة الرئيسية",
        "شبكة المتجر حيث تحمل كل قطعة علامتها ومقاسها وحالتها وسعرها بالدينار التونسي",
        "نافذة معاينة سريعة للمنتج مع شريط صور ودليل مقاسات وملاحظات الحالة واللون والخامة، وتبويبات التفاصيل والقياسات والعناية",
        "تجربة افتراضية للقطع ليرى المتسوّق القطعة قبل الشراء",
        "قائمة الأمنيات والسلّة وحسابات العملاء",
        "كل قطعة أصوّرها وأقيسها وأكتب وصفها بنفسي — قطع فريدة، فلا يتكرّر أي إعلان",
      ],
      captions: [
        "الرئيسية — شريط الوافدات الجديدة وبانر الإطلاق الأسبوعي",
        "المتجر — العلامة والمقاس والحالة والسعر على كل بطاقة",
        "معاينة سريعة — دليل المقاسات والحالة والقياسات والعناية",
      ],
    },
  },
};

export default PROJECT_TEXT;
