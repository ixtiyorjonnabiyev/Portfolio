'use client';

import React from 'react';
import { PersonalInfo } from '@/lib/types';
import { User, Sparkles, Target, Compass, Award, BarChart3, Code2, Globe2 } from 'lucide-react';

interface AboutSectionProps {
  personal: PersonalInfo;
  onViewDoc: (title: string, url: string, type: 'image' | 'pdf') => void;
}

export default function AboutSection({ personal, onViewDoc }: AboutSectionProps) {
  const pillars = [
    {
      icon: <Award className="w-5 h-5 text-amber-400" />,
      title: "ACCA & IFRS Reporting",
      desc: "Comprehensive mastery of international financial reporting standards, consolidated financial statements, accounting principles, and ethical standards."
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-cyan-400" />,
      title: "Quantitative Economics",
      desc: "Strong foundation in econometrics, statistical testing, microeconomic modeling, macroeconomic policy analysis, and financial forecasting."
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      title: "Fintech & Web Architecture",
      desc: "Translating sophisticated business rules and financial algorithms into fast, intuitive Next.js and React web applications (such as Moliya ERP)."
    },
    {
      icon: <Globe2 className="w-5 h-5 text-indigo-400" />,
      title: "Global Mindset & Multilingual",
      desc: "Multilingual proficiency (Uzbek, English, Russian) enabling collaboration with multinational corporate teams, audit firms, and international institutions."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Ikhtiyorjon Nabiyev
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Driven by analytical precision, intellectual curiosity, and a commitment to global excellence in finance and quantitative analytics.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 text-sm leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>My Journey & Mission</span>
              </h3>
              <p>
                Originally from Rishton, Fergana, Uzbekistan, I am currently a 3rd-year undergraduate student at <strong className="text-white">New Uzbekistan University</strong> in Tashkent, pursuing an intensive degree in <strong className="text-cyan-400">Economics and Data Analytics</strong>.
              </p>
              <p>
                Parallel to my academic curriculum, I am an active candidate with the <strong className="text-amber-400">Association of Chartered Certified Accountants (ACCA, UK)</strong>, having already secured exemptions in Business and Technology (BT), achieved a 65% CBE pass in Financial Accounting (FA), and successfully completed Financial Reporting (FR) with 64%.
              </p>
              <p>
                What distinguishes my perspective is the intersection between <strong className="text-white">deep financial discipline</strong> and <strong className="text-white">modern software engineering</strong>. Rather than treating finance as abstract numbers on a spreadsheet, I build interactive digital systems—like <strong className="text-emerald-400">Moliya</strong>—that automate financial statements, handle dual-currency tracking, and generate real-time business intelligence for decision-makers.
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800 text-xs">
                <span className="text-slate-400 block mb-0.5">Date of Birth:</span>
                <span className="font-semibold text-white">09.10.2006</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800 text-xs">
                <span className="text-slate-400 block mb-0.5">Origin:</span>
                <span className="font-semibold text-white">Rishton, Fergana</span>
              </div>
            </div>
          </div>

          {/* Core Pillars (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-md"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h4 className="font-bold text-white text-sm">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
