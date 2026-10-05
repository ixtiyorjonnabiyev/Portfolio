'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import AccaSection from '@/components/AccaSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CredentialsSection from '@/components/CredentialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import OwnerEditorModal from '@/components/OwnerEditorModal';
import DocumentViewerModal from '@/components/DocumentViewerModal';
import { PortfolioData } from '@/lib/types';
import { INITIAL_PORTFOLIO_DATA } from '@/lib/initial-data';
import { PortfolioStorage } from '@/lib/storage';
import { Lock, Unlock, Edit3 } from 'lucide-react';

export default function PortfolioPage() {
  const [data, setData] = useState<PortfolioData>(INITIAL_PORTFOLIO_DATA);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState<{
    title: string;
    url: string;
    type: 'image' | 'pdf';
  } | null>(null);

  // Initialize from localStorage and auth state on mount
  useEffect(() => {
    const loadedData = PortfolioStorage.getData();
    setData(loadedData);
    setIsAdmin(PortfolioStorage.isAdminAuthenticated());
  }, []);

  const handleSaveData = (newData: PortfolioData) => {
    setData(newData);
    PortfolioStorage.saveData(newData);
  };

  const handleOpenDoc = (title: string, url: string, type: 'image' | 'pdf') => {
    setActiveDoc({ title, url, type });
  };

  const handleLockAdmin = () => {
    setIsAdmin(false);
    PortfolioStorage.setAdminAuthenticated(false);
    setIsEditorOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Navigation */}
      <Navbar
        isAdmin={isAdmin}
        onOpenAdmin={() => setIsEditorOpen(true)}
        onLockAdmin={handleLockAdmin}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          personal={data.personal}
          acca={data.acca}
          education={data.education}
          onViewDoc={handleOpenDoc}
        />

        <AboutSection
          personal={data.personal}
          onViewDoc={handleOpenDoc}
        />

        <EducationSection
          education={data.education}
          onViewDoc={handleOpenDoc}
        />

        <AccaSection
          acca={data.acca}
          onViewDoc={handleOpenDoc}
        />

        <SkillsSection
          categories={data.skills}
        />

        <ProjectsSection
          projects={data.projects}
        />

        <CredentialsSection
          certifications={data.certifications}
          onViewDoc={handleOpenDoc}
        />

        <ContactSection
          personal={data.personal}
        />
      </main>

      {/* Footer */}
      <Footer
        isAdmin={isAdmin}
        onOpenAdmin={() => setIsEditorOpen(true)}
      />

      {/* Floating Owner Button on Bottom Corner */}
      <aside aria-label="Owner portal quick actions" className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsEditorOpen(true)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold shadow-2xl transition-all transform hover:scale-105 ${
            isAdmin
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 ring-4 ring-emerald-500/20'
              : 'bg-slate-900/90 text-slate-300 border border-slate-700/80 hover:text-white hover:border-cyan-500/40 backdrop-blur-md'
          }`}
          title={isAdmin ? "Owner Mode Active: Click to edit content" : "Owner Login"}
        >
          {isAdmin ? (
            <>
              <Unlock className="w-4 h-4 text-slate-950" />
              <span>Owner Mode (Edit Content)</span>
            </>
          ) : (
            <>
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Owner Access</span>
            </>
          )}
        </button>
      </aside>

      {/* Owner Management Modal */}
      <OwnerEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        data={data}
        onSaveData={handleSaveData}
        isAdmin={isAdmin}
        onAdminAuthChange={setIsAdmin}
      />

      {/* Official Document Viewer Modal */}
      {activeDoc && (
        <DocumentViewerModal
          isOpen={true}
          onClose={() => setActiveDoc(null)}
          title={activeDoc.title}
          url={activeDoc.url}
          type={activeDoc.type}
        />
      )}

    </div>
  );
}
