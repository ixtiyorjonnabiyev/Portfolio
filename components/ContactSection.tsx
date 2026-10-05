'use client';

import React, { useState } from 'react';
import { PersonalInfo } from '@/lib/types';
import { Translations } from '@/lib/i18n';
import { Mail, Send, MapPin, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ContactSectionProps {
  personal: PersonalInfo;
  t: Translations['contact'];
}

export default function ContactSection({ personal, t }: ContactSectionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left 5 cols: Direct Contact Links */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white">
                {t.channelsTitle}
              </h3>

              <div className="space-y-4 text-sm">
                
                {/* Telegram */}
                <a
                  href={personal.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t.telegramTitle}</span>
                    <span className="font-semibold text-white">@ixtiyorjonnabiyev</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t.emailTitle}</span>
                    <span className="font-semibold text-white break-all">{personal.email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t.locationTitle}</span>
                    <span className="font-semibold text-white">{personal.location}</span>
                  </div>
                </div>

                {/* GitHub */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t.githubTitle}</span>
                    <span className="font-semibold text-white">ixtiyorjonnabiyev</span>
                  </div>
                </a>

              </div>
            </div>

          </div>

          {/* Right 7 cols: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">
                {t.formTitle}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {t.formSubtitle}
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">{t.redirectingTitle}</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    {t.redirectingDesc}
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs hover:text-white"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">{t.nameLabel}</label>
                      <input
                        type="text"
                        required
                        placeholder={t.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">{t.emailLabel}</label>
                      <input
                        type="email"
                        required
                        placeholder={t.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">{t.messageLabel}</label>
                    <textarea
                      rows={5}
                      required
                      placeholder={t.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{t.sendBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
