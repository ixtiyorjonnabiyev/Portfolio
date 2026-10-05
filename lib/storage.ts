import { PortfolioData } from './types';
import { INITIAL_PORTFOLIO_DATA } from './initial-data';

const STORAGE_KEY = 'ikhtiyorjon_portfolio_data_v1';
const AUTH_KEY = 'ikhtiyorjon_portfolio_is_admin';

export const PortfolioStorage = {
  getData(): PortfolioData {
    if (typeof window === 'undefined') return INITIAL_PORTFOLIO_DATA;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return INITIAL_PORTFOLIO_DATA;
      const parsed = JSON.parse(saved);
      // Ensure merged with initial to prevent missing properties on future updates
      return {
        ...INITIAL_PORTFOLIO_DATA,
        ...parsed,
        personal: { ...INITIAL_PORTFOLIO_DATA.personal, ...parsed.personal },
        education: { ...INITIAL_PORTFOLIO_DATA.education, ...parsed.education },
        acca: { ...INITIAL_PORTFOLIO_DATA.acca, ...parsed.acca },
      };
    } catch {
      return INITIAL_PORTFOLIO_DATA;
    }
  },

  saveData(data: PortfolioData): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save portfolio data to localStorage', e);
    }
  },

  resetData(): PortfolioData {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
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
