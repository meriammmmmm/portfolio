import annodoc from "../Assets/Projects/annodoc.jpg";
import adHero from "../Assets/Projects/annodoc-hero.jpg";
import adContact from "../Assets/Projects/annodoc-contact.jpg";
import adTestimonials from "../Assets/Projects/annodoc-testimonials.jpg";
import adPricing from "../Assets/Projects/annodoc-pricing.jpg";
import imtiyaz from "../Assets/Projects/imtiyaz.jpg";
import imStudentDashboard from "../Assets/Projects/imtiyaz-student-dashboard.jpg";
import imStudentSubjects from "../Assets/Projects/imtiyaz-student-subjects.jpg";
import imStudentWallet from "../Assets/Projects/imtiyaz-student-wallet.jpg";
import imTeacherDashboard from "../Assets/Projects/imtiyaz-teacher-dashboard.jpg";
import imTeacherCourses from "../Assets/Projects/imtiyaz-teacher-courses.jpg";
import imAdminTeachers from "../Assets/Projects/imtiyaz-admin-teachers.jpg";
import imAdminRefunds from "../Assets/Projects/imtiyaz-admin-refunds.jpg";
import imAdminOffers from "../Assets/Projects/imtiyaz-admin-offers.jpg";
import starBusiness from "../Assets/Projects/star-bussnies.jpg";
import recruitment from "../Assets/Projects/recruitment.jpg";
import recruitmentOffers from "../Assets/Projects/recruitment-offers.png";
import recruitmentProfile from "../Assets/Projects/recruitment-profile.png";
import osthedhy from "../Assets/Projects/osthedhy.jpg";
import osStudentSubjects from "../Assets/Projects/ostedhy-student-subjects.jpg";
import osStudentSessions from "../Assets/Projects/ostedhy-student-sessions.jpg";
import osStudentOffers from "../Assets/Projects/ostedhy-student-offers.jpg";
import osTeacherDashboard from "../Assets/Projects/ostedhy-teacher-dashboard.jpg";
import osTeacherCourses from "../Assets/Projects/ostedhy-teacher-courses.jpg";
import osAdminDashboard from "../Assets/Projects/ostedhy-admin-dashboard.jpg";
import osAdminStudents from "../Assets/Projects/ostedhy-admin-students.jpg";
import osAdminChapters from "../Assets/Projects/ostedhy-admin-chapters.jpg";
import softyDinner from "../Assets/Projects/SoftyDinner.jpg";
import sdMain from "../Assets/Projects/softydinner-main.jpg";
import sdSide from "../Assets/Projects/softydinner-side.jpg";
import sdSchedule from "../Assets/Projects/softydinner-schedule.jpg";
import sdReservations from "../Assets/Projects/softydinner-reservations.jpg";
import sdRatings from "../Assets/Projects/softydinner-ratings.jpg";
import quiz from "../Assets/Projects/quiz.jpg";
import wqDashboard from "../Assets/Projects/wequizz-dashboard.jpg";
import wqReports from "../Assets/Projects/wequizz-dashboard-reports.jpg";
import wqLibrary from "../Assets/Projects/wequizz-library.jpg";
import wqEditor from "../Assets/Projects/wequizz-editor.jpg";
import wqResults from "../Assets/Projects/wequizz-results.jpg";
import wqPlayer from "../Assets/Projects/wequizz-player.jpg";
import wqAttempts from "../Assets/Projects/wequizz-attempts.jpg";
import softySkills from "../Assets/Projects/softySkills.jpg";
import ssTracks from "../Assets/Projects/softyskills-tracks.jpg";
import ssBootcamp from "../Assets/Projects/softyskills-bootcamp.jpg";
import ssComparison from "../Assets/Projects/softyskills-comparison.jpg";
import ssNewsletter from "../Assets/Projects/softyskills-newsletter.jpg";
import softyword from "../Assets/Projects/softyword.png";
import swDocuments from "../Assets/Projects/softyword-documents.jpg";
import swTemplates from "../Assets/Projects/softyword-templates.jpg";
import swEditor from "../Assets/Projects/softyword-editor.jpg";
import swProfile from "../Assets/Projects/softyword-profile.jpg";
import chichkhan from "../Assets/Projects/chichkhan.png";
import ckCategories from "../Assets/Projects/chichkhan-categories.jpg";
import ckProducts from "../Assets/Projects/chichkhan-products.jpg";
import ckOrders from "../Assets/Projects/chichkhan-orders.jpg";
import ckDelivery from "../Assets/Projects/chichkhan-delivery.jpg";
import ckUsers from "../Assets/Projects/chichkhan-users.jpg";
import meryrose from "../Assets/Projects/meryrose.jpg";
import mrHero from "../Assets/Projects/meryrose-hero.jpg";
import mrShop from "../Assets/Projects/meryrose-shop.jpg";
import mrProduct from "../Assets/Projects/meryrose-product.jpg";

/**
 * Single source of truth for the Projects grid and the case-study pages.
 *
 *  slug        — URL segment, /project/<slug>
 *  summary     — one or two lines, shown on the card (clamped to 3 lines)
 *  overview    — the longer version, shown on the detail page
 *  highlights  — what was actually built or fixed
 *  stack       — full technology list for the detail page
 *  gallery     — extra screens shown under the hero shot, optional
 *  tags        — the short subset shown on the card
 */
export const PROJECTS = [
  {
    slug: "rh-recruitment",
    img: recruitment,
    title: "RH Recruitment",
    type: "Professional",
    company: "Softylines",
    role: "Frontend Developer",
    year: "2023",
    summary:
      "A recruitment platform where companies post jobs and internships, and candidates submit their applications.",
    overview:
      "A comprehensive recruitment platform that lets companies publish job and internship openings and manage the applications that come back, while candidates browse listings and apply through a single account.",
    highlights: [
      "Built the platform end to end across React and Next.js",
      "Ran architecture review and code-quality checks on the frontend",
      "Performance optimisation across the React and Next.js implementation",
    ],
    stack: ["Next.js", "React", "TypeScript", "Material-UI", "Node.js"],
    tags: ["React", "Node.js"],
    demoLink: "https://recruitment.softylines.com/",
    gallery: [
      { src: recruitmentOffers, caption: "Offers list — open programmes, positions available and application status" },
      { src: recruitmentProfile, caption: "Candidate account — personal information and diploma details" },
    ],
  },
  {
    slug: "softydinner",
    img: softyDinner,
    title: "SoftyDinner",
    type: "Professional",
    company: "Softylines",
    role: "Frontend Developer",
    year: "2023",
    summary:
      "Meal reservation for the workplace — book ahead, cut waiting times and reduce food waste.",
    overview:
      "A digital solution for corporate catering. Employees reserve meals in advance, which shortens queues at service time and gives the kitchen accurate numbers so less food is thrown away.",
    highlights: [
      "Designed and built the admin dashboard interface",
      "Menu management for main dishes and side dishes, with ratings and reviews",
      "Weekly dinner schedule with per-day reservation counts",
      "Reservation and ratings tables with date filtering and pagination",
      "Kept the codebase clean and easy to maintain in React and TypeScript",
    ],
    stack: ["React", "TypeScript", "SCSS", "MongoDB"],
    tags: ["React", "MongoDB"],
    demoLink: "https://softydinner.softylines.com/dashboard/user/users",
    gallery: [
      { src: sdMain, caption: "Main dishes — menu items with ratings and review counts" },
      { src: sdSide, caption: "Side dishes — the same management view for accompaniments" },
      { src: sdSchedule, caption: "Dinner schedule — a week at a time, with reservations per day" },
      { src: sdReservations, caption: "Reservations — main dish, sides and rating per booking, filterable by date" },
      { src: sdRatings, caption: "Ratings — reviews grouped by score, from excellent to needs improvement" },
    ],
  },
  {
    slug: "annodoc",
    img: annodoc,
    title: "Annodoc",
    type: "Professional",
    company: "Softylines",
    role: "Frontend Developer",
    year: "2023",
    summary:
      "A modern PDF platform with real-time collaboration, intuitive annotation tools and simple sharing.",
    overview:
      "Annodoc goes beyond a traditional PDF editor: teams annotate together in real time, comment in place and share documents without a round trip through email.",
    highlights: [
      "Built the landing page with a clean, responsive design",
      "Pricing section with a monthly / yearly toggle and live saving calculation",
      "Testimonial carousel and FAQ built for the marketing site",
      "Contact form with company, email, phone and message fields",
      "Light and dark themes plus a language switcher",
      "Integrated the content management layer",
    ],
    stack: ["Next.js", "TypeScript", "SCSS", "i18n"],
    tags: ["Next.js", "TypeScript"],
    demoLink: "https://annodoc.com/",
    gallery: [
      { src: adHero, caption: "Hero — positioning, download CTA and usage stats, with the annotation editor previewed alongside" },
      { src: adPricing, caption: "Pricing — monthly and yearly plans with a toggle that recalculates the saving" },
      { src: adTestimonials, caption: "Testimonials — a carousel of quotes from teachers using the product" },
      { src: adContact, caption: "Contact — enquiry form beside a supporting panel" },
    ],
  },
  {
    slug: "star-business",
    img: starBusiness,
    title: "Star Business",
    type: "Professional",
    company: "Softylines",
    role: "Frontend Developer",
    year: "2024",
    summary:
      "Consultancy guiding entrepreneurs and startups through company setup and operations in the UAE.",
    overview:
      "A consultancy platform that simplifies establishing and running a business in the United Arab Emirates, covering local regulations, company setup and ongoing operational support.",
    highlights: [
      "Designed and built the landing page with a modern responsive layout",
      "Strapi integration so the team can manage content themselves",
      "SEO work across the marketing pages",
    ],
    stack: ["Next.js", "Strapi", "SCSS", "SEO", "i18n"],
    tags: ["Next.js", "i18n"],
    demoLink: "https://star-business.net/en",
  },
  {
    slug: "ostedhy",
    img: osthedhy,
    title: "Ostedhy",
    type: "Professional",
    company: "Softylines",
    role: "Frontend Developer",
    year: "2024 — present",
    summary:
      "Interactive live lessons for every level, delivered by qualified and experienced teachers.",
    overview:
      "An education platform where students communicate directly with their tutors through a progress-tracking and learning system, covering levels from secondary school up to engineering and baccalauréat preparation.",
    highlights: [
      "Built three separate frontends — student, teacher and admin — on top of one shared design language, plus the public landing page",
      "Subject catalogue with per-student progress, chapter and runtime counts, a purchase flow and a points wallet",
      "Weekly live-session calendar where students see, book and join sessions with their teachers",
      "Subscription packs with monthly, 3-month and 12-month pricing tiers",
      "Teacher workspace for publishing chapters and videos, filtered by class and subject, with a dashboard of recent sessions",
      "Admin data tables over 31,000 student records: search, filtering, column toggles, CSV export and server-side pagination",
      "Revenue dashboard breaking income down by subject, teacher, chapter and class across any month or year",
      "Full French, Arabic and English support, including right-to-left layouts",
    ],
    stack: ["React", "Next.js", "TypeScript", "SCSS", "Strapi", "Firebase", "i18n"],
    tags: ["React", "Firebase"],
    demoLink: "https://ostedhy.com/",
    gallery: [
      {
        src: osStudentSubjects,
        caption: "Student — subject catalogue with progress, chapter counts and purchase",
      },
      {
        src: osStudentSessions,
        caption: "Student — weekly calendar of live sessions",
      },
      {
        src: osStudentOffers,
        caption: "Student — subscription packs with monthly and yearly tiers",
      },
      {
        src: osTeacherDashboard,
        caption: "Teacher — dashboard of recent live sessions, chapters and videos",
      },
      {
        src: osTeacherCourses,
        caption: "Teacher — course library filtered by class and subject",
      },
      {
        src: osAdminDashboard,
        caption: "Admin — revenue dashboard by subject, teacher, chapter and class",
      },
      {
        src: osAdminStudents,
        caption: "Admin — student records with search, filters and CSV export",
      },
      {
        src: osAdminChapters,
        caption: "Admin — chapter catalogue with pricing, approval and publishing",
      },
    ],
  },
  {
    // NOTE: this entry was previously titled "Face Recognition and Emotion
    // Detection" while its image, description and link were all Imtiyaz
    // Academy. Title corrected to match the actual project.
    slug: "imtiyaz-academy",
    img: imtiyaz,
    title: "Imtiyaz Academy",
    type: "Professional",
    company: "Softylines",
    role: "Frontend Developer",
    year: "2025 — 2026",
    summary:
      "Mauritanian platform delivering national curricula online with lessons, exercises and assessments.",
    overview:
      "A digital learning platform bringing the Mauritanian national curriculum online — detailed lessons, interactive exercises and regular assessments, in a flexible and secure environment.",
    highlights: [
      "Built the landing page and the student, teacher and admin frontends on one shared design language",
      "Arabic-first interface with full right-to-left layout, plus a French version for teachers",
      "Student home combining a monthly calendar, study-time and progress stats, and expiring subscriptions at a glance",
      "Subject cards showing per-topic progress, hours of content and subscription end dates",
      "Wallet paying through local Mauritanian banks — Masrvi, Bankily and Sedad — with a top-up and transfer history",
      "Teacher workspace for publishing chapters and videos per class, with a dashboard of recent live sessions and attendance",
      "Admin back office for students, teachers and admins with search, filtering, column toggles and CSV export",
      "Finance section covering transactions, payments, refunds and per-teacher revenue shares",
    ],
    stack: ["React", "Next.js", "TypeScript", "SCSS", "Strapi", "Node.js", "i18n"],
    tags: ["React", "Node.js"],
    demoLink: "https://imtiyazacademy.com/",
    gallery: [
      {
        src: imStudentDashboard,
        caption: "Student — home with calendar, study stats and expiring subscriptions",
      },
      {
        src: imStudentSubjects,
        caption: "Student — subject cards with progress and end dates",
      },
      {
        src: imStudentWallet,
        caption: "Student — wallet with local bank payment options",
      },
      {
        src: imTeacherDashboard,
        caption: "Teacher — recent live sessions and chapters, in French",
      },
      {
        src: imTeacherCourses,
        caption: "Teacher — chapters grouped by class and subject",
      },
      {
        src: imAdminTeachers,
        caption: "Admin — teacher records with search, filters and CSV export",
      },
      {
        src: imAdminRefunds,
        caption: "Admin — refund queue with approve and reject actions",
      },
      {
        src: imAdminOffers,
        caption: "Admin — offer subscriptions by class and package",
      },
    ],
  },
  {
    slug: "we-quizz",
    img: quiz,
    title: "We Quizz",
    type: "Professional",
    company: "Softylines",
    role: "Frontend Developer",
    summary:
      "Quiz authoring for educators — assessments that captivate students and deepen understanding.",
    overview:
      "A quiz builder for teachers: create assessments quickly, keep students engaged and check understanding rather than recall.",
    highlights: [
      "Three-step authoring flow — build the quiz, define the results, publish — with a rich-text editor for questions",
      "Question types including multiple choice, fill in the blanks and instruction slides, each with its own points, timer and hint settings",
      "Themed quiz backgrounds and a live player preview so teachers see exactly what students will see",
      "Score bands that map a result range to its own message and image",
      "Library of nested folders for organising quizzes by class and subject, with filters and a favourites star",
      "Owner dashboard tracking published versus draft quizzes, monthly attempts, top teachers and quizzes by subject",
      "Attempts table listing every quiz with its share identifier, rating and attempt count, paginated over hundreds of pages",
    ],
    stack: ["Next.js", "MongoDB", "TypeScript"],
    tags: ["Next.js", "MongoDB"],
    demoLink: "https://wequizz.com/",
    gallery: [
      {
        src: wqDashboard,
        caption: "Dashboard — published vs draft quizzes and monthly attempts",
      },
      {
        src: wqReports,
        caption: "Dashboard — top teachers, quizzes by subject and latest published",
      },
      {
        src: wqLibrary,
        caption: "Library — quizzes and folders organised by class and subject",
      },
      {
        src: wqEditor,
        caption: "Quiz editor — question types, points, timer and hints",
      },
      {
        src: wqResults,
        caption: "Result builder — score ranges mapped to their own message",
      },
      {
        src: wqPlayer,
        caption: "Player preview — the quiz as a student sees it, on the chosen theme",
      },
      {
        src: wqAttempts,
        caption: "Attempts — share identifiers, ratings and attempt counts",
      },
    ],
  },
  {
    slug: "softy-skills",
    img: softySkills,
    title: "Softy Skills",
    type: "Professional",
    company: "Softylines",
    role: "Frontend Developer",
    year: "2023",
    summary:
      "Practical, hands-on web development training built around real job-market skills.",
    overview:
      "A training platform offering practical web development courses, designed so students build a deep understanding of the concepts while developing the skills the job market actually asks for.",
    highlights: [
      "Built responsive interfaces across the whole marketing site — home, courses, bootcamps, resources and about",
      "Full-bleed carousel of course tracks — web development, software testing, frontend — each panel its own call to action",
      "Bootcamp carousel pairing the course description with what students learn, the skills they gain and monthly pricing",
      "Comparison section setting Softy Skills against other providers, point by point",
      "Newsletter signup with name, email and a Tunisian phone field",
      "Announcement bar for current promotions, above the sticky floating navigation",
      "Content managed through Strapi so the team publishes courses and bootcamps without a deploy",
    ],
    stack: ["Next.js", "Strapi", "TypeScript", "SCSS", "React"],
    tags: ["React", "Next.js"],
    demoLink: "https://softyskills.com/",
    gallery: [
      {
        src: ssTracks,
        caption: "Home — course tracks carousel with a call to action per panel",
      },
      {
        src: ssBootcamp,
        caption: "Bootcamps — what you'll learn, skills gained and pricing",
      },
      {
        src: ssComparison,
        caption: "Comparison — Softy Skills against other providers",
      },
      {
        src: ssNewsletter,
        caption: "Newsletter signup with name, email and phone",
      },
    ],
  },
  {
    slug: "softyword",
    img: softyword,
    title: "SoftyWord",
    type: "Professional",
    company: "Softylines",
    role: "Frontend Developer",
    year: "2026",
    summary:
      "A real-time collaborative text editor with rich text, PDF and Word import/export, speech-to-text and multilingual spell checking.",
    overview:
      "A real-time collaborative text editor. Multiple people edit the same document at once with full rich-text capability, import and export to PDF and Word, speech-to-text input and multilingual spell checking. The web editor, back-end API, mobile application and design language all live in a single codebase for consistency and performance.",
    highlights: [
      "Real-time collaborative editing built on TipTap and Yjs, with live presence and sharing",
      "Full Word-style ribbon — font, paragraph and style controls across Home, Insert, Layout, References and Review tabs",
      "Import and export to PDF and Word, plus speech-to-text",
      "Multilingual spell checking, with track changes that can be toggled per document",
      "Template gallery of ready-made professional documents — proposals, reports, press releases, newsletters, case studies, CVs",
      "Document workspace with grid and list views, favourites, filters, shared-with-me, trash and a storage quota",
      "Accounts and organisations, so a workspace can hold several members",
      "Interface fully translated, French and English",
      "Web, API, mobile and design system unified in one monorepo",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TipTap",
      "Yjs",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Flutter",
      "Docker",
      "Nx",
      "GitLab CI/CD",
    ],
    tags: ["React", "TipTap", "Yjs", "NestJS"],
    demoLink: "https://softy-word-hm.softylines.com/",
    gallery: [
      {
        src: swDocuments,
        caption: "Documents — grid view with templates, filters and storage quota",
      },
      {
        src: swTemplates,
        caption: "Template gallery of ready-made professional documents",
      },
      {
        src: swEditor,
        caption: "Editor — Word-style ribbon, live collaboration and track changes",
      },
      {
        src: swProfile,
        caption: "Profile — account and organisation membership",
      },
    ],
  },
  {
    slug: "chichkhan",
    img: chichkhan,
    title: "Chichkhan",
    type: "Professional",
    company: "Softylines",
    role: "Frontend Developer — maintenance",
    year: "2026",
    summary:
      "Back-office for a café and restaurant chain — menus, products, orders, delivery pricing, coupons and reviews across 180+ items.",
    overview:
      "The administration platform behind a café and restaurant chain: menus, product catalogue, recommended items, orders, delivery pricing, payment methods, discounts, coupons, banners and customer reviews, managing more than 180 products.",
    highlights: [
      "Resolved UI, functionality and integration defects across the back office",
      "Bilingual data entry throughout — every category and product carries an Arabic and a French name and description",
      "Product catalogue of 180+ items across 19 pages, each with images, category, description and an availability toggle",
      "Order queue showing delivery type, customer, address, payment method, price and status, with couriers assigned per order",
      "Courier management with availability and verification state per delivery rider",
      "Customer directory of 100+ accounts with search, verification status and role",
      "Code review, troubleshooting and optimisation work for stability and reliability",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Material-UI", "REST APIs"],
    tags: ["React", "Next.js", "TypeScript", "MUI"],
    demoLink: "https://chichkhan.softylines.com/login",
    linkLabel: "Visit (admin login)",
    gallery: [
      {
        src: ckCategories,
        caption: "Categories — bilingual Arabic and French entry, image and icon",
      },
      {
        src: ckProducts,
        caption: "Products — 180+ items with availability toggles",
      },
      {
        src: ckOrders,
        caption: "Orders — delivery type, payment, price and status",
      },
      {
        src: ckDelivery,
        caption: "Couriers — availability and verification per rider",
      },
      {
        src: ckUsers,
        caption: "Customers — searchable directory with verification and role",
      },
    ],
  },
  {
    // Personal project — stack still to confirm.
    slug: "mery-rose",
    img: meryrose,
    title: "Mery Rose",
    type: "Personal",
    role: "Design, build and operations",
    summary:
      "A thrift and second-hand fashion store I design, build and run myself — curated collections, wishlist, cart and accounts.",
    overview:
      "My own thrift and second-hand fashion store. I handle the design, the build and the day-to-day running of it: curating each collection, photographing the pieces and releasing a new drop every week.",
    highlights: [
      "Brand and storefront designed from scratch — logo, palette and typography",
      "Weekly drop counted down in a site-wide banner, with a New Arrivals carousel on the home page",
      "Shop grid where every piece carries its brand, size, condition and price in Tunisian dinar",
      "Quick-view product modal with a photo carousel, size guide, condition notes, colour and material, and Details, Measurements and Care tabs",
      "Virtual try-on so shoppers can see a piece on before buying",
      "Wishlist, cart and customer accounts",
      "Every item photographed, measured and written up by me — one-of-a-kind stock, so no listing is reused",
    ],
    stack: ["Personal project"],
    tags: ["Personal project"],
    demoLink: "https://meryrose.me/",
    gallery: [
      {
        src: mrHero,
        caption: "Home — New Arrivals carousel and the weekly drop banner",
      },
      {
        src: mrShop,
        caption: "Shop — brand, size, condition and price on every card",
      },
      {
        src: mrProduct,
        caption: "Quick view — size guide, condition, measurements and care",
      },
    ],
  },
];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);

export default PROJECTS;
