interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "orange" | "navy";
  className?: string;
}

const variantStyles = {
  green: "bg-green-500/10 text-green-600 border-green-500/20",
  orange: "bg-white text-primary-600 border-primary-500",
  navy: "bg-navy-100 text-navy-700 border-navy-200",
};

export default function Badge({ children, variant = "green", className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
