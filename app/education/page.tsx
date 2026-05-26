import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import RevealWrapper from "@/components/RevealWrapper";
import { credentials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Academic credentials — Imperial College Business School, Freie Universität Berlin.",
};

const bgCycle = ["var(--bg-2)", "var(--bg-3)", "var(--bg-2)"] as const;

export default function EducationPage() {
  return (
    <>
      {/* ── Section header — bg: --bg ─────────────────────────── */}
      <div style={{ background: "var(--bg)" }}>
        <div className="max-w-8xl mx-auto px-6 md:px-16 pt-36 pb-12">
          <SectionHeader label="Education" title="Education" />
        </div>
      </div>

      {/* ── Timeline — alternating backgrounds ────────────────── */}
      {credentials.map((cred, idx) => (
        <div
          key={`${cred.institution}-${idx}`}
          style={{ background: bgCycle[idx % bgCycle.length] }}
        >
          <RevealWrapper delay={idx * 0.08}>
            <div className="max-w-8xl mx-auto px-6 md:px-16 py-14 md:py-20">
              <div className="section-grid">

                {/* Left: period + upcoming badge */}
                <div className="sticky-col">
                  <p className="sublabel mb-3">
                    {cred.period}
                  </p>
                  {cred.status === "upcoming" && (
                    <span
                      style={{
                        display: "inline-block",
                        border: "1px solid rgba(201,169,110,0.35)",
                        color: "var(--gold)",
                        padding: "0.15rem 0.55rem",
                        fontSize: "0.6rem",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                      }}
                    >
                      Upcoming
                    </span>
                  )}
                  {cred.status === "completed" && (
                    <span
                      style={{
                        display: "inline-block",
                        border: "1px solid rgba(158,148,136,0.35)",
                        color: "var(--cream-dim)",
                        padding: "0.15rem 0.55rem",
                        fontSize: "0.6rem",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                      }}
                    >
                      Completed
                    </span>
                  )}
                </div>

                {/* Right: institution, qualification, grade, note */}
                <div>
                  <h2
                    className="font-display font-light leading-tight mb-3"
                    style={{
                      color: "var(--cream)",
                      fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                    }}
                  >
                    {cred.institution}
                  </h2>

                  <p
                    className="label mb-3"
                    style={{ color: "var(--gold)", opacity: 0.85 }}
                  >
                    {cred.qualification}
                  </p>

                  {cred.grade && (
                    <p
                      className="font-light mb-2"
                      style={{
                        color: "var(--cream-dim)",
                        fontSize: "0.8rem",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {cred.grade}
                    </p>
                  )}

                  {cred.note && (
                    <div style={{ maxWidth: "560px" }}>
                      {cred.noteLabel && (
                        <p
                          className="sublabel mb-1"
                          style={{ opacity: 0.5 }}
                        >
                          {cred.noteLabel}
                        </p>
                      )}
                      <p
                        className="font-light italic"
                        style={{
                          color: "var(--cream-dim)",
                          fontSize: "0.875rem",
                          opacity: 0.7,
                          lineHeight: 1.7,
                        }}
                      >
                        {cred.note}
                      </p>
                    </div>
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
