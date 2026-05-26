import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";
import StatBlock from "@/components/StatBlock";
import { projects } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.subtitle,
  };
}

const detailStats = [
  { value: "14,609", label: "Daily observations" },
  { value: "1986–2025", label: "Timespan" },
];

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      {/* ── Header — bg: --bg ─────────────────────────────────── */}
      <div style={{ background: "var(--bg)" }}>
        <div className="max-w-8xl mx-auto px-6 md:px-16 pt-36 pb-16">
          <Link
            href="/projects"
            className="label transition-colors duration-200 text-cream-dim hover:text-gold inline-flex items-center gap-2 mb-10"
          >
            ← Projects
          </Link>

          <div className="anim-1">
            <p className="label mb-5">{project.institution} · {project.year}</p>
          </div>

          <h1
            className="font-display font-light leading-tight anim-2"
            style={{
              color: "var(--cream)",
              fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
              maxWidth: "860px",
            }}
          >
            {project.title}
          </h1>

          <p
            className="font-light mt-5 anim-3"
            style={{
              color: "var(--cream-dim)",
              fontSize: "1rem",
              letterSpacing: "0.03em",
              maxWidth: "600px",
            }}
          >
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* ── Two stat blocks — bg: --bg-2 ──────────────────────── */}
      <div style={{ background: "var(--bg-2)" }}>
        <RevealWrapper>
          <div
            className="max-w-8xl mx-auto px-6 md:px-16 py-12 md:py-16"
            aria-label="Project statistics"
          >
            <div className="grid grid-cols-2 gap-8 md:gap-16" style={{ maxWidth: "560px" }}>
              {detailStats.map((s) => (
                <StatBlock key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>

      {/* ── Description + sidebar — bg: --bg-3 ────────────────── */}
      <div style={{ background: "var(--bg-3)" }}>
        <RevealWrapper delay={0.1}>
          <div className="max-w-8xl mx-auto px-6 md:px-16 py-16 md:py-24">
            <article className="section-grid" aria-labelledby="project-title">

              {/* Sticky left: dataset, stack groups, links */}
              <div className="sticky-col space-y-10">
                <div>
                  <p className="label mb-3">Dataset</p>
                  <p
                    className="font-light leading-relaxed"
                    style={{ color: "var(--cream-dim)", fontSize: "0.8rem" }}
                  >
                    {project.dataset}
                  </p>
                </div>

                <div>
                  <p className="label mb-4">Stack</p>
                  <div className="space-y-5">
                    {project.techGroups.map((group) => (
                      <div key={group.label}>
                        <p
                          className="sublabel mb-2"
                          style={{ opacity: 0.5 }}
                        >
                          {group.label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((t) => (
                            <span
                              key={t}
                              className="font-light"
                              style={{
                                fontSize: "0.65rem",
                                letterSpacing: "0.08em",
                                color: "var(--cream-dim)",
                                border: "1px solid rgba(201,169,110,0.18)",
                                padding: "0.25rem 0.6rem",
                                background: "var(--bg-2)",
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.links.app || project.links.github) && (
                  <div>
                    <p className="label mb-4">Links</p>
                    <div className="flex flex-col gap-4 items-start">
                      {project.links.app && (
                        <a
                          href={project.links.app}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 font-light transition-all duration-300 hover:bg-gold hover:text-canvas"
                          style={{
                            border: "1px solid var(--gold)",
                            color: "var(--gold)",
                            padding: "0.75rem 1.5rem",
                            fontSize: "0.65rem",
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                          }}
                          aria-label="Open live Streamlit application"
                        >
                          Launch App ↗
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 transition-colors duration-200 text-cream-dim hover:text-gold"
                          style={{
                            fontSize: "0.65rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                          }}
                          aria-label="View source code on GitHub"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Right: description */}
              <div id="project-title">
                <div className="space-y-6 max-w-2xl">
                  {project.description.map((para, i) => (
                    <p
                      key={i}
                      className="font-light leading-[1.9]"
                      style={{ color: "var(--cream-dim)", fontSize: "0.925rem" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

            </article>
          </div>
        </RevealWrapper>
      </div>
    </>
  );
}
