'use client';

import React, { useState } from 'react';
import { ProjectItem } from '@/lib/types';
import { Translations } from '@/lib/i18n';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  ChevronRight,
  Rocket,
  ShieldAlert,
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  t: Translations['projects'];
}

export default function ProjectsSection({ projects, t }: ProjectsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filters = ['all', 'Fintech & ERP', 'Data Science & Risk', 'Economics & Research'];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => {
        const cat = p.category.toLowerCase();
        const sel = selectedFilter.toLowerCase();
        if (sel.includes('data science') && (cat.includes('data science') || cat.includes('risk') || cat.includes('analytics'))) return true;
        if (sel.includes('fintech') && cat.includes('fintech')) return true;
        if (sel.includes('economics') && (cat.includes('economics') || cat.includes('data science'))) return true;
        return cat.includes(sel);
      });

  const featuredProjects = projects.filter(p => p.featured);
  const [selectedFlagshipId, setSelectedFlagshipId] = useState<string>(
    featuredProjects[0]?.id || projects[0]?.id || ''
  );

  const flagship = projects.find(p => p.id === selectedFlagshipId) || featuredProjects[0] || projects[0];

  // In 'all' view, grid shows other projects, in category view it shows matching projects
  const gridProjects = selectedFilter === 'all'
    ? projects.filter(p => p.id !== flagship?.id)
    : filteredProjects;

  return (
    <section id="projects" className="py-20 relative bg-slate-900/30 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.title}
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              {t.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedFilter === f
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {f === 'all' ? t.filterAll : f}
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Platform Selector Tabs (if multiple featured) */}
        {featuredProjects.length > 1 && (
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Featured Deployments:
            </span>
            {featuredProjects.map((fp) => {
              const isSelected = flagship?.id === fp.id;
              return (
                <button
                  key={fp.id}
                  onClick={() => setSelectedFlagshipId(fp.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <Sparkles className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950' : 'text-cyan-400'}`} />
                  <span>{fp.id === 'moliya-app' ? 'Moliya Enterprise ERP' : fp.id === 'aegis-risk-os' ? 'AEGIS Risk OS' : fp.title}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Featured Project Showcase Card */}
        {flagship && (
          <div className="mb-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-cyan-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    {t.flagshipBadge}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
                    {flagship.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {flagship.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {flagship.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {flagship.technologies.map((techItem, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-mono"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Action links: Direct Web Service Link & GitHub */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  {flagship.liveUrl && (
                    <a
                      href={flagship.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold text-xs hover:brightness-110 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
                    >
                      <Rocket className="w-4 h-4 text-slate-950" />
                      <span>{t.liveService}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {flagship.githubUrl && (
                    <a
                      href={flagship.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all shadow-md"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{t.viewRepo}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setActiveProject(flagship)}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors"
                  >
                    <span>{t.readArch}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right preview box */}
              <div className="lg:col-span-5">
                {flagship.id === 'aegis-risk-os' ? (
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 shadow-inner space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-xs font-mono text-cyan-400">aegis-risk-os &bull; v2.4</span>
                      <span className="text-[10px] bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded font-semibold">Live System</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-slate-400">Simulation Engine</span>
                        <span className="text-slate-200 font-medium">Monte Carlo (50,000 Paths)</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-slate-400">Tail Risk Models</span>
                        <span className="text-amber-400 font-mono">VaR 95% ($18.4M) &bull; CVaR ($36.2M)</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-slate-400">Cross-Asset Matrix</span>
                        <span className="text-emerald-400 font-semibold">SPX, NDX, UST, Gold, Oil, BTC</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-950/40 via-emerald-950/30 to-slate-900 border border-cyan-500/20 text-[11px] text-cyan-300 leading-snug">
                      ✓ Institutional risk operating system featuring parametric VaR, macro crisis replay (2008 Lehman, COVID-19), OMS trading simulation &amp; UCITS compliance.
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 shadow-inner space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-xs font-mono text-cyan-400">moliya-app &bull; v1.0</span>
                      <span className="text-[10px] bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded font-semibold">Production Ready</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-slate-400">{t.targetSectors}</span>
                        <span className="text-slate-200 font-medium">{t.targetSectorsVal}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-slate-400">{t.currencySupport}</span>
                        <span className="text-slate-200 font-mono">{t.currencySupportVal}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-slate-400">{t.compliance}</span>
                        <span className="text-emerald-400 font-semibold">{t.complianceVal}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/20 text-[11px] text-emerald-300 leading-snug">
                      {t.highlightNote}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all group shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 hover:text-white transition-colors"
                      title="GitHub repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <span>{t.learnDetails}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-xs font-semibold transition-colors"
                      title={t.liveService}
                    >
                      <Rocket className="w-3.5 h-3.5" />
                      <span>{t.liveService}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-2 py-1 rounded-lg hover:bg-slate-800"
                    >
                      <span>{t.code}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {activeProject.category}
                </span>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                {activeProject.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeProject.description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">{t.techAndConcepts}</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors"
                  >
                    <Rocket className="w-4 h-4" />
                    <span>{t.liveService}</span>
                  </a>
                )}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>{t.viewRepo}</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:brightness-110"
                >
                  {t.close}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
