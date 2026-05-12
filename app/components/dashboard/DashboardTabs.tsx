type TabOption = {
  id: string;
  label: string;
  count?: number;
};

type DashboardTabsProps = {
  activeTab: string;
  tabs: TabOption[];
  onChange: (tabId: string) => void;
};

export function DashboardTabs({ activeTab, tabs, onChange }: DashboardTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-full border border-neutral-900/10 bg-white/70 p-2 shadow-sm">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-emerald-900 text-white shadow-md shadow-emerald-900/20"
                : "text-neutral-700 hover:bg-white"
            }`}
          >
            <span>{tab.label}</span>
            {typeof tab.count === "number" ? (
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  isActive ? "bg-white/20 text-white" : "bg-neutral-900/5 text-neutral-600"
                }`}
              >
                {tab.count}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
