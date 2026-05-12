import type { ReactNode } from "react";

type ProfileSectionProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function ProfileSection({ title, subtitle, children }: ProfileSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        {subtitle ? <p className="text-sm text-neutral-600">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
