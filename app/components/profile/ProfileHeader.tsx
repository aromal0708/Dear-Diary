import type { ReactNode } from "react";

type ProfileHeaderProps = {
  name: string;
  handle: string;
  bio: string;
  meta?: string;
  actions?: ReactNode;
};

export function ProfileHeader({ name, handle, bio, meta, actions }: ProfileHeaderProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="rounded-4xl border border-neutral-900/10 bg-white/80 p-6 shadow-lg shadow-neutral-900/10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-900 text-lg font-semibold text-white shadow-lg shadow-emerald-900/20">
            {initials}
          </div>
          <div className="space-y-2">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900">{name}</h2>
              <p className="text-sm text-neutral-500">{handle}</p>
            </div>
            <p className="text-sm text-neutral-700">{bio}</p>
            {meta ? <p className="text-xs text-neutral-500">{meta}</p> : null}
          </div>
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
      </div>
    </div>
  );
}
