"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export type ProcessStep = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  icon: "understand" | "validate" | "analyze" | "interpret" | "deliver";
};

function ProcessIcon({ icon }: { icon: ProcessStep["icon"] }) {
  const sharedProps = {
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.65,
    viewBox: "0 0 24 24",
  };

  if (icon === "understand") {
    return (
      <svg {...sharedProps}>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.3 15.3 4.7 4.7" />
      </svg>
    );
  }

  if (icon === "validate") {
    return (
      <svg {...sharedProps}>
        <path d="M12 3 20 6v5c0 4.7-3.1 8.1-8 10-4.9-1.9-8-5.3-8-10V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    );
  }

  if (icon === "analyze") {
    return (
      <svg {...sharedProps}>
        <rect x="3.5" y="4" width="17" height="16" rx="2" />
        <path d="m7.5 9 2.8 3-2.8 3M13 15h3.5" />
      </svg>
    );
  }

  if (icon === "interpret") {
    return (
      <svg {...sharedProps}>
        <path d="M8 3c0 6 8 6 8 12 0 2.5-1.4 4.5-4 6" />
        <path d="M16 3c0 6-8 6-8 12 0 2.5 1.4 4.5 4 6M8.8 7h6.4M8.8 17h6.4" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <path d="m4 8 8-4 8 4-8 4-8-4Z" />
      <path d="M4 8v8l8 4 8-4V8M12 12v8" />
      <path d="m16.5 4.5 3-3m0 0v2.6m0-2.6h-2.6" />
    </svg>
  );
}

export function ProcessJourney({ steps }: { steps: ProcessStep[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.24 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`process-journey${isVisible ? " is-visible" : ""}`} ref={rootRef}>
      <div className="home-process" role="list" aria-label="Scientific data analysis workflow">
        <span className="home-process-path" aria-hidden="true" />
        {steps.map((step, index) => (
          <article className="home-process-step" role="listitem" key={step.number}>
            <div className="home-process-step-meta">
              <span>{step.number}</span>
              <span className="home-process-icon"><ProcessIcon icon={step.icon} /></span>
            </div>
            <h3>{step.title}</h3>
            <small>{step.subtitle}</small>
            <p>{step.description}</p>
            <ul aria-label={`${step.title} tools and focus areas`}>
              {step.tools.map((tool) => <li key={tool}>{tool}</li>)}
            </ul>
            {index < steps.length - 1 && <i className="home-process-arrow" aria-hidden="true">→</i>}
          </article>
        ))}
      </div>
      <Link className="home-process-cta" href="/research">
        <span>See this workflow applied to real studies</span>
        <strong>Explore my research</strong>
        <i aria-hidden="true">→</i>
      </Link>
    </div>
  );
}
