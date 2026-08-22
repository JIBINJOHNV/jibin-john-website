"use client";

import { useState } from "react";

type FoundationBlock = {
  label: string;
  text: string;
};

type FoundationArea = {
  code: string;
  title: string;
  summary: string;
  technologies: string[];
  blocks: FoundationBlock[];
};

const foundationAreas: FoundationArea[] = [
  {
    code: "LANG",
    title: "Programming Languages & Scripting",
    summary:
      "Scientific programming, workflow automation and structured-data processing across research environments.",
    technologies: ["Python", "R", "Bash", "SQL", "YAML", "JSON"],
    blocks: [
      {
        label: "Python",
        text: "Scientific pipeline development; structured and high-volume data processing; quality-control automation; statistical and machine-learning workflows; API integration; visualization; configuration-driven execution; testing and reproducible delivery.",
      },
      {
        label: "R",
        text: "Statistical analysis; genetic and genomic analysis; Bioconductor workflows; regression and multivariate modeling; multiple-testing correction; scientific visualization; publication-ready tables and figures.",
      },
      {
        label: "Bash",
        text: "Linux-based workflow automation; command-line data processing; orchestration of bioinformatics tools; file and job management; reproducible pipeline execution; SLURM job submission and monitoring.",
      },
      {
        label: "SQL",
        text: "Structured-data extraction; filtering; joins; aggregation; validation; summary reporting and integration of analytical datasets.",
      },
      {
        label: "Structured formats",
        text: "YAML and JSON configuration; CSV/TSV tabular data; VCF/BCF variant data; standardized metadata and manifest processing.",
      },
    ],
  },
  {
    code: "COMP",
    title: "Computing & Research Infrastructure",
    summary:
      "Scalable, resource-aware execution across Linux, HPC and cloud environments with reproducible delivery.",
    technologies: [
      "Linux",
      "Git",
      "Docker",
      "SLURM",
      "HPC",
      "Google Cloud Platform",
      "Amazon EC2",
      "Amazon S3",
    ],
    blocks: [
      {
        label: "Research computing",
        text: "Linux-based scientific environments; command-line analysis; dependency and environment management; parallel and distributed execution; checkpointed processing; resource-aware workflow design.",
      },
      {
        label: "HPC",
        text: "SLURM job orchestration; chromosome-, gene-, trait- and sample-level parallelization; memory- and CPU-aware scheduling; job arrays; logging; restartable analysis and large-scale scientific computation.",
      },
      {
        label: "Cloud computing",
        text: "Compute and storage workflows using Google Cloud Platform, Amazon EC2 and Amazon S3; movement and organization of large scientific datasets; scalable analysis environments and cloud-based reproducible delivery.",
      },
      {
        label: "Reproducibility",
        text: "Git-based version control; Docker containerization; configuration-driven workflows; validated inputs; standardized outputs; automated logging; provenance tracking and documented execution.",
      },
    ],
  },
  {
    code: "DATA",
    title: "Data Science & Statistical Computing",
    summary:
      "Data preparation, exploratory analysis, statistical modeling and traceable scientific delivery.",
    technologies: [
      "pandas",
      "Polars",
      "NumPy",
      "PyArrow",
      "R/Bioconductor",
      "scikit-learn",
    ],
    blocks: [
      {
        label: "Data preparation",
        text: "Schema-aware ingestion; data cleaning; harmonization; reshaping; merging; missingness assessment; duplicate handling; validation; metadata integration and efficient processing of large tabular and variant datasets.",
      },
      {
        label: "Exploratory analysis",
        text: "Descriptive statistics; distribution and outlier assessment; correlation analysis; dimensionality reduction; unsupervised clustering; batch and covariate assessment; scientific visualization.",
      },
      {
        label: "Statistical analysis",
        text: "Linear and generalized linear models; covariate and interaction modeling; effect-size estimation; uncertainty assessment; multiple-testing correction; sensitivity analysis and high-dimensional inference.",
      },
      {
        label: "Scientific delivery",
        text: "Reusable analytical functions; structured result tables; automated summaries; quality-control reports; publication-ready figures and traceable, analysis-ready outputs.",
      },
    ],
  },
  {
    code: "ML/AI",
    title: "Machine Learning & Applied AI",
    summary:
      "Leakage-safe model development, validation and interpretation for high-dimensional biological data.",
    technologies: [
      "scikit-learn",
      "Supervised learning",
      "Unsupervised learning",
      "Model validation",
      "Interpretable ML",
      "LLM-assisted workflows",
    ],
    blocks: [
      {
        label: "Workflow construction",
        text: "Reproducible scikit-learn pipelines; column-specific preprocessing; train, validation and test separation; leakage-safe transformation; missing-value handling; categorical encoding; feature scaling; class weighting and stratified sampling.",
      },
      {
        label: "Supervised-learning methods",
        text: "Linear and logistic regression; regularized models; k-nearest neighbours; support-vector machines; naïve Bayes; decision trees; random forests; gradient-boosting methods and ensemble classification or regression.",
      },
      {
        label: "Unsupervised-learning methods",
        text: "Principal-component analysis; UMAP; k-means clustering; hierarchical and agglomerative clustering; DBSCAN; HDBSCAN and consensus-clustering approaches for high-dimensional biological data.",
      },
      {
        label: "Feature engineering and selection",
        text: "Domain-informed feature construction; variance filtering; univariate selection; recursive feature elimination; regularization-based selection; dimensionality reduction and assessment of correlated predictors.",
      },
      {
        label: "Model tuning and validation",
        text: "Holdout and cross-validation strategies; stratified and grouped cross-validation; nested cross-validation; grid and randomized hyperparameter search; reproducible model comparison and sensitivity analysis.",
      },
      {
        label: "Classification evaluation",
        text: "Accuracy; balanced accuracy; sensitivity; specificity; precision; recall; F1 score; Matthews correlation coefficient; ROC-AUC; precision–recall AUC; confusion matrices and probability calibration.",
      },
      {
        label: "Regression evaluation",
        text: "Mean absolute error; mean squared error; root mean squared error; explained variance; R²; residual assessment and prediction-error analysis.",
      },
      {
        label: "Interpretation",
        text: "Model coefficients; tree-based feature importance; permutation importance; partial-dependence assessment; error analysis; model-behavior review and biologically informed interpretation.",
      },
      {
        label: "Applied AI",
        text: "OpenAI and hosted LLM APIs; LangChain; retrieval and agent prototypes; structured information extraction; LLM-assisted data processing; scientific workflow automation with human review and validation.",
      },
    ],
  },
  {
    code: "VIS",
    title: "Scientific Visualization & Reporting",
    summary:
      "Clear, reproducible visualization of statistical, genomic and high-dimensional results for interpretation and scientific communication.",
    technologies: [
      "ggplot2",
      "matplotlib",
      "seaborn",
      "R Markdown/Quarto",
      "Jupyter",
      "Publication-ready figures",
    ],
    blocks: [
      {
        label: "Statistical visualization",
        text: "Distribution and density plots; effect-size and confidence-interval displays; regression diagnostics; correlation matrices; heatmaps; comparative summaries and uncertainty-aware visual presentation.",
      },
      {
        label: "Genomic visualization",
        text: "Manhattan and QQ plots; locus-level association views; regional signal visualization; forest plots; gene, pathway and enrichment summaries; genomic-quality-control figures.",
      },
      {
        label: "High-dimensional data",
        text: "PCA and UMAP embeddings; cluster-membership visualization; dendrograms; sample and feature heatmaps; multi-panel comparisons and visual assessment of batch, covariate and outlier structure.",
      },
      {
        label: "Publication-ready figures",
        text: "Figure development using ggplot2, matplotlib and seaborn; consistent themes; informative annotation; legends and scales; accessible color selection; multi-panel composition; vector and high-resolution raster export.",
      },
      {
        label: "Reproducible reporting",
        text: "Reusable visualization functions; automated quality-control reports; Jupyter and R Markdown/Quarto documents; standardized tables and figures; traceable outputs linked to analytical results.",
      },
    ],
  },
];

export function TechnicalFoundationAccordion() {
  const [activeCode, setActiveCode] = useState<string | null>(null);
  const pairs = Array.from(
    { length: Math.ceil(foundationAreas.length / 2) },
    (_, pairIndex) => foundationAreas.slice(pairIndex * 2, pairIndex * 2 + 2),
  );

  return (
    <div className="foundation-pairs">
      {pairs.map((pair) => {
        const activeArea = pair.find((area) => area.code === activeCode);
        const activePosition = activeArea ? pair.indexOf(activeArea) + 1 : null;

        return (
          <div
            className={`foundation-pair${pair.length === 1 ? " is-single" : ""}${
              activePosition ? ` active-${activePosition === 1 ? "first" : "second"}` : ""
            }`}
            key={pair[0].code}
          >
            {pair.map((area, cardIndex) => {
              const isActive = area.code === activeCode;
              const slug = area.code.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
              const triggerId = `foundation-trigger-${slug}`;
              const panelId = `foundation-details-${slug}`;

              return (
                <button
                  aria-controls={isActive ? panelId : undefined}
                  aria-expanded={isActive}
                  className={`foundation-card foundation-card-${cardIndex + 1}${
                    isActive ? " is-active" : ""
                  }`}
                  id={triggerId}
                  key={area.code}
                  onClick={() => setActiveCode(isActive ? null : area.code)}
                  type="button"
                >
                  <span className="foundation-code">{area.code}</span>
                  <span className="foundation-card-copy">
                    <span className="foundation-kicker">Technical foundation</span>
                    <span className="foundation-title">{area.title}</span>
                    <span className="foundation-summary">{area.summary}</span>
                    <span className="foundation-technologies">
                      {area.technologies.slice(0, 4).map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </span>
                  </span>
                  <i aria-hidden="true">{isActive ? "×" : "+"}</i>
                </button>
              );
            })}

            {activeArea ? (
              <section
                aria-labelledby={`foundation-trigger-${activeArea.code
                  .toLowerCase()
                  .replace(/[^a-z]+/g, "-")
                  .replace(/^-|-$/g, "")}`}
                className="foundation-expanded-panel"
                id={`foundation-details-${activeArea.code
                  .toLowerCase()
                  .replace(/[^a-z]+/g, "-")
                  .replace(/^-|-$/g, "")}`}
                role="region"
              >
                <div className="foundation-core-technologies" aria-label="Core technologies">
                  <strong>Core technologies</strong>
                  <div>
                    {activeArea.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="foundation-details">
                  {activeArea.blocks.map((block) => (
                    <section key={block.label}>
                      <h4>{block.label}</h4>
                      <p>{block.text}</p>
                    </section>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
