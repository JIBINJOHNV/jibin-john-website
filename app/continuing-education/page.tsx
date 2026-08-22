import type { Metadata } from "next";
import { learning } from "../data";
import { PageHero, SectionHeading, Site } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Continuing Education | Jibin John, PhD",
  description: "Professional development and continuing-learning record spanning applied AI, data science, programming, psychiatric genetics, epigenetics and stem-cell biology.",
};

export default function ContinuingEducationPage() {
  return <Site active="Continuing Education">
    <PageHero
      eyebrow="Continuing education"
      title="Professional Development & Continuing Learning"
      intro="Scientific computing and genomic research evolve continuously. Alongside formal academic training, I develop new capabilities through structured courses, specialist programs, professional training and direct application in research projects."
      actions={<><a className="button button-primary" href="#record">View learning record</a><a className="button button-secondary" href="/skills-specializations">Explore expertise</a></>}
      aside={<div className="learning-orbit" aria-label="Learn, apply, build and share"><span>Learn</span><span>Apply</span><span>Build</span><span>Share</span></div>}
    />

    <section className="section page-shell">
      <SectionHeading eyebrow="Learning trajectory" title="Knowledge becomes capability through application." intro="The record shows a progression from scientific and command-line foundations to data science, scalable computing and applied AI." />
      <div className="learning-path">
        <div><strong>01</strong><h3>Scientific foundations</h3><p>Genetics, epigenetics and stem-cell biology.</p></div><i aria-hidden="true">→</i>
        <div><strong>02</strong><h3>Computational foundations</h3><p>Linux, Bash, Python and R.</p></div><i aria-hidden="true">→</i>
        <div><strong>03</strong><h3>Data-driven research</h3><p>Statistics, data science, machine learning and reproducible analysis.</p></div><i aria-hidden="true">→</i>
        <div><strong>04</strong><h3>Current development</h3><p>Applied AI, LLM workflows and scientific software.</p></div>
      </div>
    </section>

    <section className="section alternate-section" id="record">
      <div className="page-shell">
        <SectionHeading eyebrow="Documented learning record" title="Courses, specialist training and professional programs." intro="Entries are consolidated from CV records, earlier professional profiles and course records." />
        <div className="learning-table">
          {learning.map((item) => <article key={`${item.year}-${item.title}`}>
            <div><span>{item.year}</span><small>{item.area}</small></div>
            <div><h3>{item.title}</h3><p>{item.provider}</p></div>
            <div><p>{item.application}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section page-shell">
      <SectionHeading eyebrow="Learning in practice" title="The emphasis is application, not credential accumulation." intro="Training is carried forward into research workflows, computational infrastructure, scientific interpretation and knowledge sharing." />
      <div className="capability-grid three-up">
        <article className="capability-card"><h3>Research workflows</h3><p>Python, R and Bash foundations became automated GWAS, NGS, harmonization, meta-analysis and post-GWAS pipelines.</p></article>
        <article className="capability-card"><h3>Scalable computing</h3><p>Command-line and data-science training developed into Linux, HPC, SLURM, cloud and containerized research systems.</p></article>
        <article className="capability-card"><h3>Applied AI</h3><p>Current learning is being applied to structured evidence extraction, provenance-aware automation, scientific software and human-reviewed LLM workflows.</p></article>
      </div>
    </section>

    <section className="contact-ribbon"><div className="page-shell"><div><p className="eyebrow light"><span />Connected practice</p><h2>Continuing education strengthens the research and computational work.</h2></div><div><a className="button button-light" href="/skills-specializations">View expertise</a><a className="button button-outline-light" href="/research">Research programs</a></div></div></section>
  </Site>;
}
