import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { productProjects } from "@/lib/work";
import PortfolioCta from "@/components/section/portfolio-cta";
import { MoneyGuideCaseStudyContent } from "@/components/section/moneyguide-case-study";

type CaseStudyPageProps = { params: Promise<{ slug: string }> };

function findProject(slug: string) {
  const project = productProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  return project;
}

export function generateStaticParams() {
  return productProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  return {
    title: `${project.name} Case Study | Fouzia Mahjabeen`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = findProject(slug);
  const moreProjects = productProjects.filter((item) => item.slug !== project.slug);
  const isMoneyGuide = project.slug === "moneyguide-kids";

  return (
    <div className="case-study-page">
      <article
        className={`case-study-shell is-editorial${project.slug === "ai-product-enhancer" ? " is-ai-product-enhancer" : ""}${project.slug === "hookmybase" ? " is-hookmybase" : ""}`}
      >
        <Link href="/work" className="case-study-back">
          <ArrowLeft size={15} aria-hidden="true" /> All work
        </Link>

        <header className="case-study-header">
          <p className="work-eyebrow">
            <span>{project.number}</span>{" "}
            {project.slug === "getrich" ? "Product Design · Admin Dashboard" : project.category}
          </p>
          <h1>{project.name}</h1>
          <p>
            {isMoneyGuide
              ? "A product design case study focused on simplifying financial education for families through intuitive mobile experiences, interactive learning, and everyday money-management tools."
              : project.description}
          </p>
        </header>

        <figure className="case-study-cover">
          <Image
            src={encodeURI(project.cover)}
            alt={project.coverAlt}
            width={1400}
            height={1000}
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </figure>

        {project.slug === "ai-product-enhancer" && (
          <section className="ai-enhancer-project-info" aria-label="Project details">
            <dl className="case-study-meta ai-enhancer-meta" aria-label="Project details">
              <div>
                <dt>Role</dt>
                <dd>Product Designer</dd>
              </div>
              <div>
                <dt>Platform</dt>
                <dd>Web / SaaS / Mobile App</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>6 Weeks</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>English</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>Figma · FigJam · Notion</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>
                  UX/UI Design · Information Architecture · User Flows · Prototyping · Design System
                </dd>
              </div>
            </dl>
          </section>
        )}

        {(project.slug === "getrich" || isMoneyGuide) && (
          <dl
            className={`case-study-meta${isMoneyGuide ? " is-moneyguide" : ""}`}
            aria-label="Project details"
          >
            <div>
              <dt>Role</dt>
              <dd>Product Designer</dd>
            </div>
            <div>
              <dt>{isMoneyGuide ? "Focus" : "Platform"}</dt>
              <dd>
                {isMoneyGuide
                  ? "UX/UI Design · Interaction Design · Mobile Product Design"
                  : "Web / SaaS"}
              </dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>3 Weeks</dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>English · Spanish</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>UX Research · UX/UI · Prototyping · Design System</dd>
            </div>
          </dl>
        )}

        {project.slug === "hookmybase" && (
          <dl className="case-study-meta hookmybase-meta" aria-label="Project details">
            <div>
              <dt>Role</dt>
              <dd>UI/UX Designer</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>Web / SaaS</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>4 Weeks</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>UX/UI Design · User Flows · Prototyping · Dashboard Design</dd>
            </div>
          </dl>
        )}

        <section className="case-study-intro is-editorial" aria-labelledby="case-overview-title">
          <p className="work-eyebrow">
            <span>
              {isMoneyGuide ||
              project.slug === "ai-product-enhancer" ||
              project.slug === "hookmybase"
                ? "01"
                : "02"}
            </span>
          </p>
          <div>
            {isMoneyGuide ? (
              <>
                <h2 id="case-overview-title">OVERVIEW OF THE PROJECT</h2>
                <p className="moneyguide-overview-tagline">
                  Making financial education easier to understand — and easier to use.
                </p>
                <p>
                  MoneyGuide Kids is a mobile experience designed to help parents introduce children
                  to financial concepts through practical money-management activities.
                </p>
                <p>
                  The product brings together{" "}
                  <strong>
                    allowances, chores, savings, investments, learning progress, and family activity
                  </strong>{" "}
                  into one connected experience.
                </p>
                <p>
                  My focus was to transform a complex set of financial and educational features into
                  a product that feels{" "}
                  <strong>simple, approachable, and engaging for families.</strong>
                </p>
              </>
            ) : project.slug === "ai-product-enhancer" ? (
              <>
                <h2 id="case-overview-title">Overview of the project</h2>
                <p className="ai-enhancer-overview-tagline">
                  Making AI-powered product enhancement simple, scalable, and easy to manage.
                </p>
                <p>
                  AI Product Enhancer is a SaaS platform designed to help e-commerce teams improve
                  large volumes of product listings using AI.
                </p>
                <p>
                  The platform brings together product data, AI enhancement, content editing,
                  integrations, data mapping, and publishing into one connected workflow.
                </p>
                <p>
                  My focus was to turn a technically complex product into a clear and approachable
                  experience where users can import products, enhance their content, review AI
                  suggestions, and sync updates with their stores.
                </p>
              </>
            ) : project.slug === "hookmybase" ? (
              <>
                <h2 id="case-overview-title">Overview of the Project</h2>
                <p className="moneyguide-overview-tagline">
                  Simplifying webhook management for everyone.
                </p>
                <p>
                  HookMyBase is a SaaS platform that helps users manage Airtable webhooks without
                  dealing with complex technical workflows.
                </p>
                <p>
                  The product brings{" "}
                  <strong>connections, webhook monitoring, testing, logs, and team settings</strong>{" "}
                  into one structured workspace, making automation easier to set up and manage.
                </p>
                <p>
                  <strong>
                    My role was to design the product experience from onboarding to dashboard, while
                    also creating supporting landing and documentation pages.
                  </strong>
                </p>
              </>
            ) : (
              <>
                <h2 id="case-overview-title">Overview of the project</h2>
                <p>{project.overview}</p>
              </>
            )}
          </div>
        </section>

        {project.slug === "hookmybase" && (
          <section
            className="case-study-story-section hookmybase-challenge"
            aria-labelledby="hookmybase-challenge-title"
          >
            <header className="case-study-story-heading">
              <p className="work-eyebrow">
                <span>02</span>
              </p>
              <h2 id="hookmybase-challenge-title">The Challenge</h2>
              <p>
                <strong>Turning a technical workflow into a simple experience.</strong>
              </p>
              <p>
                Managing webhooks can become frustrating when users deal with expired connections,
                manual refreshes, missed events, and technical setup.
              </p>
              <p>The challenge was to create an experience that made it easy to:</p>
            </header>
            <ul className="hookmybase-challenge-list">
              <li>Connect an Airtable base</li>
              <li>Set up and manage webhooks</li>
              <li>Monitor events and webhook status</li>
              <li>Test and troubleshoot issues</li>
              <li>Understand the product without technical knowledge</li>
            </ul>
            <p className="hookmybase-challenge-goal">
              <strong>Goal:</strong> Make a technical SaaS workflow feel simple, clear, and
              approachable.
            </p>
          </section>
        )}

        {isMoneyGuide ? (
          <MoneyGuideCaseStudyContent
            images={project.sections.flatMap((storySection) => storySection.images)}
          />
        ) : (
          project.sections.map((storySection, sectionIndex) => (
            <Fragment key={storySection.heading}>
              {project.slug === "ai-product-enhancer" && sectionIndex === 0 && (
                <section
                  className="case-study-story-section ai-enhancer-challenge"
                  aria-labelledby="ai-enhancer-challenge-title"
                >
                  <header className="case-study-story-heading">
                    <p className="work-eyebrow">
                      <span>02</span>
                    </p>
                    <h2 id="ai-enhancer-challenge-title">The challenge</h2>
                    <p>
                      AI-powered workflows can become complicated when users are managing hundreds
                      of products.
                    </p>
                    <p>
                      The challenge was to design an experience that could handle large amounts of
                      product data without making the interface feel technical or overwhelming.
                    </p>
                    <p>The product needed to:</p>
                  </header>
                  <div className="ai-enhancer-challenge-grid">
                    <article>
                      <h3>Manage complex product data</h3>
                      <p>
                        Users needed to import, organize, search, filter, and manage large product
                        catalogs efficiently.
                      </p>
                    </article>
                    <article>
                      <h3>Make AI decisions understandable</h3>
                      <p>
                        Users needed a clear way to compare original content with AI-enhanced
                        content before accepting changes.
                      </p>
                    </article>
                    <article>
                      <h3>Connect multiple data sources</h3>
                      <p>
                        The system needed to support CSV uploads, Google Sheets, APIs, and
                        e-commerce integrations without creating unnecessary complexity.
                      </p>
                    </article>
                    <article>
                      <h3>Keep the workflow transparent</h3>
                      <p>
                        Every important step — from mapping data to enhancing and syncing products —
                        needed clear feedback and status visibility.
                      </p>
                    </article>
                  </div>
                  <p className="ai-enhancer-challenge-goal">
                    The goal was to make the system feel powerful without making it feel
                    complicated.
                  </p>
                </section>
              )}
              <section
                className={`case-study-story-section${project.slug === "getrich" && sectionIndex === 0 ? " getrich-challenge" : ""}${project.slug === "ai-product-enhancer" ? ` ai-enhancer-section-${sectionIndex}` : ""}${project.slug === "ai-product-enhancer" && storySection.heading === "Client Feedback" ? " moneyguide-story-section" : ""}${project.slug === "hookmybase" && storySection.heading === "Client Feedback" ? " moneyguide-story-section" : ""}${project.slug === "hookmybase" && storySection.heading === "Key Design Decisions" ? " hookmybase-design-decisions" : ""}${project.slug === "hookmybase" && storySection.heading === "Outcome" ? " ai-enhancer-outcome" : ""}`}
                aria-labelledby={`case-section-${sectionIndex}`}
              >
                {project.slug === "getrich" && sectionIndex === 0 ? (
                  <>
                    <header className="getrich-challenge-heading">
                      <p className="work-eyebrow">
                        <span>03</span>
                      </p>
                      <h2 id={`case-section-${sectionIndex}`}>The challenge</h2>
                      <p>
                        Managing a multi-level educational program required different users to
                        handle different tasks across regions, schools, classes, and students. The
                        challenge was to make a complex administrative system feel clear,
                        structured, and easy to navigate.
                      </p>
                    </header>
                    <div className="getrich-challenge-grid">
                      <article>
                        <h3>Complex hierarchy</h3>
                        <p>
                          Multiple levels, regions, schools, classes and students had to work within
                          one system.
                        </p>
                      </article>
                      <article>
                        <h3>Different user roles</h3>
                        <p>
                          Each role needed access to the information and actions relevant to them.
                        </p>
                      </article>
                      <article>
                        <h3>Too much information</h3>
                        <p>
                          Dashboards needed to communicate important information without
                          overwhelming users.
                        </p>
                      </article>
                    </div>
                    <figure className="getrich-challenge-visual">
                      <Image
                        src="/Casestudies/getrich/Images/The%20Challenge.png"
                        alt="Role flow from Global Admin through Region Admin, School Admin, and Teacher to Student"
                        width={1436}
                        height={228}
                        loading="lazy"
                        sizes="(max-width: 700px) 100vw, 1200px"
                      />
                    </figure>
                  </>
                ) : (
                  <>
                    <header className="case-study-story-heading">
                      <div>
                        <p className="work-eyebrow">
                          <span>
                            {String(
                              sectionIndex +
                                (project.slug === "getrich" ? 8 : 3) +
                                (project.slug === "ai-product-enhancer" && sectionIndex >= 5
                                  ? 1
                                  : 0),
                            ).padStart(2, "0")}
                          </span>
                          {project.slug === "ai-product-enhancer" || project.slug === "hookmybase"
                            ? null
                            : " Case study"}
                        </p>
                        <h2 id={`case-section-${sectionIndex}`}>{storySection.heading}</h2>
                      </div>
                      {project.slug === "ai-product-enhancer" && sectionIndex === 0 ? (
                        <p>
                          I turned the complex AI workflow into a simple, structured product journey
                          by focusing on the core steps users actually need — Connect → Import →
                          Organize → Enhance → Review → Sync — making the overall experience easier
                          to understand and navigate.
                          <br />
                          <br />
                          The design approach focused on four priorities:
                        </p>
                      ) : project.slug === "ai-product-enhancer" && sectionIndex === 1 ? (
                        <>
                          <p>
                            <strong>
                              Creating a connected workflow from onboarding to product enhancement.
                            </strong>
                            <br />
                            Before designing the individual screens, I mapped the main journey to
                            understand how users would move through the platform.
                          </p>
                          <p>The flow connects:</p>
                        </>
                      ) : project.slug === "ai-product-enhancer" && sectionIndex === 2 ? (
                        <p>
                          Design decisions focused on making large catalogs manageable, keeping AI
                          changes reviewable, and connecting imports, integrations, and activity
                          history in one transparent workspace.
                        </p>
                      ) : project.slug === "ai-product-enhancer" && sectionIndex === 3 ? (
                        <p>
                          A connected SaaS workspace for managing, enhancing, and publishing product
                          content with AI. The final experience brings product management, AI
                          enhancement, data sources, integrations, and activity tracking into one
                          structured workspace — giving e-commerce teams a clear and scalable way to
                          manage their product enhancement workflow from import to publishing.
                        </p>
                      ) : project.slug === "ai-product-enhancer" && sectionIndex === 4 ? (
                        <p>
                          Alongside the core SaaS experience, I also designed the marketing and
                          solutions pages to communicate the platform’s value, use cases, and
                          AI-powered workflow clearly.
                        </p>
                      ) : project.slug === "hookmybase" && sectionIndex === 0 ? (
                        <p>
                          <strong>From technical complexity to a clear product journey.</strong>
                          <br />I focused on turning a complex webhook workflow into a structured,
                          easy-to-understand product experience — from discovery and information
                          architecture to UI design, prototyping, and handoff.
                        </p>
                      ) : project.slug === "hookmybase" && sectionIndex === 1 ? (
                        <p>
                          <strong>Designing clarity into a technical SaaS workflow.</strong>
                        </p>
                      ) : project.slug === "hookmybase" && sectionIndex === 2 ? (
                        <>
                          <p>
                            <strong>
                              A complete SaaS experience built around clarity and control.
                            </strong>
                          </p>
                          <p>
                            The final product brings onboarding, dashboard monitoring, connections,
                            webhook testing, documentation, and marketing pages into one consistent
                            experience.
                          </p>
                        </>
                      ) : project.slug === "hookmybase" && storySection.heading === "Outcome" ? (
                        <>
                          <p>
                            <strong>A clearer SaaS experience for technical workflows.</strong>
                          </p>
                          <p>
                            The final design transformed a complex webhook management process into a
                            more structured and approachable product experience.
                          </p>
                        </>
                      ) : project.slug === "hookmybase" && storySection.heading === "Reflection" ? (
                        <>
                          <p>
                            <strong>
                              Making technical products feel simple is a design challenge.
                            </strong>
                          </p>
                          <p>
                            HookMyBase reinforced that good SaaS design isn&apos;t about hiding
                            complexity — it&apos;s about{" "}
                            <strong>structuring it so users always know what to do next.</strong>
                          </p>
                        </>
                      ) : project.slug === "hookmybase" &&
                        storySection.heading === "Client Feedback" ? null : !(
                          project.slug === "ai-product-enhancer" &&
                          (storySection.heading === "Reflection" ||
                            storySection.heading === "Client Feedback")
                        ) ? (
                        <p>
                          {project.name} · {storySection.heading}
                        </p>
                      ) : null}
                    </header>
                    {project.slug === "hookmybase" && sectionIndex === 2 ? (
                      <div className="hookmybase-final-experience">
                        <figure className="case-study-story-figure">
                          <Image
                            src={encodeURI(storySection.images[0].src)}
                            alt={storySection.images[0].alt}
                            width={1400}
                            height={1000}
                            loading="lazy"
                            sizes="(max-width: 700px) 100vw, 1200px"
                          />
                        </figure>
                        <div className="hookmybase-final-supporting">
                          <p>
                            Supporting pages were designed to clearly communicate the product,
                            explain key use cases, and help both technical and non-technical users
                            get started quickly.
                          </p>
                        </div>
                        <figure className="case-study-story-figure">
                          <Image
                            src={encodeURI(storySection.images[1].src)}
                            alt={storySection.images[1].alt}
                            width={1400}
                            height={1000}
                            loading="lazy"
                            sizes="(max-width: 700px) 100vw, 1200px"
                          />
                        </figure>
                      </div>
                    ) : project.slug === "ai-product-enhancer" && sectionIndex === 1 ? (
                      <div className="ai-enhancer-flow-content">
                        <figure className="case-study-story-figure">
                          <Image
                            src={encodeURI(storySection.images[0].src)}
                            alt={storySection.images[0].alt}
                            width={1400}
                            height={1000}
                            loading="lazy"
                            sizes="(max-width: 700px) 100vw, 1200px"
                          />
                        </figure>
                        <p className="ai-enhancer-section-caption">
                          This helped establish a clear information architecture and ensured that
                          users always understood where they were, what was happening, and what to
                          do next.
                        </p>
                        <figure className="case-study-story-figure">
                          <Image
                            src={encodeURI(storySection.images[1].src)}
                            alt={storySection.images[1].alt}
                            width={1400}
                            height={1000}
                            loading="lazy"
                            sizes="(max-width: 700px) 100vw, 1200px"
                          />
                        </figure>
                      </div>
                    ) : (
                      <div
                        className={`case-study-story-grid${storySection.images.length === 1 ? " is-single" : ""}`}
                      >
                        {storySection.images.map((image, imageIndex) => (
                          <figure className="case-study-story-figure" key={image.src}>
                            <Image
                              src={encodeURI(image.src)}
                              alt={`${project.name}: ${storySection.heading}, visual ${imageIndex + 1}`}
                              width={1400}
                              height={1000}
                              loading="lazy"
                              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 90vw, 1200px"
                            />
                          </figure>
                        ))}
                      </div>
                    )}
                    {project.slug === "hookmybase" && storySection.heading === "Outcome" && (
                      <div className="ai-enhancer-outcome-grid">
                        <article>
                          <span>01</span>
                          <h3>Clearer onboarding</h3>
                          <p>Guided setup reduced confusion during initial configuration.</p>
                        </article>
                        <article>
                          <span>02</span>
                          <h3>Better visibility</h3>
                          <p>Dashboard and logs made webhook activity easier to monitor.</p>
                        </article>
                        <article>
                          <span>03</span>
                          <h3>Simpler management</h3>
                          <p>Connections and settings were organized for faster access.</p>
                        </article>
                        <article>
                          <span>04</span>
                          <h3>Easier troubleshooting</h3>
                          <p>The testing experience helped users understand webhook responses.</p>
                        </article>
                        <article>
                          <span>05</span>
                          <h3>Scalable foundation</h3>
                          <p>
                            The system was designed to support future product features and
                            integrations.
                          </p>
                        </article>
                      </div>
                    )}
                    {project.slug === "ai-product-enhancer" && sectionIndex === 0 && (
                      <p className="ai-enhancer-section-caption">
                        The goal was to make the system feel powerful without making it feel
                        complicated.
                      </p>
                    )}
                    {project.slug === "ai-product-enhancer" && sectionIndex === 3 && (
                      <p className="ai-enhancer-section-caption">
                        A centralized workspace that gives users a clear view of product activity,
                        enhancement progress, integrations, and key actions.
                      </p>
                    )}
                  </>
                )}
              </section>
              {project.slug === "ai-product-enhancer" && sectionIndex === 4 && (
                <section
                  className="case-study-story-section ai-enhancer-outcome"
                  aria-labelledby="ai-enhancer-outcome-title"
                >
                  <header className="case-study-story-heading">
                    <p className="work-eyebrow">
                      <span>08</span>
                    </p>
                    <h2 id="ai-enhancer-outcome-title">Outcome</h2>
                    <p>A clearer AI-powered workflow designed for scale.</p>
                    <p>
                      The final product transformed a complex product-enhancement workflow into a
                      structured SaaS experience that balances{" "}
                      <strong>automation with user control.</strong>
                    </p>
                  </header>
                  <div className="ai-enhancer-outcome-grid">
                    <article>
                      <span>01</span>
                      <h3>Reduced user effort</h3>
                      <p>
                        Simplified task flows were designed to reduce unnecessary steps and make
                        product enhancement faster.
                      </p>
                    </article>
                    <article>
                      <span>02</span>
                      <h3>Improved data clarity</h3>
                      <p>
                        Structured tables, grids, filters, mapping states, and visual previews make
                        large datasets easier to understand.
                      </p>
                    </article>
                    <article>
                      <span>03</span>
                      <h3>Transparent AI workflow</h3>
                      <p>
                        Side-by-side comparisons give users control over AI-generated changes before
                        they are published.
                      </p>
                    </article>
                    <article>
                      <span>04</span>
                      <h3>Scalable architecture</h3>
                      <p>
                        The system was designed to support multiple integrations, products, users,
                        and future SaaS capabilities.
                      </p>
                    </article>
                    <article>
                      <span>05</span>
                      <h3>Consistent experience</h3>
                      <p>
                        Reusable UI patterns create a unified experience across the dashboard,
                        editor, integrations, settings, and supporting pages.
                      </p>
                    </article>
                  </div>
                </section>
              )}
              {project.slug === "getrich" && sectionIndex === 0 && (
                <>
                  <section
                    className="case-study-story-section getrich-approach"
                    aria-labelledby="getrich-approach-title"
                  >
                    <header className="getrich-approach-heading">
                      <p className="work-eyebrow">
                        <span>04</span>
                      </p>
                      <h2 id="getrich-approach-title">My Approach</h2>
                    </header>
                    <figure className="getrich-approach-visual">
                      <Image
                        src="/Casestudies/getrich/Images/My%20Approach.png"
                        alt="My approach across discovery and research, information architecture and planning, UI and system design, and validation and delivery"
                        width={1434}
                        height={758}
                        loading="lazy"
                        sizes="(max-width: 700px) 100vw, 1200px"
                      />
                    </figure>
                  </section>
                  <section
                    className="case-study-story-section getrich-information-architecture"
                    aria-labelledby="getrich-information-architecture-title"
                  >
                    <header>
                      <p className="work-eyebrow">
                        <span>05</span>
                      </p>
                      <h2 id="getrich-information-architecture-title">
                        User Flow / Information Architecture
                      </h2>
                      <p>
                        Before designing the interface, I mapped how users move through the platform
                        and how the different administrative levels connect.
                      </p>
                    </header>
                    <figure>
                      <Image
                        src="/Casestudies/getrich/Images/IA.png"
                        alt="GetRich user flow and information architecture diagram showing authentication paths and role-based dashboards"
                        width={718}
                        height={862}
                        loading="lazy"
                        sizes="(max-width: 700px) 100vw, 1200px"
                      />
                      <figcaption>
                        Role-based flows helped simplify navigation and reduce unnecessary actions
                        for each user.
                      </figcaption>
                    </figure>
                  </section>
                  <section
                    className="case-study-story-section getrich-design-decisions"
                    aria-labelledby="getrich-design-decisions-title"
                  >
                    <header>
                      <p className="work-eyebrow">
                        <span>06</span>
                      </p>
                      <h2 id="getrich-design-decisions-title">Key design decisions</h2>
                      <p>Designing for role-based complexity</p>
                    </header>
                    <div className="getrich-design-decisions-grid">
                      <article className="getrich-design-decision is-featured">
                        <figure>
                          <Image
                            src="/Casestudies/getrich/Images/Role-based%20navigation.png"
                            alt="GetRich dashboards adapted for global, regional, and school-level users"
                            width={1408}
                            height={671}
                            loading="lazy"
                            sizes="(max-width: 700px) 100vw, 1200px"
                          />
                        </figure>
                        <div>
                          <p className="work-eyebrow">
                            <span>01</span>
                          </p>
                          <h3>Role-based navigation</h3>
                          <p>Different users see the areas relevant to their responsibilities.</p>
                        </div>
                      </article>
                      <article className="getrich-design-decision">
                        <figure>
                          <Image
                            src="/Casestudies/getrich/Images/Clear%20hierarchy.png"
                            alt="GetRich school and parties screens showing a clear hierarchy"
                            width={675}
                            height={624}
                            loading="lazy"
                            sizes="(max-width: 700px) 100vw, 600px"
                          />
                        </figure>
                        <div>
                          <p className="work-eyebrow">
                            <span>02</span>
                          </p>
                          <h3>Clear hierarchy</h3>
                          <p>
                            Information was grouped into predictable levels so users could
                            understand where they were.
                          </p>
                        </div>
                      </article>
                      <article className="getrich-design-decision">
                        <figure>
                          <Image
                            src="/Casestudies/getrich/Images/Action-focused%20dashboards.png"
                            alt="GetRich dashboard with key metrics and actions surfaced first"
                            width={675}
                            height={625}
                            loading="lazy"
                            sizes="(max-width: 700px) 100vw, 600px"
                          />
                        </figure>
                        <div>
                          <p className="work-eyebrow">
                            <span>03</span>
                          </p>
                          <h3>Action-focused dashboards</h3>
                          <p>
                            Important metrics and actions were surfaced first instead of presenting
                            every available data point.
                          </p>
                        </div>
                      </article>
                    </div>
                  </section>
                  <section
                    className="case-study-story-section getrich-final-experience"
                    aria-labelledby="getrich-final-experience-title"
                  >
                    <header>
                      <p className="work-eyebrow">
                        <span>07</span>
                      </p>
                      <h2 id="getrich-final-experience-title">The Final Experience</h2>
                      <p>
                        A structured dashboard system that brings key information, actions and
                        performance insights into one clear workspace.
                      </p>
                    </header>
                    <div className="getrich-final-experience-grid">
                      <article className="getrich-final-experience-card is-featured">
                        <figure>
                          <Image
                            src="/Casestudies/getrich/Images/dashboard.png"
                            alt="GetRich dashboard overview with key metrics, regional performance charts, learning stage performance, and a regional heatmap"
                            width={2816}
                            height={1342}
                            loading="lazy"
                            sizes="(max-width: 700px) 100vw, 1200px"
                          />
                        </figure>
                        <div>
                          <p className="work-eyebrow">
                            <span>01</span>
                          </p>
                          <h3>Dashboard Overview</h3>
                          <p>
                            A centralized view of key activity, performance, and administrative
                            actions across the education program.
                          </p>
                        </div>
                      </article>
                      <article className="getrich-final-experience-card">
                        <figure>
                          <Image
                            src="/Casestudies/getrich/Images/Schools%20Management.png"
                            alt="GetRich school management interface with school records and an add school form"
                            width={1350}
                            height={1305}
                            loading="lazy"
                            sizes="(max-width: 700px) 100vw, 600px"
                          />
                        </figure>
                        <div>
                          <p className="work-eyebrow">
                            <span>02</span>
                          </p>
                          <h3>Schools Management</h3>
                          <p>
                            A structured workspace for managing schools, monitoring performance, and
                            accessing school-level information.
                          </p>
                        </div>
                      </article>
                      <article className="getrich-final-experience-card">
                        <figure>
                          <Image
                            src="/Casestudies/getrich/Images/Party%20%26%20Activity%20Management.png"
                            alt="GetRich party management interface for creating learning parties, managing activities, and tracking participation"
                            width={1350}
                            height={1350}
                            loading="lazy"
                            sizes="(max-width: 700px) 100vw, 600px"
                          />
                        </figure>
                        <div>
                          <p className="work-eyebrow">
                            <span>03</span>
                          </p>
                          <h3>Party &amp; Activity Management</h3>
                          <p>
                            A focused workspace for creating learning parties, managing activities,
                            and tracking participation and progress.
                          </p>
                        </div>
                      </article>
                      <article className="getrich-final-experience-card is-featured">
                        <figure>
                          <Image
                            src="/Casestudies/getrich/Images/Leaderboard.png"
                            alt="GetRich leaderboard showing top student champions and top performing schools"
                            width={2816}
                            height={1342}
                            loading="lazy"
                            sizes="(max-width: 700px) 100vw, 1200px"
                          />
                        </figure>
                        <div>
                          <p className="work-eyebrow">
                            <span>04</span>
                          </p>
                          <h3>Leaderboard</h3>
                          <p>
                            A clear ranking experience that helps track student performance,
                            participation, and engagement.
                          </p>
                        </div>
                      </article>
                    </div>
                  </section>
                  <section
                    className="case-study-story-section getrich-design-system"
                    aria-labelledby="getrich-design-system-title"
                  >
                    <header>
                      <p className="work-eyebrow">
                        <span>08</span>
                      </p>
                      <h2 id="getrich-design-system-title">Design System</h2>
                      <p>
                        A reusable design system helped maintain consistency across dashboards,
                        forms, tables, states and role-based experiences.
                      </p>
                    </header>
                    <figure>
                      <Image
                        src="/Casestudies/getrich/Images/Design%20sys.png"
                        alt="GetRich design system showing color palette, typography, buttons, grid system, cards, status pills, icons, tables, and steppers"
                        width={2872}
                        height={1960}
                        loading="lazy"
                        sizes="(max-width: 700px) 100vw, 1200px"
                      />
                    </figure>
                  </section>
                  <section
                    className="case-study-story-section getrich-outcome"
                    aria-labelledby="getrich-outcome-title"
                  >
                    <header>
                      <p className="work-eyebrow">
                        <span>09</span>
                      </p>
                      <h2 id="getrich-outcome-title">Outcome</h2>
                      <p>
                        The final system translated a complex multi-role structure into a clearer,
                        scalable administrative experience designed for everyday use across
                        different levels of an education ecosystem.
                      </p>
                    </header>
                    <figure>
                      <Image
                        src="/Casestudies/getrich/Images/outcome.png"
                        alt="GetRich client testimonial describing the quality and usability of the back-office platform design"
                        width={2872}
                        height={1660}
                        loading="lazy"
                        sizes="(max-width: 700px) 100vw, 1200px"
                      />
                    </figure>
                  </section>
                  <section
                    className="case-study-story-section getrich-reflection"
                    aria-labelledby="getrich-reflection-title"
                  >
                    <header>
                      <p className="work-eyebrow">
                        <span>10</span>
                      </p>
                      <h2 id="getrich-reflection-title">Reflection</h2>
                    </header>
                    <figure>
                      <Image
                        src="/Casestudies/getrich/Images/Reflection.png"
                        alt="GetRich reflection on designing for usability, security, scalability, and real-world operational needs"
                        width={2872}
                        height={1660}
                        loading="lazy"
                        sizes="(max-width: 700px) 100vw, 1200px"
                      />
                    </figure>
                  </section>
                </>
              )}
            </Fragment>
          ))
        )}

        {moreProjects.length > 0 && (
          <section className="case-study-more" aria-labelledby="case-study-more-title">
            <header className="case-study-more-heading">
              <h2 id="case-study-more-title">More projects</h2>
              <Link href="/work">
                View all projects <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </header>
            <div className="case-study-more-grid">
              {moreProjects.map((item) => (
                <Link className="case-study-more-card" href={`/work/${item.slug}`} key={item.slug}>
                  <div className="case-study-more-media">
                    <Image
                      src={encodeURI(item.cover)}
                      alt={item.coverAlt}
                      width={1400}
                      height={900}
                      loading="lazy"
                      sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                  </div>
                  <div className="case-study-more-copy">
                    <h3>{item.name}</h3>
                    <p>{item.featuredDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
      <PortfolioCta />
    </div>
  );
}
