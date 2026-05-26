import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import RevealWrapper from "@/components/RevealWrapper";
import ContactForm from "./ContactForm";
import { personal } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Milo Gaida.",
};

const directItems = [
  {
    label: "Email",
    display: personal.email,
    href: `mailto:${personal.email}`,
    external: false,
  },
  {
    label: "Phone",
    display: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
    external: false,
  },
  {
    label: "Location",
    display: personal.location,
    href: null as string | null,
    external: false,
  },
  {
    label: "GitHub",
    display: personal.github,
    href: `https://${personal.github}`,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Section header — bg: --bg ─────────────────────────── */}
      <div style={{ background: "var(--bg)" }}>
        <div className="max-w-8xl mx-auto px-6 md:px-16 pt-36 pb-12">
          <SectionHeader label="Get in Touch" title="Contact" />
        </div>
      </div>

      {/* ── Form + contacts — bg: --bg-2 ──────────────────────── */}
      <div style={{ background: "var(--bg-2)" }}>
        <RevealWrapper>
          <div className="max-w-8xl mx-auto px-6 md:px-16 py-16 md:py-24">
            <div className="section-grid">

              {/* Left: intro + direct contacts */}
              <div className="sticky-col">
                <p
                  className="font-light leading-[1.85] mb-10"
                  style={{ color: "var(--cream-dim)", fontSize: "0.925rem", maxWidth: "280px" }}
                >
                  If you have a role you think I&apos;d be right for, or a problem
                  you think I can help with, I&apos;d like to hear about it.
                </p>

                <div className="space-y-6">
                  {directItems.map((item) => (
                    <div key={item.label}>
                      <p className="sublabel mb-1" style={{ opacity: 0.5 }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="font-light transition-colors duration-200 text-cream hover:text-gold"
                          style={{ fontSize: "0.85rem", letterSpacing: "0.03em" }}
                        >
                          {item.display}
                        </a>
                      ) : (
                        <p
                          className="font-light text-cream"
                          style={{ fontSize: "0.85rem" }}
                        >
                          {item.display}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div>
                <ContactForm />
              </div>

            </div>
          </div>
        </RevealWrapper>
      </div>
    </>
  );
}
