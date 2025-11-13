import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller()
export class PropertyController {
  constructor(private readonly service: PropertyService) {}

  
  
}
