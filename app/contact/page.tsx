import type { Metadata } from "next";
import { PageHero, Site } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Contact | Jibin John, PhD", description: "Contact Dr. Jibin John regarding research collaboration, statistical genetics, bioinformatics and genomic data analysis." };

export default function ContactPage() {
  return <Site active="Contact"><PageHero eyebrow="Contact" title="Let’s connect around a scientific question." intro="I welcome conversations about research collaborations and projects involving statistical genetics, genomic-data analysis, multi-omics, research software, reproducible pipelines and scientific training." />
    <section className="section page-shell contact-grid"><div className="contact-primary"><p className="eyebrow"><span />Direct contact</p><h2>Start with a short description of the question, data and intended output.</h2><a className="email-card" href="mailto:johnjibinv@gmail.com?subject=Research%20collaboration%20or%20project"><span>Email</span><strong>johnjibinv@gmail.com</strong><i>↗</i></a><p>Based in the New York metropolitan area, United States.</p></div><div className="contact-links"><a href="https://www.linkedin.com/in/jibin-john-46b18a171/" target="_blank" rel="noreferrer"><span>Professional network</span><strong>LinkedIn</strong><i>↗</i></a><a href="https://scholar.google.com/citations?user=vBDV0QkAAAAJ&hl=en" target="_blank" rel="noreferrer"><span>Research profile</span><strong>Google Scholar</strong><i>↗</i></a><a href="https://pubmed.ncbi.nlm.nih.gov/?term=jibin+john+" target="_blank" rel="noreferrer"><span>Biomedical index</span><strong>PubMed</strong><i>↗</i></a></div></section>
    <section className="contact-guidance"><div className="page-shell"><div><span>01</span><h3>Scientific question</h3><p>What do you want to understand, compare or test?</p></div><div><span>02</span><h3>Available data</h3><p>What data types, cohorts, files or resources are available?</p></div><div><span>03</span><h3>Expected output</h3><p>Analysis, reproducible workflow, review, interpretation, report or training?</p></div></div></section>
  </Site>;
}
