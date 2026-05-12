import type { ReactNode } from "react";

import { AuthBackground } from "../auth/AuthBackground";

type DashboardShellProps = {
  title: string;
  subtitle: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function DashboardShell({ title, subtitle, actions, children }: DashboardShellProps) {
  return (
    <main className="landing-bg relative min-h-screen overflow-hidden">
      <AuthBackground />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-12 lg:py-16">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/20 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-900">
              Just Diary
            </span>
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">{title}</h1>
              <p className="text-base text-neutral-700">{subtitle}</p>
            </div>
          </div>
          {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
        </header>
        {children}
      </div>
    </main>
  );
}
