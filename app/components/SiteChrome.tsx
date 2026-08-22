import type { ReactNode } from "react";
import Link from "next/link";

const primaryNav = [
  ["About Me", "/about"],
  ["Research", "/research"],
  ["Expertise", "/skills-specializations"],
  ["Continuing Education", "/continuing-education"],
  ["Publications", "/publications"],
  ["Conferences", "/conferences"],
  ["Blog", "/blog"],
];

const mobileNav = [...primaryNav, ["Contact", "/contact"]];

export function Header({ active }: { active?: string }) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Jibin John homepage">
        <span className="brand-mark" aria-hidden="true">JJ</span>
        <span><strong>Jibin John, PhD</strong><small>Bioinformatics · Computational Biology</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {primaryNav.map(([label, href]) => <Link className={active === label ? "active" : ""} href={href} key={href}>{label}</Link>)}
      </nav>
      <Link className="button button-small header-cv" href="/contact">Contact</Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><span aria-hidden="true">☰</span>Menu</summary>
        <nav aria-label="Mobile navigation">
          <Link href="/">Home</Link>
          {mobileNav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
      </details>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div>
          <Link className="brand footer-brand" href="/" aria-label="Jibin John homepage">
            <span className="brand-mark" aria-hidden="true">JJ</span>
            <span><strong>Jibin John, PhD</strong><small>Bioinformatics · Computational Biology</small></span>
          </Link>
          <p>Bioinformatics, computational biology and reproducible data analysis for complex scientific questions.</p>
        </div>
        <div><strong>Profile</strong><Link href="/about">About Me</Link><Link href="/research">Research</Link><Link href="/skills-specializations">Skills & Specializations</Link><Link href="/continuing-education">Continuing Education</Link></div>
        <div><strong>Scholarship</strong><Link href="/publications">Publications</Link><Link href="/conferences">Conferences</Link><Link href="/blog">Blog</Link><a href="https://scholar.google.com/citations?user=vBDV0QkAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar ↗</a></div>
        <div><strong>Connect</strong><a href="mailto:johnjibinv@gmail.com">johnjibinv@gmail.com</a><a href="https://pubmed.ncbi.nlm.nih.gov/?term=jibin+john+" target="_blank" rel="noreferrer">PubMed ↗</a><a href="https://www.linkedin.com/in/jibin-john-46b18a171/" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>New York, USA</span></div>
      </div>
      <div className="page-shell copyright"><span>© 2026 Jibin John. All rights reserved.</span><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}

export function Site({ active, children }: { active?: string; children: ReactNode }) {
  return <main id="top"><Header active={active} />{children}<Footer /></main>;
}

export function PageHero({ eyebrow, title, intro, actions, aside }: { eyebrow: string; title: string; intro: string; actions?: ReactNode; aside?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="page-shell page-hero-grid">
        <div>
          <p className="eyebrow"><span />{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          {actions && <div className="hero-actions">{actions}</div>}
        </div>
        {aside && <div className="page-hero-aside">{aside}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2></div>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export function ScienceFigure({ type }: { type: "gwas" | "omics" | "pipeline" | "family" }) {
  if (type === "gwas") return (
    <figure className="science-figure gwas-figure" aria-label="Conceptual genome-wide association plot">
      <div className="gwas-bars">{[19, 31, 24, 46, 28, 70, 35, 26, 88, 32, 49, 25, 60, 36, 77, 29, 53, 40, 92, 34, 55, 29].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
      <figcaption><strong>Genetic association</strong><span>Signals → architecture</span></figcaption>
    </figure>
  );
  if (type === "omics") return (
    <figure className="science-figure network-figure" aria-label="Conceptual multi-omics integration diagram">
      <div className="network-core">Biology</div><span className="n1">DNA</span><span className="n2">RNA</span><span className="n3">Protein</span><span className="n4">Cell</span>
      <figcaption><strong>Multi-omics integration</strong><span>Variants → mechanisms</span></figcaption>
    </figure>
  );
  if (type === "family") return (
    <figure className="science-figure family-figure" aria-label="Conceptual family-based genetics diagram">
      <div className="family-tree"><span /><span /><i /><span /><span /><span /></div>
      <figcaption><strong>Family genomics</strong><span>Inheritance → rare variants</span></figcaption>
    </figure>
  );
  return (
    <figure className="science-figure flow-figure" aria-label="Conceptual reproducible analysis workflow">
      <div><span>Data</span><i>→</i><span>QC</span><i>→</i><span>Model</span><i>→</i><span>Evidence</span></div>
      <figcaption><strong>Reproducible computing</strong><span>Validated end to end</span></figcaption>
    </figure>
  );
}
