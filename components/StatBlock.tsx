interface StatBlockProps {
  value: string;
  label: string;
  size?: string;
}

export default function StatBlock({ value, label, size = "2.4rem" }: StatBlockProps) {
  return (
    <div style={{ borderTop: "1px solid var(--gold-dim)", paddingTop: "1.25rem" }}>
      <div
        className="font-display font-light leading-tight"
        style={{ fontSize: size, color: "var(--gold)", whiteSpace: "nowrap" }}
      >
        {value}
      </div>
      <div className="sublabel mt-2">{label}</div>
    </div>
  );
}
