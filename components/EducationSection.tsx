'use client';

import React from 'react';
import { EducationInfo } from '@/lib/types';
import { GraduationCap, Award, BookOpen, CheckCircle, ExternalLink, Calendar, Users, Building, ShieldCheck } from 'lucide-react';

interface EducationProps {
  education: EducationInfo;
  onViewDoc: (title: string, url: string, type: 'image' | 'pdf') => void;
}

export default function EducationSection({ education, onViewDoc }: EducationProps) {
  const highlights = [
    { title: "Advanced Econometrics", desc: "Linear regression, multivariate time-series, hypothesis testing & forecasting." },
    { title: "Micro & Macroeconomics", desc: "Fiscal & monetary theory, market structures, inflation & exchange rate models." },
    { title: "Data Analytics & Statistics", desc: "Exploratory data analysis, statistical inference, financial quantitative methods." },
    { title: "Financial Management", desc: "Capital budgeting, corporate finance, financial statements interpretation." }
  ];

  return (
    <section id="education" className="py-20 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & University Excellence
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Studying at New Uzbekistan University, one of the nation&apos;s leading institutions focused on global educational standards, rigorous quantitative analytics, and modern economic theory.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 cols: Degree info */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  {education.year} &bull; {education.studyMode}
                </span>
                <span className="px-3 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
                  {education.period}
                </span>
                <span className="px-3 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                  Status: O&apos;qimoqda (Active)
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {education.university}
                </h3>
                <p className="text-lg font-semibold text-cyan-400 mt-1">
                  {education.degree} in {education.major}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {education.faculty}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {education.description}
              </p>

              {/* Coursework grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 pl-5 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onViewDoc("Official Student Identity Card", education.documentUrl, "image")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold text-xs transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>View Official Student ID Card</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right 5 cols: Student Card Preview widget */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-700/80 p-5 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
                
                {/* Header in widget */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-slate-200">TALABALIK GUVOHNOMASI</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Tasdiqlangan
                  </span>
                </div>

                {/* ID details table */}
                <div className="space-y-2.5 py-4 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Muassasa:</span>
                    <span className="font-semibold text-white text-right text-[11px]">Yangi O&apos;zbekiston universiteti</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Yo&apos;nalish:</span>
                    <span className="font-semibold text-cyan-400 text-right text-[11px]">Iqtisodiyot va ma&apos;lumotlar tahlili</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Guruh & Bosqich:</span>
                    <span className="font-semibold text-white">FED1 &bull; 3-kurs</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Guvohnoma raqami:</span>
                    <span className="font-mono text-amber-400 font-bold">{education.studentIdNumber}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-400">JShShIR:</span>
                    <span className="font-mono text-slate-300">50910066960026</span>
                  </div>
                </div>

                {/* Card footer CTA */}
                <button
                  onClick={() => onViewDoc("Official Student Identity Card", education.documentUrl, "image")}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors border border-slate-700"
                >
                  <span>Open Full Size Document</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
