type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Entry",
    description: "Title, body, date, and an optional image attachment.",
  },
  {
    title: "Streak",
    description: "Count of consecutive days with at least one new entry.",
  },
  {
    title: "Pin feature",
    description: "Mark entries as pinned so they stay on top.",
  },
  {
    title: "Attachment",
    description: "Add one image file to each diary entry.",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-900/10 bg-white/70 p-4">
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
      <p className="text-sm text-neutral-600">{description}</p>
    </div>
  );
}
