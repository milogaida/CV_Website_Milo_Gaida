interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="mb-16 md:mb-24 anim-1">
      <p className="label mb-5">{label}</p>
      <h1
        className="font-display font-light leading-tight"
        style={{ color: "var(--cream)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
      >
        {title}
      </h1>
      <div className="mt-6 gold-rule" />
    </div>
  );
}
