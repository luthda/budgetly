# AI-Driven Budgeting Tool - Backend

This is the backend service for the AI-driven budgeting tool, built with Express, TypeScript, and Node.js.

## Prerequisites

- Node.js (v20 or higher)
- Yarn
- Docker (optional)

## Setup

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   NODE_ENV=development
   ```

## Development

Start the development server:

```bash
yarn dev
```

The server will start on http://localhost:3000 with hot-reload enabled.

## Building for Production

Build the TypeScript code:

```bash
yarn build
```

Start the production server:

```bash
yarn start
```

## Docker

Build the Docker image:

```bash
docker build -t budget-app-backend .
```

Run the container:

```bash
docker run -p 3000:3000 budget-app-backend
```

## API Endpoints

- `GET /api/health-check` - Health check endpoint

## Scripts

- `yarn dev` - Start development server with hot-reload
- `yarn build` - Build TypeScript code
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
