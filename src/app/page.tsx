import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import SkillsMarquee from "@/components/section/skills-marquee";
import PortfolioCta from "@/components/section/portfolio-cta";
import { productProjects, videoProjects } from "@/lib/work";

const featuredProductSlugs = ["moneyguide-kids", "getrich"];
const featuredProducts = featuredProductSlugs
  .map((slug) => productProjects.find((project) => project.slug === slug))
  .filter((project): project is (typeof productProjects)[number] => project !== undefined);
const featuredVideoProjects = [
  videoProjects.find((project) => project.title.startsWith("Pompeii")),
  videoProjects.find((project) => project.title.startsWith("AI-Powered Product Enhancement")),
].filter((project): project is (typeof videoProjects)[number] => project !== undefined);

export default function HomePage() {
  return (
    <main className="site-main">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section id="hero" className="hero-section section-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              PRODUCT DESIGNER <span>+</span> VIDEO EDITOR
            </p>

            <h1 className="hero-title">
              I design digital products and visual experiences that make complexity feel{" "}
              <span>simple.</span>
            </h1>

            <p className="hero-description">
              I&apos;m Fouzia Mahjabeen, a Product Designer &amp; Video Editor with 5+ years of
              experience creating thoughtful digital products, intuitive interfaces, and visual
              content that communicates clearly.
            </p>

            <div className="hero-actions">
              <Link href="/work" className="button button-primary">
                View My Work
                <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/contact" className="button button-secondary">
                Contact Me
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <p className="hero-note">
              Open to remote opportunities &amp; selected freelance projects.
            </p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <video className="hero-asset" autoPlay muted loop playsInline preload="metadata">
              <source src="/Hero%20section%20asset/UXUI_Hero_Asset.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* =========================================================
          SKILLS MARQUEE
      ========================================================= */}
      <SkillsMarquee />

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="intro-section section-shell">
        <div className="section-label section-label-badge">
          <span className="section-label-dot" aria-hidden="true" />
          <span>WHAT I DO</span>
        </div>

        <div className="intro-grid">
          <h2 className="section-heading">
            Digital products,
            <br />
            designed with purpose.
          </h2>

          <div className="intro-content">
            <p className="large-copy">
              I combine UX thinking, visual design, and storytelling to create digital experiences
              that are useful, clear, and memorable.
            </p>

            <p>
              From early research and user flows to high-fidelity interfaces and prototypes, I focus
              on making complex products easier to understand and easier to use.
            </p>

            <p>
              Alongside product design, I create video content and visual stories that help ideas
              communicate beyond the interface.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE SNAPSHOT
      ========================================================= */}
      <section className="experience-strip section-shell" aria-label="Experience and services">
        <article className="experience-item">
          <h2>5+</h2>
          <p>Years Experience</p>
        </article>
        <article className="experience-item">
          <h2>Product</h2>
          <p>UX/UI &amp; Product Design</p>
        </article>
        <article className="experience-item">
          <h2>SaaS</h2>
          <p>Web &amp; Mobile Products</p>
        </article>
        <article className="experience-item">
          <h2>Video</h2>
          <p>Editing &amp; Visual Content</p>
        </article>
      </section>

      {/* =========================================================
          SELECTED WORK
      ========================================================= */}
      <section
        id="work"
        className="work-section section-shell featured-work-section"
        aria-labelledby="featured-work-title"
      >
        <div className="section-top">
          <div className="section-label section-label-badge">
            <span className="section-label-dot" aria-hidden="true" />
            <span>SELECTED WORK</span>
          </div>

          <Link href="/work" className="work-browse-link">
            Browse all projects <span aria-hidden="true">→</span>
          </Link>
        </div>

        <h2 className="featured-work-heading" id="featured-work-title">
          A selection of work across <span>product design &amp; visual storytelling.</span>
        </h2>

        <div className="featured-work-grid">
          {featuredProducts.map((project, index) => (
            <article className="featured-work-card" key={project.slug}>
              <div className="featured-work-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.featuredCategory}</span>
              </div>
              <div className="featured-work-media">
                <Image
                  src={
                    project.slug === "getrich"
                      ? "/Hero section asset/Casestudy thumbnail/Thumbnail-UXUI-CaseStudy – GetRich-Cover Page.png"
                      : `/featured/${project.slug}.webp`
                  }
                  alt={project.coverAlt}
                  width={960}
                  height={540}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="featured-work-copy">
                <h3>{project.featuredTitle}</h3>
                <p>{project.featuredDescription}</p>
                <Link className="featured-work-cta" href={`/work/${project.slug}`}>
                  View Case Study <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
          {featuredVideoProjects.map((project, index) => (
            <article className="featured-work-card" key={project.src}>
              <div className="featured-work-meta">
                <span>{String(index + 3).padStart(2, "0")}</span>
                <span>VIDEO EDITING</span>
              </div>
              <div className="featured-work-media featured-video-media">
                <div className="featured-video-frame">
                  <Image
                    src={project.poster ?? ""}
                    alt={`${project.title} video thumbnail`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <a
                    className="featured-video-play"
                    href={encodeURI(project.src)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Play ${project.title}`}
                  >
                    <Play size={20} fill="currentColor" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="featured-work-copy">
                <h3>{project.title}</h3>
                <p>{project.type}</p>
                <a
                  className="featured-work-cta"
                  href={encodeURI(project.src)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          TWO DISCIPLINES
      ========================================================= */}
      <section className="disciplines-section section-shell">
        <div className="section-label section-label-badge">
          <span className="section-label-dot" aria-hidden="true" />
          <span>TWO DISCIPLINES</span>
        </div>

        <div className="discipline-grid">
          <article className="discipline-card">
            <div className="discipline-number">01</div>

            <div className="discipline-content">
              <p className="discipline-eyebrow">PRODUCT DESIGN</p>

              <h2>
                Turning complex
                <br />
                problems into
                <br />
                <span>clear experiences.</span>
              </h2>

              <p>
                I design web apps, mobile products, SaaS platforms, dashboards, and responsive
                digital experiences with a strong focus on usability, structure, and visual clarity.
              </p>

              <Link href="/work" className="text-link">
                Explore product design <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>

          <article className="discipline-card discipline-card-video">
            <div className="discipline-number">02</div>

            <div className="discipline-content">
              <p className="discipline-eyebrow">VIDEO EDITING</p>

              <h2>
                Turning ideas into
                <br />
                <span>visual stories.</span>
              </h2>

              <p>
                I edit short-form and digital video content with attention to pacing, visual rhythm,
                typography, transitions, and storytelling so every frame has a purpose.
              </p>

              <Link href="/work" className="text-link">
                Explore video work <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          ABOUT SNAPSHOT
      ========================================================= */}
      <section className="about-section section-shell">
        <div className="section-label section-label-badge">
          <span className="section-label-dot" aria-hidden="true" />
          <span>A LITTLE ABOUT ME</span>
        </div>

        <div className="about-grid">
          <h2 className="section-heading">
            Designing with
            <br />
            curiosity,
            <br />
            <span>editing with intent.</span>
          </h2>

          <div className="about-copy">
            <p className="large-copy">
              I&apos;m a multidisciplinary designer who enjoys working where product thinking meets
              visual storytelling.
            </p>

            <p>
              With 5+ years of experience, I work across UX research, information architecture,
              wireframing, UI design, prototyping, responsive design, design systems, and video
              editing.
            </p>

            <p>
              My goal is simple: create work that feels thoughtful, useful, and visually strong
              without adding unnecessary complexity.
            </p>

            <Link href="/about" className="text-link home-about-link">
              More about me <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <PortfolioCta />
    </main>
  );
}
