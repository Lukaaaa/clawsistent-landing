interface SectionHeaderProps {
  label?: string;
  heading: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({ label, heading, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block mb-4 text-xs md:text-sm font-bold tracking-[0.18em] uppercase text-primary-600">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-[2.6rem] md:leading-[1.15] font-bold text-ink-900 tracking-tight text-balance">
        {heading}
      </h2>
      {description && (
        <p className={`mt-4 text-lg text-ink-600 max-w-2xl ${centered ? "mx-auto" : ""}`}>{description}</p>
      )}
    </div>
  );
}
