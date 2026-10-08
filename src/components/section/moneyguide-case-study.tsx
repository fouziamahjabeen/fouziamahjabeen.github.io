import Image from "next/image";
import type { CaseStudySection } from "@/lib/work";

type MoneyGuideGroup = {
  heading: string;
  tagline?: string;
  description?: string;
  items?: string[];
};

type MoneyGuideChapter = {
  number: string;
  heading: string;
  lead?: string;
  leadBold?: boolean;
  paragraphs?: string[];
  bullets?: string[];
  flow?: string;
  groups?: MoneyGuideGroup[];
  imageRange?: [number, number];
  image?: { src: string; alt: string; width: number; height: number };
  images?: { src: string; alt: string; width: number; height: number }[];
  stackImages?: boolean;
  paragraphsAfterGroups?: string[];
  paragraphsAfterFlow?: string[];
  flowAfter?: string;
  emphasizedParagraph?: { index: number; phrase: string };
  boldParagraphs?: number[];
  afterImage?: string;
};

const chapters: MoneyGuideChapter[] = [
  {
    number: "02",
    heading: "The Challenge",
    lead: "Financial tools can be powerful without being complicated.",
    paragraphs: [
      "The challenge was to design a financial education experience that could serve parents and children at the same time. Parents needed clarity, control, and visibility across allowances, chores, savings, investing, and their children’s progress — while children needed an experience that felt simple, understandable, and motivating.",
      "With multiple financial and educational features combined into one product, there was also a risk of overwhelming families with too much information.",
      "The goal was to bring these experiences together into one intuitive platform — making complex financial functionality feel effortless for everyday families without compromising the depth of the product.",
    ],
  },
  {
    number: "03",
    heading: "Project Goals",
    lead: "The goal was to turn complex financial and educational functionality into a clear, engaging experience that families could use with confidence.",
    paragraphs: ["The design focused on four core goals:"],
    groups: [
      {
        heading: "01 — Simplify",
        description:
          "Make financial tools easy to understand and navigate, from allowances and chores to savings, spending, and investing.",
      },
      {
        heading: "02 — Connect",
        description:
          "Bring money management, learning, and family activities together into one connected experience.",
      },
      {
        heading: "03 — Engage",
        description:
          "Create interactions that keep children motivated while giving parents clear visibility and control over their financial journey.",
      },
      {
        heading: "04 — Scale",
        description:
          "Build a consistent design foundation that could support multiple features, family needs, and future product growth.",
      },
    ],
  },
  {
    number: "04",
    heading: "My Responsibilities",
    lead: "From UX structure to high-fidelity product design.",
    paragraphs: [
      "As the Product Designer, I worked across the complete design process \u2014 from defining user flows and information architecture to designing the final interface and preparing interactive prototypes for handoff.",
    ],
    image: {
      src: "/Casestudies/moneyguide-kid/Image/My Responsibilities.png",
      alt: "MoneyGuide Kids project responsibilities across the product design process",
      width: 2800,
      height: 1824,
    },
  },
  {
    number: "05",
    heading: "Understanding the Users",
    image: {
      src: "/Casestudies/moneyguide-kid/Image/Understanding the Users.png",
      alt: "MoneyGuide Kids user research and audience overview",
      width: 2800,
      height: 2581,
    },
  },
  {
    number: "06",
    heading: "User Flow & Information Architecture",
    lead: "Creating a connected experience instead of isolated features.",
    leadBold: true,
    paragraphs: [
      "I mapped the key user journeys and information architecture to connect the product’s core financial and learning experiences.",
      "The goal was to create a clear structure where features such as allowances, chores, wallet, savings, investments, and learning work together as one connected family experience.",
      "The detailed user flows and information architecture are shown below.",
    ],
    emphasizedParagraph: {
      index: 1,
      phrase: "allowances, chores, wallet, savings, investments, and learning",
    },
    boldParagraphs: [2],
    image: {
      src: "/Casestudies/moneyguide-kid/Image/User Flow & Information Architecture.png",
      alt: "MoneyGuide Kids user flow and information architecture connecting the product's core features",
      width: 2800,
      height: 5776,
    },
  },
  {
    number: "07",
    heading: "Design Principles",
    lead: "Simple enough to understand. Powerful enough to grow.",
    paragraphs: [
      "The design was guided by five principles that shaped every major product decision. The goal was to make financial management feel approachable for parents while turning everyday money activities into meaningful learning experiences for children.",
    ],
    groups: [
      {
        heading: "01 — SIMPLICITY",
        tagline: "Reduce complexity without reducing capability.",
        description:
          "Financial tools should feel easy to understand from the first interaction. Clear hierarchy, focused layouts, and simple language help parents complete tasks confidently without feeling overwhelmed.",
      },
      {
        heading: "02 — CONSISTENCY",
        tagline: "Create familiarity across the entire experience.",
        description:
          "Reusable patterns, components, and interaction behaviours make the product predictable and help users move between features without having to relearn how things work.",
      },
      {
        heading: "03 — ACCESSIBILITY",
        tagline: "Make information easy to see, understand, and interact with.",
        description:
          "Readable typography, clear contrast, comfortable touch targets, and straightforward interactions help create an experience that works for both parents and children.",
      },
      {
        heading: "04 — TRUST",
        tagline: "Make financial information feel clear and reliable.",
        description:
          "Transparent information, predictable actions, and clear feedback help parents feel confident when managing their children's money and financial activities.",
      },
      {
        heading: "05 — EDUCATION FIRST",
        tagline: "Turn everyday money activities into learning opportunities.",
        description:
          "Allowances, chores, saving, spending, and investing are not just product features—they become practical ways for children to develop healthier financial habits.",
      },
    ],
  },
  {
    number: "08",
    heading: "Design System",
    stackImages: true,
    images: [
      {
        src: "/Casestudies/moneyguide-kid/Image/DESIGN SYSTEM.png",
        alt: "MoneyGuide Kids design system showing color palette, typography, and status pills",
        width: 2800,
        height: 1588,
      },
      {
        src: "/Casestudies/moneyguide-kid/Image/DESIGN SYSTEM Illustration.png",
        alt: "MoneyGuide Kids design system illustrations, buttons, filters, icons, fields, and wallet card",
        width: 2800,
        height: 2685,
      },
    ],
  },
  {
    number: "09",
    heading: "Core Features",
    image: {
      src: "/Casestudies/moneyguide-kid/Image/Core features.png",
      alt: "MoneyGuide Kids core features across the financial learning experience",
      width: 2106,
      height: 2858,
    },
  },
  {
    number: "10",
    heading: "Allowance Management",
    lead: "Making money management feel predictable.",
    paragraphs: ["Allowance management was designed around a simple flow:"],
    flow: "Set amount → Review → Confirm → Manage",
    paragraphsAfterFlow: [
      "Parents can clearly understand the current allowance and update it when needed without navigating through unnecessary complexity.",
      "The interface focuses on clear amounts, simple actions, and confirmation states to reduce mistakes.",
    ],
    image: {
      src: "/Casestudies/moneyguide-kid/Image/ALLOWANCE MANAGEMENT.png?v=2",
      alt: "MoneyGuide Kids allowance management interface",
      width: 3580,
      height: 2178,
    },
  },
  {
    number: "11",
    heading: "Chore Management",
    lead: "Turning everyday responsibilities into financial learning.",
    paragraphs: [
      "Chores connect responsibility with reward.",
      "The experience allows parents to create and manage chores while giving children a clear understanding of what needs to be completed and what they can earn.",
      "The interaction model keeps the experience lightweight:",
    ],
    flow: "Create → Assign → Complete → Reward",
    image: {
      src: "/Casestudies/moneyguide-kid/Image/Chore Management.png",
      alt: "MoneyGuide Kids chore management interface",
      width: 3580,
      height: 2178,
    },
  },
  {
    number: "12",
    heading: "Savings & Financial Goals",
    lead: "Helping children see progress, not just numbers.",
    paragraphs: [
      "Savings goals make financial learning more tangible.",
      "Instead of presenting savings as abstract financial data, the experience uses progress and visual feedback to help children understand:",
    ],
    bullets: ["What am I saving for?", "How much have I saved?", "How close am I to my goal?"],
    paragraphsAfterGroups: [
      "This turns financial education into something children can actively participate in.",
    ],
    image: {
      src: "/Casestudies/moneyguide-kid/Image/SAVINGS & FINANCIAL GOALS.png",
      alt: "MoneyGuide Kids savings goals and financial progress interface",
      width: 3580,
      height: 2178,
    },
  },
  {
    number: "13",
    heading: "Learning & Activity",
    lead: "Connecting education with everyday financial behavior.",
    paragraphs: [
      "Financial education becomes more meaningful when children can connect what they learn with what they actually do.",
      "Learning progress and activity tracking provide parents with visibility while allowing children to see their own progress.",
      "The goal was to make learning feel like a natural part of the product rather than a separate educational module.",
    ],
    image: {
      src: "/Casestudies/moneyguide-kid/Image/LEARNING & ACTIVITY.png",
      alt: "MoneyGuide Kids learning progress and activity interface",
      width: 3580,
      height: 2178,
    },
  },
  {
    number: "14",
    heading: "UX Decisions",
    lead: "Every screen had a reason behind it.",
    leadBold: true,
    paragraphs: [
      "The experience was shaped by a set of UX decisions focused on simplicity, clarity, trust, and engagement.",
    ],
    emphasizedParagraph: { index: 0, phrase: "simplicity, clarity, trust, and engagement" },
    image: {
      src: "/Casestudies/moneyguide-kid/Image/UX Decisions.png",
      alt: "MoneyGuide Kids UX decisions",
      width: 2800,
      height: 1628,
    },
  },
  {
    number: "15",
    heading: "Design Evolution",
    lead: "From structure to a complete product experience.",
    leadBold: true,
    paragraphs: [
      "The design evolved through multiple stages, gradually moving from structure and flows to a refined, scalable product experience.",
    ],
    groups: [
      {
        heading: "Low-Fidelity",
        tagline:
          "Focused on information hierarchy, user flows, navigation, and feature relationships",
        description: "without visual styling.",
      },
      {
        heading: "Mid-Fidelity",
        tagline: "Introduced real content, component structure, interactions, and detailed layouts",
        description: "to validate key journeys.",
      },
      {
        heading: "High-Fidelity",
        tagline:
          "Refined the experience through visual hierarchy, consistent components, feedback states, and a scalable design system",
      },
    ],
    image: {
      src: "/Casestudies/moneyguide-kid/Image/Design Evolution.png",
      alt: "MoneyGuide Kids design evolution from low to high fidelity",
      width: 3580,
      height: 1442,
    },
  },
  {
    number: "16",
    heading: "Project Outcome",
    lead: "A complete financial education experience built around real family needs.",
    leadBold: true,
    paragraphs: [
      "The final product brings money management, financial learning, and family engagement into one connected mobile experience.",
      "The design delivers:",
    ],
    emphasizedParagraph: {
      index: 0,
      phrase: "money management, financial learning, and family engagement",
    },
    groups: [
      {
        heading: "End-to-end mobile experience",
        description: "from onboarding to everyday financial activities.",
      },
      {
        heading: "Complete financial toolkit",
        description: "allowance, chores, wallet, savings, and investments.",
      },
      {
        heading: "Learning & progress tracking",
        description: "helping parents monitor their child's financial development.",
      },
      { heading: "Consistent design system", description: "reusable patterns across the product." },
      {
        heading: "Complete onboarding & settings",
        description: "creating a structured experience for families.",
      },
      {
        heading: "Interactive prototype",
        description: "bringing the complete product journey together.",
      },
    ],
  },
  {
    number: "17",
    heading: "Client Feedback",
    image: {
      src: "/Casestudies/moneyguide-kid/Image/CLIENT FEEDBACK.png",
      alt: "MoneyGuide Kids client feedback",
      width: 2800,
      height: 1136,
    },
  },
  {
    number: "18",
    heading: "Final Result",
    image: {
      src: "/Casestudies/moneyguide-kid/Image/FINAL RESULT.png",
      alt: "MoneyGuide Kids final product experience",
      width: 2800,
      height: 1264,
    },
  },
];

export function MoneyGuideCaseStudyContent({ images }: { images: CaseStudySection["images"] }) {
  return (
    <>
      {chapters.map((chapter) => (
        <section
          className="case-study-story-section moneyguide-story-section"
          aria-labelledby={`moneyguide-section-${chapter.number}`}
          key={chapter.number}
        >
          <header className="moneyguide-story-heading">
            <p className="work-eyebrow">
              <span>{chapter.number}</span>
            </p>
            <h2 id={`moneyguide-section-${chapter.number}`}>{chapter.heading}</h2>
            {chapter.lead && (
              <p className="moneyguide-story-lead">
                {chapter.leadBold ? <strong>{chapter.lead}</strong> : chapter.lead}
              </p>
            )}
          </header>
          {chapter.paragraphs?.length ||
          chapter.flow ||
          chapter.paragraphsAfterFlow?.length ||
          chapter.flowAfter ||
          chapter.bullets?.length ||
          chapter.groups?.length ||
          chapter.paragraphsAfterGroups?.length ? (
            <div className="moneyguide-story-content">
              {chapter.paragraphs?.map((paragraph, index) => (
                <p key={`p-${index}`}>
                  {chapter.boldParagraphs?.includes(index) ? (
                    <strong>{paragraph}</strong>
                  ) : chapter.emphasizedParagraph?.index === index ? (
                    <>
                      {paragraph
                        .split(chapter.emphasizedParagraph.phrase)
                        .map((part, partIndex) => (
                          <span key={partIndex}>
                            {partIndex > 0 && (
                              <strong>{chapter.emphasizedParagraph!.phrase}</strong>
                            )}
                            {part}
                          </span>
                        ))}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
              {chapter.flow && <p className="moneyguide-flow">{chapter.flow}</p>}
              {chapter.paragraphsAfterFlow?.map((paragraph, index) => (
                <p key={`after-flow-${index}`}>{paragraph}</p>
              ))}
              {chapter.flowAfter && <p className="moneyguide-flow">{chapter.flowAfter}</p>}
              {chapter.bullets && (
                <ul className="moneyguide-bullets">
                  {chapter.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {chapter.groups && (
                <div className="moneyguide-groups">
                  {chapter.groups.map((group) => (
                    <article key={group.heading}>
                      <h3>{group.heading}</h3>
                      {group.tagline && (
                        <p className="moneyguide-group-tagline">
                          <strong>{group.tagline}</strong>
                        </p>
                      )}
                      {group.description && <p>{group.description}</p>}
                      {group.items && (
                        <ul>
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </article>
                  ))}
                </div>
              )}
              {chapter.paragraphsAfterGroups?.map((paragraph, index) => (
                <p key={`after-groups-${index}`}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          {(chapter.image || chapter.images || chapter.imageRange) && (
            <div
              className={`case-study-story-grid${chapter.stackImages || chapter.image || (chapter.images && chapter.images.length === 1) || (chapter.imageRange && chapter.imageRange[1] - chapter.imageRange[0] === 1) ? " is-single" : ""}`}
            >
              {(
                chapter.images ||
                (chapter.image ? [chapter.image] : images.slice(...chapter.imageRange!))
              ).map((image, imageIndex) => (
                <figure className="case-study-story-figure" key={image.src}>
                  <Image
                    src={encodeURI(image.src)}
                    alt={
                      "alt" in image
                        ? image.alt
                        : `MoneyGuide Kids: ${chapter.heading}, visual ${imageIndex + 1}`
                    }
                    width={"width" in image && typeof image.width === "number" ? image.width : 1400}
                    height={"height" in image && typeof image.height === "number" ? image.height : 1000}
                    loading="lazy"
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 90vw, 1200px"
                  />
                </figure>
              ))}
            </div>
          )}
          {chapter.afterImage && (
            <p className="moneyguide-after-image">
              <strong>{chapter.afterImage}</strong>
            </p>
          )}
        </section>
      ))}
    </>
  );
}
