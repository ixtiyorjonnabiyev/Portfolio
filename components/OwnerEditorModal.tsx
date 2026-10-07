'use client';

import React, { useState } from 'react';
import { PortfolioData, ProjectItem, SkillCategory, ACCAExam } from '@/lib/types';
import { PortfolioStorage } from '@/lib/storage';
import { Translations } from '@/lib/i18n';
import { 
  Lock, 
  Unlock, 
  Save, 
  Download, 
  Upload, 
  RotateCcw, 
  Plus, 
  Trash2, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  KeyRound, 
  ShieldAlert, 
  User, 
  GraduationCap, 
  Award, 
  FolderGit2, 
  Wrench, 
  Shield 
} from 'lucide-react';

interface OwnerEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSaveData: (newData: PortfolioData) => void;
  isAdmin: boolean;
  onAdminAuthChange: (auth: boolean) => void;
  t: Translations['owner'];
}

export default function OwnerEditorModal({
  isOpen,
  onClose,
  data,
  onSaveData,
  isAdmin,
  onAdminAuthChange,
  t
}: OwnerEditorModalProps) {
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [activeTab, setActiveTab] = useState<'personal' | 'education' | 'acca' | 'projects' | 'skills' | 'security'>('personal');
  
  // Local editable copy of data
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync formData when data changes or modal opens
  React.useEffect(() => {
    setFormData(data);
  }, [data, isOpen]);

  if (!isOpen) return null;

  // Handle PIN verification
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === (data.adminPin || '1234')) {
      onAdminAuthChange(true);
      PortfolioStorage.setAdminAuthenticated(true);
      setPinError(false);
      setPinInput('');
    } else {
      setPinError(true);
    }
  };

  const handleSave = () => {
    onSaveData(formData);
    PortfolioStorage.saveData(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleResetToDefault = () => {
    if (window.confirm('Are you sure you want to reset all data back to the default profile? All custom edits will be lost.')) {
      const reset = PortfolioStorage.resetData();
      setFormData(reset);
      onSaveData(reset);
    }
  };

  const handleExport = () => {
    PortfolioStorage.exportDataJson(formData);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        setFormData(imported);
        onSaveData(imported);
        PortfolioStorage.saveData(imported);
        alert('Data imported and saved successfully!');
      } catch {
        alert('Invalid JSON file format.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              {isAdmin ? <Unlock className="w-5 h-5 text-emerald-400" /> : <Lock className="w-5 h-5 text-amber-400" />}
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Owner Management Portal</span>
                {isAdmin && (
                  <span className="text-[10px] bg-emerald-500/15 text-emerald-400 font-mono px-2 py-0.5 rounded border border-emerald-500/20">
                    UNLOCKED
                  </span>
                )}
              </h2>
              <p className="text-xs text-slate-400">
                {isAdmin ? "You have full editing permissions. Visitors have read-only view." : "Protected mode. Enter your Master PIN to edit."}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* If NOT authenticated: Show PIN Entry Dialog */}
        {!isAdmin ? (
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto my-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto shadow-inner">
              <KeyRound className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">
                Enter Owner Master PIN
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Only you (Ikhtiyorjon) can modify the portfolio content. The default PIN is <span className="font-mono text-cyan-400 font-bold">1234</span> (you can change it inside settings).
              </p>
            </div>

            <form onSubmit={handleUnlock} className="space-y-4">
              <div>
                <input
                  type="password"
                  autoFocus
                  placeholder="Enter Master PIN (Default: 1234)"
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    setPinError(false);
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                    pinError ? 'border-rose-500 text-rose-300' : 'border-slate-700 text-white'
                  } text-center font-mono text-lg tracking-widest focus:outline-none focus:border-cyan-400`}
                />
                {pinError && (
                  <p className="text-xs text-rose-400 mt-2 flex items-center justify-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Incorrect PIN. Try 1234 or your customized code.</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Unlock className="w-4 h-4" />
                <span>Unlock Owner Editing</span>
              </button>
            </form>
          </div>
        ) : (
          /* When AUTHENTICATED: Show Full Multi-Tab Editor */
          <div className="flex flex-col flex-1 overflow-hidden">
            
            {/* Tabs Bar */}
            <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-800 bg-slate-950/40 overflow-x-auto text-xs font-semibold">
              <button
                onClick={() => setActiveTab('personal')}
                className={`flex items-center gap-1.5 px-3 py-2.5 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'personal' ? 'border-cyan-400 text-cyan-300' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Personal & Bio</span>
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center gap-1.5 px-3 py-2.5 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'education' ? 'border-cyan-400 text-cyan-300' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>University</span>
              </button>
              <button
                onClick={() => setActiveTab('acca')}
                className={`flex items-center gap-1.5 px-3 py-2.5 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'acca' ? 'border-cyan-400 text-cyan-300' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>ACCA Exams</span>
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`flex items-center gap-1.5 px-3 py-2.5 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'projects' ? 'border-cyan-400 text-cyan-300' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Projects</span>
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`flex items-center gap-1.5 px-3 py-2.5 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'skills' ? 'border-cyan-400 text-cyan-300' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>Skills</span>
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`flex items-center gap-1.5 px-3 py-2.5 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'security' ? 'border-cyan-400 text-cyan-300' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Security & Backup</span>
              </button>
            </div>

            {/* Tab Contents Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              
              {/* TAB 1: Personal */}
              {activeTab === 'personal' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Display Name</label>
                      <input
                        type="text"
                        value={formData.personal.name}
                        onChange={(e) => setFormData({
                          ...formData,
                          personal: { ...formData.personal, name: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Uzbek Full Name (F.I.O)</label>
                      <input
                        type="text"
                        value={formData.personal.uzbekFullName}
                        onChange={(e) => setFormData({
                          ...formData,
                          personal: { ...formData.personal, uzbekFullName: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Professional Tagline</label>
                    <input
                      type="text"
                      value={formData.personal.tagline}
                      onChange={(e) => setFormData({
                        ...formData,
                        personal: { ...formData.personal, tagline: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Bio Summary</label>
                    <textarea
                      rows={4}
                      value={formData.personal.bio}
                      onChange={(e) => setFormData({
                        ...formData,
                        personal: { ...formData.personal, bio: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Location</label>
                      <input
                        type="text"
                        value={formData.personal.location}
                        onChange={(e) => setFormData({
                          ...formData,
                          personal: { ...formData.personal, location: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Email Address</label>
                      <input
                        type="email"
                        value={formData.personal.email}
                        onChange={(e) => setFormData({
                          ...formData,
                          personal: { ...formData.personal, email: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Telegram Link or Username</label>
                      <input
                        type="text"
                        value={formData.personal.telegram}
                        onChange={(e) => setFormData({
                          ...formData,
                          personal: { ...formData.personal, telegram: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">GitHub Profile URL</label>
                      <input
                        type="text"
                        value={formData.personal.github}
                        onChange={(e) => setFormData({
                          ...formData,
                          personal: { ...formData.personal, github: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Availability Status Badge</label>
                    <input
                      type="text"
                      value={formData.personal.status}
                      onChange={(e) => setFormData({
                        ...formData,
                        personal: { ...formData.personal, status: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: Education */}
              {activeTab === 'education' && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">University Name</label>
                    <input
                      type="text"
                      value={formData.education.university}
                      onChange={(e) => setFormData({
                        ...formData,
                        education: { ...formData.education, university: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Degree</label>
                      <input
                        type="text"
                        value={formData.education.degree}
                        onChange={(e) => setFormData({
                          ...formData,
                          education: { ...formData.education, degree: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Major / Field of Study</label>
                      <input
                        type="text"
                        value={formData.education.major}
                        onChange={(e) => setFormData({
                          ...formData,
                          education: { ...formData.education, major: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Year / Course</label>
                      <input
                        type="text"
                        value={formData.education.year}
                        onChange={(e) => setFormData({
                          ...formData,
                          education: { ...formData.education, year: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Period</label>
                      <input
                        type="text"
                        value={formData.education.period}
                        onChange={(e) => setFormData({
                          ...formData,
                          education: { ...formData.education, period: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Student ID Number</label>
                      <input
                        type="text"
                        value={formData.education.studentIdNumber}
                        onChange={(e) => setFormData({
                          ...formData,
                          education: { ...formData.education, studentIdNumber: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Study Mode & Academic Group</label>
                    <input
                      type="text"
                      value={formData.education.studyMode || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        education: { ...formData.education, studyMode: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                      placeholder="e.g. Kunduzgi (Full-time) - Group JED1"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Faculty Description</label>
                    <textarea
                      rows={3}
                      value={formData.education.description}
                      onChange={(e) => setFormData({
                        ...formData,
                        education: { ...formData.education, description: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400 resize-none"
                    />
                  </div>
                </div>
              )}

              {/* TAB 3: ACCA */}
              {activeTab === 'acca' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">ACCA Registration Number</label>
                      <input
                        type="text"
                        value={formData.acca.registrationNumber}
                        onChange={(e) => setFormData({
                          ...formData,
                          acca: { ...formData.acca, registrationNumber: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400 font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Registration Date</label>
                      <input
                        type="text"
                        value={formData.acca.registrationDate}
                        onChange={(e) => setFormData({
                          ...formData,
                          acca: { ...formData.acca, registrationDate: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Exam Status List</h4>
                      <button
                        onClick={() => {
                          const newExam: ACCAExam = {
                            code: 'NEW',
                            name: 'New ACCA Exam',
                            status: 'planned',
                            session: 'Upcoming'
                          };
                          setFormData({
                            ...formData,
                            acca: { ...formData.acca, exams: [...formData.acca.exams, newExam] }
                          });
                        }}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/20"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Exam</span>
                      </button>
                    </div>

                    <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                      {formData.acca.exams.map((exam, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center gap-2">
                          <input
                            type="text"
                            value={exam.code}
                            onChange={(e) => {
                              const updated = [...formData.acca.exams];
                              updated[idx].code = e.target.value;
                              setFormData({ ...formData, acca: { ...formData.acca, exams: updated } });
                            }}
                            className="w-16 px-2 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-bold"
                            placeholder="Code"
                          />
                          <input
                            type="text"
                            value={exam.name}
                            onChange={(e) => {
                              const updated = [...formData.acca.exams];
                              updated[idx].name = e.target.value;
                              setFormData({ ...formData, acca: { ...formData.acca, exams: updated } });
                            }}
                            className="flex-1 min-w-[140px] px-2 py-1 rounded bg-slate-900 border border-slate-800 text-white text-xs"
                            placeholder="Paper Name"
                          />
                          <select
                            value={exam.status}
                            onChange={(e) => {
                              const updated = [...formData.acca.exams];
                              updated[idx].status = e.target.value as any;
                              setFormData({ ...formData, acca: { ...formData.acca, exams: updated } });
                            }}
                            className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-200"
                          >
                            <option value="passed">Passed</option>
                            <option value="exempted">Exempted</option>
                            <option value="in-progress">In Progress</option>
                            <option value="planned">Planned</option>
                          </select>
                          <input
                            type="number"
                            value={exam.mark ?? ''}
                            onChange={(e) => {
                              const updated = [...formData.acca.exams];
                              updated[idx].mark = e.target.value ? Number(e.target.value) : undefined;
                              setFormData({ ...formData, acca: { ...formData.acca, exams: updated } });
                            }}
                            className="w-16 px-2 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono text-center"
                            placeholder="Score %"
                          />
                          <button
                            onClick={() => {
                              const updated = formData.acca.exams.filter((_, i) => i !== idx);
                              setFormData({ ...formData, acca: { ...formData.acca, exams: updated } });
                            }}
                            className="p-1 rounded text-rose-400 hover:bg-rose-500/10"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: Projects */}
              {activeTab === 'projects' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Project Portfolio</h4>
                    <button
                      onClick={() => {
                        const newProj: ProjectItem = {
                          id: `project-${Date.now()}`,
                          title: 'New Financial Project',
                          category: 'Fintech & Analytics',
                          summary: 'Short summary of the new project.',
                          description: 'Full detailed breakdown of what was achieved and designed.',
                          technologies: ['TypeScript', 'Next.js', 'IFRS'],
                          githubUrl: 'https://github.com/ixtiyorjonnabiyev',
                          featured: false
                        };
                        setFormData({
                          ...formData,
                          projects: [newProj, ...formData.projects]
                        });
                      }}
                      className="flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/20"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add New Project</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {formData.projects.map((proj, idx) => (
                      <div key={proj.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <input
                            type="text"
                            value={proj.title}
                            onChange={(e) => {
                              const updated = [...formData.projects];
                              updated[idx].title = e.target.value;
                              setFormData({ ...formData, projects: updated });
                            }}
                            className="flex-1 font-bold text-sm text-white px-2 py-1 rounded bg-slate-900 border border-slate-800 mr-2"
                          />
                          <div className="flex items-center gap-2">
                            <label className="flex items-center gap-1 text-xs text-cyan-400">
                              <input
                                type="checkbox"
                                checked={proj.featured}
                                onChange={(e) => {
                                  const updated = [...formData.projects];
                                  updated[idx].featured = e.target.checked;
                                  setFormData({ ...formData, projects: updated });
                                }}
                              />
                              <span>Featured</span>
                            </label>
                            <button
                              onClick={() => {
                                const updated = formData.projects.filter((_, i) => i !== idx);
                                setFormData({ ...formData, projects: updated });
                              }}
                              className="p-1 text-rose-400 hover:bg-rose-500/10 rounded"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <input
                            type="text"
                            placeholder="Category"
                            value={proj.category}
                            onChange={(e) => {
                              const updated = [...formData.projects];
                              updated[idx].category = e.target.value;
                              setFormData({ ...formData, projects: updated });
                            }}
                            className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300"
                          />
                          <input
                            type="text"
                            placeholder="GitHub Link"
                            value={proj.githubUrl || ''}
                            onChange={(e) => {
                              const updated = [...formData.projects];
                              updated[idx].githubUrl = e.target.value;
                              setFormData({ ...formData, projects: updated });
                            }}
                            className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                          />
                          <input
                            type="text"
                            placeholder="Live Web Service URL (e.g. https://...)"
                            value={proj.liveUrl || ''}
                            onChange={(e) => {
                              const updated = [...formData.projects];
                              updated[idx].liveUrl = e.target.value;
                              setFormData({ ...formData, projects: updated });
                            }}
                            className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-mono"
                          />
                        </div>

                        <textarea
                          rows={2}
                          placeholder="Project summary"
                          value={proj.summary}
                          onChange={(e) => {
                            const updated = [...formData.projects];
                            updated[idx].summary = e.target.value;
                            setFormData({ ...formData, projects: updated });
                          }}
                          className="w-full px-2 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300"
                        />

                        <input
                          type="text"
                          placeholder="Technologies (comma separated)"
                          value={proj.technologies.join(', ')}
                          onChange={(e) => {
                            const updated = [...formData.projects];
                            updated[idx].technologies = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                            setFormData({ ...formData, projects: updated });
                          }}
                          className="w-full px-2 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-cyan-300 font-mono"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: Skills */}
              {activeTab === 'skills' && (
                <div className="space-y-4">
                  {formData.skills.map((category, catIdx) => (
                    <div key={catIdx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={category.title}
                          onChange={(e) => {
                            const updated = [...formData.skills];
                            updated[catIdx].title = e.target.value;
                            setFormData({ ...formData, skills: updated });
                          }}
                          className="font-bold text-sm text-cyan-400 px-2 py-1 rounded bg-slate-900 border border-slate-800"
                        />
                        <button
                          onClick={() => {
                            const updated = [...formData.skills];
                            updated[catIdx].skills.push({ name: 'New Skill', level: 80 });
                            setFormData({ ...formData, skills: updated });
                          }}
                          className="text-xs font-semibold text-emerald-400 hover:underline flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" /> Add Skill
                        </button>
                      </div>

                      <div className="space-y-2">
                        {category.skills.map((s, skillIdx) => (
                          <div key={skillIdx} className="flex items-center gap-2">
                            <input
                              type="text"
                              value={s.name}
                              onChange={(e) => {
                                const updated = [...formData.skills];
                                updated[catIdx].skills[skillIdx].name = e.target.value;
                                setFormData({ ...formData, skills: updated });
                              }}
                              className="flex-1 px-2 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-white"
                            />
                            <input
                              type="number"
                              min={10}
                              max={100}
                              value={s.level}
                              onChange={(e) => {
                                const updated = [...formData.skills];
                                updated[catIdx].skills[skillIdx].level = Number(e.target.value);
                                setFormData({ ...formData, skills: updated });
                              }}
                              className="w-16 px-2 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-center text-cyan-400 font-mono"
                            />
                            <button
                              onClick={() => {
                                const updated = [...formData.skills];
                                updated[catIdx].skills.splice(skillIdx, 1);
                                setFormData({ ...formData, skills: updated });
                              }}
                              className="p-1 text-rose-400 hover:bg-rose-500/10 rounded"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 6: Security & Backup */}
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <KeyRound className="w-4 h-4 text-cyan-400" />
                      <span>Owner Master PIN / Access Code</span>
                    </h4>
                    <p className="text-xs text-slate-400">
                      This PIN secures your editing controls. Keep it confidential so visitors cannot alter your portfolio.
                    </p>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={formData.adminPin}
                        onChange={(e) => setFormData({ ...formData, adminPin: e.target.value })}
                        className="w-48 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 font-mono font-bold text-sm text-center"
                      />
                      <span className="text-xs text-slate-500">Active Master PIN</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Download className="w-4 h-4 text-emerald-400" />
                      <span>Data Backup & Portability</span>
                    </h4>
                    <p className="text-xs text-slate-400">
                      Download a complete JSON snapshot of all your portfolio items or restore from a backup.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={handleExport}
                        className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 font-semibold text-xs flex items-center gap-2 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Export Backup JSON</span>
                      </button>
                      
                      <label className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-700 font-semibold text-xs flex items-center gap-2 cursor-pointer transition-colors">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Import JSON Backup</span>
                        <input
                          type="file"
                          accept=".json"
                          onChange={handleImport}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-3">
                    <h4 className="text-sm font-bold text-rose-300 flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400" />
                      <span>Danger Zone</span>
                    </h4>
                    <p className="text-xs text-slate-400">
                      Reset your portfolio back to the verified university and ACCA default record.
                    </p>
                    <button
                      onClick={handleResetToDefault}
                      className="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold flex items-center gap-2 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset to Verified Official Default</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Bottom Footer Actions */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onAdminAuthChange(false);
                    PortfolioStorage.setAdminAuthenticated(false);
                    onClose();
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Lock & Return to Visitor View</span>
                </button>

                {saveSuccess && (
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 animate-fade-in">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Saved to your browser storage!</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs"
                >
                  Close
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs hover:brightness-110 shadow-md shadow-cyan-500/20 flex items-center gap-2 transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>Save All Changes</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
