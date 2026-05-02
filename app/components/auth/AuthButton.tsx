import type { ButtonHTMLAttributes } from "react";

type AuthButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function AuthButton({ children, className, ...props }: AuthButtonProps) {
  const baseClassName =
    "w-full rounded-full bg-emerald-900 mt-4 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5";
  return (
    <button className={className ? `${baseClassName} ${className}` : baseClassName} {...props}>
      {children}
    </button>
  );
}
