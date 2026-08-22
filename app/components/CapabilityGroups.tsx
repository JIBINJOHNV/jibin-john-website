"use client";

import { useState } from "react";

type Capability = {
  title: string;
  detail: string;
};

type CapabilityGroup = {
  id: string;
  label: string;
  kicker: string;
  capabilities: Capability[];
};

export function CapabilityGroups({ groups }: { groups: CapabilityGroup[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const indexedGroups = groups.map((group, index) => ({ ...group, index }));
  const rows = Array.from(
    { length: Math.ceil(indexedGroups.length / 2) },
    (_, rowIndex) => indexedGroups.slice(rowIndex * 2, rowIndex * 2 + 2),
  );

  return (
    <div className="capability-groups">
      {rows.map((row) => {
        const activeGroup = row.find((group) => group.id === activeId);

        return (
          <div className="capability-group-row" key={row[0].id}>
            <div className="capability-group-headings">
              {row.map((group) => {
                const isActive = group.id === activeId;
                const panelId = `${group.id}-details`;

                return (
                  <article
                    className={`capability-group capability-group-${group.index + 1}${
                      isActive ? " is-active" : ""
                    }`}
                    id={group.id}
                    key={group.id}
                  >
                    <button
                      aria-controls={isActive ? panelId : undefined}
                      aria-expanded={isActive}
                      className="capability-group-heading"
                      onClick={() => setActiveId(isActive ? null : group.id)}
                      type="button"
                    >
                      <span className="capability-group-title">
                        <span aria-hidden="true">{String(group.index + 1).padStart(2, "0")}</span>
                        <span>{group.kicker}</span>
                        <strong>{group.label}</strong>
                      </span>
                      <span className="capability-group-summary">
                        {group.capabilities.map((capability) => capability.title).join(", ")}
                      </span>
                    </button>
                  </article>
                );
              })}
            </div>

            {activeGroup ? (
              <section
                aria-label={`${activeGroup.label} details`}
                className={`capability-group-panel capability-group-${activeGroup.index + 1}${
                  activeGroup.capabilities.length === 1 ? " is-single" : ""
                }`}
                id={`${activeGroup.id}-details`}
                role="region"
              >
                <ol className="home-capability-list">
                  {activeGroup.capabilities.map((capability) => (
                    <li key={capability.title}>
                      {activeGroup.capabilities.length > 1 ? <strong>{capability.title}</strong> : null}
                      <p>{capability.detail}</p>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
