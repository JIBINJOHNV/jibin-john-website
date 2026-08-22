import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jibin-homepage-draft.jibinjohnv.chatgpt.site"),
  title: { default: "Jibin John, PhD | Bioinformatician & Computational Biologist", template: "%s" },
  description: "Professional website of Jibin John, PhD: bioinformatics, computational biology, scientific data analysis, statistical genetics, multi-omics and applied AI/ML.",
  openGraph: {
    title: "Jibin John, PhD | Bioinformatics · Computational Biology",
    description: "Bioinformatics, scientific data analysis, statistical genetics, multi-omics and applied AI/ML.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jibin John, PhD — Bioinformatics, Computational Biology and Scientific Data" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jibin John, PhD | Bioinformatics · Computational Biology",
    description: "Bioinformatics, scientific data analysis, statistical genetics, multi-omics and applied AI/ML.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jibin John",
    honorificSuffix: "PhD",
    jobTitle: ["Research Scientist", "Bioinformatician", "Computational Biologist"],
    url: "https://drjibinjohn.com/",
    sameAs: [
      "https://www.linkedin.com/in/jibin-john-46b18a171/",
      "https://scholar.google.com/citations?user=vBDV0QkAAAAJ&hl=en",
      "https://pubmed.ncbi.nlm.nih.gov/?term=jibin+john+",
    ],
    knowsAbout: ["Bioinformatics", "Computational biology", "Scientific data analysis", "Statistical genetics", "Psychiatric genomics", "Genome-wide association studies", "Multi-omics", "Applied AI and machine learning", "Reproducible scientific computing"],
  };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />{children}</body></html>;
}
