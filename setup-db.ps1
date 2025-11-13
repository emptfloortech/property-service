# Database setup script for auth-service (PowerShell)

Write-Host "Setting up PostgreSQL database for auth-service..." -ForegroundColor Green

# Database connection parameters
$DB_HOST = if ($env:DB_HOST) { $env:DB_HOST } else { "localhost" }
$DB_PORT = if ($env:DB_PORT) { $env:DB_PORT } else { "5432" }
$DB_NAME = if ($env:DB_NAME) { $env:DB_NAME } else { "auth_db" }
$DB_USER = if ($env:DB_USER) { $env:DB_USER } else { "postgres" }
$DB_PASSWORD = if ($env:DB_PASSWORD) { $env:DB_PASSWORD } else { "password" }

Write-Host "Database connection details:" -ForegroundColor Cyan
Write-Host "  Host: $DB_HOST"
Write-Host "  Port: $DB_PORT"
Write-Host "  Database: $DB_NAME"
Write-Host "  User: $DB_USER"

# Check if PostgreSQL is available
Write-Host "`nChecking if PostgreSQL is available..." -ForegroundColor Yellow

try {
    # Try to connect using psql (if available)
    $env:PGPASSWORD = $DB_PASSWORD
    & psql -h $DB_HOST -p $DB_PORT -U $DB_USER -c '\q' 2>$null
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ PostgreSQL connection successful" -ForegroundColor Green
        
        # Create database if it doesn't exist
        Write-Host "Creating database '$DB_NAME' if it doesn't exist..." -ForegroundColor Yellow
        & createdb -h $DB_HOST -p $DB_PORT -U $DB_USER $DB_NAME 2>$null
        
        # Run schema migration
        Write-Host "Running schema migration..." -ForegroundColor Yellow
        & psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f sql/schema.sql
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Database setup completed successfully!" -ForegroundColor Green
            Write-Host "`nDefault users created:" -ForegroundColor Cyan
            Write-Host "  Username: admin | Password: admin123"
            Write-Host "  Username: user  | Password: user123"
        } else {
            Write-Host "❌ Database setup failed!" -ForegroundColor Red
            exit 1
        }
    } else {
        throw "Connection failed"
    }
} catch {
    Write-Host "❌ Cannot connect to PostgreSQL or psql not found" -ForegroundColor Red
    Write-Host "`nTo start PostgreSQL with Docker:" -ForegroundColor Yellow
    Write-Host "docker run --name postgres-auth -e POSTGRES_PASSWORD=$DB_PASSWORD -e POSTGRES_DB=$DB_NAME -p ${DB_PORT}:5432 -d postgres:15-alpine"
    Write-Host "`nOr install PostgreSQL client tools and make sure PostgreSQL server is running."
    exit 1
}