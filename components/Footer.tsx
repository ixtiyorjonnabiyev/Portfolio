'use client';

import React from 'react';
import { ShieldCheck, ArrowUp, Lock, Unlock } from 'lucide-react';
import { Translations } from '@/lib/i18n';

interface FooterProps {
  isAdmin: boolean;
  onOpenAdmin: () => void;
  t: Translations['footer'];
  navT: Translations['nav'];
}

export default function Footer({ isAdmin, onOpenAdmin, t, navT }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1.5px]">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                IN
              </div>
            </div>
            <div>
              <p className="font-bold text-white text-sm">Ikhtiyorjon Nabiyev</p>
              <p className="text-xs text-slate-400">
                {t.tagline}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">{navT.about}</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">{navT.education}</a>
            <a href="#acca" className="hover:text-cyan-400 transition-colors">{navT.acca}</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">{navT.projects}</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">{navT.contact}</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
            >
              {isAdmin ? <Unlock className="w-3.5 h-3.5 text-emerald-400" /> : <Lock className="w-3.5 h-3.5 text-slate-500" />}
              <span>{isAdmin ? t.ownerMode : t.ownerLogin}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Ikhtiyorjon Nabiyev. {t.allRights}
          </p>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            <span>{t.regNotice}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
