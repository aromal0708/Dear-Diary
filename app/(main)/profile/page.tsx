import Link from "next/link";

import { DashboardShell } from "@/app/components/dashboard/DashboardShell";
import { JournalCard } from "@/app/components/dashboard/JournalCard";
import { ProfileHeader } from "@/app/components/profile/ProfileHeader";
import { ProfileSection } from "@/app/components/profile/ProfileSection";
import { ProfileStats } from "@/app/components/profile/ProfileStats";

const recentJournals = [
  {
    id: "recent-1",
    title: "Sunrise reset",
    excerpt: "A small ritual before sunrise keeps the day soft and open.",
    date: "May 12, 2026",
    time: "6:20 AM",
    mood: "Hopeful",
    tags: ["Morning", "Ritual"],
  },
  {
    id: "recent-2",
    title: "Midday boundaries",
    excerpt: "Said no to one extra task and kept my energy steady.",
    date: "May 11, 2026",
    time: "1:05 PM",
    mood: "Balanced",
    tags: ["Work", "Boundaries"],
  },
  {
    id: "recent-3",
    title: "Evening release",
    excerpt: "Wrote down what to let go so tomorrow feels lighter.",
    date: "May 10, 2026",
    time: "9:28 PM",
    mood: "Calm",
    tags: ["Reflection"],
  },
];

export default function ProfilePage() {
  return (
    <DashboardShell
      title="Your profile"
      subtitle="Shape how your reflections appear to you and the people you trust."
      actions={
        <>
          <button
            className="rounded-full border border-neutral-900/10 bg-white/80 px-4 py-2 text-sm font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5"
            type="button"
          >
            Edit profile
          </button>
          <Link
            className="rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5"
            href="/dashboard"
          >
            Back to dashboard
          </Link>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <ProfileHeader
            name="Aromal Sunil"
            handle="@aromal"
            bio="Collector of quiet mornings, tidy desks, and honest reflections."
            meta="Joined April 2026 · Bengaluru, India"
            actions={
              <>
                <button
                  className="rounded-full border border-neutral-900/10 bg-white/80 px-4 py-2 text-sm font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5"
                  type="button"
                >
                  Share profile
                </button>
                <button
                  className="rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5"
                  type="button"
                >
                  New journal
                </button>
              </>
            }
          />

          <ProfileStats
            items={[
              { label: "Journals", value: "42" },
              { label: "Followers", value: "128" },
              { label: "Following", value: "76" },
            ]}
          />

          <ProfileSection
            title="Recent journals"
            subtitle="A snapshot of the reflections you’ve written this week."
          >
            <div className="grid gap-4">
              {recentJournals.map((journal) => (
                <JournalCard key={journal.id} {...journal} />
              ))}
            </div>
          </ProfileSection>
        </div>

        <aside className="space-y-6">
          <ProfileSection title="About" subtitle="Notes you want to keep visible.">
            <div className="rounded-3xl border border-neutral-900/10 bg-white/80 p-5 text-sm text-neutral-600 shadow-sm">
              <p className="font-semibold text-neutral-900">Writing focus</p>
              <p className="mt-2">
                Daily rituals, gentle accountability, and tiny celebrations that build momentum.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Routine", "Mindfulness", "Creative work"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-900/5 px-3 py-1 text-xs font-medium text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ProfileSection>

          <ProfileSection title="Public journals (planned)">
            <div className="rounded-3xl border border-amber-200/70 bg-amber-50/70 p-5 text-sm text-amber-900 shadow-sm">
              <p className="font-semibold">Upcoming community features</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Publish select journals for others to read.</li>
                <li>Follow writers and build a quiet circle.</li>
                <li>See a feed of journals from people you follow.</li>
              </ul>
            </div>
          </ProfileSection>
        </aside>
      </div>
    </DashboardShell>
  );
}
