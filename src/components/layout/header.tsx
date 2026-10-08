"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { siteConfig } from "@/lib/site";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 0);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " mobile-menu-open" : ""}`}
    >
      <div className="header-shell">
        <Link
          href="/"
          className="brand"
          aria-label="Fouzia Mahjabeen — Home"
          onClick={() => setMenuOpen(false)}
        >
          <div className="brand-mark">
            <Image
              src="/brand/logo.png"
              alt="Fouzia Mahjabeen logo"
              width={56}
              height={56}
              priority
            />
          </div>
          <div className="brand-copy">
            <span className="brand-name">Fouzia Mahjabeen</span>
            <span className="brand-role">
              Product Designer <i>·</i> Video Editor
            </span>
          </div>
        </Link>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="resume-button"
          href="/Fouzia-Mahjabeen-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Resume</span>
          <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className={`mobile-menu-button${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
            <X size={25} aria-hidden="true" />
          ) : (
            <>
              <span />
              <span />
            </>
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-navigation${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>{item.label}</span>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <p>Let’s connect</p>
          <div className="mobile-menu-socials">
            <a href={siteConfig.social.linkedin.href} target="_blank" rel="noopener noreferrer">
              LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={siteConfig.social.upwork.href} target="_blank" rel="noopener noreferrer">
              Upwork <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={siteConfig.social.portfolio.href} target="_blank" rel="noopener noreferrer">
              Behance <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={siteConfig.social.video.href} target="_blank" rel="noopener noreferrer">
              {siteConfig.social.video.label} <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="/Fouzia-Mahjabeen-Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
