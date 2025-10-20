$ErrorActionPreference = 'Stop'
Write-Host "Stopping Enabiz stack..." -ForegroundColor Cyan
docker compose down
Write-Host "Stopped." -ForegroundColor Green



