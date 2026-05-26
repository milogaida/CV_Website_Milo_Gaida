import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import RevealWrapper from "@/components/RevealWrapper";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Research and applied data projects.",
};

export default function ProjectsIndexPage() {
  return (
    <>
      {/* ── Section header — bg: --bg ─────────────────────────── */}
      <div style={{ background: "var(--bg)" }}>
        <div className="max-w-8xl mx-auto px-6 md:px-16 pt-36 pb-12">
          <SectionHeader label="Research" title="Projects" />
        </div>
      </div>

      {/* ── Project cards — alternating backgrounds ────────────── */}
      {projects.map((proj, idx) => (
        <div
          key={proj.slug}
          style={{ background: idx % 2 === 0 ? "var(--bg-2)" : "var(--bg-3)" }}
        >
          <RevealWrapper delay={idx * 0.08}>
            <div className="max-w-8xl mx-auto px-6 md:px-16 py-10 md:py-14">
              <Link
                href={`/projects/${proj.slug}`}
                className="block group"
                aria-label={`View project: ${proj.title}`}
              >
                <article
                  className="transition-all duration-300"
                  style={{
                    border: "1px solid rgba(201,169,110,0.12)",
                    padding: "2.5rem 3rem",
                  }}
                  onMouseEnter={undefined}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <p className="label" style={{ color: "var(--gold)" }}>
                      {proj.institution} · {proj.year}
                    </p>
                    <span
                      className="label transition-all duration-300 group-hover:text-gold"
                      style={{ color: "var(--cream-dim)" }}
                    >
                      View project ↗
                    </span>
                  </div>

                  <h2
                    className="font-display font-light leading-tight mb-3 transition-colors duration-300 group-hover:text-ivory"
                    style={{
                      color: "var(--cream)",
                      fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                    }}
                  >
                    {proj.title}
                  </h2>

                  <p
                    className="font-light"
                    style={{
                      color: "var(--cream-dim)",
                      fontSize: "0.9rem",
                      maxWidth: "680px",
                      lineHeight: 1.65,
                    }}
                  >
                    {proj.subtitle}
                  </p>
                </article>
              </Link>
            </div>
          </RevealWrapper>
        </div>
      ))}
    </>
  );
}
