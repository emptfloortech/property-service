# Auth Service

A NestJS-based authentication microservice that provides JWT-based authentication with PostgreSQL database.

## Features

- User login with JWT token generation
- Token verification endpoint
- PostgreSQL database with direct SQL queries (no ORM)
- Password hashing with bcryptjs
- Input validation
- Health check endpoint
- Database connection pooling
- Transaction support

## API Endpoints

- `POST /auth/login` - Login with username/password
- `GET /auth/verify` - Verify JWT token
- `GET /auth/health` - Health check

## Prerequisites

- Node.js 20+
- PostgreSQL 12+
- npm or yarn

## Database Setup

### Option 1: Using Docker (Recommended)

```bash
# Start PostgreSQL container
docker run --name postgres-auth \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=auth_db \
  -p 5432:5432 \
  -d postgres:15-alpine

# Run schema migration
npm run setup:db
```

### Option 2: Local PostgreSQL

1. Install PostgreSQL locally
2. Create database: `createdb auth_db`
3. Run schema: `psql -d auth_db -f sql/schema.sql`

### Option 3: Using Setup Scripts

```bash
# Windows (PowerShell)
.\setup-db.ps1

# Linux/Mac
chmod +x setup-db.sh
./setup-db.sh
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```env
PORT=3001
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=auth_db
DB_USER=postgres
DB_PASSWORD=password
DB_MAX_CONNECTIONS=20
```

3. Setup database (see Database Setup above)

4. Run the service:
```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

## Database Schema

The service uses a simple `users` table:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Default Users

- **Username:** `admin`, **Password:** `admin123`
- **Username:** `user`, **Password:** `user123`

## Testing

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Docker

```bash
# Build image
docker build -t auth-service .

# Run with database
docker-compose up --build
```

## Usage Example

```bash
# Login
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'

# Verify token
curl -X GET http://localhost:3001/auth/verify \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Database Operations

The service supports these user operations:
- Find user by username or ID
- Create new users with encrypted passwords
- Update user information
- Delete users
- Validate password hashes

## Environment Variables

- `PORT` - Service port (default: 3001)
- `JWT_SECRET` - Secret key for JWT signing
- `NODE_ENV` - Environment (development/production)
- `DB_HOST` - PostgreSQL host (default: localhost)
- `DB_PORT` - PostgreSQL port (default: 5432)
- `DB_NAME` - Database name (default: auth_db)
- `DB_USER` - Database user (default: postgres)
- `DB_PASSWORD` - Database password
- `DB_MAX_CONNECTIONS` - Max pool connections (default: 20)