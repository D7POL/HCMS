param(
  [switch]$Rebuild
)

$ErrorActionPreference = 'Stop'
Write-Host "Starting Enabiz stack..." -ForegroundColor Cyan

if ($Rebuild) {
  docker compose build --no-cache
}

docker compose up -d --build

Write-Host "Waiting for services to become healthy..." -ForegroundColor Yellow

function Wait-Healthy($service) {
  for ($i = 0; $i -lt 60; $i++) {
    $status = docker inspect --format='{{json .State.Health.Status}}' $(docker compose ps -q $service) 2>$null
    if ($LASTEXITCODE -ne 0) { Start-Sleep -Seconds 2; continue }
    if ($status -eq '"healthy"') { return }
    Start-Sleep -Seconds 2
  }
  throw "$service did not become healthy in time"
}

Wait-Healthy postgres
Wait-Healthy mongo

Write-Host "API available at http://localhost:3000/health" -ForegroundColor Green
Write-Host "Frontend available at http://localhost:8080" -ForegroundColor Green

Start-Process "http://localhost:8080"



