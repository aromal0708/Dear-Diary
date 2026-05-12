type ProfileStatsItem = {
  label: string;
  value: string;
};

type ProfileStatsProps = {
  items: ProfileStatsItem[];
};

export function ProfileStats({ items }: ProfileStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-neutral-900/10 bg-white/80 p-4 text-center shadow-sm"
        >
          <p className="text-2xl font-semibold text-neutral-900">{item.value}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
