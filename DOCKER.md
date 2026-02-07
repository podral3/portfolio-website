# Docker Setup

This portfolio website is fully dockerized for both development and production environments.

## Prerequisites

- Docker (version 20.10+)
- Docker Compose (version 2.0+)

## Production Build

### Build the image

```bash
docker build -t portfolio-website:latest .
```

### Run the container

```bash
docker run -p 3000:3000 portfolio-website:latest
```

The website will be available at `http://localhost:3000`

### Using Docker Compose (Production)

```bash
docker-compose up -d
```

This will start the containerized website on port 3000.

## Development Build

For development with hot reloading:

### Using Docker Compose

```bash
docker-compose -f docker-compose.dev.yml up
```

This will:
- Mount the current directory for live code changes
- Enable Vite hot module replacement (HMR)
- Watch for file changes and automatically reload

The development server will be available at `http://localhost:3000`

## Available Commands

### Production
```bash
# Build image
docker build -t portfolio-website:latest .

# Run container
docker run -p 3000:3000 portfolio-website:latest

# With docker-compose
docker-compose up -d          # Start in background
docker-compose logs -f        # View logs
docker-compose down           # Stop containers
```

### Development
```bash
# Start dev environment
docker-compose -f docker-compose.dev.yml up

# Stop dev environment
docker-compose -f docker-compose.dev.yml down
```

## Image Details

**Production Image:**
- Base: `node:20-alpine` (lightweight)
- Size: ~200MB (optimized with multi-stage build)
- Entrypoint: `serve -s dist -l 3000`
- Health check: Enabled

**Development Image:**
- Base: `node:20-alpine`
- Entrypoint: `npm run dev --host`
- Volumes: Source code mounted for hot reloading

## Port Mapping

- Container port: 3000
- Host port: 3000 (configurable in docker-compose.yml)

## Environment Variables

- `NODE_ENV`: Set to `production` by default in docker-compose.yml

## Troubleshooting

**Container exits immediately:**
```bash
docker-compose logs
```

**Port 3000 already in use:**
```bash
# Change port in docker-compose.yml
# Modify: ports: - "3000:3000"  -> ports: - "8080:3000"
```

**Hot reload not working in development:**
- Ensure volume mounts are correct in `docker-compose.dev.yml`
- Check file permissions in the mounted directory

**Need to rebuild:**
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up
```

## Production Deployment

For cloud deployment (AWS, GCP, Azure, etc.):

1. Push to container registry:
```bash
docker tag portfolio-website:latest your-registry/portfolio-website:latest
docker push your-registry/portfolio-website:latest
```

2. Deploy to Kubernetes, Docker Swarm, or managed container service

## Additional Notes

- The production build uses a multi-stage build for optimized image size
- Health checks are configured to ensure container liveness
- The dev image includes all source code and nodules for fast iteration
- Both images use Alpine Linux for minimal footprint
