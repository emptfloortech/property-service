#!/bin/bash

# Database setup script for auth-service

echo "Setting up PostgreSQL database for auth-service..."

# Database connection parameters
DB_HOST=${DB_HOST:-localhost}
DB_PORT=${DB_PORT:-5432}
DB_NAME=${DB_NAME:-auth_db}
DB_USER=${DB_USER:-postgres}
DB_PASSWORD=${DB_PASSWORD:-password}

# Check if PostgreSQL is running
echo "Checking PostgreSQL connection..."
if ! PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -p $DB_PORT -U $DB_USER -c '\q' 2>/dev/null; then
    echo "❌ Cannot connect to PostgreSQL. Make sure it's running and credentials are correct."
    echo "To start PostgreSQL with Docker:"
    echo "docker run --name postgres-auth -e POSTGRES_PASSWORD=$DB_PASSWORD -e POSTGRES_DB=$DB_NAME -p $DB_PORT:5432 -d postgres:15-alpine"
    exit 1
fi

echo "✅ PostgreSQL connection successful"

# Create database if it doesn't exist
echo "Creating database '$DB_NAME' if it doesn't exist..."
PGPASSWORD=$DB_PASSWORD createdb -h $DB_HOST -p $DB_PORT -U $DB_USER $DB_NAME 2>/dev/null || echo "Database '$DB_NAME' already exists"

# Run schema migration
echo "Running schema migration..."
PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f sql/schema.sql

if [ $? -eq 0 ]; then
    echo "✅ Database setup completed successfully!"
    echo ""
    echo "Database connection details:"
    echo "  Host: $DB_HOST"
    echo "  Port: $DB_PORT"
    echo "  Database: $DB_NAME"
    echo "  User: $DB_USER"
    echo ""
    echo "Default users created:"
    echo "  Username: admin | Password: admin123"
    echo "  Username: user  | Password: user123"
else
    echo "❌ Database setup failed!"
    exit 1
fi