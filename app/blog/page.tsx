import type { Metadata } from "next";
import { PageHero, SectionHeading, Site } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Blog | Jibin John, PhD", description: "Articles in preparation on statistical genetics, reproducible bioinformatics workflows, genomics and scientific computing." };

const series = [
  ["Statistical Genetics", "GWAS, LDSC, Genomic SEM, PRS, meta-analysis and multi-trait methods."],
  ["Bioinformatics Workflows", "Reproducible harmonization, HPC, cloud computing, Docker and pipeline design."],
  ["Genomics Tutorials", "WES/WGS, RNA-seq, single-cell methods and multi-omics integration."],
  ["Research Explainers", "Accessible summaries of studies, methods, biological findings and limitations."],
  ["Scientific Computing", "Practical Python, R, Bash, optimization, validation and scientific visualization."],
  ["Career & Continuous Learning", "Courses, conferences, professional growth and lessons from an international research career."],
];

export default function BlogPage() {
  return <Site active="Blog"><PageHero eyebrow="Blog · Articles in preparation" title="Research notes, methods and practical workflows." intro="Articles are currently in preparation. This editorial space will present future writing that makes complex genetics and bioinformatics work clearer, more reproducible and easier to apply." actions={<a className="button button-primary" href="#series">Explore planned series</a>} aside={<div className="editorial-card"><span>Coming soon</span><strong>Clear science.<br />Reproducible methods.<br />Practical interpretation.</strong></div>} />
    <section className="section page-shell" id="series"><SectionHeading eyebrow="Planned article series" title="Six connected areas for future writing." intro="Every series is linked to the research, skills and professional-development sections of this site." /><div className="series-grid">{series.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><p>Planned series</p><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="section alternate-section"><div className="page-shell"><SectionHeading eyebrow="Article format" title="Each post will be written for clarity and reuse." /><div className="article-template"><div><strong>01</strong><span>Key takeaway</span></div><div><strong>02</strong><span>Scientific context</span></div><div><strong>03</strong><span>Method or workflow</span></div><div><strong>04</strong><span>Figures and code</span></div><div><strong>05</strong><span>Interpretation</span></div><div><strong>06</strong><span>Limitations & references</span></div></div></div></section>
    <section className="empty-editorial"><div className="page-shell"><p className="eyebrow light"><span />First articles in preparation</p><h2>The Blog is intentionally ready before publication begins.</h2><p>Future posts will be added under stable category-based URLs so research notes and tutorials remain organized as the archive grows.</p></div></section>
  </Site>;
}
