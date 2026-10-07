import React from 'react';
import CMOComparisonGrid from '../components/CMOComparisonGrid';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FBFBFA] text-gray-900 font-sans antialiased">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-xl tracking-tight text-gray-950">Adstock</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#platform" className="hover:text-gray-950 transition-colors">The Tipping Point</a>
            <a href="#cmo-comparison" className="hover:text-gray-950 transition-colors">Why Adstock</a>
            <a href="#advantage" className="hover:text-gray-950 transition-colors">How It Works</a>
            <a href="#calculator" className="hover:text-gray-950 transition-colors">Impact Calculator</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://app.adstocklabs.com/run_bq"
              className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm px-4 py-2 rounded-full font-semibold text-white bg-[#0F5132] hover:bg-[#0B3D25] shadow-sm transition-all"
            >
              Launch Platform
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section & Demo Walkthrough Preview */}
      <section className="relative pt-16 pb-16 sm:pt-24 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-950 leading-[1.08] mb-6">
              Stop guessing.<br />
              <span className="text-gray-700">Know exactly where your next ad dollar belongs.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              Most companies spend millions on marketing without knowing which channels actually drive revenue. Adstock analyzes your entire media portfolio to eliminate wasted spend and reveal your most profitable channels.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.adstocklabs.com/run_bq"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-[#0F5132] hover:bg-[#0B3D25] shadow-lg transition-all text-base"
              >
                Launch Platform
              </a>
              <a
                href="#trial"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-gray-800 hover:text-gray-950 border border-gray-300 bg-white hover:bg-gray-50 transition-all text-base"
              >
                Opt into free trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CMO Comparison Grid Section (Directly Below Hero & Demo Preview) */}
      <CMOComparisonGrid />
    </div>
  );
}
