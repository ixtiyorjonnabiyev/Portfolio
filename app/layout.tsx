import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Ikhtiyorjon Nabiyev | Economics & Data Analytics | ACCA Candidate",
  description: "Official Portfolio of Ikhtiyorjon Nabiyev (Nabiyev Ixtiyorjon Muzaffar o'g'li) - 3rd-year Economics & Data Analytics student at New Uzbekistan University and ACCA Candidate (FR & FA Certified). Explore projects, financial analysis, credentials, and achievements.",
  keywords: [
    "Ikhtiyorjon Nabiyev",
    "Ixtiyorjon Nabiyev",
    "New Uzbekistan University",
    "Yangi O'zbekiston Universiteti",
    "ACCA Financial Reporting",
    "Economics Data Analytics",
    "Fintech Portfolio",
    "Financial Analyst Uzbekistan"
  ],
  authors: [{ name: "Ikhtiyorjon Nabiyev" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
