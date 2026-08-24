"use client";

import { useState } from "react";

export type DetailBlock =
  | { type: "text"; label: string; text: string }
  | { type: "resources"; items: Array<{ label?: string; text: string }> };

export type Specialization = {
  number: string;
  title: string;
  scope: string;
  blocks: DetailBlock[];
};

function DetailContent({ blocks }: { blocks: DetailBlock[] }) {
  return (
    <div className="specialization-details">
      {blocks.map((block, blockIndex) => {
        if (block.type === "resources") {
          return (
            <ul className="specialization-resources" key={`resources-${blockIndex}`}>
              {block.items.map((item, itemIndex) => (
                <li key={`${item.label ?? "resource"}-${itemIndex}`}>
                  {item.label ? <strong>{item.label}</strong> : null}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (!block.text && block.label === "Selected tools & resources") {
          return (
            <h4 className="resources-heading" key={`${block.label}-${blockIndex}`}>
              {block.label}
            </h4>
          );
        }

        return (
          <section
            className={block.label === "Scope boundary" ? "scope-boundary" : undefined}
            key={`${block.label}-${blockIndex}`}
          >
            <h4>{block.label}</h4>
            <p>{block.text}</p>
          </section>
        );
      })}
    </div>
  );
}

export function SpecializationAccordion({
  specializations,
}: {
  specializations: Specialization[];
}) {
  const [activeNumber, setActiveNumber] = useState<string | null>(null);
  const pairs = Array.from(
    { length: Math.ceil(specializations.length / 2) },
    (_, pairIndex) => specializations.slice(pairIndex * 2, pairIndex * 2 + 2),
  );

  return (
    <div className="specialization-pairs">
      {pairs.map((pair) => {
        const activeSpecialization = pair.find(
          (specialization) => specialization.number === activeNumber,
        );
        const activePosition = activeSpecialization
          ? pair.indexOf(activeSpecialization) + 1
          : null;

        return (
          <div
            className={`specialization-pair${
              activePosition ? ` active-${activePosition === 1 ? "first" : "second"}` : ""
            }`}
            key={pair[0].number}
          >
            {pair.map((specialization, cardIndex) => {
              const isActive = specialization.number === activeNumber;
              const triggerId = `specialization-trigger-${specialization.number}`;
              const panelId = `specialization-details-${specialization.number}`;

              return (
                <button
                  aria-controls={isActive ? panelId : undefined}
                  aria-expanded={isActive}
                  className={`specialization-card specialization-card-${cardIndex + 1}${
                    isActive ? " is-active" : ""
                  }`}
                  id={triggerId}
                  key={specialization.number}
                  onClick={() => setActiveNumber(isActive ? null : specialization.number)}
                  type="button"
                >
                  <span className="specialization-number">{specialization.number}</span>
                  <span className="specialization-card-copy">
                    <span className="specialization-kicker">Scientific specialization</span>
                    <h3 className="specialization-title">{specialization.title}</h3>
                    <span className="specialization-scope">{specialization.scope}</span>
                    <span className="specialization-prompt">
                      Workflow, branches, tools & resources
                    </span>
                  </span>
                  <i aria-hidden="true">{isActive ? "×" : "+"}</i>
                </button>
              );
            })}

            {activeSpecialization ? (
              <section
                aria-labelledby={`specialization-trigger-${activeSpecialization.number}`}
                className="specialization-expanded-panel"
                id={`specialization-details-${activeSpecialization.number}`}
                role="region"
              >
                <DetailContent blocks={activeSpecialization.blocks} />
              </section>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
