'use client';

import React, { useState } from 'react';
import { SkillCategory } from '@/lib/types';
import { Translations } from '@/lib/i18n';
import { Code2, BarChart2, DollarSign, Languages, Sparkles } from 'lucide-react';

interface SkillsSectionProps {
  categories: SkillCategory[];
  t: Translations['skills'];
}

export default function SkillsSection({ categories, t }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (title: string) => {
    if (title.toLowerCase().includes('finance')) return <DollarSign className="w-4 h-4 text-emerald-400" />;
    if (title.toLowerCase().includes('data') || title.toLowerCase().includes('economics')) return <BarChart2 className="w-4 h-4 text-cyan-400" />;
    if (title.toLowerCase().includes('software') || title.toLowerCase().includes('web')) return <Code2 className="w-4 h-4 text-indigo-400" />;
    return <Languages className="w-4 h-4 text-amber-400" />;
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-950/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === idx
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {getCategoryIcon(cat.title)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories[activeCategory]?.skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all shadow-md group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                  <span className="font-bold text-white text-sm sm:text-base">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              {skill.note && (
                <p className="text-xs text-slate-400 mb-3 pl-4">
                  {skill.note}
                </p>
              )}

              {/* Progress track */}
              <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* All Categories at-a-glance tags below */}
        <div className="mt-14 pt-10 border-t border-slate-800/80">
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 text-center">
            {t.spectrumTitle}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.flatMap(c => c.skills).map((s, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 text-xs hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
