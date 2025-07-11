#!/bin/bash

echo "🔄 Updating QuantIQ Landing Page..."

# Pull latest changes
echo "📥 Pulling latest changes from Git..."
git pull origin main

# Rebuild and redeploy
echo "🔨 Rebuilding and redeploying..."
docker-compose -f docker-compose-landing.yml down
docker-compose -f docker-compose-landing.yml up -d --build

# Check if it's running
echo "✅ Checking deployment status..."
docker ps | grep quantiq-landing

echo "🎉 Update complete! Check https://quantiq.co.ke"
