# Auto-deploy helper script for Ikhtiyorjon's Portfolio

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "   Ikhtiyorjon Nabiyev - Portfolio Deploy  " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

Write-Host "`n[1/3] Checking Git Status..." -ForegroundColor Yellow
git status

Write-Host "`n[2/3] Adding and committing any pending changes..." -ForegroundColor Yellow
git add .
git commit -m "feat: portfolio update $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

Write-Host "`n[3/3] Pushing to GitHub (origin main)..." -ForegroundColor Yellow
Write-Host "Target: https://github.com/ixtiyorjonnabiyev/Portfolio.git" -ForegroundColor DarkCyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "If linked with Vercel, your site is automatically deploying now at your Vercel URL!" -ForegroundColor Green
} else {
    Write-Host "`nNote: If this is your first push, please make sure you created the empty repository on GitHub:" -ForegroundColor Yellow
    Write-Host "1. Go to: https://github.com/new" -ForegroundColor Cyan
    Write-Host "2. Set Repository name: Portfolio" -ForegroundColor Cyan
    Write-Host "3. Leave it public, don't check 'Initialize with README'" -ForegroundColor Cyan
    Write-Host "4. Click 'Create repository' and run this script again!" -ForegroundColor Cyan
}
