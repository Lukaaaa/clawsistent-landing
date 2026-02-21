import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25",
  secondary: "bg-navy-900 text-white hover:bg-navy-800",
  outline: "border-2 border-navy-200 text-navy-900 hover:border-primary-500 hover:text-primary-600",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer";
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
}
