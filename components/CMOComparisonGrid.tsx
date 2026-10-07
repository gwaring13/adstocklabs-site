import React from 'react';

export interface ComparisonPair {
  id: number;
  legacy: {
    title: string;
    description: string;
  };
  adstock: {
    title: string;
    description: string;
    badge: string;
  };
}

export const comparisonData: ComparisonPair[] = [
  {
    id: 1,
    legacy: {
      title: 'Looking in the Rearview Mirror',
      description: 'You get backward-looking charts showing what you already spent, leaving next month’s budget to guesswork.',
    },
    adstock: {
      title: 'Clear Weekly Action Plans',
      description: 'Gives marketing leadership specific, defensible dollar shifts across channels to actively grow the total revenue pie.',
      badge: '+$2.90M Projected Lift',
    },
  },
  {
    id: 2,
    legacy: {
      title: 'Biased Ad Platform Reports',
      description: 'Google and Meta each claim credit for the same sale, making channel performance look artificially inflated.',
    },
    adstock: {
      title: 'Unbiased Truth Across Every Channel',
      description: 'Neutral mathematics measure genuine business lift without favoring one ad platform over another.',
      badge: '96.4% Sales Match',
    },
  },
  {
    id: 3,
    legacy: {
      title: 'Quietly Burning Cash on Saturated Ads',
      description: 'Blended ROAS hides waste—spending dollars where ads are so saturated they return less than a dollar back.',
    },
    adstock: {
      title: 'Spotting Diminishing Returns Early',
      description: 'Flags the exact moment an ad channel stops making a profit so you can redirect that money into high-growth inventory.',
      badge: 'Stop Paying $1.00 to Get $0.59 Back',
    },
  },
  {
    id: 4,
    legacy: {
      title: 'Privacy Headaches & Months of Setup',
      description: 'Requires invasive tracking cookies, user pixels, and lengthy legal reviews that delay rollout.',
    },
    adstock: {
      title: 'Fast, Zero-Privacy-Risk Setup',
      description: 'Connects securely to your aggregate sales and spend figures—zero customer emails, tracking tags, or personal identities involved.',
      badge: 'Zero-PII / SOC2 Ready',
    },
  },
];

export const CMOComparisonGrid: React.FC = () => {
  return (
    <section id="cmo-comparison" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Centered Executive Terminal Container */}
      <div className="relative max-w-6xl mx-auto rounded-3xl bg-[#0B0F19] border border-slate-800 shadow-2xl shadow-emerald-950/20 p-6 sm:p-10 lg:p-14 text-slate-100 overflow-hidden">
        {/* Background ambient emerald lighting */}
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#538865]/10 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-[#538865] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#538865] animate-pulse" />
              THE MEDIA PORTFOLIO SHIFT
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
              Most Attribution Tools Look Back. We Rebalance Forward.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
              Ad platform dashboards take credit for the same sales. Agencies deliver static decks months late. Adstock acts like an automated capital manager—prescribing exact weekly shifts across Google, Meta, and CTV to maximize incremental margin.
            </p>
          </div>

          {/* Column Headers for Desktop */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6 mb-4 px-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <span className="w-2 h-2 rounded-full bg-slate-500" />
              Traditional Reporting &amp; Consultancies
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-[#538865]" />
              The Adstock Portfolio Engine
            </div>
          </div>

          {/* Comparison Grid (2 columns on desktop, clean stacked cards on mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {comparisonData.map((pair) => (
              <React.Fragment key={pair.id}>
                {/* Legacy Card */}
                <div className="rounded-2xl p-6 sm:p-7 bg-[#131C2E]/60 border border-[#334155]/70 flex flex-col justify-between transition-all duration-200 hover:border-slate-600">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <svg
                          className="w-3.5 h-3.5 text-slate-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        The Old Way
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-300 mb-2">
                      {pair.legacy.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {pair.legacy.description}
                    </p>
                  </div>
                </div>

                {/* Adstock Card */}
                <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#112328]/90 to-[#0F1E24]/90 border border-[#538865]/70 shadow-[0_0_25px_rgba(83,136,101,0.12)] flex flex-col justify-between transition-all duration-200 hover:border-[#538865]">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <svg
                          className="w-3.5 h-3.5 text-[#538865]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                        The Adstock Way
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/40 text-emerald-400 border border-emerald-800/50 shadow-sm">
                        {pair.adstock.badge}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {pair.adstock.title}
                    </h3>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {pair.adstock.description}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Bottom Interactive Callout Box */}
          <div className="rounded-2xl p-7 sm:p-9 bg-gradient-to-br from-[#101D24] to-[#0A141A] border border-[#538865]/40 shadow-[0_0_40px_rgba(83,136,101,0.15)] flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                One Click to Rebalance Your Portfolio
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Skip the messy manual spreadsheets. Slide your budget flexibility up or down, click generate, and see your
                optimal spend plan in seconds—ready for your CFO or your weekly media review.
              </p>
            </div>
            <a
              href="https://app.adstocklabs.com/run_bq?demo=arjun"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-[#538865] hover:bg-[#437053] shadow-[0_4px_20px_rgba(83,136,101,0.35)] transition-all duration-200 transform hover:-translate-y-0.5 text-base whitespace-nowrap cursor-pointer shrink-0"
            >
              <span>Explore the Interactive Walkthrough</span>
              <svg
                className="w-4 h-4 stroke-[2.5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CMOComparisonGrid;
