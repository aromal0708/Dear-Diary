"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { DashboardShell } from "@/app/components/dashboard/DashboardShell";
import { DashboardTabs } from "@/app/components/dashboard/DashboardTabs";
import { JournalCard } from "@/app/components/dashboard/JournalCard";

const myJournals = [
  {
    id: "mine-1",
    title: "Morning focus",
    excerpt: "Set three clear intentions and kept the noise low.",
    date: "May 12, 2026",
    time: "7:45 AM",
    mood: "Focused",
    tags: ["Routine", "Clarity"],
  },
  {
    id: "mine-2",
    title: "Walk between meetings",
    excerpt: "The pause outdoors helped me reset and breathe.",
    date: "May 11, 2026",
    time: "2:18 PM",
    mood: "Grounded",
    tags: ["Reset", "Movement"],
  },
  {
    id: "mine-3",
    title: "Soft landing",
    excerpt: "Ended the day with one small win and a gentle plan.",
    date: "May 10, 2026",
    time: "9:02 PM",
    mood: "Calm",
    tags: ["Reflection"],
  },
];

const pinnedJournals = [
  {
    id: "pinned-1",
    title: "Pinned: Morning calm",
    excerpt: "A slow sip of tea and a clean slate for the day ahead.",
    date: "May 8, 2026",
    time: "6:55 AM",
    mood: "Centered",
    tags: ["Pinned", "Ritual"],
    pinned: true,
  },
  {
    id: "pinned-2",
    title: "Pinned: Gratitude list",
    excerpt: "Three things that kept the week light and kind.",
    date: "May 5, 2026",
    time: "8:11 PM",
    mood: "Grateful",
    tags: ["Pinned", "Gratitude"],
    pinned: true,
  },
];

const tabs = [
  { id: "mine", label: "My journals", count: myJournals.length },
  { id: "pinned", label: "Pinned journals", count: pinnedJournals.length },
];

export default function Dashboard() {
  const session = useSession();
  const { data, status } = session;
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeTab = searchParams.get("tab") === "pinned" ? "pinned" : "mine";
  const journals = activeTab === "pinned" ? pinnedJournals : myJournals;
  const name = data?.user?.name ?? "friend";

  const handleTabChange = useCallback(
    (tabId: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tabId);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  return (
    <DashboardShell
      title="Your dashboard"
      subtitle="A calm place for the journals you keep close and the ones you pin for later."
      actions={
        <>
          <Link
            className="rounded-full border border-neutral-900/10 bg-white/80 px-4 py-2 text-sm font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5"
            href="/profile"
          >
            View profile
          </Link>
          <button
            className="rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5"
            onClick={() => signOut()}
            type="button"
          >
            Sign out
          </button>
        </>
      }
    >
      <div className="space-y-6">
        <div className="rounded-4xl border border-neutral-900/10 bg-white/80 p-6 shadow-lg shadow-neutral-900/10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-neutral-500">Welcome back,</p>
              <h2 className="text-2xl font-semibold text-neutral-900">{name}</h2>
              <p className="text-sm text-neutral-600">Session status: {status}</p>
            </div>
            <div className="rounded-3xl border border-emerald-900/10 bg-emerald-50/80 px-4 py-3 text-sm text-emerald-900">
              Your quiet space is ready for today’s reflection.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <DashboardTabs activeTab={activeTab} tabs={tabs} onChange={handleTabChange} />
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Private journals are visible only to you.</span>
          </div>
        </div>

        <section className="grid gap-4 lg:grid-cols-2">
          {journals.map((journal) => (
            <JournalCard key={journal.id} {...journal} />
          ))}
        </section>
      </div>
    </DashboardShell>
  );
}
