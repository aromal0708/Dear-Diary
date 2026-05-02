export function AuthVisual() {
  return (
    <div className="rounded-4xl border border-neutral-900/10 bg-white/80 p-6 shadow-2xl shadow-neutral-900/10">
      <div className="rounded-3xl border border-neutral-900/10 bg-neutral-50 p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Today</p>
            <p className="text-lg font-semibold text-neutral-900">May 1, 2026</p>
          </div>
          <div className="rounded-full bg-emerald-900 px-3 py-1 text-xs font-semibold text-white">
            8 day streak
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl border border-amber-200/60 bg-amber-50/80 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-neutral-900">Pinned: Morning calm</p>
              <span className="text-xs text-amber-700">Pinned</span>
            </div>
            <p className="text-sm text-neutral-600">
              A soft start, warm light, and a clear intention for the day.
            </p>
            <div className="mt-3 h-20 rounded-xl bg-linear-to-br from-amber-200 to-amber-100" />
          </div>

          <div className="rounded-2xl border border-neutral-900/10 bg-white p-4">
            <p className="text-sm font-semibold text-neutral-900">Evening reflection</p>
            <p className="text-sm text-neutral-600">
              Noted the small win and set a gentle goal for tomorrow.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
              <span>10:42 PM</span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span>No attachment</span>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-900/10 bg-white p-4">
            <p className="text-sm font-semibold text-neutral-900">Breathing room</p>
            <p className="text-sm text-neutral-600">
              A tidy desk, quiet tea, and three priorities for the morning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
