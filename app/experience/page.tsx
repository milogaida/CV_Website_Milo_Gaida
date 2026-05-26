import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import RevealWrapper from "@/components/RevealWrapper";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional history — project management in African mineral development and private mathematics tutoring.",
};

// Alternating section backgrounds for the experience entries
const bgCycle = ["var(--bg-2)", "var(--bg-3)"] as const;

export default function ExperiencePage() {
  return (
    <>
      {/* ── Section header — bg: --bg ─────────────────────────── */}
      <div style={{ background: "var(--bg)" }}>
        <div className="max-w-8xl mx-auto px-6 md:px-16 pt-36 pb-12">
          <SectionHeader label="Work History" title="Experience" />
        </div>
      </div>

      {/* ── Role entries — alternating backgrounds ─────────────── */}
      {experience.map((role, idx) => (
        <div key={`${role.organisation}-${idx}`} style={{ background: bgCycle[idx % 2] }}>
          <RevealWrapper delay={idx * 0.06}>
            <div className="max-w-8xl mx-auto px-6 md:px-16 py-14 md:py-20">
              <div className="section-grid">

                {/* Left: org, period, location */}
                <div className="sticky-col">
                  <h2
                    className="font-display font-light mb-3 leading-tight"
                    style={{ color: "var(--cream)", fontSize: "1.6rem" }}
                  >
                    {role.organisation}
                  </h2>
                  <p className="sublabel mb-1">{role.period}</p>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--cream-dim)",
                      opacity: 0.5,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {role.location}
                  </p>
                </div>

                {/* Right: role, note, bullets */}
                <div>
                  <p className="label mb-3" style={{ color: "var(--gold)", opacity: 0.9 }}>
                    {role.role}
                  </p>

                  {role.note && (
                    <p
                      className="italic font-light mb-5"
                      style={{
                        color: "var(--gold-dim)",
                        fontSize: "0.8rem",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {role.note}
                    </p>
                  )}

                  {role.bullets && (
                    <ul className="space-y-3 max-w-2xl">
                      {role.bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          className="flex gap-4 font-light leading-[1.8]"
                          style={{ color: "var(--cream-dim)", fontSize: "0.875rem" }}
                        >
                          <span
                            style={{
                              color: "var(--gold-dim)",
                              fontSize: "0.5rem",
                              marginTop: "0.6rem",
                              flexShrink: 0,
                            }}
                          >
                            ◆
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </div>
            </div>
          </RevealWrapper>
        </div>
      ))}
    </>
  );
}
