# Specializations & Skills

## Evidence-informed analysis across the biological-data lifecycle

Experience spanning study design, data quality control, statistical analysis, biological interpretation, and reproducible computational delivery. Each specialization is presented as a distinct analytical area, with workflow decisions and tools selected according to the biological question, study design, data type, population, and underlying statistical assumptions.

For the website, each numbered specialization should appear as a concise card. The scope statement remains visible; the complete workflow and tools appear only when the card is expanded.

---

## Genetic Epidemiology & Statistical Genetics

### 01. GWAS Analysis

**Scope:** Common-variant association analysis from phenotype definition and genotype quality control through association testing, meta-analysis, and delivery of harmonized summary statistics.

**Workflow:** Research question and study-design review → phenotype, endpoint, and covariate definition → genotype format and genome-build assessment → sample identity, missingness, reported/genetic sex, heterozygosity, duplication, contamination, and relatedness checks as supported by the data → genetic-similarity and principal-component analysis → variant call-rate, Hardy–Weinberg equilibrium, allele-frequency, differential-missingness, and batch-quality review → phasing and imputation when required → post-imputation information-score and allele-frequency filtering → association-model selection → linear, logistic, Firth-corrected, family-based, or mixed-model testing as appropriate → genomic-inflation, QQ-plot, effect-size, standard-error, allele-frequency, and sample-size diagnostics → locus visualization → replication → cohort-level meta-analysis → harmonized, analysis-ready summary statistics.

**Analytical branches:** Unrelated population samples · related or biobank-scale samples · unbalanced case–control designs · family-based designs · directly genotyped versus imputed data · single-cohort versus multi-cohort analysis.

**Selected tools & resources:**

- **Genotype QC, ancestry, and relatedness:** PLINK/PLINK2 · KING · bcftools · GCTA · R · Python
- **Phasing and imputation, when required:** SHAPEIT4 · Eagle · Minimac4 · IMPUTE5 · Beagle · TOPMed · HRC · 1000 Genomes reference panels
- **Association testing:** REGENIE · SAIGE · BOLT-LMM · GCTA · GEMMA · GENESIS · PLINK/PLINK2
- **Meta-analysis and harmonization:** METAL · bcftools · R · Python · Bash
- **Diagnostics and visualization:** LDSC · LocusZoom · qqman · ggplot2

### 02. Post-GWAS Analysis

**Scope:** Systematic interpretation of GWAS signals through locus characterization, fine-mapping, gene prioritization, molecular-trait integration, causal-inference analyses, and biological-context assessment.

**Workflow:** Summary-statistic and genome-build validation → allele, direction, frequency, sample-size, and effective-sample-size review → SNP-heritability, inflation, and confounding diagnostics → locus-reporting branch based on LD clumping → conditional and joint analysis for statistically independent signals → fine-mapping branch using complete harmonized locus statistics and ancestry-appropriate LD → posterior inclusion probabilities and credible sets → coding and regulatory variant annotation → variant-to-gene mapping using positional, molecular-QTL, chromatin-interaction, Activity-by-Contact, and locus-to-gene evidence → gene-based association and gene prioritization → gene-set, pathway, tissue, and cell-type enrichment → TWAS and PWAS → molecular-QTL colocalization and SMR/HEIDI analysis → Mendelian-randomization analyses with heterogeneity, horizontal-pleiotropy, and directionality sensitivity checks → protein-interaction and biological-network interpretation → drug-target evaluation → cross-dataset, cross-ancestry, and cross-tissue validation.

**Analytical branches:** Locus reporting and clumping · conditional-signal analysis · single-ancestry fine-mapping · multi-ancestry fine-mapping · gene-based association · TWAS/PWAS · colocalization · Mendelian randomization · pathway and network interpretation.

**Selected tools & resources:**

- **Locus definition and conditional analysis:** PLINK/PLINK2 · GCTA-COJO · LocusZoom
- **Heritability and enrichment diagnostics:** LDSC · stratified LDSC workflows
- **Fine-mapping:** FINEMAP · SuSiE (`susieR`) · DAP-G · PAINTOR
- **Annotation and gene prioritization:** FUMA · Ensembl VEP · ANNOVAR · MAGMA · PoPS · FastBAT · Open Targets Platform · Activity-by-Contact and Hi-C resources
- **QTL integration and transcriptome/proteome association:** SMR/HEIDI · coloc · eCAVIAR · fastENLOC · FUSION · S-PrediXcan · TWAS/PWAS workflows
- **Mendelian randomization:** TwoSampleMR · MR-PRESSO · multivariable Mendelian-randomization workflows
- **Enrichment and networks:** g:Profiler · Enrichr · GSEA/MSigDB · clusterProfiler · Reactome · KEGG · STRING · Cytoscape
- **Functional reference resources:** GTEx · ENCODE · Ensembl · molecular-QTL resources

---

## Clinical Genomics

### 03. Clinical Genomics & Variant Interpretation

**Scope:** Germline exome and genome interpretation support through phenotype-aware prioritization, evidence assessment, segregation review, and genotype–phenotype synthesis.

#### 01. Phenotype-Driven Clinical Exome & Genome Analysis

**Subtitle:** Variant filtering, inheritance modeling & candidate prioritization

**Description:** Analyze high-confidence germline variants using technical quality, ancestry-aware population frequency, molecular consequence, inheritance pattern, segregation and HPO-encoded phenotype. Produce a ranked set of candidate variants and genes for detailed evaluation.

**Selected tools & resources:** VEP · ANNOVAR · gnomAD · HPO · Exomiser · LIRICAL · OMIM

#### 02. ACMG/AMP Germline Variant Classification

**Subtitle:** Evidence-based classification of SNVs & small indels

**Description:** Evaluate candidate germline sequence variants using population, computational, functional, segregation, de novo, allelic and disease-mechanism evidence. Assign pathogenic, likely pathogenic, uncertain significance, likely benign or benign classifications with supporting evidence codes and rationale.

**Scientific note:** Applies to germline SNVs and small indels; copy-number variants require a separate evidence framework.

**Selected tools & resources:** ACMG/AMP · ClinGen SVI · ClinVar · gnomAD · SpliceAI · REVEL · CADD · VarSome

#### 03. CNV & Structural-Variant Interpretation

**Subtitle:** Dosage, genomic-interval & structural evidence

**Description:** Assess deletions, duplications, intragenic CNVs and other constitutional structural variants using gene content, dosage sensitivity, genomic mechanism, population frequency, inheritance, segregation, phenotype concordance and published case evidence.

**Scientific note:** Uses the distinct ACMG/ClinGen quantitative framework for constitutional copy-number variants.

**Selected tools & resources:** AnnotSV · ClinGen Dosage Sensitivity · DECIPHER · DGV · gnomAD-SV · CNV-ClinViewer

#### 04. Clinical Evidence Synthesis, Reanalysis & Reporting Support

**Subtitle:** Gene–disease validity, case relevance & evolving evidence

**Description:** Integrate gene–disease validity, disease mechanism, phenotype concordance, segregation, published cases and functional evidence to determine whether a classified variant plausibly explains the individual’s presentation. Organize primary, secondary, carrier and uncertain findings; document limitations; and support periodic reinterpretation as evidence evolves.

**Selected tools & resources:** ClinGen · GenCC · ClinVar · OMIM · HPO · PubMed

---

## Sequencing & Rare-Variant Genomics

### 04. Exome Sequencing Analysis

**Scope:** End-to-end germline exome processing from raw-read assessment and target-coverage evaluation through variant calling, cohort analysis, and biological or clinical prioritization.

**Workflow:** FASTQ and sequencing-metadata review → read-quality and adapter-content assessment → trimming only when warranted → reference-build and capture-target confirmation → reference alignment → sorting, indexing, and duplicate handling → caller-specific recalibration or model preparation → germline SNV and indel calling → joint genotyping for cohorts when appropriate → call-set filtering and quality control → contamination, sample identity, relatedness, and pedigree-concordance checks → target-region depth, callable-base, uniformity, and capture-batch assessment → variant normalization and left alignment → functional and frequency annotation → inheritance-aware filtering → segregation analysis → candidate-gene review → variant- and gene-level rare-variant analysis where study design permits → biological or clinical interpretation.

**Analytical branches:** Singleton · trio/family · cohort joint calling · clinical prioritization · case–control rare-variant association.

**Selected tools & resources:**

- **Read and alignment QC:** FastQC · MultiQC · fastp · BWA/BWA-MEM2 · SAMtools · Picard · mosdepth · Qualimap
- **Variant calling and processing:** GATK · DeepVariant · bcftools · VCF/BCF processing
- **Identity and contamination:** verifyBamID/verifyBamID2 · Peddy · PLINK/PLINK2
- **Annotation and prioritization:** Ensembl VEP · ANNOVAR · SnpEff · gnomAD · ClinVar · HPO resources
- **Core environment:** R · Python · Bash · Linux · Illumina short-read workflows

### 05. Whole-Genome Sequencing Analysis

**Scope:** Genome-wide detection and interpretation of small variants, copy-number changes, structural variants, repeat expansions, and noncoding variation from short- or long-read sequence data.

**Workflow:** Sequencing metadata, platform, read-length, and reference-build review → raw-read and coverage assessment → platform-appropriate alignment → duplicate and caller-specific quality processing → genome-wide SNV and indel calling → joint genotyping where appropriate → call-set quality assessment and normalization → CNV and structural-variant calling → repeat-expansion screening where supported → haplotype phasing when warranted → coding, splice, regulatory, and noncoding annotation → population-frequency filtering → family-, phenotype-, or cohort-aware prioritization → rare-variant association where study design supports it → orthogonal validation when required → biological or clinical interpretation.

**Analytical branches:** Illumina short-read WGS · Oxford Nanopore or PacBio long-read WGS · singleton/family interpretation · cohort association · SNV/indel · CNV/SV · repeat expansion.

**Selected tools & resources:**

- **Short-read alignment and small variants:** BWA/BWA-MEM2 · GATK · DeepVariant · SAMtools · bcftools
- **Short-read CNV and structural variants:** Manta · DELLY · GATK-SV · CNVnator · AnnotSV
- **Long-read alignment and small variants:** minimap2 · Clair3 · DeepVariant
- **Long-read structural variants and phasing:** Sniffles2 · cuteSV · WhatsHap
- **Repeat expansions:** ExpansionHunter
- **Annotation and interpretation:** Ensembl VEP · ANNOVAR · SnpEff · Open Targets Platform · ENCODE · gnomAD
- **Core environment:** R · Python · Bash · Linux

### 06. Rare-Variant Association Analysis

**Scope:** Variant-, gene-, transcript-, and region-level testing of low-frequency and rare variation using biologically defined masks and statistically appropriate association models.

**Workflow:** Sample and variant QC → ancestry, population structure, relatedness, and phenotype assessment → external and internal allele-frequency review → transcript and consequence annotation → separate evaluation of variant-level predictors and gene-level constraint → analysis-unit definition → loss-of-function, missense, regulatory, and combined mask construction → null-model fitting with appropriate covariates and relatedness control → single-variant testing → collapsing and burden tests when effects are expected to align → variance-component testing when effects may vary in direction or magnitude → omnibus testing → case–control imbalance and sparse-count handling → family-based segregation or enrichment analysis where relevant → calibration review → sensitivity analyses across frequency, transcript, and annotation thresholds → multiple-testing correction → replication and biological interpretation.

**Analytical branches:** Single-variant · burden/collapsing · SKAT · SKAT-O · functional-weighted tests · family-based analysis · cohort meta-analysis.

**Selected tools & resources:**

- **QC and annotation:** PLINK/PLINK2 · bcftools · Ensembl VEP · ANNOVAR · SnpEff
- **Variant-level prediction:** CADD · REVEL · MPC and other consequence-specific predictors
- **Population frequency and gene constraint:** gnomAD allele frequencies · LOEUF and other gene-level constraint metrics
- **Association testing:** REGENIE · SAIGE-GENE+ · SKAT/SKAT-O · STAAR · RAREMETAL · GENESIS
- **Core analysis:** R · Python · ancestry-appropriate frequency and LD resources

---

## Statistical Genetics & Molecular Traits

### 07. Statistical Genetics & Genetic Architecture

**Scope:** Estimation and interpretation of heritability, genetic covariance, polygenic architecture, latent genetic structure, and polygenic-score performance.

**Workflow:** Phenotype and summary-statistic suitability review → genome-build, allele, sample-size, and LD-reference matching → SNP-based heritability estimation → observed- and liability-scale interpretation where appropriate → partitioned heritability → genetic covariance and correlation → global and local genetic-correlation analysis → intercept, attenuation, and model-fit assessment → genomic structural equation modeling → genomic principal-component analysis → conditional genetic analysis → individual-level heritability analysis where genotype data are available → polygenic-score construction using clumping-and-threshold or Bayesian shrinkage methods → independent-cohort validation → variance explained, discrimination, calibration, and subgroup-performance assessment → cross-population portability analysis → interpretation of shared and trait-specific genetic architecture.

**Analytical branches:** Summary-statistic methods · individual-level genotype methods · cross-trait architecture · latent-factor modeling · polygenic scoring · cross-population evaluation.

**Selected tools & resources:**

- **Summary-statistic heritability and correlation:** LDSC · stratified LDSC · HDL · GNOVA
- **Latent genetic structure:** Genomic SEM · genomic principal-component workflows
- **Individual-level heritability and mixed models:** GCTA/GREML · BOLT-REML · LDAK · GEMMA · GENESIS
- **Conditional genetic analysis:** GCTA-COJO · mtCOJO
- **Polygenic scores:** PLINK/PLINK2 · PRSice-2 · PRS-CS · PRS-CSx · LDpred2 · SBayesR
- **Core analysis:** R · Python · ancestry-appropriate LD reference panels

### 08. Multi-Trait, Pleiotropic & Cross-Disorder Analysis

**Scope:** Identification and interpretation of shared, direction-specific, and trait-specific genetic signals across correlated phenotypes and disorders.

**Workflow:** Trait definition and comparability assessment → summary-statistic QC and genome-build harmonization → effect-allele alignment → sample-overlap and cross-trait covariance assessment → global and local genetic-correlation analysis → conventional meta-analysis only where traits estimate a compatible effect → subset-based, direction-aware, or omnibus pleiotropic testing → multivariate association analysis → conditional GWAS → shared and trait-specific signal decomposition → genomic principal components or latent genetic-factor modeling → locus overlap and heterogeneity assessment → functional, tissue, cell-type, and pathway interpretation → independent-dataset replication.

**Analytical branches:** Compatible-trait meta-analysis · subset-based pleiotropy · direction-aware pleiotropy · multivariate omnibus testing · conditional GWAS · latent-factor analysis · local genetic correlation.

**Selected tools & resources:** METAL · PLEIO · MTAG · fastASSET/fASSET · CPASSOC · MOSTest · Genomic SEM · LDSC · LAVA · GWAS-PW · GCTA/mtCOJO · PLINK/PLINK2 · DIMPLE-GWAS analytical framework · R · Python

### 09. QTL & Molecular-Trait Analysis

**Scope:** Genetic analysis of gene expression, splicing, protein abundance, and other molecular phenotypes, followed by integration with disease and complex-trait associations.

**Workflow:** Genotype and molecular-phenotype quality control → sample matching and identity verification → assay-appropriate normalization and transformation → technical, biological, and latent-covariate assessment → cis- and trans-window definition → eQTL, sQTL, pQTL, or other molecular-QTL association testing → multiple-testing correction → conditional-signal assessment → replication → tissue, cell-type, and biological-context evaluation → QTL fine-mapping → disease-GWAS integration → colocalization and SMR/HEIDI analysis → cross-tissue and cross-platform molecular validation.

**Analytical branches:** Bulk-tissue QTLs · cell-type or single-cell QTLs · cis-QTLs · trans-QTLs · expression, splicing, protein, and other molecular traits.

**Selected tools & resources:** PLINK/PLINK2 · bcftools · FastQTL · Matrix eQTL · QTLtools · tensorQTL · REGENIE · PEER · limma · R · Python · SuSiE · SMR/HEIDI · coloc · GTEx · eQTL Catalogue · tissue-specific eQTL, sQTL, and pQTL resources

---

## Functional Genomics, Transcriptomics & Multi-Omics

### 10. Proteomics & Proteogenomics

**Scope:** Statistical and genetic analysis of protein-abundance data, including differential abundance, pQTLs, proteome-wide association, causal-inference analyses, interaction networks, and drug-target interpretation.

**Workflow:** Platform and assay-metadata review → sample- and protein-level quality control → normalization and transformation → missingness and limit-of-detection assessment → outlier and batch-effect review → technical and biological covariate adjustment → differential protein-abundance analysis → cis- and trans-pQTL evaluation → protein heritability and genetic-correlation analysis where suitable genetic data are available → proteome-wide association using genetically predicted protein abundance → protein–protein interaction analysis → pathway enrichment → two-sample or multivariable Mendelian randomization → colocalization → drug-target evaluation → cross-platform and cross-tissue validation.

**Analytical branches:** Olink or SomaScan platform data · differential abundance · pQTL analysis · PWAS · Mendelian randomization · colocalization · protein networks and drug targets.

**Selected tools & resources:** R · Python · pandas · Polars · NumPy · PLINK/PLINK2 · REGENIE · LDSC · SMR/HEIDI · coloc · TWAS/PWAS workflows · TwoSampleMR · MR-PRESSO · STRING · Cytoscape · Reactome · DrugCentral · Open Targets Platform · deCODE and UKB-PPP molecular-trait resources

**Scope boundary:** This specialization emphasizes analysis of processed protein-abundance and pQTL data. It does not imply responsibility for mass-spectrometry instrument operation or raw peptide-identification pipelines unless separately documented.

### 11. Bulk RNA-seq Analysis

**Scope:** Reference-based or de novo transcriptome analysis from experimental-design review and raw-read QC through differential expression, splicing, co-expression, enrichment, and biological interpretation.

**Workflow:** Experimental-design and sample-metadata review → sequencing layout, strandedness, genome build, and transcript-annotation assessment → raw-read quality control → adapter and quality trimming when required → reference alignment or transcript-level abundance estimation → alignment and quantification diagnostics → gene-level count generation or import and optional gene-level summarization of transcript estimates → low-expression filtering → library-size and composition normalization → sample clustering and principal-component analysis → batch, covariate, and unwanted-variation assessment → design-matrix and contrast definition → differential gene or transcript expression → alternative-splicing analysis when appropriate → co-expression and pathway analysis → biological interpretation.

**De novo branch:** When a suitable reference genome or transcriptome is unavailable: read preprocessing → optional error correction and digital normalization → de novo transcriptome assembly → contiguity and completeness assessment → redundancy reduction → ORF prediction → functional and domain annotation → abundance estimation → differential-expression and enrichment analysis. Long-read isoform analysis should use a platform-appropriate assembly/isoform workflow and long-read-specific transcriptome QC.

**Selected tools & resources:**

- **Read QC and preprocessing:** FastQC · MultiQC · fastp · cutadapt · Trimmomatic
- **Alignment-based analysis:** STAR · HISAT2 · SAMtools · featureCounts/Subread
- **Transcript quantification:** Salmon · kallisto · RSEM · tximport
- **Differential expression and unwanted variation:** DESeq2 · edgeR · limma-voom · SVA · RUVSeq
- **Splicing, co-expression, and enrichment:** rMATS · SUPPA2 · WGCNA · clusterProfiler · g:Profiler · GSEA/MSigDB
- **De novo transcriptomics, when applicable:** Trinity · rnaSPAdes · BUSCO · rnaQUAST · CD-HIT · TransDecoder · DIAMOND/BLAST · InterProScan · eggNOG-mapper · UniProt
- **Long-read transcript characterization, when applicable:** Iso-Seq/ONT workflows · FLAIR · SQANTI3
- **Core environment:** R/Bioconductor · Python · Bash · Linux · Ensembl annotations

### 12. Single-Cell RNA-seq Analysis

**Scope:** Cell-resolved transcriptomic analysis with explicit attention to sample structure, quality control, batch effects, cell identity, and replicate-aware differential-state inference.

**Workflow:** Biological question, study design, donor structure, chemistry, and sample-metadata review → demultiplexing and count-matrix generation → cell- and feature-level QC → library complexity, detected-feature, mitochondrial-content, and stress-signal assessment → empty-droplet, ambient-RNA, and doublet evaluation → normalization and highly variable feature selection → dimensionality reduction → batch and donor integration while preserving biological variation → neighborhood-graph construction → clustering and stability review → marker identification → cell-type annotation using marker and reference evidence → donor-aware pseudobulk differential-state analysis → compositional analysis where appropriate → trajectory, pseudotime, or lineage analysis only when supported by the biological design → pathway and cell-context interpretation.

**Analytical branches:** Droplet versus plate-based data · reference-based versus marker-based annotation · integration versus unintegrated inference · pseudobulk differential state · cell composition · trajectory analysis.

**Selected tools & resources:** Cell Ranger · STARsolo · alevin-fry · Seurat · Scanpy · SingleCellExperiment · scater · scran · DropletUtils · SoupX · DecontX · scDblFinder · DoubletFinder · Harmony · fastMNN · SingleR · Azimuth · DESeq2/edgeR pseudobulk workflows · muscat · Monocle3 · slingshot · R/Bioconductor · Python

### 13. Functional Genomics

**Scope:** Integration of genetic associations with molecular and regulatory evidence to connect variants with genes, cell types, tissues, pathways, and plausible biological mechanisms.

**Workflow:** Genetic signal and biological-question definition → locus, credible-set, and candidate-variant review → coding and regulatory annotation → positional and transcript-aware gene mapping → eQTL, sQTL, pQTL, and other molecular-QTL integration → chromatin accessibility, histone-mark, enhancer–promoter, and three-dimensional interaction evidence → tissue and cell-type enrichment → TWAS/PWAS and colocalization evidence → gene-based and pathway analysis → protein-interaction and network interpretation → cross-tissue and cross-omics triangulation → prioritization of testable genes and mechanisms with explicit separation of statistical evidence from biological inference.

**Analytical branches:** Variant-to-gene mapping · molecular-QTL integration · regulatory annotation · tissue/cell-type enrichment · pathway and network interpretation · cross-omics evidence triangulation.

**Selected tools & resources:** FUMA · MAGMA · PoPS · FastBAT · Ensembl VEP · ANNOVAR · Open Targets Platform · GTEx · ENCODE · Activity-by-Contact and Hi-C resources · SMR/HEIDI · coloc · TWAS/PWAS workflows · g:Profiler · Enrichr · GSEA/MSigDB · Reactome · KEGG · STRING · Cytoscape

### 14. Epigenomics & Regulatory Genomics

**Scope:** Assay-specific analysis of chromatin accessibility, protein–DNA binding, histone modifications, and DNA methylation, followed by regulatory-element and gene-context interpretation.

**ATAC-seq workflow:** Experimental-design review → raw-read QC → adapter trimming → alignment → mitochondrial, duplicate, mapping-quality, library-complexity, fragment-size, transcription-start-site enrichment, and fraction-of-reads-in-peaks assessment → peak calling → replicate concordance and consensus peaks → differential accessibility → motif and transcription-factor analysis → regulatory-element and gene annotation.

**ChIP-seq workflow:** Antibody, target, control, and replicate review → read QC and alignment → duplicate and library-complexity assessment → signal and enrichment QC → peak calling using appropriate control data → replicate concordance and irreproducible-discovery assessment where appropriate → differential binding → motif, regulatory-element, and gene-context interpretation.

**DNA-methylation workflow:** Platform-specific branch for methylation arrays or bisulfite sequencing → probe/read QC → sample identity and bisulfite-conversion review where relevant → filtering and normalization → batch and cell-composition assessment → differential methylation → region-level analysis → regulatory and gene annotation.

**Selected tools & resources:**

- **General QC and alignment:** FastQC · MultiQC · fastp/cutadapt · BWA · Bowtie2 · SAMtools · Picard
- **ATAC-seq and ChIP-seq:** MACS2/MACS3 · Genrich · deepTools · IDR workflows · DiffBind · csaw · ChIPseeker · HOMER · MEME Suite
- **DNA-methylation sequencing:** Bismark · MethylDackel · DSS · methylKit
- **DNA-methylation arrays:** minfi · SeSAMe
- **Regulatory interpretation:** LOLA · GREAT · Ensembl regulatory annotations · ENCODE · Activity-by-Contact resources
- **Core environment:** R/Bioconductor · Python · Bash · Linux

### 15. Multi-Omics Integration

**Scope:** Joint analysis of genomic, transcriptomic, proteomic, epigenomic, imaging, phenotype, and molecular-QTL data to identify convergent biological signals without obscuring platform-specific uncertainty.

**Workflow:** Biological question and integration-level definition → study-design and sample-overlap review → sample, feature, and identifier matching → modality-specific QC → cross-platform feature harmonization → normalization, scale, missingness, and batch assessment → early, intermediate, or late integration strategy selection → latent-factor, supervised, network, or similarity-based integration → molecular colocalization and genetically informed integration → causal-inference analyses when assumptions are supportable → pathway and network convergence → cross-tissue and cross-platform validation → sensitivity analysis → biologically informed synthesis with modality-specific limitations retained.

**Analytical branches:** Matched-sample integration · summary-level integration · unsupervised latent factors · supervised multi-block modeling · network integration · molecular colocalization · genetically informed causal inference.

**Selected tools & resources:** R · Python · pandas · Polars · NumPy · PyArrow · MOFA+ · mixOmics · iCluster+ · similarity-network fusion · WGCNA · LDSC · Genomic SEM · SMR/HEIDI · coloc · Mendelian-randomization workflows · STRING · Cytoscape · GTEx · ENCODE · molecular-QTL resources

---

## Microbial & Community Genomics

### 16. Bacterial & Prokaryotic Genomics

**Scope:** Short- and long-read analysis of bacterial genomes for assembly, annotation, comparative genomics, antimicrobial-resistance assessment, phylogenomics, and pathogen surveillance.

**Workflow:** Study and sample-metadata review → raw-read quality control → adapter and contaminant assessment → taxonomic confirmation → reference mapping or de novo assembly → short-read, long-read, or hybrid assembly strategy → polishing and contamination assessment → assembly contiguity, completeness, and quality review → genome annotation → species and strain characterization → multilocus sequence typing → comparative-genome and pan-genome analysis → antimicrobial-resistance and virulence screening → core-genome or SNP-based phylogenomics → epidemiological and surveillance interpretation.

**Analytical branches:** Reference mapping · short-read de novo assembly · long-read assembly · hybrid assembly · comparative genomics · pan-genomics · AMR/virulence · outbreak and surveillance phylogenomics.

**Selected tools & resources:** FastQC · MultiQC · fastp · Kraken2 · Centrifuge · BWA · minimap2 · SPAdes · Flye · Unicycler · Pilon · Medaka · QUAST · BUSCO · CheckM · GTDB-Tk · Prokka · Bakta · MLST · Panaroo · Roary · Snippy · bcftools · AMRFinderPlus · ResFinder · CARD · VFDB · IQ-TREE · RAxML-NG · Nextstrain-compatible workflows · NCBI RefSeq

### 17. Metagenomics & Microbiome Analysis

**Scope:** Amplicon and shotgun metagenomic analysis with contamination-aware preprocessing, taxonomic and functional profiling, compositional statistics, and covariate-aware biological interpretation.

**Workflow:** Biological question, sampling design, extraction controls, negative controls, sequencing controls, and metadata review → raw-read QC → adapter and low-quality read removal → host-read and contaminant filtering → amplicon or shotgun branch selection → taxonomic profiling → functional profiling for shotgun data → alpha-diversity, beta-diversity, and ordination analysis → compositional differential-abundance testing → multivariable association analysis → assembly and genome-resolved analysis when justified → pathway and ecological interpretation → sensitivity analysis to filtering, prevalence, depth, contamination, and covariate choices.

**Analytical branches:** 16S/18S/ITS amplicon sequencing · shotgun taxonomic profiling · functional profiling · metagenome assembly · metagenome-assembled genomes · compositional association analysis.

**Selected tools & resources:**

- **Amplicon analysis:** QIIME 2 · DADA2 · cutadapt · phyloseq · SILVA · UNITE
- **Shotgun preprocessing and taxonomy:** Bowtie2 · KneadData · Kraken2 · Bracken · MetaPhlAn
- **Functional profiling:** HUMAnN · eggNOG-mapper · KEGG · UniRef
- **Assembly and genome-resolved analysis:** MEGAHIT · metaSPAdes · MetaBAT2 · CONCOCT · MaxBin2 · CheckM · GTDB-Tk
- **Ecology and compositional statistics:** vegan · ANCOM-BC · ALDEx2 · MaAsLin2 · R/Bioconductor · Python

---

## Quantitative, Computational & Data Systems

### 18. Biostatistics & High-Dimensional Data Analysis

**Scope:** Statistically principled study design, modeling, uncertainty assessment, multiple-testing control, exploratory analysis, and scientific visualization for complex biomedical datasets.

**Workflow:** Scientific question and estimand definition → study-design and power considerations → data-dictionary and endpoint review → missingness and measurement-quality assessment → exploratory data analysis → distributional and modeling-assumption review → covariate, confounder, interaction, and nonlinear-effect assessment → linear, logistic, generalized linear, mixed-effects, survival, or resampling-based model selection as appropriate → high-dimensional feature filtering or regularization → dimensionality reduction and unsupervised clustering → multiplicity control → effect-size and confidence-interval reporting → internal validation → sensitivity and robustness analyses → clear statistical and scientific visualization.

**Analytical branches:** Regression and generalized linear models · mixed-effects models · survival analysis · dimensionality reduction · unsupervised clustering · regularization · multiple testing · resampling and sensitivity analysis.

**Selected tools & resources:** R · Python · pandas · Polars · NumPy · SciPy · statsmodels · scikit-learn · tidyverse · data.table · lme4 · survival · glmnet · UMAP · HDBSCAN · ggplot2 · matplotlib · seaborn · Jupyter · R Markdown/Quarto

### 19. Applied AI & Machine Learning

**Scope:** Leakage-safe, interpretable, and validation-centered machine learning for biological prediction, prioritization, structured data extraction, and human-reviewed scientific automation.

**Workflow:** Biological endpoint and intended-use definition → sample and label-quality assessment → train/validation/test strategy defined before modeling → grouping, site, family, or temporal structure preserved during splitting → preprocessing performed within resampling folds → feature engineering and selection → simple baseline models → algorithm selection and hyperparameter tuning → nested cross-validation when model selection and performance estimation must be separated → class-imbalance handling within training data → discrimination, calibration, decision-relevant, and uncertainty evaluation → external or transportability validation where available → interpretability and error analysis → subgroup and failure-mode assessment → reproducible model packaging → monitored, human-reviewed use.

**LLM branch:** Task and schema definition → privacy and data-governance review → retrieval or context construction → structured prompting → constrained output generation → validation against source evidence → hallucination and omission checks → human review → logging, versioning, and evaluation before scientific use.

**Selected tools & resources:** Python · pandas · Polars · NumPy · scikit-learn · XGBoost · LightGBM · imbalanced-learn · Optuna · SHAP · permutation-importance and calibration workflows · Jupyter · OpenAI and hosted LLM APIs · LangChain · retrieval and agent prototypes · structured JSON extraction · human-in-the-loop validation

### 20. Scientific Data Engineering & Biomedical Knowledge Systems

**Scope:** Development of validated, provenance-aware data structures and biomedical knowledge systems that connect heterogeneous scientific evidence without losing source traceability.

**Workflow:** Scientific use-case and data-contract definition → source inventory and licensing review → schema and identifier design → genome-build, transcript-version, ontology, and vocabulary harmonization → extract, transform, and load processing → field-level validation and type enforcement → missingness and duplicate handling → API and file-format integration → provenance, version, and audit metadata capture → entity normalization and relationship modeling → RDF or property-graph construction where appropriate → SPARQL or structured querying → phenotype–gene–variant–disease–drug linkage → evidence ranking and source attribution → reproducible export and documentation.

**Analytical branches:** Tabular and columnar data engineering · variant-data engineering · API integration · ontology mapping · RDF knowledge graphs · structured evidence extraction · biomedical relationship modeling.

**Selected tools & resources:** Python · SQL · Bash · pandas · Polars · NumPy · PyArrow · DuckDB · bcftools · VCF/BCF · CSV/TSV · Parquet · JSON · YAML · REST APIs · RDF · RDFLib · SPARQL · Pydantic/schema validation · HPO · MONDO · Gene Ontology · EFO · ClinVar · ClinGen · Open Targets Platform · Ensembl · biomedical ontology services

### 21. Reproducible Scientific Computing, HPC & Cloud

**Scope:** Reliable computational delivery of large-scale biological analyses through configuration-driven workflows, validated inputs, versioned environments, parallel execution, and traceable outputs.

**Workflow:** Analysis contract and required-input definition → canonical configuration and schema validation → immutable effective-configuration resolution → file, build, sample, column, and scientific-policy validation → version-controlled code → dependency and environment capture → modular workflow orchestration → checkpointed and restartable execution → automated QC and success criteria → structured logs, provenance, and error reporting → resource profiling → chromosome-, trait-, gene-, or sample-level parallelization → SLURM-based HPC or cloud execution → storage and data-transfer planning → standardized output schemas → automated summaries → documentation, tests, and reproducible handoff.

**Analytical branches:** Local development · HPC batch computing · cloud virtual machines and object storage · containerized execution · parallel and distributed processing · pipeline and direct-command interfaces.

**Selected tools & resources:** Linux · Bash · Python · R · Git/GitHub · YAML · JSON · Docker · Conda/Mamba · SLURM · GNU Parallel · configuration-driven Python/Bash workflows · Snakemake/Nextflow where appropriate · Google Cloud Platform · Amazon EC2 · Amazon S3 · parallel and distributed processing · automated validation · structured logging · checksums and provenance manifests

---
