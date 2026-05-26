import type { Metadata } from "next";
import { personal, aboutSnapshot, skills, miscellaneous } from "@/lib/data";
import RevealWrapper from "@/components/RevealWrapper";
import StatBlock from "@/components/StatBlock";

export const metadata: Metadata = {
  title: "About",
  description: personal.bio[0],
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero — bg: --bg ──────────────────────────────────── */}
      <section
        className="relative flex flex-col justify-center min-h-screen px-6 md:px-16"
        style={{ background: "var(--bg)" }}
        aria-label="Introduction"
      >
        <div className="max-w-8xl mx-auto w-full py-32">
          <p className="label anim-1 mb-6">Profile</p>

          <h1
            className="hero-name font-display font-light anim-2"
            style={{ color: "var(--cream)" }}
          >
            {personal.name}
          </h1>

          <div
            className="anim-3"
            style={{ width: "3rem", height: "1px", background: "var(--gold)", margin: "1.75rem 0" }}
          />

          <p
            className="sublabel anim-4"
            style={{ maxWidth: "52rem" }}
          >
            {personal.tagline}
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="anim-4 absolute bottom-10 right-6 md:right-16"
          style={{ opacity: 0.35 }}
          aria-hidden="true"
        >
          <div
            style={{
              width: "1px",
              height: "3rem",
              background: "var(--gold-dim)",
              animation: "scrollPulse 2.5s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ── Snapshot Stats — bg: --bg-2 ──────────────────────── */}
      <div style={{ background: "var(--bg-2)" }}>
        <RevealWrapper>
          <div
            className="max-w-8xl mx-auto px-6 md:px-16 py-14 md:py-20"
            aria-label="Snapshot"
          >
            <div className="grid grid-cols-2 gap-8 md:flex md:flex-nowrap md:gap-12">
              {aboutSnapshot.map((s) => (
                <StatBlock
                  key={s.label}
                  value={s.value}
                  label={s.label}
                  size="clamp(1.1rem, 2.4vw, 1.75rem)"
                />
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>

      {/* ── Bio + Contacts — bg: --bg ────────────────────────── */}
      <div style={{ background: "var(--bg)" }}>
        <RevealWrapper>
          <section
            className="max-w-8xl mx-auto px-6 md:px-16 py-20 md:py-28 section-grid"
            aria-label="Profile"
          >
            <div className="sticky-col">
              <p className="label mb-6">Profile</p>
              <div className="space-y-4 mt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="block transition-colors duration-200 text-cream-dim hover:text-gold"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.04em" }}
                >
                  {personal.email}
                </a>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                  className="block transition-colors duration-200 text-cream-dim hover:text-gold"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.04em" }}
                >
                  {personal.phone}
                </a>
                <span
                  className="block text-cream-dim"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.04em", opacity: 0.5 }}
                >
                  {personal.location}
                </span>
                <a
                  href={`https://${personal.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors duration-200 text-cream-dim hover:text-gold"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.04em" }}
                >
                  {personal.github}
                </a>
              </div>
            </div>
            <div className="space-y-5 max-w-2xl">
              {personal.bio.map((para, i) => (
                <p
                  key={i}
                  className="font-light leading-[1.85]"
                  style={{ color: "var(--cream-dim)", fontSize: "0.95rem" }}
                >
                  {para}
                </p>
              ))}
            </div>
          </section>
        </RevealWrapper>
      </div>

      {/* ── Skills — bg: --bg-3 ──────────────────────────────── */}
      <div style={{ background: "var(--bg-3)" }}>
        <RevealWrapper delay={0.1}>
          <section
            className="max-w-8xl mx-auto px-6 md:px-16 py-20 md:py-28 section-grid"
            aria-label="Technical skills"
          >
            <div className="sticky-col">
              <p className="label">Technical Skills</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-10 md:gap-14">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="sublabel mb-5" style={{ color: "var(--gold)", opacity: 0.85 }}>
                    {group.category}
                  </p>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 font-light"
                        style={{ color: "var(--cream-dim)", fontSize: "0.85rem" }}
                      >
                        <span
                          style={{
                            color: "var(--gold-dim)",
                            fontSize: "0.55rem",
                            marginTop: "0.4rem",
                            flexShrink: 0,
                          }}
                        >
                          ◆
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </RevealWrapper>
      </div>

      {/* ── Background / Misc — bg: --bg-2 ───────────────────── */}
      <div style={{ background: "var(--bg-2)" }}>
        <RevealWrapper delay={0.1}>
          <section
            className="max-w-8xl mx-auto px-6 md:px-16 py-20 md:py-28 section-grid"
            aria-label="Background"
          >
            <div className="sticky-col">
              <p className="label">Background</p>
            </div>
            <dl>
              {miscellaneous.map((item, i) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:gap-10 py-5"
                  style={{
                    borderBottom:
                      i < miscellaneous.length - 1
                        ? "1px solid rgba(201,169,110,0.08)"
                        : "none",
                  }}
                >
                  <dt
                    className="sublabel shrink-0 sm:w-28 mb-1.5 sm:mb-0"
                    style={{ paddingTop: "0.1rem" }}
                  >
                    {item.label}
                  </dt>
                  <dd
                    className="font-light leading-relaxed"
                    style={{ color: "var(--cream)", fontSize: "0.875rem" }}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </RevealWrapper>
      </div>
    </>
  );
}
