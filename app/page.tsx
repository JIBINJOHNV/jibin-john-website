import { conferencePublications, journalArticles, preprints, researchPrograms } from "./data";
import { SectionHeading, Site } from "./components/SiteChrome";

const capabilities = [
  {
    title: "GWAS Analysis",
    detail: "Phenotype and covariate design · sample, relatedness and ancestry QC · variant and imputation QC · association modelling · inflation diagnostics · summary-statistic QC, harmonization and visualization · cohort meta-analysis",
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
    detail: "Read QC · alignment or pseudoalignment · gene and transcript quantification · low-count filtering and normalization · exploratory and batch assessment · design-matrix modelling · differential expression and splicing · gene-set and co-expression analysis",
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
    detail: "Question and study-design review · data auditing · regression and generalized linear models · covariate and interaction modelling · model diagnostics and assumptions · multiple-testing control · effect sizes and uncertainty · sensitivity analysis · scientific visualization",
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
    intro: "Bulk, single-cell, epigenomic and proteomic data analysed in biological context.",
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

const process = [
  ["01", "Understand", "Question & data"],
  ["02", "Validate", "QC & assumptions"],
  ["03", "Analyse", "Methods & scale"],
  ["04", "Interpret", "Biological meaning"],
  ["05", "Deliver", "Reproducible outputs"],
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
          <h1>Decoding <em>biological complexity.</em></h1>
          <p className="hero-lead">I transform high-dimensional genomic and multi-omics data into reliable, interpretable insights that support scientific discovery.</p>
          <ul className="hero-specializations" aria-label="Areas of specialization">
            {specializations.map((specialization) => <li key={specialization}>{specialization}</li>)}
          </ul>
          <div className="hero-actions"><a className="button button-primary" href="/about">About me <span aria-hidden="true">→</span></a><a className="button button-secondary" href="/publications">Publications</a><a className="button button-secondary" href="/skills-specializations">Technical skills</a></div>
          <div className="profile-links" aria-label="Professional profiles">
            <a href="https://scholar.google.com/citations?user=vBDV0QkAAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="View Jibin John's Google Scholar profile (opens in a new tab)"><span className="profile-logo scholar-logo">GS</span>Google Scholar ↗</a>
            <a href="https://pubmed.ncbi.nlm.nih.gov/?term=jibin+john+" target="_blank" rel="noreferrer" aria-label="View Jibin John's publications on PubMed (opens in a new tab)"><span className="profile-logo pubmed-logo">P</span>PubMed ↗</a>
            <a href="https://www.linkedin.com/in/jibin-john-46b18a171/" target="_blank" rel="noreferrer" aria-label="View Jibin John's LinkedIn profile (opens in a new tab)"><span className="profile-logo linkedin-logo">in</span>LinkedIn ↗</a>
          </div>
        </div>
        <div className="portrait-wrap home-portrait">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="portrait-card"><img src="/jibin-professional-portrait.png" alt="Professional portrait of Jibin John" /></div>
          <div className="portrait-note home-tech-note"><span className="tech-note-mark">{`</>`}</span><span><strong>Scientific computing</strong><small>Python · R · Linux · HPC · Cloud</small></span></div>
          <div className="home-focus-chip">Genomics + Data + Applied AI</div>
        </div>
      </section>

      <section className="credential-bar" aria-label="Professional summary">
        <div className="credential-item"><strong>PhD in Genetics</strong><span>Scientific foundation</span></div>
        <div className="credential-item"><strong>10+ years</strong><span>Bioinformatics & genomics</span></div>
        <a className="credential-item credential-link" href="/publications" aria-label={`View all ${journalArticles.length + preprints.length} publications`}><strong>{journalArticles.length + preprints.length} publications</strong><span>Articles & preprints</span></a>
        <div className="credential-item"><strong>HPC-scale computing</strong><span>HPC · cloud · parallel workflows</span></div>
      </section>

      <section className="section page-shell" id="expertise">
        <SectionHeading eyebrow="Core capabilities" title="Evidence-informed analysis across the biological-data lifecycle." intro="Each area follows a distinct, literature-grounded workflow—from study design and primary processing to statistical analysis, interpretation and reproducible computational delivery." />
        <nav className="capability-jump-nav" aria-label="Jump to a capability group">
          {capabilityGroups.map((group) => <a href={`#${group.id}`} key={group.id}>{group.label}</a>)}
        </nav>
        <div className="capability-groups">
          {capabilityGroups.map((group, groupIndex) => (
            <details className={`capability-group capability-group-${groupIndex + 1}`} id={group.id} key={group.id}>
              <summary className="capability-group-heading">
                <div>
                  <span aria-hidden="true">{String(groupIndex + 1).padStart(2, "0")}</span>
                  <p>{group.kicker}</p>
                  <h3>{group.label}</h3>
                </div>
                <p>{group.capabilities.map((capability) => capability.title).join(", ")}</p>
              </summary>
              <ol className="home-capability-list">
                {group.capabilities.map((capability) => (
                  <li key={capability.title}>
                    <strong>{capability.title}</strong>
                    <p>{capability.detail}</p>
                  </li>
                ))}
              </ol>
            </details>
          ))}
        </div>
        <div className="capability-cta">
          <div>
            <p>Project conversations</p>
            <h3>Have a complex biological dataset or defined analysis question?</h3>
          </div>
          <a className="button button-light" href="/contact">Discuss a project <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="home-process-section"><div className="page-shell">
        <div className="home-process-intro"><p className="eyebrow light"><span />How I work</p><h2>A reproducible path from raw data to a useful result.</h2><p>Strong analysis is not only a method. It is the connected process of data validation, appropriate modelling, biological interpretation and transparent delivery.</p></div>
        <div className="home-process" role="list" aria-label="Scientific data analysis workflow">{process.map((step, index) => <div className="home-process-step" role="listitem" key={step[1]}><span>{step[0]}</span><strong>{step[1]}</strong><small>{step[2]}</small>{index < process.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div>
      </div></section>

      <section className="section page-shell">
        <SectionHeading eyebrow="Selected scientific work" title="Experience with complex, high-dimensional biological data." intro="Representative programs show the combination of statistical genetics, biological interpretation and scalable computing used across my work." />
        <div className="home-work-grid">
          {researchPrograms.slice(0, 5).map((project, index) => (
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
        <div className="center-action"><a className="button button-primary" href="/research">Explore research experience →</a></div>
      </section>

      <section className="home-about-band"><div className="page-shell home-about-grid">
        <div><p className="eyebrow"><span />About me</p><h2>A hands-on computational scientist with a genetics foundation.</h2></div>
        <div><p>My work has moved from family-based rare-variant research to population-scale GWAS, multi-omics, clinical-exome analysis and scientific data systems. Across these settings, I focus on dependable analysis, reproducible code and evidence that collaborators can interpret.</p><a href="/about">Read my professional journey <span aria-hidden="true">→</span></a></div>
      </div></section>

      <section className="section page-shell home-scholarship">
        <SectionHeading eyebrow="Scientific record" title="Published research and conference contributions." intro={`${journalArticles.length} peer-reviewed articles, ${preprints.length} preprints and ${conferencePublications.length} published conference abstracts are organized in the complete record.`} />
        <div className="publication-list">{journalArticles.slice(0, 3).map((publication) => <a className="publication" href={publication.href} target="_blank" rel="noreferrer" key={publication.title}><div className="publication-meta"><span>{publication.year}</span><span>{publication.venue}</span></div><div><h3>{publication.title}</h3><p>{publication.authors}</p></div><span className="publication-arrow">↗</span></a>)}</div>
        <div className="center-action dual-action"><a className="button button-primary" href="/publications">View publications</a><a className="button button-secondary" href="/conferences">Conference record</a></div>
      </section>

      <section className="contact-section home-project-contact"><div className="contact-orbit" /><div className="page-shell contact-inner"><p className="eyebrow light"><span />Research & data projects</p><h2>Need rigorous support for complex data?</h2><p>I welcome conversations about clearly defined bioinformatics, computational biology, scientific data-analysis and applied AI/ML projects where reproducibility and careful interpretation matter.</p><div className="hero-actions contact-actions"><a className="button button-light" href="mailto:johnjibinv@gmail.com?subject=Bioinformatics%20or%20data%20project">Discuss a project →</a><a className="button button-outline-light" href="/contact">Contact details</a></div></div></section>
    </Site>
  );
}
