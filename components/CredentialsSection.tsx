'use client';

import React from 'react';
import { CertificationItem } from '@/lib/types';
import { Translations } from '@/lib/i18n';
import { ShieldCheck, Download, FileText, CheckCircle2, Eye } from 'lucide-react';

interface CredentialsSectionProps {
  certifications: CertificationItem[];
  t: Translations['credentials'];
  onViewDoc: (title: string, url: string, type: 'image' | 'pdf') => void;
}

export default function CredentialsSection({ certifications, t, onViewDoc }: CredentialsSectionProps) {
  return (
    <section id="credentials" className="py-20 relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => {
            const isPdf = cert.fileUrl?.endsWith('.pdf');
            return (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <FileText className="w-5 h-5" />
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{t.verifiedRecord}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>

                  {cert.credentialId && (
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                      {cert.credentialId}
                    </div>
                  )}

                  <div className="text-xs text-slate-400">
                    <span>{t.statusLabel}</span>
                    <span className="text-slate-200 font-medium">{cert.date}</span>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  {cert.fileUrl && (
                    <button
                      onClick={() => onViewDoc(cert.title, cert.fileUrl!, isPdf ? 'pdf' : 'image')}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{t.previewDoc}</span>
                    </button>
                  )}

                  {cert.fileUrl && (
                    <a
                      href={cert.fileUrl}
                      download
                      className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                      title={t.downloadDoc}
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
