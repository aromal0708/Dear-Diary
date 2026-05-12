type JournalCardProps = {
  title: string;
  excerpt: string;
  date: string;
  time?: string;
  mood?: string;
  tags?: string[];
  pinned?: boolean;
};

export function JournalCard({
  title,
  excerpt,
  date,
  time,
  mood,
  tags,
  pinned,
}: JournalCardProps) {
  return (
    <article
      className={`rounded-3xl border p-5 shadow-sm transition hover:-translate-y-0.5 ${
        pinned
          ? "border-amber-200/70 bg-amber-50/70"
          : "border-neutral-900/10 bg-white/80"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          <p className="text-sm text-neutral-600">{excerpt}</p>
        </div>
        {pinned ? (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            Pinned
          </span>
        ) : null}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
        <span>{date}</span>
        {time ? <span className="h-1 w-1 rounded-full bg-neutral-300" /> : null}
        {time ? <span>{time}</span> : null}
        {mood ? <span className="h-1 w-1 rounded-full bg-neutral-300" /> : null}
        {mood ? <span>{mood}</span> : null}
      </div>
      {tags && tags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                pinned
                  ? "bg-amber-100 text-amber-800"
                  : "bg-neutral-900/5 text-neutral-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
