type EntryMeta = {
  title: string;
  description: string;
  meta?: string[];
};

const pinnedEntry = {
  title: "Pinned: Dawn walk",
  description: "Quiet streets, warm light, and a clear head.",
  status: "Pinned",
};

const entries: EntryMeta[] = [
  {
    title: "Evening reflection",
    description: "A small win: finished the chapter and outlined the next.",
    meta: ["10:42 PM", "No attachment"],
  },
  {
    title: "Mindset check-in",
    description: "Breathing room, tidy desk, and a short list for tomorrow.",
  },
];

export function PreviewPanel() {
  return (
    <section className="relative">
      <div className="rounded-4xl border border-neutral-900/10 bg-white/80 p-5 shadow-2xl shadow-neutral-900/10">
        <div className="rounded-3xl border border-neutral-900/10 bg-neutral-50 p-5">
          <PreviewHeader />

          <div className="space-y-3">
            <PinnedEntryCard
              title={pinnedEntry.title}
              description={pinnedEntry.description}
              status={pinnedEntry.status}
            />
            {entries.map((entry) => (
              <EntryCard
                key={entry.title}
                title={entry.title}
                description={entry.description}
                meta={entry.meta}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewHeader() {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Today</p>
        <p className="text-lg font-semibold text-neutral-900">May 1, 2026</p>
      </div>
      <div className="rounded-full bg-emerald-900 px-3 py-1 text-xs font-semibold text-white">
        8 day streak
      </div>
    </div>
  );
}

type PinnedEntryCardProps = {
  title: string;
  description: string;
  status: string;
};

function PinnedEntryCard({ title, description, status }: PinnedEntryCardProps) {
  return (
    <div className="rounded-2xl border border-amber-200/60 bg-amber-50/80 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        <span className="text-xs text-amber-700">{status}</span>
      </div>
      <p className="text-sm text-neutral-600">{description}</p>
      <div className="mt-3 h-20 rounded-xl bg-linear-to-br from-amber-200 to-amber-100" />
    </div>
  );
}

type EntryCardProps = {
  title: string;
  description: string;
  meta?: string[];
};

function EntryCard({ title, description, meta }: EntryCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-900/10 bg-white p-4">
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
      <p className="text-sm text-neutral-600">{description}</p>
      {meta ? (
        <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
          {meta.map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              {index < meta.length - 1 ? (
                <span className="mx-2 inline-block h-1 w-1 rounded-full bg-neutral-300" />
              ) : null}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
