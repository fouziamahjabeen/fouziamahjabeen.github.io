import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import PortfolioCta from "@/components/section/portfolio-cta";

export const metadata: Metadata = {
  title: "About Fouzia Mahjabeen | Product Designer & Video Editor",
  description:
    "Meet Fouzia Mahjabeen, a Product Designer & Video Editor with 5+ years of experience designing SaaS, web, mobile and educational products and creating clear, engaging visual content.",
  alternates: { canonical: "/about" },
};

const process = [
  {
    number: "01",
    title: "Understand",
    description: "Define the goal, audience, requirements, and context.",
  },
  {
    number: "02",
    title: "Structure",
    description: "Organize information, content, and direction into a clear system.",
  },
  {
    number: "03",
    title: "Create",
    description: "Turn ideas into interfaces, visuals, prototypes, or edits.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Improve clarity, consistency, timing, usability, and overall quality.",
  },
  {
    number: "05",
    title: "Deliver",
    description: "Prepare polished, purposeful work ready for its intended audience and platform.",
  },
];

const experiences = [
  {
    date: "2020 — Present",
    role: "Senior UI/UX Designer & Video Editor",
    company: "Upwork (Freelance)",
    context: "Global clients · USA · Europe · Middle East",
    description:
      "Designing web apps, mobile apps, SaaS dashboards, and marketing websites for startups, SMEs, and enterprise clients.",
    contributions: [
      "Led end-to-end UX processes including research, information architecture, wireframing, prototyping, usability testing, and high-fidelity UI design.",
      "Built design systems and component libraries with developer-ready specifications for consistent and efficient product development.",
      "Edited and produced marketing videos, product demos, explainer videos, and motion graphics using Premiere Pro and After Effects.",
      "Used AI tools including ChatGPT, Claude, Midjourney, Runway, and ElevenLabs for research, concepts, scripts, voiceovers, and faster production workflows.",
      "Managed multiple international projects simultaneously, delivering on time and building long-term client relationships.",
    ],
  },
  {
    date: "2025",
    role: "UI/UX Designer",
    company: "The First Sol",
    context: "Remote",
    description:
      "Designed web and mobile experiences in Figma, from user flows and wireframes to high-fidelity UI and interactive prototypes.",
    contributions: [
      "Partnered with cross-functional teams to deliver consistent, usable interfaces aligned with business goals.",
    ],
  },
  {
    date: "2023 — 2025",
    role: "Product Designer",
    company: "Scrape Owl",
    context: "Remote",
    description:
      "Designed and optimized SaaS product experiences through user research, wireframing, prototyping, and UI design.",
    contributions: [
      "Built and maintained a scalable design system across web platforms.",
      "Ran usability tests and analyzed user feedback to improve user flows and product adoption.",
    ],
  },
  {
    date: "2021 — 2022",
    role: "UI/UX Designer & Video Editor",
    company: "Tezeract",
    context: "",
    description:
      "Designed user journeys, onboarding flows, and dashboards for web-based products with a focus on usability and accessibility.",
    contributions: [
      "Produced video content, motion graphics, and visual assets for marketing and user-engagement campaigns.",
    ],
  },
];

const productCapabilities = [
  "UX Research",
  "Information Architecture",
  "User Flows",
  "Wireframing",
  "UI Design",
  "Prototyping",
  "Usability Testing",
  "Design Systems",
];

const videoCapabilities = [
  "Product Videos",
  "Educational Content",
  "Short-form Video",
  "Social Media Content",
  "Typography & Transitions",
  "Visual Storytelling",
];

const areas = [
  "SaaS Products",
  "Web Applications",
  "Mobile Experiences",
  "Admin Dashboards",
  "Educational Products",
  "Visual Content",
  "Product Videos",
  "Short-form Video",
];

function CapabilityList({ items }: { items: string[] }) {
  return (
    <ul className="about-capability-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero about-shell" aria-labelledby="about-title">
        <h1 id="about-title">
          I design <span className="about-clarity">clarity</span> into complex products and visual
          stories.
        </h1>
        <div className="about-hero-bottom">
          <p className="about-lead">
            I enjoy turning complex ideas into experiences people can understand and connect with —
            whether I’m designing a digital product or shaping a story through video.
          </p>
        </div>
      </section>

      <section className="about-section about-approach" aria-labelledby="approach-title">
        <div className="about-shell">
          <div className="about-section-heading about-approach-heading">
            <p className="about-eyebrow">
              <span>02</span> My Approach
            </p>
            <h2 id="approach-title">How I turn ideas into clear experiences.</h2>
            <p className="about-body">
              Whether I’m designing a product or editing a video, I start with the same principle:
              understand the goal, create structure, and make every element work with purpose.
            </p>
          </div>
          <ol className="about-process">
            {process.map((step) => (
              <li className="about-process-step" key={step.number}>
                <span className="about-process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <div>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="about-section about-shell about-specialty"
        aria-labelledby="product-design-title"
      >
        <div className="about-specialty-copy">
          <p className="about-eyebrow">
            <span>03</span> Product design
          </p>
          <h2 id="product-design-title">From complex requirements to usable products.</h2>
          <p className="about-body">
            I design web, mobile and SaaS experiences by combining user needs, business goals and
            visual clarity. My process spans research, information architecture, user flows,
            wireframing, UI design, prototyping and design systems.
          </p>
          <CapabilityList items={productCapabilities} />
          <Link className="about-text-link" href="/work#product-design">
            View case study <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="about-process-visual" aria-label="Product design video">
          <video
            className="about-specialty-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/About/Product%20design.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section
        className="about-section about-shell about-specialty about-video"
        aria-labelledby="video-editing-title"
      >
        <div className="about-specialty-copy">
          <p className="about-eyebrow">
            <span>04</span> Video editing
          </p>
          <h2 id="video-editing-title">Turning ideas into visual stories.</h2>
          <p className="about-body">
            I create edited video content for products, educational experiences and digital
            platforms, with a focus on clear communication, engaging pacing and intentional visual
            storytelling.
          </p>
          <CapabilityList items={videoCapabilities} />
          <a
            className="about-text-link"
            href={siteConfig.social.video.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            View video work <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="about-video-visual" aria-label="Video editing video">
          <video
            className="about-specialty-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/About/Video%20editing.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section
        className="about-section about-experience-section"
        aria-labelledby="experience-title"
      >
        <div className="about-shell">
          <div className="about-section-heading">
            <p className="about-eyebrow">
              <span>05</span> Experience
            </p>
            <h2 id="experience-title">Experience across products and stories.</h2>
          </div>
          <ol className="about-experience-list">
            {experiences.map((experience, index) => (
              <li className="about-experience" key={`${experience.company}-${experience.date}`}>
                <p className="about-experience-date">{experience.date}</p>
                <span className="about-experience-marker" aria-hidden="true" />
                <article className="about-experience-content">
                  <p className="about-experience-index">Experience 0{index + 1}</p>
                  <h3>{experience.role}</h3>
                  <p className="about-experience-company">{experience.company}</p>
                  {experience.context && (
                    <p className="about-experience-context">{experience.context}</p>
                  )}
                  <p className="about-body">{experience.description}</p>
                  <ul className="about-contributions">
                    {experience.contributions
                      .slice(0, index === 0 ? 2 : experience.contributions.length)
                      .map((contribution) => (
                        <li key={contribution}>{contribution}</li>
                      ))}
                  </ul>
                  {index === 0 && (
                    <details className="about-more-details">
                      <summary>View remaining details</summary>
                      <ul className="about-contributions">
                        {experience.contributions.slice(2).map((contribution) => (
                          <li key={contribution}>{contribution}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="about-section about-shell about-tools-section"
        aria-labelledby="tools-title"
      >
        <div className="about-section-heading">
          <p className="about-eyebrow">
            <span>06</span> Tools
          </p>
          <h2 id="tools-title">Tools I use to turn ideas into experiences.</h2>
        </div>
        <div className="about-tool-groups">
          <Image
            className="about-tools-image"
            src="/About/Tools.png"
            alt="Icons for design, editing, AI workflow, and productivity tools"
            width={727}
            height={193}
          />
        </div>
      </section>

      <section
        className="about-section about-shell about-areas-section"
        aria-labelledby="areas-title"
      >
        <div className="about-section-heading">
          <p className="about-eyebrow">
            <span>07</span> Areas I work across
          </p>
          <h2 id="areas-title">Areas I design and create for.</h2>
        </div>
        <ol className="about-areas-list">
          {areas.map((area, index) => (
            <li key={area}>
              <span>0{index + 1}</span>
              {area}
            </li>
          ))}
        </ol>
      </section>

      <PortfolioCta />
    </div>
  );
}
