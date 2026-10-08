"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productProjects, videoProjects } from "@/lib/work";
import PortfolioCta from "@/components/section/portfolio-cta";

type Filter = "all" | "product" | "video";

export default function WorkPortfolio() {
  const [filter, setFilter] = useState<Filter>("all");
  return (
    <>
      <nav className="work-filters work-shell" id="work-projects" aria-label="Filter projects">
        {(
          [
            ["all", "All"],
            ["product", "Product Design"],
            ["video", "Video"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            aria-pressed={filter === value}
            className={filter === value ? "is-active" : ""}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </nav>

      {filter !== "video" && (
        <section className="work-section work-shell" aria-labelledby="product-work-title">
          <div className="work-section-heading">
            <div>
              <p className="work-eyebrow">
                <span>01</span> Product design
              </p>
              <h2 id="product-work-title">
                Thoughtful flows.
                <br />
                Useful interfaces.
              </h2>
            </div>
            <p>
              Product and UX/UI case studies spanning financial learning, education, dashboards and
              mobile experiences.
            </p>
          </div>
          <div className="work-project-grid">
            {productProjects.map((project) => (
              <article className="work-project" key={project.slug}>
                <div
                  className={`work-project-image${project.slug === "ai-product-enhancer" ? " is-ai-product-enhancer" : ""}`}
                >
                  <Image
                    src={encodeURI(project.cover)}
                    alt={project.coverAlt}
                    width={1400}
                    height={1000}
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 600px"
                  />
                  <span className="work-project-number">{project.number}</span>
                </div>
                <div className="work-project-meta">
                  <span>{project.category}</span>
                  <span>Case study</span>
                </div>
                <div className="work-project-action">
                  <div className="work-project-copy">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <Link className="work-case-study-button" href={`/work/${project.slug}`}>
                    Explore Case Study <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {filter !== "product" && (
        <section
          className="work-section work-video-section"
          id="video-editing"
          aria-labelledby="video-work-title"
        >
          <div className="work-shell">
            <div className="work-section-heading">
              <div>
                <p className="work-eyebrow">
                  <span>02</span> Video
                </p>
                <h2 id="video-work-title">
                  Ideas, cut into
                  <br />
                  <span>visual stories.</span>
                </h2>
              </div>
              <p>
                Video work, short-form edits and product showcases. I use the right mix of
                storytelling, pacing and motion to make every piece clear and engaging.
              </p>
            </div>
            <div className="work-video-grid">
              {videoProjects.map((video, index) => (
                <article className="work-video-card" key={video.src}>
                  <div className="work-video-frame">
                    <video
                      controls
                      preload="none"
                      playsInline
                      poster={encodeURI(video.poster)}
                      aria-label={`Play ${video.title}`}
                    >
                      <source src={encodeURI(video.src)} type="video/mp4" />
                      Your browser does not support this video.
                    </video>
                    <span className="work-video-index">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="work-project-meta">{video.type}</p>
                  <h3>{video.title}</h3>
                  <p className="work-video-description">{video.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      <PortfolioCta />
    </>
  );
}
