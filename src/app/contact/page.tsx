import {
  ArrowUpRight,
  Clapperboard,
  ExternalLink,
  FileText,
  Layers3,
  Mail,
  MessageCircle,
} from "lucide-react";
import { FaLinkedinIn, FaUpwork } from "react-icons/fa6";
import ContactForm from "@/components/section/contact-form";
import { siteConfig } from "@/lib/site";

const connectLinks = [
  {
    label: "Upwork",
    title: "Hire me for freelance projects",
    description: "Product design and video editing services",
    href: siteConfig.social.upwork.href,
    cta: "View Upwork profile",
    icon: FaUpwork,
    brand: "upwork",
  },
  {
    label: "LinkedIn",
    title: "Connect professionally",
    description: "Let’s talk about design, video, and opportunities",
    href: siteConfig.social.linkedin.href,
    cta: "Connect on LinkedIn",
    icon: FaLinkedinIn,
    brand: "linkedin",
  },
  {
    label: "Behance · Product Design",
    title: "Explore my design portfolio",
    description: "UX/UI, product thinking, and visual systems",
    href: siteConfig.social.portfolio.href,
    cta: "View design projects",
    icon: Layers3,
    brand: "behance",
  },
  {
    label: "Behance · Video Editing",
    title: "Watch my video work",
    description: "Edits, motion, and visual storytelling",
    href: siteConfig.social.video.href,
    cta: "View video projects",
    icon: Clapperboard,
    brand: "behance",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-hero-glow" aria-hidden="true" />
        <div className="contact-hero-content">
          <p className="contact-status">
            <span aria-hidden="true" /> Get in touch
          </p>
          <h1 id="contact-title">
            Let’s build something <span>meaningful.</span>
          </h1>
          <p className="contact-intro">
            Whether you’re shaping a digital product or telling a story through video, I’d love to
            hear what you’re working on.
          </p>
        </div>
      </section>

      <section className="contact-content section-shell" aria-label="Contact Fouzia">
        <aside className="contact-opportunities">
          <h2 className="connect-title">
            Connect <span>&amp; Hire</span>
          </h2>
          <div className="connect-link-list">
            {connectLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  className="connect-link"
                  data-brand={item.brand}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.label}
                >
                  <span className="connect-link-icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="connect-link-copy">
                    <span className="connect-link-label">{item.label}</span>
                    <strong>{item.title}</strong>
                    <span className="connect-link-description">{item.description}</span>
                    <span className="connect-link-cta">
                      {item.cta}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </span>
                </a>
              );
            })}
            <a
              className="connect-link"
              data-brand="resume"
              href="/Fouzia-Mahjabeen-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="connect-link-icon">
                <FileText size={20} aria-hidden="true" />
              </span>
              <span className="connect-link-copy">
                <span className="connect-link-label">Resume</span>
                <strong>View my professional experience</strong>
                <span className="connect-link-description">Background, experience, and skills</span>
                <span className="connect-link-cta">
                  View resume
                  <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </span>
            </a>
          </div>
        </aside>

        <section className="contact-conversation" aria-labelledby="direct-message-title">
          <div className="contact-conversation-mark">
            <MessageCircle size={19} aria-hidden="true" />
          </div>
          <p className="eyebrow">Direct message</p>
          <h2 id="direct-message-title">Tell me what you’re working on.</h2>
          <p className="contact-conversation-copy">
            Share a little about your product, video, or opportunity, and I’ll get back to you.
          </p>
          <a className="contact-email-cta" href={`mailto:${siteConfig.email}`}>
            <Mail size={18} aria-hidden="true" />
            <span>Prefer email?</span>
            <span>{siteConfig.email}</span>
            <ExternalLink size={15} aria-hidden="true" />
          </a>
          <ContactForm />
        </section>
      </section>
    </main>
  );
}
