import { cn } from "@/lib/utils";

function Button({
  children,
  href,
  className,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-[#7A8B7A] text-white hover:bg-[#687768]",
    secondary:
      "border border-[#D9D5CE] bg-white text-[#252525] hover:border-[#7A8B7A] hover:text-[#7A8B7A]",
  };

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200",
        styles[variant],
        className
      )}
    >
      {children}
    </a>
  );
}

export default Button;