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
import { PropertyController } from './property/property.controller';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'emptyfloor',
  entities: [CityEntity, LocalityEntity, resalePropertyEntity, rentalPropertyEntity],
      synchronize: true, // Auto-creates/updates tables (disable in production!)
      logging: process.env.DB_LOGGING === 'true',
    }),
  TypeOrmModule.forFeature([CityEntity, LocalityEntity, resalePropertyEntity, rentalPropertyEntity]),
    JwtModule.register({
      global: true, // optional, makes JwtService available globally
      secret: process.env.JWT_SECRET || 'super-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
    PropertyModule,
  ],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
