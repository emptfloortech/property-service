import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database/database.service';
import { PropertyModule } from './property/property.module';
import { CityEntity } from './domain/city.entity';
import { LocalityEntity } from './domain/locality.entity';
import { resalePropertyEntity } from './domain/resale.property.entity';
import { rentalPropertyEntity } from './domain/rental.entity';
import { ProjectEntity } from './domain/project.entity';
import { PropertyListingEntity } from './domain/propertylisting.entity';
import { PropertyController } from './property/property.controller';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      // Prefer DATABASE_URL when available (e.g. Neon). Fall back to individual vars.
      url: process.env.DATABASE_URL || undefined,
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'emptyfloor',
      // If using a managed DB (Neon etc.) the connection string may require SSL.
      // `extra.ssl` with `rejectUnauthorized:false` relaxes certificate checks for managed providers.
      extra: process.env.DATABASE_URL
        ? { ssl: { rejectUnauthorized: false } }
        : undefined,
  entities: [CityEntity, LocalityEntity, resalePropertyEntity, rentalPropertyEntity,ProjectEntity, PropertyListingEntity],
      synchronize: true, // Auto-creates/updates tables (disable in production!)
      logging: process.env.DB_LOGGING === 'true',
    }),
  TypeOrmModule.forFeature([CityEntity, LocalityEntity, resalePropertyEntity, rentalPropertyEntity,ProjectEntity, PropertyListingEntity]),
    JwtModule.register({
      global: true, // optional, makes JwtService available globally
      secret: process.env.JWT_SECRET || 'super-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
    PropertyModule,
  ],
  controllers: [PropertyController],
  providers: [DatabaseService],
})
export class AppModule {}
