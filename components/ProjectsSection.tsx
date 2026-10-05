'use client';

import React, { useState } from 'react';
import { ProjectItem } from '@/lib/types';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  ChevronRight,
  TrendingUp,
  Building2,
  CheckCircle2
} from 'lucide-react';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filters = ['all', 'Fintech & ERP', 'Financial Analytics', 'Data Science & Economics'];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <section id="projects" className="py-20 relative bg-slate-900/30 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineering & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Financial & Tech Projects
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Real-world systems combining financial mathematics, business logic, and modern software architectures.
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
                {f === 'all' ? 'All Projects' : f}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Showcase Card (Moliya) */}
        {projects.find(p => p.featured) && (
          <div className="mb-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-cyan-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Flagship System
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
                    {projects.find(p => p.featured)?.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {projects.find(p => p.featured)?.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {projects.find(p => p.featured)?.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {projects.find(p => p.featured)?.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  {projects.find(p => p.featured)?.githubUrl && (
                    <a
                      href={projects.find(p => p.featured)?.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all shadow-md"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setActiveProject(projects.find(p => p.featured)!)}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors"
                  >
                    <span>Read System Architecture</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right preview box */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 shadow-inner space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono text-cyan-400">moliya-app &bull; v1.0</span>
                    <span className="text-[10px] bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded">Production Ready</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                      <span className="text-slate-400">Target Sectors</span>
                      <span className="text-slate-200 font-medium">Retail, Factory, Logistics, Agro</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                      <span className="text-slate-400">Currency Support</span>
                      <span className="text-slate-200 font-mono">UZS & USD Dual Bookkeeping</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                      <span className="text-slate-400">Compliance</span>
                      <span className="text-emerald-400 font-semibold">IFRS & Local Tax Standards</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/20 text-[11px] text-emerald-300 leading-snug">
                    ✓ Implemented automated P&L, balance sheet reconciliations and real-time inventory tracking.
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.filter(p => !p.featured).map((project) => (
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
                      <Github className="w-4 h-4" />
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

              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <span>Learn details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
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
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies & Concepts:</h4>
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
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:brightness-110"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
