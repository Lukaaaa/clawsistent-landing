interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "orange" | "neutral";
  className?: string;
}

const variantStyles = {
  green: "bg-white text-ink-600 border-line",
  orange: "bg-primary-50 text-primary-700 border-primary-200",
  neutral: "bg-cream-100 text-ink-600 border-line",
};

export default function Badge({ children, variant = "neutral", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
