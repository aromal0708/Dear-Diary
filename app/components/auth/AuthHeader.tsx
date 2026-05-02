type AuthHeaderProps = {
  title: string;
  subtitle: string;
};

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="space-y-3">
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/20 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-900">
        Just Diary
      </span>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">{title}</h1>
        <p className="text-base text-neutral-700">{subtitle}</p>
      </div>
    </div>
  );
}
