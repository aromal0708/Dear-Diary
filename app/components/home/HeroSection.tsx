"use client";
import { redirect } from "next/navigation";
import { FeatureGrid } from "./FeatureGrid";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="space-y-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/20 bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.3em] text-emerald-900">
        Daily journaling, softened
      </div>
      <h1 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl lg:text-[3.25rem]">
        Your calm space for thoughts, streaks, and pinned memories.
      </h1>
      <p className="max-w-xl text-base leading-relaxed text-neutral-700 sm:text-lg">
        A focused journaling app that keeps the essentials front and center.
        Capture an entry, keep your streak alive, and pin the moments you want
        to revisit.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/signup">
          <button className="cursor-pointer rounded-full bg-emerald-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5">
            Start a new entry
          </button>
        </Link>
        <button className="cursor-pointer rounded-full border border-emerald-900/20 bg-white/80 px-6 py-3 text-sm font-semibold text-emerald-900">
          View pinned moments
        </button>
      </div>

      <FeatureGrid />
    </section>
  );
}
