'use client';

import React from 'react';
import { PersonalInfo, ACCAInfo, EducationInfo } from '@/lib/types';
import { 
  FileText, 
  Send, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Award, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Download
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  personal: PersonalInfo;
  acca: ACCAInfo;
  education: EducationInfo;
  onViewDoc: (title: string, url: string, type: 'image' | 'pdf') => void;
}

export default function Hero({ personal, acca, education, onViewDoc }: HeroProps) {
  const passedExamsCount = acca.exams.filter(e => e.status === 'passed' || e.status === 'exempted').length;

  return (
    <section id="hero" className="relative pt-12 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-emerald-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 w-fit backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {personal.status}
              </span>
            </div>

            {/* Names & Main Heading */}
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                {personal.uzbekFullName}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                  {personal.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 leading-snug pt-1">
                {personal.tagline}
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {personal.bio}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>New Uzbekistan University (Year 3)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>ACCA Reg: #{acca.registrationNumber}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onViewDoc("Official ACCA Examination Transcript", acca.transcriptUrl, "pdf")}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white font-medium text-sm transition-all"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>ACCA Transcript</span>
              </button>

              <button
                onClick={() => onViewDoc("Student Identity Card - New Uzbekistan University", education.documentUrl, "image")}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-sm transition-all"
              >
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Student ID</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Connect:</span>
              <a
                href={personal.telegram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Card with Avatar & Credentials */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-emerald-500 opacity-40 blur-xl"></div>
              
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/60 p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Profile Header in Card */}
                <div className="flex items-center gap-5 pb-5 border-b border-slate-800">
                  <div className="relative">
                    <div className="w-24 h-28 rounded-2xl overflow-hidden border-2 border-cyan-400/80 shadow-md bg-slate-950 flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={personal.avatar}
                        alt={personal.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          // Fallback to student ID directly if cropped avatar fails
                          (e.target as HTMLImageElement).src = '/student_id.jpg';
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 p-1 bg-slate-950 rounded-full border border-slate-700">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <h2 className="text-lg font-bold text-white">
                        {personal.name}
                      </h2>
                    </div>
                    <p className="text-xs text-cyan-400 font-medium">
                      BSc Economics & Data Analytics
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Yangi O&apos;zbekiston universiteti
                    </p>
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                      <span>ACCA Candidate (FR & FA)</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 py-5">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="text-xs font-medium">ACCA Qualified</span>
                      <Award className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-2xl font-extrabold text-white">
                      {passedExamsCount} <span className="text-xs text-slate-400 font-normal">Papers</span>
                    </div>
                    <p className="text-[10px] text-emerald-400 mt-0.5">
                      FR (64%) &bull; FA (65%) &bull; BT Exemption
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="text-xs font-medium">University Level</span>
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-extrabold text-white">
                      3rd <span className="text-xs text-slate-400 font-normal">Year</span>
                    </div>
                    <p className="text-[10px] text-cyan-300 mt-0.5">
                      Group FED1 &bull; GPA Honors
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="text-xs font-medium">Core Stack</span>
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-sm font-bold text-white mt-1">
                      IFRS & Analytics
                    </div>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      Excel, Python, Next.js
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="text-xs font-medium">Built Platform</span>
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="text-sm font-bold text-white mt-1">
                      Moliya ERP
                    </div>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      Live Financial System
                    </p>
                  </div>
                </div>

                {/* Identity Verification Summary Box */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/40 to-slate-950/60 border border-cyan-500/20 text-xs text-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Verified Academic ID</span>
                      <p className="text-[11px] text-slate-400">Guvoqnoma: {education.studentIdNumber}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onViewDoc("Student Identity Card", education.documentUrl, "image")}
                    className="px-2.5 py-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-md transition-colors"
                  >
                    Inspect
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
