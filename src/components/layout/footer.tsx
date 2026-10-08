import Image from "next/image";
import Link from "next/link";
import { FaBehance, FaLinkedinIn, FaUpwork } from "react-icons/fa6";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin.href,
    brand: "linkedin",
    icon: FaLinkedinIn,
  },
  {
    label: "Upwork",
    href: siteConfig.social.upwork.href,
    brand: "upwork",
    icon: FaUpwork,
  },
  {
    label: "Behance",
    href: siteConfig.social.portfolio.href,
    brand: "behance",
    icon: FaBehance,
  },
  {
    label: siteConfig.social.video.label,
    href: siteConfig.social.video.href,
    brand: "behance",
    icon: FaBehance,
  },
  {
    label: "Resume",
    href: "/Fouzia-Mahjabeen-Resume.pdf",
    brand: "resume",
    icon: FiFileText,
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-row">
          <Link href="/" className="footer-mobile-brand" aria-label="Fouzia Mahjabeen home">
            <Image src="/brand/logo.png" alt="" width={48} height={48} />
          </Link>
          <p className="footer-copyright">© 2026 Fouzia Mahjabeen. All rights reserved.</p>

          <nav className="footer-links" aria-label="Social links">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                  data-brand={link.brand}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="footer-link-icon" aria-hidden="true" />
                  <span>{link.label}</span>
                  {link.brand === "resume" && (
                    <FiArrowUpRight className="footer-link-arrow" aria-hidden="true" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
