'use client';

import React, { useState } from 'react';
import { Lock, Unlock, Menu, X, Globe } from 'lucide-react';
import { Language } from '@/lib/types';
import { Translations } from '@/lib/i18n';

interface NavbarProps {
  isAdmin: boolean;
  onOpenAdmin: () => void;
  onLockAdmin: () => void;
  lang: Language;
  onSelectLang: (lang: Language) => void;
  t: Translations['nav'];
}

export default function Navbar({
  isAdmin,
  onOpenAdmin,
  onLockAdmin,
  lang,
  onSelectLang,
  t
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.education, href: '#education' },
    { name: t.acca, href: '#acca' },
    { name: t.skills, href: '#skills' },
    { name: t.projects, href: '#projects' },
    { name: t.credentials, href: '#credentials' },
    { name: t.contact, href: '#contact' },
  ];

  const languages: { code: Language; label: string; flag: string; full: string }[] = [
    { code: 'en', label: 'ENG', flag: '🇬🇧', full: 'English' },
    { code: 'uz', label: 'UZB', flag: '🇺🇿', full: "O'zbekcha" },
    { code: 'ru', label: 'RUS', flag: '🇷🇺', full: 'Русский' },
  ];

  const currentLangObj = languages.find(l => l.code === lang) || languages[0];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Monogram */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-base">
                IN
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-sm tracking-tight group-hover:text-cyan-400 transition-colors">
              Ikhtiyorjon Nabiyev
            </span>
            <span className="text-[10px] text-cyan-400/90 font-mono tracking-wider">
              ECONOMICS & ACCA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2.5 lg:px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:border-cyan-400/60 hover:text-white transition-all"
              title="Change Language"
            >
              <span className="text-sm">{currentLangObj.flag}</span>
              <span className="font-mono text-cyan-300">{currentLangObj.label}</span>
              <Globe className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {langDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-36 rounded-xl bg-slate-900 border border-slate-700 shadow-xl py-1 z-50 animate-fade-in"
                onMouseLeave={() => setLangDropdownOpen(false)}
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      onSelectLang(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`flex items-center gap-2.5 w-full px-3 py-2 text-xs font-medium text-left transition-colors ${
                      lang === l.code
                        ? 'bg-cyan-500/15 text-cyan-300 font-bold'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="text-base">{l.flag}</span>
                    <span>{l.full}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Owner / Admin mode toggle */}
          {isAdmin ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/30 transition-all"
                title="Edit portfolio content"
              >
                <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.ownerMode}</span>
              </button>
              <button
                onClick={onLockAdmin}
                className="p-1.5 text-xs text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
                title="Lock editor for public view"
              >
                <Lock className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-all"
              title="Unlock Owner Edit Mode"
            >
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>{t.ownerAccess}</span>
            </button>
          )}

          {/* Quick Connect CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:brightness-110 shadow-sm shadow-cyan-500/20 transition-all"
          >
            <span>{t.connect}</span>
          </a>
        </div>

        {/* Mobile menu right controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => onSelectLang(l.code)}
                className={`px-2 py-1 text-[11px] font-bold rounded ${
                  lang === l.code
                    ? 'bg-cyan-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="flex items-center justify-center gap-2 w-full py-2 text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 rounded-lg"
            >
              {isAdmin ? <Unlock className="w-4 h-4 text-emerald-400" /> : <Lock className="w-4 h-4 text-slate-500" />}
              {isAdmin ? t.ownerMode : t.ownerAccess}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-semibold"
            >
              {t.connect}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
