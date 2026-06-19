# Traffic Violation Detection System - Dockerfile
# Build: docker build -t traffic-violation-api:latest .
# Run: docker run -p 5000:5000 traffic-violation-api:latest

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install build dependencies (for canvas module)
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev \
    pixman-dev

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY server.js .

# Create uploads directory
RUN mkdir -p uploads

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:5000/api/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start application
CMD ["node", "server.js"]

# Metadata
LABEL maintainer="Traffic Enforcement Team"
LABEL description="AI-powered Traffic Violation Detection System"
LABEL version="1.0.0"
