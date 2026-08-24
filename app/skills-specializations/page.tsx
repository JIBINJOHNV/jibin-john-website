import type { Metadata } from "next";
import { PageHero, ScienceFigure, SectionHeading, Site } from "../components/SiteChrome";
import {
  SpecializationAccordion,
  type ClinicalStage,
  type DetailBlock,
  type Specialization,
} from "./SpecializationAccordion";
import { TechnicalFoundationAccordion } from "./TechnicalFoundationAccordion";
import skillsMarkdown from "./skills-content.md?raw";

export const metadata: Metadata = {
  title: "Specializations & Skills | Jibin John, PhD",
  description:
    "Detailed scientific workflows, analytical branches, programming languages, research computing, data science and machine-learning methods across biological data analysis.",
};

const cleanInline = (value: string) =>
  value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .trim();

function parseDetailBlocks(body: string): DetailBlock[] {
  return body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .flatMap<DetailBlock>((block) => {
      if (block.startsWith("**Scope:**")) return [];

      if (block.startsWith("- ")) {
        const items = block.split("\n").map((line) => {
          const value = line.replace(/^-\s*/, "").trim();
          const labelled = value.match(/^\*\*(.+?):\*\*\s*(.+)$/);
          return labelled
            ? { label: cleanInline(labelled[1]), text: cleanInline(labelled[2]) }
            : { text: cleanInline(value) };
        });
        return [{ type: "resources", items }];
      }

      const labelled = block.match(/^\*\*(.+?):\*\*\s*([\s\S]*)$/);
      if (labelled) {
        return [
          {
            type: "text",
            label: cleanInline(labelled[1]),
            text: cleanInline(labelled[2]),
          },
        ];
      }

      return [{ type: "text", label: "Additional context", text: cleanInline(block) }];
    });
}

function parseClinicalStages(body: string): ClinicalStage[] {
  const stages: ClinicalStage[] = [];
  const stagePattern =
    /^#### (\d{2})\. (.+)\n\n\*\*Subtitle:\*\* (.+)\n\n\*\*Description:\*\* (.+)\n\n(?:\*\*Scientific note:\*\* (.+)\n\n)?\*\*Selected tools & resources:\*\* (.+)$/gm;

  for (const match of body.matchAll(stagePattern)) {
    stages.push({
      number: match[1],
      title: cleanInline(match[2]),
      subtitle: cleanInline(match[3]),
      description: cleanInline(match[4]),
      note: match[5] ? cleanInline(match[5]) : undefined,
      resources: match[6].split(" · ").map(cleanInline),
    });
  }

  return stages;
}

function parseSpecializations(markdown: string): Specialization[] {
  const specializations: Specialization[] = [];
  const sectionPattern =
    /^### (\d{2})\. (.+)\n\n([\s\S]*?)(?=^### \d{2}\. |^---$)/gm;

  for (const match of markdown.matchAll(sectionPattern)) {
    const body = match[3].trim();
    const scope = body.match(/^\*\*Scope:\*\*\s*(.+)$/m)?.[1] ?? "";
    specializations.push({
      number: match[1],
      title: match[2].trim(),
      scope: cleanInline(scope),
      blocks: parseDetailBlocks(body),
      stages: parseClinicalStages(body),
    });
  }

  return specializations;
}

const specializations = parseSpecializations(skillsMarkdown);

const categoryDefinitions = [
  {
    id: "genetic-epidemiology",
    title: "Genetic Epidemiology & Statistical Genetics",
    intro: "Association discovery and systematic interpretation of common-variant signals.",
    numbers: ["01", "02"],
  },
  {
    id: "clinical-genomics",
    title: "Clinical Genomics",
    intro: "Phenotype-aware germline variant interpretation, evidence assessment and genotype–phenotype synthesis.",
    numbers: ["03"],
  },
  {
    id: "sequencing-rare-variant-genomics",
    title: "Sequencing & Rare-Variant Genomics",
    intro: "Exome and genome analysis from sequence processing and variant discovery through rare-variant testing.",
    numbers: ["04", "05", "06"],
  },
  {
    id: "statistical-genetics-molecular-traits",
    title: "Statistical Genetics & Molecular Traits",
    intro: "Genetic architecture, shared-trait signals and molecular-phenotype mapping.",
    numbers: ["07", "08", "09"],
  },
  {
    id: "functional-genomics-multi-omics",
    title: "Functional Genomics, Transcriptomics & Multi-Omics",
    intro: "Molecular measurements and integrative evidence used to resolve biological mechanisms.",
    numbers: ["10", "11", "12", "13", "14", "15"],
  },
  {
    id: "microbial-community-genomics",
    title: "Microbial & Community Genomics",
    intro: "Genome-resolved and community-level analysis with contamination-aware interpretation.",
    numbers: ["16", "17"],
  },
  {
    id: "quantitative-computational-systems",
    title: "Quantitative, Computational & Data Systems",
    intro: "Statistics, machine learning, knowledge systems and reproducible analytical delivery.",
    numbers: ["18", "19", "20", "21"],
  },
];

export default function SkillsPage() {
  return (
    <Site active="Expertise">
      <div className="skills-page">
        <PageHero
          eyebrow="Specializations & skills"
          title="Evidence-informed analysis across the biological-data lifecycle."
          intro="Experience spanning study design, data quality control, statistical analysis, biological interpretation and reproducible computational delivery. Expand any specialization to review its workflow, analytical branches, tools and resources."
          aside={<ScienceFigure type="pipeline" />}
        />

        <section className="section specializations-section">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Scientific specializations"
              title="Twenty-one distinct analytical areas."
              intro="Methods and tools are placed within the scientific workflow where they are used, rather than presented as a separate software inventory."
            />

            <nav className="specialization-jump-nav" aria-label="Jump to a specialization group">
              {categoryDefinitions.map((category) => (
                <a href={`#${category.id}`} key={category.id}>{category.title}</a>
              ))}
              <a href="#technical-foundation">Data Science, Machine Learning, Visualization, Languages & Computing</a>
            </nav>

            <div className="specialization-categories">
              {categoryDefinitions.map((category) => {
                const categorySpecializations = specializations.filter((specialization) =>
                  category.numbers.includes(specialization.number),
                );

                return (
                  <section className="specialization-category" id={category.id} key={category.id}>
                    <header className="specialization-category-heading">
                      <span>
                        {category.numbers.length === 1
                          ? category.numbers[0]
                          : `${category.numbers[0]}–${category.numbers[category.numbers.length - 1]}`}
                      </span>
                      <div>
                        <h2>{category.title}</h2>
                        <p>{category.intro}</p>
                      </div>
                    </header>

                    <SpecializationAccordion specializations={categorySpecializations} />
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section technical-foundation-section" id="technical-foundation">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Technical & computational foundation"
              title="Languages, computing, data science, visualization and machine learning."
              intro="Programming, statistical computing, scientific visualization, scalable research infrastructure and machine-learning capabilities supporting reproducible biological analysis from raw data through validated scientific delivery."
            />

            <TechnicalFoundationAccordion />
          </div>
        </section>
      </div>
    </Site>
  );
}
