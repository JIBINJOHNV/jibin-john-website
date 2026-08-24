export type Publication = {
  year: string;
  title: string;
  authors: string;
  venue: string;
  citation: string;
  href: string;
  note?: string;
};

export const journalArticles: Publication[] = [
  {
    year: "2026",
    title: "Exome analysis of Indian ulcerative colitis reveals novel genes affecting epithelial integrity, DNA repair, trafficking, and immune signalling",
    authors: "R. Chauhan, B. Sharma, A. Sood, V. Midha, A. Singh, J. John, G. Juyal",
    venue: "Human Genomics",
    citation: "Published online 5 August 2026",
    href: "https://doi.org/10.1186/s40246-026-00994-z",
  },
  {
    year: "2026",
    title: "Clinical implications of rare and common variation in preimplantation genetic testing for breast cancer",
    authors: "T. Lencz, U. Bhattacharyya, L. Klausner, J. John, S. Carmi",
    venue: "npj Genomic Medicine",
    citation: "11:4 · PMID 41501043",
    href: "https://doi.org/10.1038/s41525-025-00546-9",
  },
  {
    year: "2025",
    title: "Circulating Blood-Based Proteins in Psychopathology and Cognition: A Mendelian Randomization Study",
    authors: "U. Bhattacharyya, J. John, M. Lam, J. Fisher, B. Sun, D. Baird, S. Burgess, C.-Y. Chen, T. Lencz",
    venue: "JAMA Psychiatry",
    citation: "82(5):481–491 · PMID 40072421 · PMCID PMC11904806",
    href: "https://doi.org/10.1001/jamapsychiatry.2025.0033",
  },
  {
    year: "2025",
    title: "Dissecting Schizophrenia Biology Using Pleiotropy With Cognitive Genomics",
    authors: "U. Bhattacharyya, J. John, T. Lencz, M. Lam",
    venue: "Biological Psychiatry",
    citation: "98(9):670–678 · PMID 39993652 · PMCID PMC12353775",
    href: "https://doi.org/10.1016/j.biopsych.2025.02.890",
    note: "Equal contribution reported for Upasana Bhattacharyya and Jibin John.",
  },
  {
    year: "2020",
    title: "Multiple rare inherited variants in a four generation schizophrenia family offer leads for complex mode of disease inheritance",
    authors: "J. John, U. Bhattacharyya, N. Yadav, P. Kukshal, T. Bhatia, V. L. Nimgaonkar, S. N. Deshpande, B. K. Thelma",
    venue: "Schizophrenia Research",
    citation: "216:288–294 · PMID 31813803 · PMCID PMC8958857",
    href: "https://doi.org/10.1016/j.schres.2019.11.041",
  },
  {
    year: "2019",
    title: "Rare variant based evidence for oligogenic contribution of neurodevelopmental pathway genes to schizophrenia",
    authors: "J. John, P. Kukshal, T. Bhatia, V. L. Nimgaonkar, S. N. Deshpande, B. K. Thelma",
    venue: "Schizophrenia Research",
    citation: "210:296–298 · PMID 30612842 · PMCID PMC7018639",
    href: "https://doi.org/10.1016/j.schres.2018.12.045",
  },
  {
    year: "2019",
    title: "Rare variants in Protein Tyrosine Phosphatase, Receptor Type A (PTPRA) in schizophrenia: evidence from a family-based study",
    authors: "J. John, P. Kukshal, A. Sharma, T. Bhatia, V. L. Nimgaonkar, S. N. Deshpande, B. K. Thelma",
    venue: "Schizophrenia Research",
    citation: "206:75–81 · PMID 30594456 · PMCID PMC7321970",
    href: "https://doi.org/10.1016/j.schres.2018.12.012",
  },
  {
    year: "2019",
    title: "Rare Variants in Tissue Inhibitor of Metalloproteinase 2 as a Risk Factor for Schizophrenia: Evidence From Familial and Cohort Analysis",
    authors: "J. John, A. Sharma, P. Kukshal, T. Bhatia, V. L. Nimgaonkar, S. N. Deshpande, B. K. Thelma",
    venue: "Schizophrenia Bulletin",
    citation: "45(1):256–263 · PMID 29385606 · PMCID PMC6293225",
    href: "https://doi.org/10.1093/schbul/sbx196",
  },
  {
    year: "2017",
    title: "Pedigree Analysis of Familial Primary Concomitant Horizontal Strabismus in Northern India",
    authors: "Z. Chaudhuri, J. John, S. Aneja, B. K. Thelma",
    venue: "Strabismus",
    citation: "25(4):200–213 · PMID 28796570",
    href: "https://doi.org/10.1080/09273972.2017.1350865",
  },
  {
    year: "2017",
    title: "Possible role of rare variants in Trace amine associated receptor 1 in schizophrenia",
    authors: "J. John, P. Kukshal, T. Bhatia, K. V. Chowdari, V. L. Nimgaonkar, S. N. Deshpande, B. K. Thelma",
    venue: "Schizophrenia Research",
    citation: "189:190–195 · PMID 28242106 · PMCID PMC5569002",
    href: "https://doi.org/10.1016/j.schres.2017.02.020",
  },
  {
    year: "2016",
    title: "Association study of MiRSNPs with schizophrenia, tardive dyskinesia and cognition",
    authors: "J. John, T. Bhatia, P. Kukshal, P. Chandna, V. L. Nimgaonkar, S. N. Deshpande, B. K. Thelma",
    venue: "Schizophrenia Research",
    citation: "174(1–3):29–34",
    href: "https://doi.org/10.1016/j.schres.2016.03.031",
  },
];

export const preprints: Publication[] = [
  {
    year: "2026",
    title: "A Pleiotropic Map of Brain Imaging Genetics Reveals Biologically Distinct Latent Endophenotypes",
    authors: "U. Bhattacharyya, J. John, Y. Zhong, M. Preuss, T. Ge, T. Lencz, M. Lam",
    venue: "medRxiv",
    citation: "Posted 29 April 2026",
    href: "https://doi.org/10.64898/2026.04.27.26351743",
  },
  {
    year: "2026",
    title: "Disorder-specific and shared genetic architecture underlying schizophrenia and bipolar disorder",
    authors: "U. Bhattacharyya, J. John, Y. Zhong, M. Preuss, T. Ge, T. Lencz, M. Lam",
    venue: "medRxiv",
    citation: "2026.07.07.26357436",
    href: "https://doi.org/10.64898/2026.07.07.26357436",
  },
  {
    year: "2026",
    title: "Cognitive pleiotropy reveals disorder-specific and shared biology for schizophrenia and bipolar disorder",
    authors: "U. Bhattacharyya, J. John, M. Preuss, M. Lam, T. Lencz",
    venue: "medRxiv",
    citation: "2026.07.07.26357446",
    href: "https://doi.org/10.64898/2026.07.07.26357446",
  },
  {
    year: "2026",
    title: "Characterizing the impact of plasma protein levels on human brain structure and disorders leveraging integrative multi-omics analysis",
    authors: "C. Ayubcha, E. Dennis, U. Bhattacharyya, J. John, M. Lam, T. Lencz, T. Ge, C.-Y. Chen",
    venue: "medRxiv",
    citation: "Posted 15 July 2026",
    href: "https://doi.org/10.64898/2026.07.13.26358006",
  },
  {
    year: "2024",
    title: "Large-Scale Mendelian Randomization Study Reveals Circulating Blood-Based Proteomic Biomarkers for Psychopathology and Cognitive Task Performance",
    authors: "U. Bhattacharyya, J. John, M. Lam, J. Fisher, B. Sun, D. Baird, C.-Y. Chen, T. Lencz",
    venue: "medRxiv",
    citation: "2024.01.18.24301455",
    href: "https://doi.org/10.1101/2024.01.18.24301455",
    note: "Preprint record retained; the peer-reviewed article was published in JAMA Psychiatry in 2025.",
  },
  {
    year: "2019",
    title: "Oligogenic rare variant contributions in schizophrenia and their convergence with genes harbouring de novo mutations in schizophrenia, autism and intellectual disability: evidence from multiplex families",
    authors: "J. John, U. Bhattacharyya, N. Yadav, P. Kukshal, T. Bhatia, R. Harripaul, V. L. Nimgaonkar, S. N. Deshpande, B. K. Thelma",
    venue: "bioRxiv",
    citation: "829101",
    href: "https://doi.org/10.1101/829101",
    note: "Preprint record retained as part of the complete scholarly history.",
  },
];

export const conferencePublications: Publication[] = [
  {
    year: "2026",
    title: "Uncovering Latent Brain Imaging Phenotypes Leveraging Genetic Pleiotropy",
    authors: "T. Lencz, U. Bhattacharyya, J. John, M. Lam",
    venue: "Neuropsychopharmacology · 64th Annual Meeting of the American College of Neuropsychopharmacology (ACNP)",
    citation: "51(Suppl 1) · P442",
    href: "https://www.nature.com/articles/s41386-025-02280-3",
  },
  {
    year: "2026",
    title: "A Pleiotropic Map of Brain Imaging Genetics Reveals Convergent Mechanisms Across Psychiatric and Neurological Traits",
    authors: "T. Lencz, U. Bhattacharyya, J. John, M. Lam",
    venue: "Biological Psychiatry · Society of Biological Psychiatry (SOBP) Annual Meeting",
    citation: "99(10):S94–S95 · Abstract 45",
    href: "https://doi.org/10.1016/j.biopsych.2026.03.225",
  },
  {
    year: "2026",
    title: "Parsing Bipolar Disorder Biology via Pleiotropic Insights With Cognitive Traits",
    authors: "U. Bhattacharyya, J. John, M. Lam, T. Lencz",
    venue: "Biological Psychiatry · Society of Biological Psychiatry (SOBP) Annual Meeting",
    citation: "99(10):S135 · Abstract 85",
    href: "https://doi.org/10.1016/j.biopsych.2026.03.319",
  },
  {
    year: "2025",
    title: "A Pleiotropic Map of Brain Imaging Genetics Reveals Latent Genetic Architecture, Novel Biological Insights, and Strengthened Associations With Psychopathology",
    authors: "T. Lencz, U. Bhattacharyya, J. John, Y. Zhong, M. Preuss, T. Ge, M. Lam",
    venue: "European Neuropsychopharmacology · World Congress of Psychiatric Genetics (WCPG)",
    citation: "Volume 99, Supplement 1 · M66",
    href: "https://www.sciencedirect.com/science/article/pii/S0924977X25004110",
  },
  {
    year: "2024",
    title: "Multivariate Imaging Genetics Reveals Novel Insights Into Psychopathology",
    authors: "T. Lencz, U. Bhattacharyya, J. John, M. Lam",
    venue: "Neuropsychopharmacology · 63rd Annual Meeting of the American College of Neuropsychopharmacology (ACNP)",
    citation: "49(Suppl 1):322 · P455",
    href: "https://www.nature.com/articles/s41386-024-02012-z",
  },
  {
    year: "2024",
    title: "Integrative Analysis of Neuroimaging Phenotypes and Genetic Associations in the UK Biobank",
    authors: "M. Lam, U. Bhattacharyya, J. John, T. Lencz",
    venue: "European Neuropsychopharmacology · World Congress of Psychiatric Genetics (WCPG)",
    citation: "87:98–99 · Abstract 90",
    href: "https://www.sciencedirect.com/science/article/pii/S0924977X24004036",
  },
  {
    year: "2024",
    title: "Large-Scale Mendelian Randomization Study Reveals Circulating Blood-Based Proteomic Biomarkers for Psychopathology and Cognitive Task Performance",
    authors: "U. Bhattacharyya, J. John, M. Lam, T. Lencz",
    venue: "Biological Psychiatry · Society of Biological Psychiatry (SOBP) Annual Meeting",
    citation: "95(10):S282–S283 · Abstract 447",
    href: "https://doi.org/10.1016/j.biopsych.2024.02.946",
  },
  {
    year: "2024",
    title: "Integrative Analysis of Neuroimaging Phenotypes and Genetic Associations in the UK Biobank",
    authors: "M. Lam, U. Bhattacharyya, J. John, T. Lencz",
    venue: "Biological Psychiatry · Society of Biological Psychiatry (SOBP) Annual Meeting",
    citation: "95(10):S274 · Abstract 425",
    href: "https://www.biologicalpsychiatryjournal.com/article/S0006-3223(24)01025-4/fulltext",
  },
  {
    year: "2024",
    title: "Using Cognitive Phenotypes to Parse Biological Pathways in Schizophrenia",
    authors: "J. John, U. Bhattacharyya, T. Lencz, M. Lam",
    venue: "Biological Psychiatry · Society of Biological Psychiatry (SOBP) Annual Meeting",
    citation: "95(10):S264 · Abstract 402",
    href: "https://doi.org/10.1016/j.biopsych.2024.02.901",
  },
  {
    year: "2023",
    title: "Pleiotropic Meta-Analysis With Cognitive Endophenotypes Differentiates Neurodevelopmental, Synaptic, and Apoptotic Pathways in Schizophrenia",
    authors: "M. Lam, J. John, U. Bhattacharyya, T. Lencz",
    venue: "Neuropsychopharmacology · 62nd Annual Meeting of the American College of Neuropsychopharmacology (ACNP)",
    citation: "48(Suppl 1):373 · P532",
    href: "https://www.nature.com/articles/s41386-023-01757-3",
  },
  {
    year: "2023",
    title: "Proteomic Mendelian Randomization Reveals Novel Molecular Targets for Schizophrenia",
    authors: "J. John, U. Bhattacharyya, M. Lam, C.-Y. Chen, T. Lencz",
    venue: "Neuropsychopharmacology · 62nd Annual Meeting of the American College of Neuropsychopharmacology (ACNP)",
    citation: "48(Suppl 1):368–369 · P524",
    href: "https://www.nature.com/articles/s41386-023-01757-3",
  },
  {
    year: "2023",
    title: "Pleiotropic Meta-Analysis With Cognitive Endophenotypes Differentiates Neurodevelopmental, Synaptic, and Apoptotic Pathways in Schizophrenia",
    authors: "J. John, U. Bhattacharyya, T. Lencz, M. Lam",
    venue: "European Neuropsychopharmacology · World Congress of Psychiatric Genetics (WCPG)",
    citation: "75:S103–S104 · Abstract 89",
    href: "https://www.sciencedirect.com/science/article/pii/S0924977X23003462",
  },
  {
    year: "2023",
    title: "Proteomic Mendelian Randomization Reveals Novel Molecular Pathways in Schizophrenia",
    authors: "U. Bhattacharyya, J. John, C.-Y. Chen, M. Lam, T. Lencz",
    venue: "European Neuropsychopharmacology · World Congress of Psychiatric Genetics (WCPG)",
    citation: "75(Suppl 1):S265–S266 · F85",
    href: "https://doi.org/10.1016/j.euroneuro.2023.08.467",
  },
  {
    year: "2019",
    title: "Genome-Wide Association Study in Multiplex Consanguineous Pakistani Pedigrees With Schizophrenia and Bipolar Disorder",
    authors: "J. John, A. M. Johnson, Q. He, M. Christian, L. E. DeLisi, R. Joober, M.-P. Dubé, G. A. Rouleau, L. Xiong",
    venue: "Genetic Epidemiology · International Genetic Epidemiology Society (IGES) Annual Meeting",
    citation: "43(7):886 · Abstract 54",
    href: "https://onlinelibrary.wiley.com/doi/10.1002/gepi.22256",
  },
  {
    year: "2019",
    title: "Family-Based Rare Variant Study Supports the Cumulative Contribution of Neurodevelopmental Pathway Genes in Schizophrenia Etiology",
    authors: "B. K. Thelma, J. John, P. Kukshal, T. Bhatia, V. L. Nimgaonkar, S. N. Deshpande",
    venue: "European Neuropsychopharmacology · World Congress of Psychiatric Genetics (WCPG)",
    citation: "29:S1254–S1255 · SA120",
    href: "https://doi.org/10.1016/j.euroneuro.2018.08.342",
  },
  {
    year: "2019",
    title: "Rare and Ultra-Rare Variants in Familial Schizophrenia — An Update From India",
    authors: "B. K. Thelma, J. John, P. Kukshal, T. Bhatia, V. L. Nimgaonkar, S. N. Deshpande",
    venue: "European Neuropsychopharmacology · World Congress of Psychiatric Genetics (WCPG)",
    citation: "29:S744–S745",
    href: "https://doi.org/10.1016/j.euroneuro.2017.06.081",
  },
  {
    year: "2018",
    title: "A Putative Causal Variant in SLC38A8 Segregating With Foveal Hypoplasia in an Autosomal Recessive Family With Primary Exotropia",
    authors: "Z. Chaudhuri, J. John, A. Mukhopadhyay, S. Aneja, B. K. Thelma",
    venue: "Investigative Ophthalmology & Visual Science · Association for Research in Vision and Ophthalmology (ARVO) Annual Meeting",
    citation: "59(9):5787",
    href: "https://scholar.google.com/scholar?q=%22A+putative+causal+variant+in+SLC38A8+segregating+with+foveal+hypoplasia%22",
    note: "Linked to an exact-title scholarly search because the exported record did not provide a stable DOI.",
  },
  {
    year: "2017",
    title: "Association of Common and Rare Genetic Variants With Cognition in Schizophrenia",
    authors: "J. John, P. Kukshal, T. Bhatia, S. N. Deshpande, V. L. Nimgaonkar, B. K. Thelma",
    venue: "Canadian Journal of Biotechnology · NextGen Genomics, Biology, Bioinformatics and Technologies (NGBT 2017)",
    citation: "1(Special):89",
    href: "https://doi.org/10.24870/cjb.2017-a76",
  },
  {
    year: "2017",
    title: "Identification of a Novel Putative Variant in the EPHA2 Gene on Chromosome 1p in a Family With Exotropia by Whole-Exome Sequencing",
    authors: "Z. Chaudhuri, J. John, S. Aneja, B. K. Thelma",
    venue: "Investigative Ophthalmology & Visual Science · Association for Research in Vision and Ophthalmology (ARVO) Annual Meeting",
    citation: "58(8):3439",
    href: "https://scholar.google.com/scholar?q=%22Identification+of+a+novel+putative+variant+in+the+EPHA2+gene%22",
    note: "Linked to an exact-title scholarly search because the exported record did not provide a stable DOI.",
  },
  {
    year: "2017",
    title: "Exome Sequencing Identifies a Compound Heterozygous Mutation in a Gene From the Histone Methyltransferase Complex in Familial Schizophrenia",
    authors: "J. John, P. Kukshal, T. Bhatia, S. N. Deshpande, V. L. Nimgaonkar, B. K. Thelma",
    venue: "European Neuropsychopharmacology · 23rd World Congress of Psychiatric Genetics (WCPG)",
    citation: "27:S250–S251 · Su86",
    href: "https://scholar.google.com/scholar?q=%22Exome+Sequencing+Identifies+a+Compound+Heterozygous+Mutation%22+Jibin+John",
    note: "Presented at WCPG 2015 and indexed in the 2017 journal supplement.",
  },
  {
    year: "2017",
    title: "Findings From Continuing Gene Hunt in Families With Schizophrenia",
    authors: "B. K. Thelma, J. John, P. Kukshal, T. Bhatia, V. L. Nimgaonkar, S. N. Deshpande",
    venue: "European Neuropsychopharmacology · 24th World Congress of Psychiatric Genetics (WCPG)",
    citation: "27:S490",
    href: "https://doi.org/10.1016/j.euroneuro.2016.09.582",
  },
  {
    year: "2014",
    title: "Role of miRNA binding site SNPs in candidate genes in a North Indian schizophrenia cohort",
    authors: "J. John, S. N. Deshpande, V. L. Nimgaonkar, B. K. Thelma",
    venue: "Molecular Cytogenetics · International Conference of Human Genetics & 39th Indian Society of Human Genetics (ISHG) Annual Meeting",
    citation: "7(Suppl 1):P91 · Best Poster Award",
    href: "https://doi.org/10.1186/1755-8166-7-S1-P91",
  },
];

export const firstAuthorConferencePublications = conferencePublications.filter((item) => item.authors.startsWith("J. John"));

export const confirmedConferences = [
  { date: "9–11 May 2024", meeting: "Society of Biological Psychiatry Annual Meeting", location: "Austin, USA", role: "In-person poster presenter", title: "Using Cognitive Phenotypes to Parse Biological Pathways in Schizophrenia" },
  { date: "10–14 October 2023", meeting: "World Congress of Psychiatric Genetics", location: "Montreal, Canada", role: "Attendee · first-author abstract", title: "Pleiotropic Meta-Analysis With Cognitive Endophenotypes Differentiates Neurodevelopmental, Synaptic, and Apoptotic Pathways in Schizophrenia" },
  { date: "17–18 August 2020", meeting: "3rd Annual Healthy Brains, Healthy Lives Research Day", location: "Virtual · McGill", role: "Flash-talk presenter", title: "Family-based Genome-wide Association Study in Large Multigenerational Consanguineous Pedigrees With Psychotic and Affective Disorders From Pakistan" },
  { date: "15–19 October 2019", meeting: "American Society of Human Genetics Annual Meeting", location: "Houston, USA", role: "Poster presenter · registered attendee", title: "Contribution of Polygenic Risk Score for Psychiatric Disorders in Consanguineous Pakistani Pedigrees" },
  { date: "12–14 October 2019", meeting: "International Genetic Epidemiology Society Annual Meeting", location: "Houston, USA", role: "Poster presenter · registered attendee", title: "Genome-wide Association Study in Multiplex Consanguineous Pakistani Pedigrees With Schizophrenia and Bipolar Disorder" },
  { date: "March 2018", meeting: "43rd ISHG Annual Meeting: Population and Medical Genomics", location: "Hyderabad, India", role: "Competitive presentation", title: "Glutamatergic Dysfunction in Schizophrenia: Strong Evidence From Rare Variant Discoveries in Family-Based Studies" },
  { date: "2–4 October 2017", meeting: "NextGen Genomics, Biology, Bioinformatics and Technologies (NGBT 2017)", location: "Bhubaneswar, India", role: "Poster presenter · full travel scholarship", title: "Association of Common and Rare Genetic Variants With Cognition in Schizophrenia" },
  { date: "2–4 March 2017", meeting: "42nd ISHG Annual Meeting / International Symposium", location: "Bengaluru, India", role: "Poster presenter", title: "An Ultra-rare Heterozygous Variant Identified in a Tissue Inhibitor of Metalloproteinase Family Gene in Familial Schizophrenia" },
  { date: "3–5 March 2016", meeting: "41st ISHG Annual Meeting & International Conference", location: "Chennai, India", role: "Poster presenter", title: "Discovery of Putative Causal Variants in TAAR1 in Familial and Sporadic Schizophrenia Patients by Whole Exome Sequencing" },
  { date: "16–20 October 2015", meeting: "23rd World Congress of Psychiatric Genetics", location: "Toronto, Canada", role: "Poster presenter · ICMR travel grant", title: "Exome Sequencing Identifies a Compound Heterozygous Mutation in a Gene From the Histone Methyltransferase Complex in Familial Schizophrenia" },
  { date: "22–25 January 2014", meeting: "International Conference of Human Genetics & 39th ISHG Annual Meeting", location: "Ahmedabad, India", role: "Poster presenter · Best Poster Award", title: "Role of miRNA Binding Site SNPs in Candidate Genes in a North Indian Schizophrenia Cohort" },
];

export const coauthoredConferenceContributions = [
  { year: "2026", meeting: "64th Annual Meeting of the American College of Neuropsychopharmacology (ACNP)", title: "Uncovering Latent Brain Imaging Phenotypes Leveraging Genetic Pleiotropy" },
  { year: "2026", meeting: "Society of Biological Psychiatry (SOBP) Annual Meeting", title: "A Pleiotropic Map of Brain Imaging Genetics Reveals Convergent Mechanisms Across Psychiatric and Neurological Traits" },
  { year: "2026", meeting: "Society of Biological Psychiatry (SOBP) Annual Meeting", title: "Parsing Bipolar Disorder Biology via Pleiotropic Insights With Cognitive Traits" },
  { year: "2025", meeting: "World Congress of Psychiatric Genetics (WCPG)", title: "A Pleiotropic Map of Brain Imaging Genetics Reveals Latent Genetic Architecture, Novel Biological Insights, and Strengthened Associations With Psychopathology" },
  { year: "2024", meeting: "63rd Annual Meeting of the American College of Neuropsychopharmacology (ACNP)", title: "Multivariate Imaging Genetics Reveals Novel Insights Into Psychopathology" },
  { year: "2024", meeting: "World Congress of Psychiatric Genetics (WCPG)", title: "Integrative Analysis of Neuroimaging Phenotypes and Genetic Associations in the UK Biobank" },
  { year: "2024", meeting: "Society of Biological Psychiatry (SOBP) Annual Meeting", title: "Integrative Analysis of Neuroimaging Phenotypes and Genetic Associations in the UK Biobank" },
  { year: "2024", meeting: "Society of Biological Psychiatry (SOBP) Annual Meeting", title: "Large-Scale Mendelian Randomization Study Reveals Circulating Blood-Based Proteomic Biomarkers for Psychopathology and Cognitive Task Performance" },
  { year: "2023", meeting: "62nd Annual Meeting of the American College of Neuropsychopharmacology (ACNP)", title: "Pleiotropic Meta-Analysis With Cognitive Endophenotypes Differentiates Neurodevelopmental, Synaptic, and Apoptotic Pathways in Schizophrenia" },
  { year: "2023", meeting: "62nd Annual Meeting of the American College of Neuropsychopharmacology (ACNP)", title: "Proteomic Mendelian Randomization Reveals Novel Molecular Targets for Schizophrenia" },
  { year: "2023", meeting: "World Congress of Psychiatric Genetics (WCPG)", title: "Proteomic Mendelian Randomization Reveals Novel Molecular Pathways in Schizophrenia" },
  { year: "2019", meeting: "World Congress of Psychiatric Genetics (WCPG)", title: "Family-Based Rare Variant Study Supports the Cumulative Contribution of Neurodevelopmental Pathway Genes in Schizophrenia Etiology" },
  { year: "2018", meeting: "Association for Research in Vision and Ophthalmology (ARVO) Annual Meeting · Honolulu", title: "A Putative Causal Variant in SLC38A8 Segregating With Foveal Hypoplasia" },
  { year: "2018", meeting: "American Association for Pediatric Ophthalmology and Strabismus (AAPOS) Annual Meeting · Washington, DC", title: "Whole Exome Sequencing in Familial Primary Concomitant Exotropia" },
  { year: "2017", meeting: "World Congress of Psychiatric Genetics · Orlando", title: "Rare and Ultra-Rare Variants in Familial Schizophrenia — An Update From India" },
  { year: "2017", meeting: "American Society of Human Genetics (ASHG) Annual Meeting · Orlando", title: "Rare Heterozygous Mutation in a Glutamate Receptor Gene Segregating in a Schizophrenia Family" },
  { year: "2017", meeting: "Association for Research in Vision and Ophthalmology (ARVO) Annual Meeting · Baltimore", title: "Identification of a Novel Putative Variant in EPHA2 in Familial Primary Concomitant Exotropia" },
  { year: "2016", meeting: "Delhi Ophthalmological Society Annual Meeting · New Delhi", title: "Genetics and Strabismus · invited lecture by the presenting author" },
  { year: "2016", meeting: "38th European Strabismological Association · Budapest", title: "Pedigree Analysis of Concomitant Horizontal Strabismus in North India · oral paper by the presenting author" },
  { year: "2016", meeting: "AAPOS–SPOSI Joint Conference · Jaipur", title: "Whole Exome Sequencing on an Autosomal Dominant Family With Exotropia in North India" },
  { year: "2016", meeting: "World Congress of Psychiatric Genetics · Jerusalem", title: "Findings From Continuing Gene Hunt in Families With Schizophrenia" },
  { year: "2015", meeting: "World Congress of Psychiatric Genetics · Toronto", title: "Association of a Promoter SNP rs60266355 of TAAR1 in a North Indian Schizophrenia Cohort" },
  { year: "2015", meeting: "12th World Congress of Biological Psychiatry · World Federation of Societies of Biological Psychiatry (WFSBP) · Athens", title: "Exome Sequencing Identifies a Novel Risk Variant in a Dopamine Regulation Gene in Familial Schizophrenia" },
];

type ExperienceDetailSection = {
  title: string;
  items: string[];
};

type Experience = {
  period: string;
  role: string;
  organization: string;
  location: string;
  institutions: {
    name: string;
    href: string;
    logo: string;
  }[];
  points: string[];
  detailSections: ExperienceDetailSection[];
};

export const experiences: Experience[] = [
  {
    period: "FEB-2023–PRESENT",
    role: "Research Scientist",
    organization: "Institute of Behavioral Science, Feinstein Institutes for Medical Research · Division of Psychiatry Research, Zucker Hillside Hospital · Northwell Health",
    location: "Manhasset & Glen Oaks, New York, USA",
    institutions: [
      { name: "Feinstein Institutes for Medical Research", href: "https://feinstein.northwell.edu/", logo: "/institutions/feinstein.jpg" },
      { name: "Zucker Hillside Hospital · Northwell Health", href: "https://www.northwell.edu/behavioral-health/zucker-hillside-hospital", logo: "/institutions/northwell.jpg" },
    ],
    points: [
      "Develops reproducible population-scale statistical-genetics, imaging-genetics and multi-omics workflows.",
      "Integrates genomic, proteomic, transcriptomic, cognitive and brain-imaging evidence across large collaborative studies.",
    ],
    detailSections: [
      {
        title: "Role scope",
        items: [
          "Designs, executes and validates large-scale computational analyses for psychiatric genomics, cognitive genomics, imaging genetics and multi-omics research.",
          "Works with thousands of GWAS datasets and millions of variant-level records across UK Biobank, UKB-PPP, deCODE, ABCD, PGC, FinnGen and related resources.",
          "Translates scientific questions into executable analysis plans, documented workflows, quality-control rules and interpretable research outputs.",
        ],
      },
      {
        title: "Major analytical programs",
        items: [
          "Co-developed the DIMPLE-GWAS framework and applied it to approximately 4,000 imaging-derived phenotypes in about 33,000 UK Biobank participants, deriving 25 latent genetic phenotypes, 104 novel genome-wide significant loci and replication evidence in ABCD.",
          "Implemented two-sample Mendelian-randomization workflows across 4,719 deCODE and 2,923 UKB-PPP proteins and major psychiatric or cognitive outcomes, producing 113 Bonferroni-significant associations, including 46 described as novel in the analysis.",
          "Ran pleiotropic meta-analysis across schizophrenia and cognitive traits, resolving hundreds of pleiotropic loci and using functional analysis to distinguish neurodevelopmental, synaptic and apoptotic mechanisms.",
          "Investigated shared and disorder-specific schizophrenia–bipolar genetic architecture using bidirectional mtCOJO, Genomic SEM, genetic correlation, pleiotropic analysis and functional interpretation.",
          "Performed colocalization, multivariable Mendelian randomization and cross-tissue validation linking brain-imaging and plasma-proteomic signals with brain-tissue proteomic and transcriptomic evidence.",
          "Contributed statistical simulations and interpretation for work examining the combined implications of monogenic and polygenic risk in preimplantation genetic testing.",
        ],
      },
      {
        title: "Methods, computing & delivery",
        items: [
          "Builds GWAS meta-analysis, post-GWAS, polygenic-score, MAGMA, FUMA, PLEIO, Genomic SEM, mtCOJO, colocalization and Mendelian-randomization workflows.",
          "Uses Python, R, Bash, Linux, bcftools, METAL, PLINK, GCTA, SLURM, Docker and Google Cloud Platform for scalable analysis.",
          "Implements schema validation, harmonization, automated QC, logging, provenance tracking and reproducible output organization.",
          "Produces scientific visualizations, structured summaries and biologically grounded interpretation for multidisciplinary research teams.",
        ],
      },
      {
        title: "Collaboration & mentoring",
        items: [
          "Collaborates with statistical geneticists, psychiatrists, computational scientists, trainees and external academic or industry partners.",
          "Supports study design, analytical review, troubleshooting, interpretation and the preparation of research communications.",
          "Mentors junior scientists and medical trainees in GWAS, statistical genetics, workflow design and reproducible analysis practice.",
        ],
      },
    ],
  },
  {
    period: "APR-2022–DEC-2022",
    role: "Scientist — Bioinformatics",
    organization: "Semantic Web India Pvt. Ltd.",
    location: "Bengaluru, India",
    institutions: [
      { name: "Semantic Web Tech", href: "https://www.semanticweb.tech/", logo: "/institutions/semantic-web-tech.png" },
    ],
    points: [
      "Built bioinformatics and evidence-integration components for a cloud clinical-genomics platform.",
      "Combined ACMG/AMP evidence, patient phenotypes and biomedical knowledge for variant prioritization.",
    ],
    detailSections: [
      {
        title: "Product responsibility",
        items: [
          "Developed the bioinformatics backend of a cloud software-as-a-service platform for exome and genome analysis in rare Mendelian disease and cancer-genomics workflows.",
          "Converted clinical-genomics requirements into computational rules, data models, APIs and evidence-processing components.",
          "Worked across scientific and software teams on workflow logic, schemas, provenance and technical communication.",
        ],
      },
      {
        title: "Variant interpretation systems",
        items: [
          "Designed and implemented automated ACMG/AMP-oriented germline variant-classification logic to reduce repetitive manual evidence handling.",
          "Built HPO-based phenotype-to-gene and phenotype-to-disease matching, combining patient phenotype similarity with variant-level evidence for candidate prioritization.",
          "Developed filtering and annotation workflows using VEP, ANNOVAR and structured clinical-genomics evidence.",
          "Supported systematic review of variant, gene, disease, phenotype and therapy relationships for downstream expert interpretation.",
        ],
      },
      {
        title: "Knowledge graphs & data engineering",
        items: [
          "Modeled biomedical knowledge in RDF and queried it through SPARQL to connect variants with genes, phenotypes, diseases, clinical evidence and therapeutics.",
          "Integrated ClinVar, OMIM, HPO, Orphanet, DECIPHER, ClinGen, GenCC, LOVD, COSMIC, CIViC, PharmGKB, DrugCentral and DisGeNET.",
          "Used Python, RDFLib, SPARQL, APIs, Amazon S3 and EC2 to build and deploy scalable data-processing components.",
        ],
      },
    ],
  },
  {
    period: "MAY-2021–APR-2022",
    role: "Computational Laboratory Manager",
    organization: "National Genomic Core (NGC) · Centre for DNA Fingerprinting and Diagnostics (CDFD)",
    location: "Hyderabad, India",
    institutions: [
      { name: "Centre for DNA Fingerprinting and Diagnostics", href: "https://cdfd.org.in/", logo: "/institutions/cdfd.png" },
      { name: "National Genomic Core · CDFD", href: "https://ngc.cdfd.org.in/", logo: "/institutions/cdfd.png" },
    ],
    points: [
      "Managed end-to-end computational operations for an institutional next-generation sequencing facility.",
      "Delivered, supervised and taught NGS workflows for clinical, agricultural and microbiological projects.",
    ],
    detailSections: [
      {
        title: "Facility & operational leadership",
        items: [
          "Led day-to-day computational-laboratory operations, project intake, NGS data management, workflow QC, delivery tracking and scientific-computing support.",
          "Maintained analysis infrastructure, standardized workflows, organized project data and supported reproducible handoff of results.",
          "Prepared and maintained operational procedures and coordinated computational work with the sequencing and wet-laboratory teams.",
          "Managed, guided and supervised junior computational staff across multiple concurrent analysis projects.",
        ],
      },
      {
        title: "NGS & clinical-genomics workflows",
        items: [
          "Built, customized and ran pipelines for clinical exomes, whole-exome data, targeted capture and germline variant analysis.",
          "Performed alignment, variant calling, annotation, filtering, phenotype-aware prioritization and evidence-based interpretation support.",
          "Supported copy-number-variant annotation and review using AnnotSV, CNV-ClinViewer and CNVannotator.",
          "Delivered RNA-seq, de novo transcriptome, ChIP-seq, 16S rRNA, bacterial-genomics, de novo genome-assembly and microbial-analysis projects.",
          "Worked with Illumina short-read data across clinical, agricultural, microbiological and research applications.",
        ],
      },
      {
        title: "Long-read & pathogen analysis",
        items: [
          "Established the facility's first Oxford Nanopore long-read analysis workflow.",
          "Developed Nanopore pipelines for SNV and indel calling, bacterial genome analysis and de novo assembly.",
          "Supported SARS-CoV-2 sequencing and pathogen-genomics analysis during the COVID-19 period.",
        ],
      },
      {
        title: "Collaboration & training",
        items: [
          "Translated requirements from clinicians, faculty, agricultural scientists, microbiologists and wet-lab researchers into analysis plans and deliverables.",
          "Delivered workshops for clinicians, faculty, students and technical staff on clinical-exome analysis, alignment, variant calling, prioritization and interpretation.",
          "Provided RNA-seq training and hands-on guidance in workflow execution, QC and reproducible analysis.",
        ],
      },
    ],
  },
  {
    period: "JAN-2019–APR-2021",
    role: "Postdoctoral Fellow / Research Associate",
    organization: "Douglas Hospital Research Centre · Department of Psychiatry, McGill University",
    location: "Montreal, Canada",
    institutions: [
      { name: "Douglas Research Centre", href: "https://douglas.research.mcgill.ca/", logo: "/institutions/douglas.png" },
      { name: "Department of Psychiatry · McGill University", href: "https://www.mcgill.ca/psychiatry/", logo: "/institutions/mcgill.jpg" },
    ],
    points: [
      "Advanced family-based GWAS, polygenic-risk and systems-genomics analyses in psychiatric genetics.",
      "Automated SNP-array and exome workflows while supporting students, technicians and collaborative interpretation.",
    ],
    detailSections: [
      {
        title: "Research program",
        items: [
          "Continued a psychiatric-genetics program focused on schizophrenia, bipolar disorder and related psychotic or affective phenotypes in large multigenerational consanguineous Pakistani pedigrees.",
          "Analyzed extended-family and unrelated case-control data to identify population-specific and cross-population genetic risk signals.",
          "Connected association results with polygenic and systems-level evidence to improve biological interpretation.",
        ],
      },
      {
        title: "Analytical responsibilities",
        items: [
          "Managed SNP-microarray and exome QC, phasing, imputation, association testing, polygenic-risk scoring and post-GWAS annotation.",
          "Used PLINK, PRSice-2, FUMA, R, Linux and custom Python utilities to standardize repeatable analysis procedures.",
          "Evaluated psychiatric polygenic-risk burden in families and integrated associated loci with pathway and systems-genomics information.",
          "Maintained organized analysis records, figures and interpretable summaries for multidisciplinary review.",
        ],
      },
      {
        title: "Fellowship, collaboration & mentoring",
        items: [
          "Received a Healthy Brains for Healthy Lives postdoctoral fellowship supporting the research program.",
          "Worked with investigators across McGill, Douglas Hospital Research Centre and collaborating psychiatric-genetics groups.",
          "Supervised or supported students and laboratory technicians in data processing, QC, statistical analysis and interpretation.",
        ],
      },
    ],
  },
  {
    period: "JUL-2018–DEC-2018",
    role: "Postdoctoral Researcher / Research Associate",
    organization: "Centre de recherche de l'Institut universitaire en santé mentale de Montréal (CR-IUSMM) · Université de Montréal",
    location: "Montreal, Canada",
    institutions: [
      { name: "CR-IUSMM", href: "https://criusmm.ciusss-estmtl.gouv.qc.ca/en", logo: "/institutions/cr-iusmm.png" },
      { name: "Université de Montréal", href: "https://www.umontreal.ca/en/", logo: "/institutions/umontreal.png" },
    ],
    points: [
      "Established the family-based statistical-genetics workflow for a South Asian psychiatric-genetics program.",
      "Integrated pedigree structure, SNP-array data, imputation and association analysis across complex family datasets.",
    ],
    detailSections: [
      {
        title: "Research scope",
        items: [
          "Studied schizophrenia, bipolar disorder and related phenotypes in ten large multigenerational consanguineous Pakistani pedigrees and comparison samples.",
          "Developed an analysis strategy appropriate for extended-family structure, population background and heterogeneous psychiatric phenotypes.",
          "Combined pedigree information with genotype and phenotype data to investigate shared and disorder-specific risk.",
        ],
      },
      {
        title: "Methods & workflow development",
        items: [
          "Performed SNP-array QC, sample and relationship checks, phasing, imputation and family-based association analysis.",
          "Processed exome and genotyping data from extended pedigrees and unrelated cases for rare- and common-variant investigation.",
          "Automated recurring data-processing and QC tasks using Linux, R, PLINK and custom scripting.",
          "Prepared analysis-ready datasets and structured results for subsequent polygenic-risk and systems-genomics work.",
        ],
      },
      {
        title: "Institutional transition",
        items: [
          "Worked within CR-IUSMM and Université de Montréal before the research program continued through the Douglas Hospital Research Centre and McGill University phase.",
          "Collaborated with psychiatric researchers, clinicians and statistical-genetics partners across Montreal institutions.",
        ],
      },
    ],
  },
  {
    period: "JAN-2017–JUN-2018",
    role: "Postdoctoral Researcher",
    organization: "University of Delhi · Department of Genetics",
    location: "New Delhi, India",
    institutions: [
      { name: "Department of Genetics · University of Delhi", href: "https://www.genetics.du.ac.in/", logo: "/institutions/delhi.png" },
      { name: "University of Delhi", href: "https://www.du.ac.in/", logo: "/institutions/delhi.png" },
    ],
    points: [
      "Developed automated whole-exome and RNA-seq pipelines for human-disease research.",
      "Served as an NGS technical resource across psychiatric, ophthalmic and autoimmune-disease projects.",
    ],
    detailSections: [
      {
        title: "Technical leadership",
        items: [
          "Developed, maintained and documented automated whole-exome and RNA-seq workflows spanning raw-data QC, alignment, variant or expression analysis, annotation and interpretation.",
          "Served as the laboratory's technical resource for NGS project planning, data processing, troubleshooting and reproducible delivery.",
          "Supported Linux-based research computing and standardized analysis procedures across multiple collaborative projects.",
        ],
      },
      {
        title: "Disease-focused projects",
        items: [
          "Analyzed whole-exome data from familial and sporadic psychiatric-disorder studies, including schizophrenia and tardive dyskinesia.",
          "Prioritized candidate variants in familial strabismus and supported segregation and biological-evidence review.",
          "Analyzed RNA-seq data from rheumatoid-arthritis patient fibroblasts using differential-expression and pathway approaches.",
          "Integrated variant, expression, pathway and systems-genomics evidence across distinct human-disease questions.",
        ],
      },
      {
        title: "Experimental integration & training",
        items: [
          "Designed CRISPR guide RNAs and supported cloning and validation experiments alongside computational analysis.",
          "Advised junior researchers on experimental-to-computational handoff, NGS QC, analysis execution and interpretation.",
          "Trained researchers from the laboratory and collaborating institutions in exome, genotyping and genomic-analysis workflows.",
        ],
      },
    ],
  },
  {
    period: "NOV-2011–DEC-2016",
    role: "PhD Researcher · CSIR Junior/Senior Research Fellow",
    organization: "University of Delhi · Department of Genetics",
    location: "New Delhi, India",
    institutions: [
      { name: "Department of Genetics · University of Delhi", href: "https://www.genetics.du.ac.in/", logo: "/institutions/delhi.png" },
      { name: "University of Delhi", href: "https://www.du.ac.in/", logo: "/institutions/delhi.png" },
    ],
    points: [
      "Investigated rare and ultra-rare genetic variation in multiplex families with schizophrenia.",
      "Built the laboratory's whole-exome analysis capability while combining computational and experimental genetics.",
    ],
    detailSections: [
      {
        title: "Doctoral research program",
        items: [
          "Designed and executed rare-variant and association studies in multiplex schizophrenia families and independent cohorts.",
          "Used whole-exome sequencing, targeted screening, Sanger confirmation, genotyping, segregation analysis, pathway analysis and biological-evidence integration.",
          "Investigated candidate mechanisms involving TAAR1, TIMP2, PTPRA, miRNA-binding-site variants and oligogenic neurodevelopmental gene networks.",
          "Worked with clinicians on study design, participant recruitment, phenotype review, sample collection and interpretation of candidate genetic findings.",
        ],
      },
      {
        title: "Computational development",
        items: [
          "Built and maintained the laboratory's automated whole-exome analysis pipeline from raw sequence QC through alignment, variant calling, annotation, filtering and prioritization.",
          "Managed high-throughput sequencing datasets in Linux and HPC environments and developed scripts to reduce manual processing.",
          "Administered Linux servers, organized sequencing-vendor data transfers and maintained reproducible project structures and backups.",
          "Progressed from biotechnology and experimental genetics into self-directed Linux, Bash, Python and R analysis as the research became data intensive.",
        ],
      },
      {
        title: "Experimental genetics",
        items: [
          "Performed PCR, RFLP, primer design, cloning, site-directed mutagenesis and Sanger-based validation.",
          "Worked with mammalian cell culture and functional follow-up strategies for candidate genetic findings.",
          "Developed experience in induced pluripotent stem-cell culture, neuronal differentiation and associated quality-control procedures.",
          "Supported CRISPR guide design and experimental planning linking genomic findings with laboratory validation.",
        ],
      },
      {
        title: "Research operations & mentoring",
        items: [
          "Coordinated laboratory procurement, sequencing services, computational resources and day-to-day project requirements.",
          "Supported research proposals, project documentation, data interpretation and scientific communication.",
          "Trained scientists, clinicians and students in NGS concepts, whole-exome analysis and variant interpretation.",
        ],
      },
    ],
  },
  {
    period: "AUG-2012–DEC-2012",
    role: "Academic Health Science Fellow (Concurrent Doctoral Fellowship)",
    organization: "University of Pittsburgh · NIH Fogarty International Center Tri-National Training Program in Psychiatric Genetics",
    location: "Pittsburgh, USA",
    institutions: [
      { name: "University of Pittsburgh", href: "https://www.pitt.edu/", logo: "/institutions/pitt.png" },
      { name: "NIH Fogarty International Center", href: "https://www.fic.nih.gov/", logo: "/institutions/fogarty.png" },
    ],
    points: [
      "Completed international training connecting psychiatric genetics, stem-cell biology and translational research.",
      "Gained hands-on experience with human induced pluripotent stem cells and neuronal differentiation.",
    ],
    detailSections: [
      {
        title: "Training program",
        items: [
          "Received an NIH Fogarty-supported international fellowship in psychiatric genetics and academic health science.",
          "Participated in multidisciplinary training connecting clinical psychiatry, human genetics, experimental models and translational research.",
        ],
      },
      {
        title: "Hands-on laboratory experience",
        items: [
          "Cultured and maintained human induced pluripotent stem cells in the university's stem-cell research environment.",
          "Supported differentiation of hiPSCs toward neuronal lineages and monitored culture quality throughout the process.",
          "Performed routine quality-control assays, experimental documentation and cell-culture maintenance.",
          "Developed practical experience linking psychiatric-genetic findings with functional cellular models.",
        ],
      },
    ],
  },
  {
    period: "DEC-2009–MAY-2010",
    role: "MSc Dissertation Researcher",
    organization: "Rajiv Gandhi Centre for Biotechnology",
    location: "Thiruvananthapuram, India",
    institutions: [
      { name: "BRIC–Rajiv Gandhi Centre for Biotechnology", href: "https://rgcb.res.in/", logo: "/institutions/rgcb.png" },
    ],
    points: [
      "Completed early human-genetics research during MSc biotechnology training.",
      "Investigated candidate-gene polymorphisms in a South Indian schizophrenia population.",
    ],
    detailSections: [
      {
        title: "Dissertation research",
        items: [
          "Conducted an association study of MBD2 and MTHFR gene polymorphisms with schizophrenia in a South Indian population.",
          "Worked with genetic and phenotype data to evaluate candidate-gene associations in a case-control research setting.",
          "Developed an early foundation in psychiatric genetics, molecular evidence and research documentation that led into doctoral work in human genetics.",
        ],
      },
    ],
  },
];

export const education = [
  { year: "2020", degree: "Professional Development Certificate in Data Science and Machine Learning", institutions: [{ name: "McGill University", href: "https://www.mcgill.ca/" }], detail: "Professional training in statistical learning, machine-learning foundations and research data analysis." },
  { year: "2017", degree: "PhD in Genetics", institutions: [{ name: "University of Delhi", href: "https://www.du.ac.in/" }], detail: "Thesis: Identification of rare and ultra-rare exonic variants in multiplex families with schizophrenia using contemporary genomic tools." },
  { year: "2010", degree: "MSc in Biotechnology", institutions: [{ name: "Loyola College", href: "https://www.loyolacollege.edu/" }, { name: "University of Madras", href: "https://www.unom.ac.in/" }], detail: "Dissertation research at the Rajiv Gandhi Centre for Biotechnology on MBD2 and MTHFR polymorphisms in schizophrenia." },
  { year: "2008", degree: "BSc in Biotechnology", institutions: [{ name: "J.J. College of Arts and Science", href: "https://www.jjcoll.in/" }, { name: "Bharathidasan University", href: "https://www.bdu.ac.in/" }], detail: "Undergraduate training in biotechnology and biological sciences." },
];

export const professionalMemberships = [
  { acronym: "ASHG", name: "American Society of Human Genetics", area: "Human genetics and genomics" },
  { acronym: "ISPG", name: "International Society of Psychiatric Genetics", area: "Psychiatric genetics" },
  { acronym: "ISHG", name: "Indian Society of Human Genetics", area: "Human genetics" },
];

export const awards = [
  { year: "2019", title: "Healthy Brains for Healthy Lives Postdoctoral Fellowship", organization: "McGill University / HBHL" },
  { year: "2017", title: "NGBT Full Travel Scholarship", organization: "SciGenom Research Foundation" },
  { year: "2015", title: "International Conference Travel Grant", organization: "Indian Council of Medical Research" },
  { year: "2014", title: "Best Poster Award", organization: "39th Annual Meeting, Indian Society of Human Genetics" },
  { year: "2014–2016", title: "Senior Research Fellowship", organization: "Council of Scientific and Industrial Research" },
  { year: "2012", title: "Academic Health Science / Psychiatric-Genetics Training Fellowship", organization: "Fogarty International Center, U.S. NIH" },
  { year: "2012–2013", title: "Junior Research Fellowship", organization: "Council of Scientific and Industrial Research" },
  { year: "2011", title: "CSIR–UGC National Eligibility Test", organization: "CSIR–UGC · 41st rank reported" },
  { year: "2011", title: "Meritorious Research Fellowship", organization: "University Grants Commission" },
];

export const learning = [
  { year: "2026", area: "Applied AI & professional learning", title: "Super 30 Applied AI Program", provider: "Euron.one · Six-month immersive cohort", application: "Python, LLM applications, digital tools and hands-on AI project development" },
  { year: "2024", area: "Generative AI", title: "Complete Generative AI Course With LangChain and Hugging Face", provider: "Udemy · November 2024", application: "Generative-AI application development, orchestration and foundation-model tooling" },
  { year: "2024", area: "MLOps", title: "Complete MLOps Bootcamp With 10+ End-to-End ML Projects", provider: "Udemy · November 2024", application: "Machine-learning lifecycle, reproducible deployment workflows and project-based practice" },
  { year: "2024", area: "Data science & machine learning", title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp", provider: "Udemy · November 2024", application: "Data-science workflows, supervised learning, deep learning and natural-language processing" },
  { year: "2024", area: "Python programming", title: "Mastering Python", provider: "iNeuron · June 2024", application: "Applied Python programming and problem-solving" },
  { year: "2024", area: "Machine learning", title: "Machine Learning Bootcamp", provider: "iNeuron · March 2024", application: "Model development across supervised and unsupervised learning workflows" },
  { year: "2022", area: "Full-stack data science", title: "Full Stack Data Science — 3 PM IST (February Batch)", provider: "iNeuron · May–July 2022", application: "End-to-end data science, machine learning and project-based computational training" },
  { year: "2020", area: "Data science & machine learning", title: "Professional Development Certificate in Data Science and Machine Learning", provider: "McGill University", application: "Statistical learning, machine-learning foundations and research data analysis" },
  { year: "2020", area: "Programming foundation", title: "Complete Python Bootcamp: Go From Zero to Hero in Python 3", provider: "Udemy", application: "Python automation and genomic-data pipelines" },
  { year: "2020", area: "Data science foundation", title: "R Programming A–Z: R for Data Science With Real Exercises", provider: "Udemy", application: "Statistical analysis and scientific visualization" },
  { year: "2020", area: "Linux & automation", title: "BASH Programming Course: Master the Linux Command Line", provider: "Udemy", application: "HPC and command-line workflow automation" },
  { year: "2018", area: "Linux & automation", title: "Intro to Linux Shell Scripting", provider: "Udemy", application: "Reproducible command-line analysis and workflow scripting" },
  { year: "2012", area: "Psychiatric genetics", title: "Tri-National Training Program in Psychiatric Genetics", provider: "University of Pittsburgh · NIH Fogarty International Center", application: "Multidisciplinary training across psychiatric genetics, experimental models and translational research" },
  { year: "2012", area: "Stem-cell biology", title: "Stem Cell Culturing and Maintenance", provider: "University of Pittsburgh Stem Cell Core", application: "Human iPSC culture, neuronal differentiation and quality control" },
  { year: "2011", area: "Epigenetics", title: "XX Winter School on Epigenetics and DNA Methylation Analysis", provider: "Madurai Kamaraj University · 16–30 November", application: "Epigenetic mechanisms and DNA-methylation analysis" },
];

export const researchPrograms = [
  {
    title: "DIMPLE-GWAS & imaging genetics",
    metric: "~4,000 phenotypes · ~33,000 participants",
    copy: "Multivariate and pleiotropic analysis of UK Biobank imaging-derived phenotypes, deriving latent genetic phenotypes, novel loci and replication evidence in ABCD.",
    publication: {
      venue: "medRxiv",
      brand: "medrxiv",
      impact: "25 latent phenotypes · 104 novel loci",
      href: "https://doi.org/10.64898/2026.04.27.26351743",
    },
  },
  {
    title: "Proteomic Mendelian randomization",
    metric: "4,719 deCODE · 2,923 UKB-PPP proteins",
    copy: "Two-sample MR across circulating proteins and psychiatric/cognitive GWAS, followed by pathway, protein-interaction and drug-target interpretation.",
    publication: {
      venue: "JAMA Psychiatry",
      brand: "jama",
      impact: "113 Bonferroni-significant associations · 46 novel",
      href: "https://doi.org/10.1001/jamapsychiatry.2025.0033",
    },
  },
  {
    title: "Schizophrenia–cognition pleiotropy",
    metric: "Pleiotropy · pathways · loci",
    copy: "Using cognitive endophenotypes to improve locus discovery and resolve neurodevelopmental, synaptic and apoptotic biology in schizophrenia.",
    publication: {
      venue: "Biological Psychiatry",
      brand: "biological-psychiatry",
      impact: "768 pleiotropic loci · 166 novel",
      href: "https://doi.org/10.1016/j.biopsych.2025.02.890",
    },
  },
  {
    title: "Ulcerative-colitis exome sequencing",
    metric: "160 cases · 379 controls · whole-exome sequencing",
    copy: "Gene-based rare-variant analysis in an Indian cohort, identifying candidate genes linked to epithelial integrity, DNA repair, intracellular trafficking and immune signaling.",
    publication: {
      venue: "Human Genomics",
      brand: "human-genomics",
      impact: "160 cases · 379 controls",
      href: "https://doi.org/10.1186/s40246-026-00994-z",
    },
  },
  {
    title: "TIMP2 rare variants in schizophrenia",
    metric: "First author · 5-generation family · 370-exome cohort",
    copy: "Whole-exome sequencing, segregation and linkage analysis in a multiplex family, followed by rare-variant screening in an independent schizophrenia cohort.",
    publication: {
      venue: "Schizophrenia Bulletin",
      brand: "schizophrenia-bulletin",
      impact: "5-generation family · 370-exome cohort",
      href: "https://doi.org/10.1093/schbul/sbx196",
    },
  },
  { title: "Schizophrenia–bipolar architecture", metric: "Shared and disorder-specific genetics", copy: "Cross-disorder work integrating pleiotropic analysis, conditional GWAS, Genomic SEM, genetic correlation and functional interpretation." },
  { title: "Rare-variant psychiatric genetics", metric: "Families · exomes · biological convergence", copy: "Family-based studies of TAAR1, TIMP2, PTPRA and oligogenic neurodevelopmental genes in schizophrenia." },
  { title: "Clinical genomics & knowledge systems", metric: "Exome · CNV · RDF/SPARQL", copy: "Germline evidence review, phenotype-aware prioritization, CNV annotation and cloud-based biomedical knowledge integration." },
];

export const skillGroups = [
  { title: "Statistical genetics & population genomics", intro: "Population-scale analysis of complex-trait architecture.", items: ["GWAS and family-based association", "GWAS meta-analysis", "Pleiotropic and multi-trait analysis", "SNP heritability and genetic correlation", "LDSC and Genomic SEM", "Polygenic risk scores", "Conditional analysis and mtCOJO", "Rare-variant burden testing"] },
  { title: "Post-GWAS & multi-omics", intro: "Connecting associated variants to genes, proteins, tissues and mechanisms.", items: ["Fine-mapping and colocalization", "Mendelian randomization", "pQTL, eQTL and sQTL integration", "Gene mapping and prioritization", "MAGMA and gene-set analysis", "Tissue and cell-type enrichment", "Single-cell integration", "Pathway and network analysis"] },
  { title: "NGS, clinical & functional genomics", intro: "End-to-end sequence analysis and evidence-based interpretation.", items: ["Whole-exome and whole-genome analysis", "Germline variant calling and annotation", "Clinical-exome analysis", "Phenotype-aware prioritization", "CNV annotation and review", "Bulk RNA-seq", "Single-cell RNA-seq / ATAC-seq", "ChIP-seq and epigenomics"] },
  { title: "Microbial & comparative genomics", intro: "Broader sequencing expertise developed across institutional projects.", items: ["Bacterial genome assembly", "16S, 18S and ITS analysis", "Shotgun metagenomics", "Taxonomic and functional profiling", "Oxford Nanopore analysis", "Pathogen and SARS-CoV-2 workflows"] },
  { title: "Research computing & pipelines", intro: "Scalable, reproducible analysis on local, HPC and cloud systems.", items: ["Python, R and Bash", "Linux and SLURM", "GCP and AWS", "Docker and containerization", "Parallel processing", "Schema validation and QC", "Logging and provenance", "Git and reproducible delivery"] },
  { title: "Scientific data & applied AI", intro: "Structured evidence systems with domain review and traceability.", items: ["pandas, Polars, NumPy and PyArrow", "scikit-learn", "RDF and SPARQL", "Biomedical knowledge graphs", "LLM API integration", "Structured JSON extraction", "Retrieval and agent prototypes", "Human-in-the-loop validation"] },
];
