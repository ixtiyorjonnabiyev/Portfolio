'use client';

import React from 'react';
import { ACCAInfo } from '@/lib/types';
import { Award, CheckCircle2, Clock, Calendar, FileText, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface AccaSectionProps {
  acca: ACCAInfo;
  onViewDoc: (title: string, url: string, type: 'image' | 'pdf') => void;
}

export default function AccaSection({ acca, onViewDoc }: AccaSectionProps) {
  const passedExams = acca.exams.filter(e => e.status === 'passed' || e.status === 'exempted');
  const inProgressExams = acca.exams.filter(e => e.status === 'in-progress');
  const plannedExams = acca.exams.filter(e => e.status === 'planned');

  const totalExams = acca.exams.length;
  const progressPercent = Math.round((passedExams.length / 13) * 100);

  return (
    <section id="acca" className="py-20 relative bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Global Professional Qualification</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              ACCA Journey & Credentials
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Candidate with the Association of Chartered Certified Accountants (UK). Actively progressing through the globally recognized benchmark for finance professionals and IFRS specialists.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={() => onViewDoc("Official ACCA Examination Transcript", acca.transcriptUrl, "pdf")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 font-semibold text-xs transition-all shadow-lg shadow-amber-500/10"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Verify Official ACCA Transcript</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Overview Bar */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 mb-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            
            <div className="space-y-1">
              <span className="text-xs text-slate-400">Registration Number</span>
              <div className="text-xl font-mono font-bold text-white flex items-center gap-2">
                <span>{acca.registrationNumber}</span>
                <span className="p-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">
                  <ShieldCheck className="w-3 h-3" />
                </span>
              </div>
              <span className="text-[11px] text-slate-500">Registered: {acca.registrationDate}</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-400">Syllabus Track</span>
              <div className="text-base font-bold text-slate-200">
                {acca.qualification}
              </div>
              <span className="text-[11px] text-cyan-400">Glasgow, United Kingdom</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-400">Completed Papers</span>
              <div className="text-xl font-extrabold text-emerald-400">
                {passedExams.length} <span className="text-xs text-slate-400 font-normal">/ 13 total</span>
              </div>
              <span className="text-[11px] text-slate-400">Applied Knowledge & Skills</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Completion Track</span>
                <span className="font-mono font-semibold text-cyan-400">{progressPercent}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 h-2 rounded-full transition-all duration-700" 
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Completed Exams Cards */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Passed & Exempted Examinations</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {passedExams.map((exam) => (
              <div
                key={exam.code}
                className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 p-5 shadow-lg shadow-emerald-500/5 hover:border-emerald-500/60 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold font-mono text-lg">
                    {exam.code}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold text-[11px] border border-emerald-500/30">
                    {exam.status === 'exempted' ? 'Exemption' : `Pass (${exam.mark}%)`}
                  </span>
                </div>

                <div className="mt-4 space-y-1">
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exam.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>Session: {exam.session || exam.date}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Verified ACCA Record</span>
                  <span className="text-emerald-400 font-medium">Completed ✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap / In-Progress & Planned */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-cyan-400" />
            <span>Applied Skills & Strategic Professional Roadmap</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[...inProgressExams, ...plannedExams].map((exam) => (
              <div
                key={exam.code}
                className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono font-bold text-xs text-slate-300">
                    {exam.code}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                    exam.status === 'in-progress' 
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30' 
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {exam.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-200 line-clamp-2">
                  {exam.name}
                </div>
                <div className="text-[10px] text-slate-500 mt-2">
                  {exam.session}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
