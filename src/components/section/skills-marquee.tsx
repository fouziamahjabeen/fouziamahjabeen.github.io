"use client";

const skills = [
  "PRODUCT DESIGN",
  "UX/UI DESIGN",
  "USER RESEARCH",
  "DESIGN SYSTEMS",
  "WIREFRAMING",
  "PROTOTYPING",
  "SAAS PRODUCTS",
  "WEB APPLICATIONS",
  "MOBILE DESIGN",
  "VIDEO EDITING",
  "VISUAL STORYTELLING",
  "SHORT-FORM VIDEO",
  "MOTION DESIGN",
  "INTERACTION DESIGN",
];

export default function SkillsMarquee() {
  const marqueeItems = [...skills, ...skills];

  return (
    <section className="skills-marquee" aria-label="Product design and video editing skills">
      <div className="skills-marquee-track">
        {marqueeItems.map((skill, index) => (
          <div className="skills-marquee-item" key={`${skill}-${index}`}>
            <span>{skill}</span>
            <span className="skills-marquee-star" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
