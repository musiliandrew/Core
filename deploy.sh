#!/bin/bash

echo "🚀 Deploying QuantIQ Landing Page..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker is not running. Please start Docker first.${NC}"
    exit 1
fi

# Create network if it doesn't exist
echo -e "${YELLOW}📡 Creating Docker network...${NC}"
docker network create quantiq-network 2>/dev/null || echo "Network already exists"

# Build and deploy
echo -e "${YELLOW}🔨 Building landing page...${NC}"
docker-compose build

echo -e "${YELLOW}🚀 Starting services...${NC}"
docker-compose up -d

# Check if services are running
echo -e "${YELLOW}🔍 Checking service status...${NC}"
sleep 5

if docker ps | grep -q "quantiq-landing"; then
    echo -e "${GREEN}✅ Landing page is running${NC}"
else
    echo -e "${RED}❌ Landing page failed to start${NC}"
    docker-compose logs quantiq-landing
    exit 1
fi

if docker ps | grep -q "nginx-proxy"; then
    echo -e "${GREEN}✅ Nginx proxy is running${NC}"
else
    echo -e "${RED}❌ Nginx proxy failed to start${NC}"
    docker-compose logs nginx-proxy
    exit 1
fi

echo -e "${GREEN}🎉 Deployment successful!${NC}"
echo -e "${GREEN}🌐 Your site should be available at:${NC}"
echo -e "${GREEN}   - http://quantiq.co.ke${NC}"
echo -e "${GREEN}   - http://www.quantiq.co.ke${NC}"
echo ""
echo -e "${YELLOW}📝 Next steps:${NC}"
echo -e "${YELLOW}   1. Set up SSL with Let's Encrypt${NC}"
echo -e "${YELLOW}   2. Update BookSwaps container to use the network${NC}"
echo -e "${YELLOW}   3. Test both sites are working${NC}"
