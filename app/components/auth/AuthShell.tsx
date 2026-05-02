import type { ReactNode } from "react";

import { AuthBackground } from "./AuthBackground";

type AuthShellProps = {
  children: ReactNode;
  visual: ReactNode;
};

export function AuthShell({ children, visual }: AuthShellProps) {
  return (
    <main className="landing-bg relative min-h-screen overflow-hidden">
      <AuthBackground />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-12 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex justify-center lg:justify-start">{children}</div>
          <div className="hidden lg:block">{visual}</div>
        </div>
      </div>
    </main>
  );
}
