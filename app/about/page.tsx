import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { awards, education, experiences, professionalMemberships } from "../data";
import { PageHero, SectionHeading, Site } from "../components/SiteChrome";
import { SITE_BASE_PATH } from "../site-config";

export const metadata: Metadata = {
  title: "About Me | Jibin John, PhD",
  description: "The professional journey, scientific focus and technical background of Jibin John, a bioinformatician and computational biologist working across human genetics, GWAS, exome sequencing and post-GWAS analysis.",
};

type CareerInstitution = { name: string; href: string };

function CareerRoleHeader({ role, institutions }: { role: string; institutions: CareerInstitution[] }) {
  return <div className="career-role-header">
    <h3>{role}</h3>
    <div className="career-institution-names" aria-label="Official institution and company websites">
      {institutions.map((institution) => <a href={institution.href} key={`${institution.name}-${institution.href}`} target="_blank" rel="noreferrer" aria-label={`Visit the official ${institution.name} website`}>
        {institution.name}
      </a>)}
    </div>
  </div>;
}

const focusAreas = [
  {
    number: "01",
    title: "Human genetics & exome sequencing",
    copy: "Family-based and clinical-exome analysis from quality control and inheritance-aware prioritization to ACMG/AMP interpretation, HPO-guided gene prioritization and CNV review.",
    skills: ["Rare variants", "Whole-exome sequencing", "Variant interpretation"],
  },
  {
    number: "02",
    title: "GWAS & complex disease genetics",
    copy: "Large-scale association analysis, harmonization, meta-analysis and polygenic methods for investigating shared and distinct genetic architecture in complex traits and disorders.",
    skills: ["GWAS", "Meta-analysis", "Polygenic methods"],
  },
  {
    number: "03",
    title: "Post-GWAS & multi-omics analysis",
    copy: "Moving from association signals toward interpretable biology through LDSC, Genomic SEM, molecular-QTL analysis, Mendelian randomization and pathway-level evidence.",
    skills: ["LDSC", "Molecular QTLs", "Multi-omics"],
  },
  {
    number: "04",
    title: "Reproducible computing & applied AI",
    copy: "Building scalable Python, R and Bash workflows for Linux, HPC and cloud environments while developing responsible machine-learning and LLM-assisted analysis practices.",
    skills: ["Python & R", "HPC & cloud", "Applied AI/ML"],
  },
];

export default function AboutPage() {
  return <Site active="About Me">
    <div className="about-page">
    <PageHero
      eyebrow="Genetics · Bioinformatics · Computation"
      title="From genetic variation to reproducible biological insight."
      intro="I am a New York–based research scientist, bioinformatician and computational biologist with a PhD in Genetics and more than a decade of experience across human genetics and data-intensive biomedical research. My work spans family-based exome sequencing, complex-disease GWAS and post-GWAS analysis."
      actions={<div className="about-hero-actions">
        <nav className="about-hero-jump-nav" aria-label="Explore this page">
          <span className="about-hero-jump-label">Explore this page</span>
          <div className="about-hero-jump-links">
            <a href="#expertise">Scientific focus</a>
            <a href="#computational-path">Computational path</a>
            <a href="#journey">Professional journey</a>
            <a href="#education">Education &amp; certification</a>
            <a href="#awards">Awards &amp; fellowships</a>
            <a href="#memberships">Memberships</a>
            <a href="#service">Mentoring &amp; service</a>
          </div>
        </nav>
      </div>}
      aside={<div className="about-profile-card"><div className="about-profile-image"><Image src={`${SITE_BASE_PATH}/jibin-professional-portrait.png`} alt="Professional portrait of Jibin John" width={1254} height={1254} sizes="(max-width: 720px) 78vw, (max-width: 1100px) 42vw, 420px" /></div><div><p>Professional profile</p><strong>Jibin John, PhD</strong><span>Research Scientist · Bioinformatician · Computational Biologist</span><ul><li>Human genetics</li><li>GWAS &amp; post-GWAS</li><li>Multi-omics</li><li>Scientific computing</li></ul></div></div>}
    />

    <section className="about-story-wrap">
      <div className="section page-shell about-story-section">
        <div className="about-story-heading">
          <p className="eyebrow"><span />Professional biography</p>
          <h2>I translate genetic and multi-omics data into clear, reproducible evidence.</h2>
          <aside className="about-principle"><span>Working principle</span><blockquote>From raw variants to biological interpretation, every step should be traceable, statistically defensible and reproducible.</blockquote><small>Quality control · analysis · interpretation</small></aside>
        </div>
        <div className="about-story-copy">
          <p>I frame biological questions, develop the computational approaches needed to test them, and interpret the evidence in biological context. That has meant building exome-analysis capability in Delhi; clinical-exome, Nanopore, microbial and pathogen-genomics workflows at a national genomic core in Hyderabad; variant-interpretation and biomedical knowledge-graph systems in Bengaluru; family-based GWAS in Montreal; and population-scale statistical genetics in New York.</p>
          <p>My scientific training began in biotechnology and culminated in a PhD in Genetics at the University of Delhi, where I characterized rare and ultra-rare exonic variants in multiplex families affected by schizophrenia. This work established my foundation in human genetics and complex-disease biology and in the computational analysis of whole-exome sequencing data, including family-based and segregation analysis, variant prioritization and pathway-level interpretation.</p>
          <p>I subsequently expanded into common-variant and population-scale statistical genetics, including genome-wide association studies (GWAS), meta-analysis, polygenic risk scoring, genetic correlation, molecular-QTL analysis, Mendelian randomization, genomic structural equation modeling (Genomic SEM) and multi-omics integration. My current work applies these approaches to large-scale genomic, proteomic, imaging and phenotypic datasets analyzed in Linux, high-performance computing (HPC) and cloud environments.</p>
          <p>My sequencing experience spans diverse short- and long-read applications, including whole-exome and whole-genome sequencing, bulk and single-cell RNA-seq, ChIP-seq, ATAC-seq, microbiome and metagenomic analysis, and prokaryotic, eukaryotic and viral genomics. This experience also includes Oxford Nanopore–based long-read sequencing workflows. I have worked across the analytical lifecycle—from raw-read quality control and preprocessing through alignment, reference mapping or de novo assembly, variant calling or transcript quantification, functional annotation, downstream statistical analysis and biological interpretation.</p>
          <p>I thrive in hands-on, collaborative roles in which biological questions must be translated into well-defined computational plans. I design reproducible workflows, apply rigorous quality control, select statistically defensible methods and communicate both findings and their limitations to multidisciplinary teams. I am also developing applied AI and machine-learning capabilities intended to complement—rather than replace—rigorous scientific analysis.</p>
          <div className="about-domain-rail" aria-label="Scientific domains"><span>Human genetics</span><span>Exome sequencing</span><span>Complex disease</span><span>GWAS</span><span>Post-GWAS</span><span>Multi-omics</span></div>
        </div>
      </div>
    </section>

    <section className="about-focus-section" id="expertise"><div className="page-shell"><SectionHeading eyebrow="Scientific & technical focus" title="A toolkit built around the full genetic-analysis lifecycle." intro="From sequencing and GWAS quality control through statistical modeling, post-GWAS interpretation and reproducible delivery, the emphasis is always on dependable, biologically meaningful analysis." /><div className="about-focus-grid">{focusAreas.map((area) => <article key={area.title}><span>{area.number}</span><h3>{area.title}</h3><p>{area.copy}</p><ul className="about-focus-tags">{area.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div></div></section>

    <section className="about-path-section" id="computational-path" aria-labelledby="computational-path-title">
      <div className="page-shell about-path-grid">
        <ol className="about-path-marker" aria-label="Progression from biotechnology to computational biology"><li><span>01</span><div><strong>Biotechnology</strong><small>Biological foundation</small></div></li><li><span>02</span><div><strong>PhD in Genetics</strong><small>Human disease genomics</small></div></li><li><span>03</span><div><strong>Linux &amp; programming</strong><small>Self-directed learning</small></div></li><li><span>04</span><div><strong>Computational biology</strong><small>Data-driven research</small></div></li></ol>
        <div><p className="eyebrow"><span />My path into computation</p><h2 id="computational-path-title">I learned computation by solving real genetics problems.</h2><p>I entered my PhD in Genetics from a biotechnology background without formal training in computer science or programming; Linux itself was unfamiliar to me. As the research became increasingly data-intensive, I independently learned Linux, Bash scripting, Python and R and used them to build reproducible genomic-analysis workflows. That transition gave me both strong biological grounding and a practical understanding of how computational methods should serve the scientific question.</p><div className="about-path-tools"><span>Linux</span><span>Bash</span><span>Python</span><span>R</span><span>HPC</span><span>Cloud</span></div></div>
      </div>
    </section>

    <section className="section timeline-section" id="journey"><div className="page-shell"><SectionHeading eyebrow="Professional journey" title="Roles that expanded my scope from human genetics to large-scale computational analysis." intro="Institution names link to their official websites. Each entry gives a concise overview, with expandable details covering projects, methods, responsibilities, training and scientific contributions." /><div className="timeline">{experiences.map((job) => <article className="timeline-item" key={`${job.period}-${job.organization}`}><div className="timeline-date"><span>{job.period}</span><small>{job.location}</small></div><div className="timeline-body"><CareerRoleHeader role={job.role} institutions={job.institutions} /><div className="career-summary">{job.points.map((point) => <p key={point}>{point}</p>)}</div><details className="career-details"><summary><span>View full responsibilities &amp; projects</span><i aria-hidden="true">+</i></summary><div className="career-detail-grid">{job.detailSections.map((section) => <section key={section.title}><h5>{section.title}</h5><ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}</div></details></div></article>)}</div></div></section>

    <section className="section page-shell education-section" id="education"><SectionHeading eyebrow="Education" title="Academic training and professional certification that anchor computational work in biology and genetics." intro="Each qualification contributed a different layer: biotechnology, human genetics, disease-focused research, data science and the interpretation of genomic evidence." /><div className="education-followup"><Link href="/continuing-education">Explore continuing education <span aria-hidden="true">→</span></Link></div><div className="education-ledger">{education.map((item) => <article key={item.degree}><div className="education-year">{item.year}</div><div className="education-copy"><h3>{item.degree}</h3><div className="education-institution-links" aria-label="Official institution websites">{item.institutions.map((institution) => <a href={institution.href} key={institution.name} target="_blank" rel="noreferrer" aria-label={`Visit the official ${institution.name} website`}>{institution.name}</a>)}</div><p>{item.detail}</p></div></article>)}</div></section>

    <section className="section awards-section" id="awards"><div className="page-shell"><SectionHeading eyebrow="Awards & fellowships" title="Recognition supporting research and international training." /><div className="award-grid">{awards.map((award) => <article key={`${award.year}-${award.title}`}><span>{award.year}</span><div><h3>{award.title}</h3><p>{award.organization}</p></div></article>)}</div></div></section>

    <section className="membership-section" id="memberships"><div className="page-shell"><SectionHeading eyebrow="Professional memberships" title="Connected to professional communities in human and psychiatric genetics." intro="Memberships that reflect my continuing engagement with genetics research, scientific standards and the broader professional community." /><div className="membership-grid">{professionalMemberships.map((membership) => <article key={membership.acronym}><span>{membership.acronym}</span><div><h3>{membership.name}</h3><p>{membership.area}</p></div></article>)}</div></div></section>

    <section className="section page-shell about-service-section" id="service"><SectionHeading eyebrow="Mentoring, teaching & service" title="Technical knowledge becomes more valuable when it can be shared clearly." /><div className="about-service-grid"><article><span>01</span><h3>Mentoring</h3><p>Supported junior scientists, medical trainees, graduate students and undergraduate interns in statistical genetics, whole-exome analysis, reproducible computing and interpretation.</p></article><article><span>02</span><h3>Teaching & workshops</h3><p>Delivered or supported training in clinical-exome analysis, RNA-seq, alignment, variant calling, prioritization, interpretation and reproducible genomic workflows.</p></article><article><span>03</span><h3>Peer review</h3><p>Verified reviewer activity includes Psychiatry Research, Translational Psychiatry and Journal of Neural Transmission.</p></article></div><div className="about-record-links"><div><strong>Languages</strong><span>English · Hindi · Malayalam</span></div><div><strong>Complete records</strong><span><Link href="/publications">Publications</Link> · <Link href="/conferences">Conferences</Link> · <Link href="/continuing-education">Continuing Education</Link></span></div></div></section>

    </div>
  </Site>;
}
