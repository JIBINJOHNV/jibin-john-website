import { conferencePublications, journalArticles, researchPrograms } from "./data";
import Image from "next/image";
import Link from "next/link";
import { CapabilityGroups } from "./components/CapabilityGroups";
import { ProcessJourney, type ProcessStep } from "./components/ProcessJourney";
import { SectionHeading, Site } from "./components/SiteChrome";
import { SITE_BASE_PATH } from "./site-config";

const capabilities = [
  {
    title: "GWAS Analysis",
    detail: "Phenotype and covariate design · sample, relatedness and ancestry QC · variant and imputation QC · association modeling · inflation diagnostics · summary-statistic QC, harmonization and visualization · cohort meta-analysis",
    references: [
      { label: "Truong et al., 2022", href: "https://doi.org/10.1002/cpz1.603" },
    ],
  },
  {
    title: "Post-GWAS Analysis",
    detail: "LD clumping and locus definition · conditional and joint analysis · fine-mapping and credible sets · variant annotation · gene and gene-set analysis · TWAS · colocalization · Mendelian randomization",
    references: [
      { label: "Patasova et al., 2026", href: "https://doi.org/10.1002/gepi.70037" },
      { label: "Rasooly et al., 2022", href: "https://doi.org/10.1002/cpz1.627" },
    ],
  },
  {
    title: "Clinical Genomics & Variant Interpretation",
    detail: "Analytical-quality review · population, disease and functional annotation · phenotype- and inheritance-aware prioritization · segregation evidence · ACMG/AMP classification · genotype–phenotype synthesis · periodic reinterpretation",
    references: [
      { label: "Harrison et al., 2019", href: "https://doi.org/10.1002/cphg.93" },
      { label: "Mighton & Lerner-Ellis, 2022", href: "https://doi.org/10.1002/gcc.23048" },
    ],
  },
  {
    title: "Exome Sequencing Analysis",
    detail: "FASTQ and target-coverage QC · reference alignment · duplicate handling · base-quality recalibration · germline variant calling · joint genotyping · call-set filtering and QC · functional annotation",
    references: [
      { label: "Erzurumluoglu et al., 2015", href: "https://doi.org/10.1155/2015/923491" },
      { label: "Hintzsche et al., 2016", href: "https://doi.org/10.1155/2016/7983236" },
    ],
  },
  {
    title: "Whole-Genome Sequencing Analysis",
    detail: "Read and coverage QC · reference alignment · germline SNV and indel calling · joint genotyping · copy-number and structural-variant analysis · call-set QC · coding, regulatory and noncoding annotation",
    references: [
      { label: "Zverinova & Guryev, 2021", href: "https://doi.org/10.1002/humu.24311" },
    ],
  },
  {
    title: "Rare-Variant Association Analysis",
    detail: "Analysis-unit definition · frequency and functional masks · single-variant tests · collapsing and burden tests · variance-component and omnibus tests · ancestry, relatedness and covariates · calibration, sensitivity analysis and multiplicity control",
    references: [
      { label: "Rajabli & Kunkle, 2023", href: "https://doi.org/10.1002/cpz1.931" },
    ],
  },
  {
    title: "Statistical Genetics & Multi-Trait Analysis",
    detail: "SNP and partitioned heritability · genetic covariance and correlation · LD score regression · genomic SEM and genomic principal components · cross-trait and pleiotropy analysis · multi-trait methods · polygenic prediction",
    references: [
      { label: "Srivastava et al., 2023", href: "https://doi.org/10.1002/cpz1.734" },
      { label: "Balding & Speed, 2025", href: "https://doi.org/10.1111/ahg.12606" },
    ],
  },
  {
    title: "QTL & Molecular-Trait Analysis",
    detail: "Genotype and molecular-phenotype QC · normalization and covariate correction · cis- and trans-eQTL, sQTL and pQTL mapping · multiple-testing control · replication · tissue and cell-context specificity · disease-GWAS integration",
    references: [
      { label: "Olayinka et al., 2022", href: "https://doi.org/10.1002/cpz1.426" },
    ],
  },
  {
    title: "Bulk RNA-seq Analysis",
    detail: "Read QC · alignment or pseudoalignment · gene and transcript quantification · low-count filtering and normalization · exploratory and batch assessment · design-matrix modeling · differential expression and splicing · gene-set and co-expression analysis",
    references: [
      { label: "Tzec-Interián et al., 2025", href: "https://doi.org/10.1002/qub2.78" },
    ],
  },
  {
    title: "Single-Cell RNA-seq Analysis",
    detail: "Demultiplexing and count matrices · cell and feature QC · ambient-RNA and doublet assessment · normalization and highly variable features · batch integration · neighborhood graphs and clustering · cell annotation · pseudobulk differential-state and trajectory analysis",
    references: [
      { label: "Ellis et al., 2021", href: "https://doi.org/10.1002/wics.1558" },
      { label: "Tzec-Interián et al., 2025", href: "https://doi.org/10.1002/qub2.78" },
    ],
  },
  {
    title: "Functional Genomics & Epigenomics",
    detail: "Assay-specific QC and alignment · accessibility or histone-mark peak analysis · methylation quality control and differential regions · signal normalization · regulatory-element annotation · enhancer–promoter links · tissue and cell-type enrichment",
    references: [
      { label: "Stikker et al., 2023", href: "https://doi.org/10.1111/all.15666" },
      { label: "Knight, 2012", href: "https://doi.org/10.1111/j.1365-2796.2011.02508.x" },
    ],
  },
  {
    title: "Proteomics & Multi-Omics Integration",
    detail: "Peptide and protein identification or quantification · quality control · normalization · missingness and batch assessment · differential abundance · pathway and network analysis · cross-platform harmonization · latent-factor and supervised multi-omics integration",
    references: [
      { label: "Juan & Huang, 2023", href: "https://doi.org/10.1002/wcms.1658" },
      { label: "Schumann et al., 2024", href: "https://doi.org/10.1002/pmic.202400100" },
    ],
  },
  {
    title: "Bacterial & Prokaryotic Genomics",
    detail: "Read QC and contamination checks · de novo or reference-guided analysis · assembly quality and completeness · taxonomic confirmation · genome annotation · comparative and pan-genome analysis · AMR and virulence screening · phylogenomics",
    references: [
      { label: "Wee & Yap, 2021", href: "https://doi.org/10.1002/cpz1.242" },
    ],
  },
  {
    title: "Metagenomics & Microbiome Analysis",
    detail: "Study-design and contamination review · sequence and host-read QC · ASV-based amplicon profiling or read-/assembly-based shotgun analysis · taxonomic and functional profiling · alpha and beta diversity · compositional differential-abundance models · covariate-aware interpretation",
    references: [
      { label: "Bai et al., 2025", href: "https://doi.org/10.1002/imt2.70001" },
      { label: "Stothart et al., 2022", href: "https://doi.org/10.1111/1755-0998.13713" },
    ],
  },
  {
    title: "Biostatistics & High-Dimensional Data Analysis",
    detail: "Question and study-design review · data auditing · regression and generalized linear models · covariate and interaction modeling · model diagnostics and assumptions · multiple-testing control · effect sizes and uncertainty · sensitivity analysis · scientific visualization",
    references: [
      { label: "Dwivedi & Shukla, 2019", href: "https://doi.org/10.1002/cnr2.1211" },
      { label: "Liu et al., 2023", href: "https://doi.org/10.1111/sjos.12695" },
    ],
  },
  {
    title: "Reproducible Scientific Computing, HPC & Cloud",
    detail: "Versioned code, data and references · portable environments and containers · declarative, configuration-driven workflows · validation and testing · checkpoints, logs and provenance · SLURM and parallel execution · cloud scaling · documentation",
    references: [
      { label: "Perez-Riverol & Moreno, 2019", href: "https://doi.org/10.1002/pmic.201900147" },
      { label: "Hakimzadeh et al., 2023", href: "https://doi.org/10.1111/1755-0998.13847" },
    ],
  },
  {
    title: "Applied AI & Machine Learning for Biological Data",
    detail: "Biological question and endpoint definition · leakage-safe preprocessing and feature selection · baseline and tuned models · nested cross-validation · class-imbalance handling · discrimination and calibration · external validation · interpretation · selectively validated LLM/API automation",
    references: [
      { label: "Coroller et al., 2023", href: "https://doi.org/10.1002/cpt.3105" },
      { label: "An et al., 2023", href: "https://doi.org/10.1002/mas.21849" },
    ],
  },
];

const capabilityGroups = [
  {
    id: "genetic-epidemiology",
    label: "Genetic Epidemiology & Statistical Genetics",
    kicker: "Population and molecular-trait genetics",
    intro: "Association discovery, downstream interpretation and shared genetic architecture.",
    capabilities: [capabilities[0], capabilities[1], capabilities[6], capabilities[7]],
    links: [
      { label: "Related research", href: "/research" },
      { label: "Relevant publications", href: "/publications" },
    ],
  },
  {
    id: "clinical-genomics",
    label: "Clinical Genomics",
    kicker: "Phenotype-aware variant interpretation",
    intro: "Clinically informed germline variant assessment, evidence review and genotype–phenotype synthesis.",
    capabilities: [capabilities[2]],
    links: [
      { label: "Related research", href: "/research" },
      { label: "Relevant publications", href: "/publications" },
    ],
  },
  {
    id: "sequencing-rare-variant-genomics",
    label: "Sequencing & Rare-Variant Genomics",
    kicker: "From sequence data to interpretable variation",
    intro: "Exome and genome analysis spanning variant discovery, rare-variant testing and biological interpretation.",
    capabilities: [capabilities[3], capabilities[4], capabilities[5]],
    links: [
      { label: "Related research", href: "/research" },
      { label: "Relevant publications", href: "/publications" },
    ],
  },
  {
    id: "transcriptomics-multi-omics",
    label: "Transcriptomics & Multi-Omics",
    kicker: "Molecular phenotypes and regulatory biology",
    intro: "Bulk, single-cell, epigenomic and proteomic data analyzed in biological context.",
    capabilities: [capabilities[8], capabilities[9], capabilities[10], capabilities[11]],
    links: [
      { label: "Related research", href: "/research" },
      { label: "Methods & tools", href: "/skills-specializations" },
    ],
  },
  {
    id: "microbial-genomics-microbiome",
    label: "Microbial Genomics & Microbiome",
    kicker: "Microbial genomes and communities",
    intro: "Genome-resolved and community-level analysis with contamination-aware interpretation.",
    capabilities: [capabilities[12], capabilities[13]],
    links: [
      { label: "Related research", href: "/research" },
      { label: "Relevant publications", href: "/publications" },
    ],
  },
  {
    id: "data-science-infrastructure",
    label: "Data Science & Computational Infrastructure",
    kicker: "Statistics, automation and scalable delivery",
    intro: "Reproducible analysis systems for high-dimensional biological data and applied AI.",
    capabilities: [capabilities[14], capabilities[15], capabilities[16]],
    links: [
      { label: "Methods & tools", href: "/skills-specializations" },
      { label: "Related research", href: "/research" },
    ],
  },
];

const process: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Question, design & data",
    description: "Define the scientific question, study design, data types, samples, measurements, comparisons and intended outputs; review provenance, analytical scope, available metadata and feasibility before starting.",
    tools: ["Study design", "Data provenance", "Analytical scope"],
    icon: "understand",
  },
  {
    number: "02",
    title: "Validate",
    subtitle: "Quality, harmonization & assumptions",
    description: "Verify sample identities and metadata; assess data quality, missingness, contamination, technical artifacts, batch effects and outliers; harmonize formats and features, and evaluate assumptions and potential sources of bias.",
    tools: ["Quality control", "Harmonization", "Bias assessment"],
    icon: "validate",
  },
  {
    number: "03",
    title: "Analyze",
    subtitle: "Methods, uncertainty & scale",
    description: "Select methods appropriate to the question and data—from sequence processing and molecular quantification to statistical modeling, clustering, prediction and multi-omics integration—while preserving uncertainty and scaling computation responsibly.",
    tools: ["Python", "R", "HPC", "Cloud"],
    icon: "analyze",
  },
  {
    number: "04",
    title: "Interpret",
    subtitle: "Evidence, context & limitations",
    description: "Integrate analytical results with genetic, molecular, cellular, clinical or ecological evidence; evaluate robustness, replication and alternative explanations; and distinguish supported conclusions from unresolved hypotheses.",
    tools: ["Evidence integration", "Sensitivity", "Replication"],
    icon: "interpret",
  },
  {
    number: "05",
    title: "Deliver",
    subtitle: "Reproducible results & downstream use",
    description: "Deliver reusable code, versioned workflows, traceable QC, analysis-ready data, result tables and clear figures. Document assumptions and limitations so the work can be reproduced, interpretations evaluated and outputs reused in downstream research.",
    tools: ["Git", "Docker", "Interpretation", "Downstream reuse"],
    icon: "deliver",
  },
];

const specializations = [
  "Statistical Genetics",
  "GWAS & Post-GWAS Analysis",
  "Exome Sequencing & Rare-Variant Analysis",
  "Functional Genomics",
  "Clinical Genomics",
  "Multi-Omics Analysis",
  "Applied AI & Machine Learning",
  "Reproducible Scientific Computing",
];

const activePreprintCount = 4;

export default function Home() {
  return (
    <Site>
      <section className="hero home-hero page-shell">
        <div className="hero-copy">
          <div className="hero-identity">
            <strong>Jibin John, PhD</strong>
            <span>Bioinformatician · Computational Biologist</span>
            <small className="hero-affiliation">Research Scientist · <a href="https://feinstein.northwell.edu/" target="_blank" rel="noreferrer" aria-label="Visit The Feinstein Institutes for Medical Research, Northwell Health website (opens in a new tab)">The Feinstein Institutes for Medical Research, Northwell Health <span aria-hidden="true">↗</span></a></small>
          </div>
          <h1>I find the biology hiding in <em>population-scale genetic data.</em></h1>
          <p className="hero-lead">Research Scientist at The Feinstein Institutes for Medical Research, Northwell Health. I build statistical-genetics workflows for psychiatric, cognitive and imaging genomics—from approximately 4,000 brain-imaging phenotypes in UK Biobank to 4,719 circulating proteins tested against psychiatric and cognitive traits.</p>
          <ul className="hero-specializations" aria-label="Areas of specialization">
            {specializations.map((specialization) => <li key={specialization}>{specialization}</li>)}
          </ul>
          <div className="hero-actions"><Link className="button button-primary" href="/about">About me <span aria-hidden="true">→</span></Link><Link className="button button-secondary" href="/publications">Publications</Link><Link className="button button-secondary" href="/skills-specializations">Expertise</Link></div>
          <div className="profile-links" aria-label="Professional profiles">
            <a href="https://scholar.google.com/citations?user=vBDV0QkAAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="View Jibin John's Google Scholar profile (opens in a new tab)">Google Scholar ↗</a>
            <a href="https://pubmed.ncbi.nlm.nih.gov/?term=jibin+john+" target="_blank" rel="noreferrer" aria-label="View Jibin John's publications on PubMed (opens in a new tab)">PubMed ↗</a>
            <a href="https://www.linkedin.com/in/jibin-john-46b18a171/" target="_blank" rel="noreferrer" aria-label="View Jibin John's LinkedIn profile (opens in a new tab)">LinkedIn ↗</a>
            <a href="https://github.com/JIBINJOHNV" target="_blank" rel="noreferrer" aria-label="View Jibin John's GitHub profile (opens in a new tab)">GitHub ↗</a>
          </div>
        </div>
        <div className="portrait-wrap home-portrait">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="portrait-card"><Image src={`${SITE_BASE_PATH}/jibin-professional-portrait.png`} alt="Professional portrait of Jibin John" width={1254} height={1254} sizes="(max-width: 720px) 78vw, (max-width: 1100px) 42vw, 520px" priority /></div>
          <div className="portrait-note home-tech-note"><span className="tech-note-mark">{`</>`}</span><span><strong>Scientific computing</strong><small>Python · R · Linux · HPC · Cloud</small></span></div>
          <div className="home-focus-chip">Genomics + Data + Applied AI</div>
        </div>
      </section>

      <section className="credential-bar" aria-label="Professional summary">
        <div className="credential-item"><strong>PhD in Genetics</strong><span>University of Delhi · 2017</span></div>
        <Link className="credential-item credential-link" href="/publications" aria-label={`View all ${journalArticles.length} peer-reviewed articles`}><strong>{journalArticles.length} peer-reviewed articles</strong><span>JAMA Psychiatry · Biological Psychiatry</span></Link>
        <div className="credential-item"><strong>Since 2011</strong><span>Human genetics & genomics</span></div>
        <div className="credential-item"><strong>UK Biobank · deCODE · PGC</strong><span>Population-scale cohorts</span></div>
      </section>

      <section className="section page-shell" id="expertise">
        <SectionHeading eyebrow="Core capabilities" title="What I actually do with a dataset." intro="Six connected areas, each grounded in workflows I have run on real studies—from study design and primary processing to statistical analysis, interpretation and reproducible delivery." />
        <CapabilityGroups groups={capabilityGroups} />
      </section>

      <section className="home-process-section"><div className="page-shell">
        <div className="home-process-intro">
          <p className="eyebrow light"><span />How I work</p>
          <div className="home-process-lead">
            <h2>A reproducible path from raw data to biological insight.</h2>
            <p>Strong analysis is never a single method. It is a connected chain of decisions—linking the scientific question to validated data, statistically appropriate models, biological interpretation and transparent delivery. Every decision, assumption and limitation stays traceable from raw files to the final figure.</p>
          </div>
        </div>
        <ProcessJourney steps={process} />
      </div></section>

      <section className="section page-shell">
        <SectionHeading eyebrow="Selected scientific work" title="Experience with complex, high-dimensional biological data." intro="Representative programs show the combination of statistical genetics, biological interpretation and scalable computing used across my work." />
        <div className="home-work-grid">
          {researchPrograms.slice(0, 6).map((project, index) => (
            <article key={project.title}>
              <span>0{index + 1}</span>
              <p>{project.metric}</p>
              <h3>{project.title}</h3>
              <div className="work-card-rule" />
              <small className="work-card-copy">{project.copy}</small>
              {project.publication && (
                <a
                  className="work-journal"
                  href={project.publication.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open the ${project.publication.venue} record for ${project.title}`}
                >
                  <span className={`work-journal-mark ${project.publication.brand}`} aria-hidden="true">
                    {project.publication.venue}
                  </span>
                  <span className="work-journal-meta">
                    <strong>Research output</strong>
                    <small>{project.publication.impact}</small>
                  </span>
                  <i aria-hidden="true">↗</i>
                </a>
              )}
            </article>
          ))}
        </div>
        <div className="center-action"><Link className="button button-primary" href="/research">Explore research experience →</Link></div>
      </section>

      <section className="home-about-band"><div className="page-shell home-about-grid">
        <div><p className="eyebrow"><span />About me</p><h2>A hands-on computational scientist with a genetics foundation.</h2></div>
        <div><p>My work has moved from family-based rare-variant research to population-scale GWAS, multi-omics, clinical-exome analysis and scientific data systems. Across these settings, I focus on dependable analysis, reproducible code and evidence that collaborators can interpret.</p><Link href="/about">Read my professional journey <span aria-hidden="true">→</span></Link></div>
      </div></section>

      <section className="section page-shell home-scholarship">
        <SectionHeading eyebrow="Scientific record" title="Published research and conference contributions." intro={`${journalArticles.length} peer-reviewed articles, ${activePreprintCount} active preprints and ${conferencePublications.length} published conference abstracts are organized in the complete record. Superseded preprints remain labelled in the full publication history.`} />
        <div className="publication-list">{journalArticles.slice(0, 3).map((publication) => <a className="publication" href={publication.href} target="_blank" rel="noreferrer" key={publication.title}><div className="publication-meta"><span>{publication.year}</span><span>{publication.venue}</span></div><div><h3>{publication.title}</h3><p>{publication.authors}</p></div><span className="publication-arrow">↗</span></a>)}</div>
        <div className="center-action dual-action"><Link className="button button-primary" href="/publications">View publications</Link><Link className="button button-secondary" href="/conferences">Conference record</Link></div>
      </section>

      <section className="contact-section home-project-contact"><div className="contact-orbit" /><div className="page-shell contact-inner"><p className="eyebrow light"><span />Roles & collaborations</p><h2>Open to consequential scientific work.</h2><p>I am open to research-scientist and computational-biology roles, and to collaborations in psychiatric genetics, statistical genetics and reproducible genomic analysis.</p><div className="hero-actions contact-actions"><Link className="button button-light" href="/contact">Contact details →</Link></div></div></section>
    </Site>
  );
}
