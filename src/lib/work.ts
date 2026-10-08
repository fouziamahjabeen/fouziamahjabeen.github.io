export type CaseStudySection = {
  heading: string;
  images: { src: string; alt: string }[];
};

export type ProductProject = {
  slug: string;
  number: string;
  name: string;
  category: string;
  description: string;
  featuredTitle: string;
  featuredCategory: string;
  featuredDescription: string;
  cover: string;
  coverAlt: string;
  overview: string;
  sections: CaseStudySection[];
};

export type VideoProject = {
  title: string;
  type: string;
  description: string;
  src: string;
  poster: string;
};

export const videoProjects: VideoProject[] = [
  {
    title: "AI-Powered Product Enhancement — SaaS Product Video",
    type: "Product video · SaaS · AI",
    description:
      "A product video showcasing an AI-powered SaaS platform designed to enhance e-commerce product listings with smarter product data and AI-generated improvements.",
    src: "/Videos/Video/AI-Powered Product Enhancement — SaaS Product Video.mp4",
    poster: "/Videos/Thumbnail/AI-Powered Product Enhancement — SaaS Product Video.png",
  },
  {
    title: "Pompeii — The Last Day",
    type: "AI-generated short film · Cinematic story",
    description:
      "A cinematic AI-generated short film imagining the final moments of Pompeii through visual storytelling, atmosphere, character-driven scenes, and dramatic pacing.",
    src: "/Videos/Video/Pompeii — The Last Day.mp4",
    poster: "/Videos/Thumbnail/Pompeii — The Last Day.png",
  },
  {
    title: "Waqt Sab Dekhata Hai — AI-Generated Short Film",
    type: "AI-generated story · Short film",
    description:
      "A short cinematic story built around the idea that time reveals what people and moments often leave unseen, using AI-generated visuals, storytelling, pacing, and sound.",
    src: "/Videos/Video/Waqt Sab Dekhata Hai — AI-Generated Short Film.mp4",
    poster: "/Videos/Thumbnail/Waqt Sab Dekhata Hai — AI-Generated Short Film.png",
  },
  {
    title: "SaaS Landing Page — Product Design Showcase",
    type: "Product design video · SaaS · Motion",
    description:
      "A motion-led product showcase presenting a modern SaaS landing page, interface design, key product features, and the overall user experience through polished visual storytelling.",
    src: "/Videos/Video/SaaS Landing Page — Product Design Showcase.mp4",
    poster: "/Videos/Thumbnail/SaaS Landing Page — Product Design Showcase.png",
  },
  {
    title: "MoneyGuide Kids — Mobile App Prototype",
    type: "Product prototype · Mobile app · Fintech",
    description:
      "An interactive mobile app prototype for a financial education platform, designed to help parents manage allowances, chores, savings, and money habits for their children.",
    src: "/Videos/Video/MoneyGuide Kids — Mobile App Prototype.mp4",
    poster: "/Videos/Thumbnail/MoneyGuide Kids — Mobile App Prototype.png",
  },
  {
    title: "MoneyGuide Kids — Product Design Video",
    type: "Product video · UI/UX · Fintech · Edtech",
    description:
      "A product showcase video presenting the MoneyGuide Kids financial education platform, including its mobile experience, interactive features, and parent-focused money management tools.",
    src: "/Videos/Video/MoneyGuide Kids — Product Design Prototype Video.mp4",
    poster: "/Videos/Thumbnail/MoneyGuide Kids — Product Design Prototype Video.png",
  },
  {
    title: "Empty States ≠ Dead Ends — Guide Users to the Next Step",
    type: "UX/UI motion · UX education · Microinteractions",
    description:
      "A short UX/UI motion piece exploring how empty states can guide users toward the next action instead of leaving them at a dead end.",
    src: "/Videos/Video/Empty States Dead Ends — Guide Users to the Next Step.mp4",
    poster: "/Videos/Thumbnail/Empty States ≠ Dead Ends — Guide Users to the Next Step.png",
  },
];
const getRichDir = "/Casestudies/getrich/Images/";
const getRichFiles = [
  "2_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview.png",
  "3_UXUI UXUI Dashabord Design UIUX Case Study GetRich-The Challenge and The Approach.png",
  "4_UXUI_Wireframe_Dashboard_UIUX_Userflow.png",
  "5_UXUI_Dqashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png",
  "6_UXUI_Wireframe_Dashboard_UIUX_Design System.png",
  "7_UXUI_Dqashboard_B2B_B2C_SaaS_Design.png",
  "8_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview-2.png",
  "9_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview-1.png",
  "10_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview-3.png",
  "11_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview-4.png",
  "12_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview-5.png",
  "13_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview-6.png",
  "14_UXUI_Dqashboard_B2B_B2C_SaaS_Design_UX Decisions.png",
  "15_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview-11.png",
  "16_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview-9.png",
  "17_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview-7.png",
  "18_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview-8.png",
  "19_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview-10.png",
];

const moneyGuideDir = "/Casestudies/moneyguide-kid/Image/";
const moneyGuideFiles = [
  "2_Project0overview_UXUI_Dqashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png",
  "3_TheChallange_UXUI_Dqashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png",
  "4_Projectgoals_UXUI_Dqashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png",
  "5_MY RESPONSIBILITIES_UXUI_Dqashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png",
  "6_USERPERSONAS_UXUI_Dqashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png",
  "7_USERFLOW_INFORMATION ARCHITECTURE_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png",
  "8_DESIGN =PRINCIPLES_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png",
  "9_DESIGNSYSTEM_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png",
  "10_COREFEATURES_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png",
  "11_COREFEATURES_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process02.png",
  "12_COREFEATURES_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process03.png",
  "13_COREFEATURES_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process04.png",
  "14_COREFEATURES_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process05.png",
  "15_COREFEATURES_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process06.png",
  "16_COREFEATURES_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process07.png",
  "17_COREFEATURES_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process08.png",
  "18_COREFEATURES_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process09.png",
  "19_COREFEATURES_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process01.png",
  "20_UX DECISIONS_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Designprocess.png",
  "21_Design evolution_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png",
  "22_Project Outcome_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png",
  "23_Clientfeedback_UXUI_Dashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png",
  "24_Result_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview.png",
  "25_Letsconnect_UXUI UXUI Dashabord Design UIUX Case Study  GetRich-Project Overview.png",
];

function slides(dir: string, files: string[], start: number) {
  return files.map((file, index) => ({
    src: `${dir}${file}`,
    alt: `Case study visual ${index + start}`,
  }));
}

function section(heading: string, images: { src: string; alt: string }[]): CaseStudySection {
  return { heading, images };
}

const getRichSlides = slides(getRichDir, getRichFiles, 2);
const moneyGuideSlides = slides(moneyGuideDir, moneyGuideFiles, 2);
const aiProductEnhancerDir = "/Casestudies/AI Product Enhancer – UX Case Study/Images/";
const aiEnhancerImage = (file: string, alt: string) => ({
  src: `${aiProductEnhancerDir}${file}`,
  alt,
});

export const productProjects: ProductProject[] = [
  {
    slug: "getrich",
    number: "01",
    name: "GetRich",
    category: "Product design · Admin dashboard",
    description:
      "A scalable admin dashboard for a financial learning platform, supporting global, regional and school-level management.",
    featuredTitle: "GetRich! Turbo",
    featuredCategory: "SAAS / ADMIN PANEL",
    featuredDescription:
      "A role-based SaaS admin experience designed to simplify complex educational workflows, dashboards, cohorts, parties, and real-time leaderboards.",
    cover: `${getRichDir}UX Case Study – GetRich-Cover Page.png`,
    coverAlt: "GetRich scalable admin dashboard UX/UI case study cover",
    overview:
      "GetRich is a financial learning platform with a multi-role admin system for global, regional and school-level management. The supplied case study documents the challenge, approach, dashboard wireframes, design decisions and interface work.",
    sections: [section("The challenge and approach", getRichSlides.slice(0, 1))],
  },
  {
    slug: "moneyguide-kids",
    number: "02",
    name: "MoneyGuide Kids",
    category: "Product design · Financial education · Mobile app",
    description:
      "A financial education platform designed to help parents build better money habits for their children.",
    featuredTitle: "MoneyGuide Kids",
    featuredCategory: "PRODUCT DESIGN",
    featuredDescription:
      "A user-centered financial education experience designed to make money concepts easier to understand, explore, and apply.",
    cover: `${moneyGuideDir}1_Thumbnail_Coverimage_UXUI_Dqashboard_B2B_B2C_SaaS_Design_UX Decisions_Design process.png`,
    coverAlt: "MoneyGuide Kids financial education platform case study cover",
    overview:
      "MoneyGuide Kids brings family money management and financial learning into one product experience. The case study explores the project goals, parent needs, product structure, core features and design decisions.",
    sections: [
      section("Project overview and challenge", moneyGuideSlides.slice(0, 2)),
      section("Goals and responsibilities", moneyGuideSlides.slice(2, 4)),
      section("Understanding families", moneyGuideSlides.slice(4, 5)),
      section("User flow and information architecture", moneyGuideSlides.slice(5, 6)),
      section("Design principles and system", moneyGuideSlides.slice(6, 8)),
      section("Core features", moneyGuideSlides.slice(8, 18)),
      section("UX decisions and design evolution", moneyGuideSlides.slice(18, 20)),
      section("Outcome and feedback", moneyGuideSlides.slice(20)),
    ],
  },
  {
    slug: "ai-product-enhancer",
    number: "03",
    name: "AI Product Enhancer",
    category: "Product design \u00b7 SaaS \u00b7 AI",
    description:
      "A scalable SaaS platform that helps e-commerce teams enhance product listings with AI-powered descriptions, bullet points, visuals, and content — while keeping product data organized and easy to manage.",
    featuredTitle: "AI Product Enhancer",
    featuredCategory: "PRODUCT DESIGN \u00b7 SAAS \u00b7 AI",
    featuredDescription:
      "An AI-powered SaaS platform designed to help e-commerce teams enhance product listings, improve product data, and create better-performing content at scale.",
    cover:
      "/Casestudies/AI Product Enhancer \u2013 UX Case Study/Images/Thubnail-UIUX-Productdesign-Casestudy Cover.png",
    coverAlt: "AI Product Enhancer UX case study cover",
    overview:
      "Making AI-powered product enhancement simple, scalable, and easy to manage.\nAI Product Enhancer is a SaaS platform designed to help e-commerce teams improve large volumes of product listings using AI.\nThe platform brings together product data, AI enhancement, content editing, integrations, data mapping, and publishing into one connected workflow.\nMy focus was to turn a technically complex product into a clear and approachable experience where users can import products, enhance their content, review AI suggestions, and sync updates with their stores.",
    sections: [
      section("My Approach", [
        aiEnhancerImage(
          "My Approach (1).jpg",
          "Four design priorities: simplify processes, balance data and visual workflows, reduce cognitive load, and ensure scalability",
        ),
      ]),
      section("User Flows / Information Architecture", [
        aiEnhancerImage(
          "My Approach.jpg",
          "AI Product Enhancer workflow and information architecture diagram",
        ),
        aiEnhancerImage(
          "Onboarding & Setup Flow.png",
          "AI Product Enhancer onboarding and setup screens",
        ),
      ]),
      section("Key Design Decisions", [
        aiEnhancerImage(
          "Key Design Decisions.jpg",
          "Key design decisions across product management, AI comparison, data mapping, integrations, and activity history",
        ),
      ]),
      section("The Final Experience", [
        aiEnhancerImage(
          "The Final Experience.jpg",
          "AI Product Enhancer dashboard and final product experience",
        ),
      ]),
      section("Marketing & Product Experience", [
        aiEnhancerImage(
          "Marketing & Product Experience.jpg",
          "AI Product Enhancer marketing and product experience",
        ),
      ]),
      section("Client Feedback", [
        aiEnhancerImage(
          "Client Feedback.png",
          "Client feedback on the AI Product Enhancer project",
        ),
      ]),
      section("Reflection", [
        aiEnhancerImage("Refelction.jpg", "Reflection on the AI Product Enhancer experience"),
      ]),
    ],
  },
  {
    slug: "hookmybase",
    number: "04",
    name: "HookMyBase",
    category: "Product design · SaaS · Web App · Dashboard · UX/UI",
    description:
      "A SaaS platform designed to simplify Airtable webhook management with automated renewal, real-time monitoring, event logs, and seamless integrations.",
    featuredTitle: "HookMyBase",
    featuredCategory: "PRODUCT DESIGN · SAAS",
    featuredDescription:
      "A SaaS platform designed to simplify webhook management, integrations, and event monitoring.",
    cover: "/Casestudies/Hookmybase/Images/UX Case Study – HookMyBase-Cover Page.png",
    coverAlt: "HookMyBase webhook management SaaS case study cover",
    overview:
      "Simplifying webhook management for everyone. HookMyBase is a SaaS platform that helps users manage Airtable webhooks without dealing with complex technical workflows. The product brings connections, webhook monitoring, testing, logs, and team settings into one structured workspace, making automation easier to set up and manage.",
    sections: [
      section("My Approach", [
        {
          src: "/Casestudies/Hookmybase/Images/My Approach.jpg",
          alt: "HookMyBase product design approach",
        },
      ]),
      section("Key Design Decisions", [
        {
          src: "/Casestudies/Hookmybase/Images/Guided Onboarding.png",
          alt: "Guided onboarding for connecting and configuring HookMyBase",
        },
        {
          src: "/Casestudies/Hookmybase/Images/Clear Dashboard & Monitoring.png",
          alt: "HookMyBase dashboard with clear webhook status and event monitoring",
        },
        {
          src: "/Casestudies/Hookmybase/Images/Simple Connection Management.png",
          alt: "Simple connection management for Airtable webhooks",
        },
        {
          src: "/Casestudies/Hookmybase/Images/Built-in Testing & Feedback.png",
          alt: "Built-in webhook testing and feedback in HookMyBase",
        },
      ]),
      section("The Final Experience", [
        {
          src: "/Casestudies/Hookmybase/Images/The Final Experience-Dashbaord.png",
          alt: "HookMyBase dashboard experience",
        },
        {
          src: "/Casestudies/Hookmybase/Images/The Final Experience-Landing & Documentation.jpg",
          alt: "HookMyBase landing page and documentation experience",
        },
      ]),
      section("Client Feedback", [
        {
          src: "/Casestudies/Hookmybase/Images/Client Feedback.png",
          alt: "Five-star client review of the HookMyBase project",
        },
      ]),
      section("Outcome", []),
      section("Reflection", []),
    ],
  },
];
