import type { Metadata } from "next";
import { PageHero, Site } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Contact | Jibin John, PhD", description: "Contact Dr. Jibin John regarding research collaboration, statistical genetics, bioinformatics and genomic data analysis." };

export default function ContactPage() {
  return <Site active="Contact"><PageHero eyebrow="Contact" title="Let’s connect around consequential scientific work." intro="I welcome conversations about research-scientist and computational-biology roles and collaborations in psychiatric genetics, statistical genetics, multi-omics and reproducible genomic analysis." />
    <section className="section page-shell contact-grid"><div className="contact-primary"><p className="eyebrow"><span />Direct contact</p><h2>Email is the most direct way to reach me.</h2><a className="email-card" href="mailto:johnjibinv@gmail.com?subject=Research%20role%20or%20collaboration"><span>Email</span><strong>johnjibinv@gmail.com</strong><i>↗</i></a><p>New York metropolitan area, United States. A concise note about the role, collaboration or scientific question is helpful.</p></div><div className="contact-links"><a href="https://www.linkedin.com/in/jibin-john-46b18a171/" target="_blank" rel="noreferrer"><span>Professional network</span><strong>LinkedIn</strong><i>↗</i></a><a href="https://scholar.google.com/citations?user=vBDV0QkAAAAJ&hl=en" target="_blank" rel="noreferrer"><span>Research profile</span><strong>Google Scholar</strong><i>↗</i></a><a href="https://pubmed.ncbi.nlm.nih.gov/?term=jibin+john+" target="_blank" rel="noreferrer"><span>Biomedical index</span><strong>PubMed</strong><i>↗</i></a></div></section>
  </Site>;
}
