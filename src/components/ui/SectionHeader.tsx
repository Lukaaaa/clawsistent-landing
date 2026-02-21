interface SectionHeaderProps {
  label?: string;
  heading: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({ label, heading, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary-600 bg-primary-50 rounded-full">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy-900">{heading}</h2>
      {description && (
        <p className="mt-4 text-lg text-navy-500 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
