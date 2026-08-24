import Link from "next/link";

export default function LearningPage() {
  return (
    <main className="redirect-page">
      <meta httpEquiv="refresh" content="0; url=../continuing-education/" />
      <h1>Continuing Education</h1>
      <p>This page has moved.</p>
      <Link href="/continuing-education">Open the continuing-education record</Link>
    </main>
  );
}
