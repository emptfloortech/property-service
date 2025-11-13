import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DatabaseService } from '../database/database.service';
 
@Injectable()
export class PropertyService {
  constructor(
     private databaseService: DatabaseService,
  ) {}

}
