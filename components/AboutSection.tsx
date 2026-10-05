'use client';

import React from 'react';
import { PersonalInfo } from '@/lib/types';
import { Translations } from '@/lib/i18n';
import { User, Target, Award, BarChart3, Code2, Globe2, Eye } from 'lucide-react';

interface AboutSectionProps {
  personal: PersonalInfo;
  t: Translations['about'];
  onViewDoc: (title: string, url: string, type: 'image' | 'pdf') => void;
}

export default function AboutSection({ personal, t, onViewDoc }: AboutSectionProps) {
  const pillars = [
    {
      icon: <Award className="w-5 h-5 text-amber-400" />,
      title: t.pillar1Title,
      desc: t.pillar1Desc
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-cyan-400" />,
      title: t.pillar2Title,
      desc: t.pillar2Desc
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      title: t.pillar3Title,
      desc: t.pillar3Desc
    },
    {
      icon: <Globe2 className="w-5 h-5 text-indigo-400" />,
      title: t.pillar4Title,
      desc: t.pillar4Desc
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4 shadow-xl">
              
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-cyan-400" />
                  <span>{t.journeyTitle}</span>
                </h3>
                <button
                  onClick={() => onViewDoc("Ikhtiyorjon Nabiyev", "/profile.jpg", "image")}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 text-cyan-400 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Full Photo</span>
                </button>
              </div>

              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800 text-xs">
                <span className="text-slate-400 block mb-0.5">{t.dobLabel}</span>
                <span className="font-semibold text-white">09.10.2006</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800 text-xs">
                <span className="text-slate-400 block mb-0.5">{t.originLabel}</span>
                <span className="font-semibold text-white">{t.originVal}</span>
              </div>
            </div>
          </div>

          {/* Core Pillars (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all shadow-md group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
