import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import WorkPortfolio from "@/components/section/work-portfolio";

export const metadata: Metadata = {
  title: "Work | Product Design & Video Editing by Fouzia Mahjabeen",
  description:
    "Explore Fouzia Mahjabeen’s product design case studies, UX/UI work, prototypes and video editing portfolio.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="work-page">
      <section className="work-hero work-shell" aria-labelledby="work-title">
        <h1 id="work-title">
          Products with purpose.
          <br />
          <span>Stories in motion.</span>
        </h1>
        <div className="work-hero-bottom">
          <p>
            A selection of product design case studies and visual work, combining clear thinking,
            purposeful interfaces, and intentional storytelling.
          </p>
          <a className="work-orbit-link" href="#work-projects" aria-label="Explore the work">
            <svg className="work-orbit-label" viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path
                  id="work-orbit-path"
                  d="M 60,60 m -43,0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
                />
              </defs>
              <text>
                <textPath href="#work-orbit-path">EXPLORE THE WORK · EXPLORE THE WORK · </textPath>
              </text>
            </svg>
            <span className="work-orbit-arrow">
              <ArrowDown size={20} aria-hidden="true" />
            </span>
          </a>
        </div>
      </section>
      <WorkPortfolio />
    </div>
  );
}
