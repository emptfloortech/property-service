import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from '../database/database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from '../domain/project.entity';
import { PropertyListingEntity } from '../domain/propertylisting.entity';


@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([ProjectEntity, PropertyListingEntity]),
  ],
  controllers: [PropertyController],
  providers: [PropertyService, DatabaseService],
  exports: [PropertyService],
})
export class PropertyModule {}
