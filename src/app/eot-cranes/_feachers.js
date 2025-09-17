"use client";

import {
  Activity,
  AlertTriangle,
  ArrowUpDown,
  BadgeCheck,
  Factory,
  Gauge,
  Link2,
  Monitor,
  Radar,
  Ruler,
  Shield,
  ThermometerSun,
  Weight,
  Wifi,
} from "lucide-react";

// Icon mapping
const ICONS = {
  Activity,
  AlertTriangle,
  ArrowUpDown,
  BadgeCheck,
  Factory,
  Gauge,
  Link2,
  Monitor,
  Radar,
  Ruler,
  Shield,
  ThermometerSun,
  Weight,
  Wifi,
};

export default function Feachers({ technicalData = [] }) {
  const specifications = technicalData.filter(
    (item) => item.label !== "Special Features"
  );
  const specialFeatureData = technicalData.find(
    (item) => item.label === "Special Features"
  );
  const specialFeatures = specialFeatureData?.value || [];

  // Create SPECS array from specifications
  const SPECS = specifications.map((s) => ({
    label: s.label,
    value: s.value,
    Icon: ICONS[s.icon] || Gauge,
  }));

  return (
    <main className="section text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 sectionb">
      <section className="mx-auto max-w-7xl px-4">
        <div className="rounded-xl border border-neutral-200 bg-white shadow-md dark:border-neutral-800 dark:bg-neutral-900 transition-shadow">
          <div className="space-y-10 p-6 sm:p-10">
            {/* Specifications Section */}
            {SPECS.length > 0 && (
              <section
                aria-labelledby="specifications-heading"
                className="space-y-4"
              >
                <div>
                  <h2 className="text-2xl font-semibold">
                    Technical Specifications
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Compact overview for engineering review.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {SPECS.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-lg border border-blue-500 p-4"
                    >
                      <div className="mb-1 flex items-center gap-2 text-lg  font-medium text-blue-500">
                        {/* <s.Icon className="h-4 w-4" aria-hidden="true" /> */}
                        {s.label}
                      </div>
                      <div className="text-lg font-semibold">{s.value}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Special Features */}
            {specialFeatures.length > 0 && (
              <>
                <hr className="border-neutral-200 dark:border-neutral-800" />
                <section
                  aria-labelledby="features-heading"
                  className="space-y-5"
                >
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-blue-700 dark:text-blue-300 transition-colors" />
                    <h3 id="features-heading" className="text-xl font-semibold">
                      Special Features
                    </h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {specialFeatures.map((f) => {
                      const Icon = ICONS[f.icon] || Activity;
                      return (
                        <div
                          key={f.label}
                          className="flex items-start gap-4 rounded-md border border-blue-500 p-4 bg-blue-50 dark:border-neutral-800 dark:bg-neutral-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                          <span className="rounded-md bg-blue-100 p-2 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 transition-colors">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <div className="font-medium text-lg">{f.label}</div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              High-reliability component engineered for
                              industrial duty cycles.
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
