Write-Host "Checking Git Status..."
git status
git add .
$changes = git status --porcelain
if ($changes) {
    git commit -m "feat: portfolio update"
}
git push origin main
Write-Host "Deployment triggered on GitHub/Vercel successfully!"
