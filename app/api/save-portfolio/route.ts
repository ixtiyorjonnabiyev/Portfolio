import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, adminPin, autoDeploy } = body;

    // Validate PIN
    const expectedPin = data?.adminPin || 'Ixtiyorjon_06';
    if (adminPin !== 'Ixtiyorjon_06' && adminPin !== expectedPin) {
      return NextResponse.json({ error: 'Unauthorized: Invalid Admin PIN' }, { status: 401 });
    }

    if (!data) {
      return NextResponse.json({ error: 'Missing portfolio data' }, { status: 400 });
    }

    const targetFile = path.join(process.cwd(), 'lib', 'initial-data.ts');
    const content = `import { PortfolioData } from './types';\n\nexport const INITIAL_PORTFOLIO_DATA: PortfolioData = ${JSON.stringify(data, null, 2)};\n`;

    let fileSaved = false;
    let gitDeployed = false;
    let gitOutput = '';

    try {
      fs.writeFileSync(targetFile, content, 'utf-8');
      fileSaved = true;
    } catch (fsErr: any) {
      console.warn('Could not write to lib/initial-data.ts directly:', fsErr?.message);
    }

    if (fileSaved && autoDeploy) {
      try {
        const { stdout, stderr } = await execAsync('git add lib/initial-data.ts && git commit -m "feat: portfolio data update by owner" && git push origin main');
        gitDeployed = true;
        gitOutput = (stdout || '') + (stderr || '');
      } catch (gitErr: any) {
        gitOutput = gitErr?.message || String(gitErr);
      }
    }

    return NextResponse.json({
      success: true,
      fileSaved,
      gitDeployed,
      gitOutput,
      message: gitDeployed 
        ? 'Successfully saved to lib/initial-data.ts and deployed to GitHub & Vercel!'
        : fileSaved
        ? 'Successfully saved to lib/initial-data.ts file on disk.'
        : 'Saved to browser storage.'
    });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Server error occurred' }, { status: 500 });
  }
}
