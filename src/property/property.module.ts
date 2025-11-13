import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
 imports: [ConfigModule],
  controllers: [PropertyController],
  providers: [PropertyService],
  exports: [PropertyService],
})
export class PropertyModule {}
