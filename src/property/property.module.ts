import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from '../database/database.service';


@Module({
 imports: [ConfigModule],
  controllers: [PropertyController],
  providers: [PropertyService, DatabaseService],
  exports: [PropertyService],
})
export class PropertyModule {}
