import { PortfolioData } from './types';
import { INITIAL_PORTFOLIO_DATA } from './initial-data';

const STORAGE_KEY = 'ikhtiyorjon_portfolio_data_v6';
const AUTH_KEY = 'ikhtiyorjon_portfolio_is_admin';

export const PortfolioStorage = {
  getData(): PortfolioData {
    if (typeof window === 'undefined') return INITIAL_PORTFOLIO_DATA;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return INITIAL_PORTFOLIO_DATA;
      const parsed = JSON.parse(saved);
      // Ensure merged with initial to prevent missing properties on future updates
      const merged: PortfolioData = {
        ...INITIAL_PORTFOLIO_DATA,
        ...parsed,
        adminPin: parsed.adminPin || INITIAL_PORTFOLIO_DATA.adminPin || 'Ixtiyorjon_06',
        personal: { ...INITIAL_PORTFOLIO_DATA.personal, ...parsed.personal },
        education: { ...INITIAL_PORTFOLIO_DATA.education, ...parsed.education, documentUrl: '' },
        acca: { ...INITIAL_PORTFOLIO_DATA.acca, ...parsed.acca },
      };
      // Explicitly delete sensitive private identity info
      delete (merged.personal as any).jshshir;
      delete (merged.education as any).jshshir;
      delete (merged.education as any).studentIdNumber;
      return merged;
    } catch {
      return INITIAL_PORTFOLIO_DATA;
    }
  },

  saveData(data: PortfolioData): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      // Asynchronously trigger server-side persistence if available
      fetch('/api/save-portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data,
          adminPin: data.adminPin || 'Ixtiyorjon_06',
          autoDeploy: false
        })
      }).catch(() => {});
    } catch (e) {
      console.error('Failed to save portfolio data to localStorage', e);
    }
  },

  async saveToServerAndDeploy(data: PortfolioData, adminPin: string, autoDeploy = true): Promise<{
    success: boolean;
    fileSaved?: boolean;
    gitDeployed?: boolean;
    message?: string;
    error?: string;
  }> {
    try {
      const res = await fetch('/api/save-portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data, adminPin, autoDeploy })
      });
      return await res.json();
    } catch (err: any) {
      return { success: false, error: err?.message || 'Network request failed' };
    }
  },

  resetData(): PortfolioData {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('ikhtiyorjon_portfolio_data_v4');
      localStorage.removeItem('ikhtiyorjon_portfolio_data_v3');
      localStorage.removeItem('ikhtiyorjon_portfolio_data_v2');
      localStorage.removeItem('ikhtiyorjon_portfolio_data_v1');
    }
    return INITIAL_PORTFOLIO_DATA;
  },

  exportDataJson(data: PortfolioData): void {
    if (typeof window === 'undefined') return;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ikhtiyorjon_portfolio_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  isAdminAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(AUTH_KEY) === 'true';
  },

  setAdminAuthenticated(auth: boolean): void {
    if (typeof window === 'undefined') return;
    if (auth) {
      sessionStorage.setItem(AUTH_KEY, 'true');
    } else {
      sessionStorage.removeItem(AUTH_KEY);
    }
  },

  getLanguage(): 'en' | 'uz' | 'ru' {
    if (typeof window === 'undefined') return 'en';
    const saved = localStorage.getItem('ikhtiyorjon_portfolio_lang') as 'en' | 'uz' | 'ru' | null;
    if (saved && (saved === 'en' || saved === 'uz' || saved === 'ru')) return saved;
    return 'en';
  },

  setLanguage(lang: 'en' | 'uz' | 'ru'): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('ikhtiyorjon_portfolio_lang', lang);
  }
};
