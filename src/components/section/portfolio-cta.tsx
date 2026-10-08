import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioCta() {
  return (
    <section className="portfolio-cta" aria-labelledby="portfolio-cta-title">
      <div className="portfolio-cta-inner">
        <p className="portfolio-cta-badge">
          <span aria-hidden="true" /> Have a product, idea or story in mind?
        </p>
        <h2 id="portfolio-cta-title">
          Let’s build meaningful
          <br />
          <span>experiences together.</span>
        </h2>
        <p>
          Whether you need a thoughtful product experience or engaging visual content, I’d love to
          hear what you’re working on.
        </p>
        <Link href="/contact" className="portfolio-cta-button">
          Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
