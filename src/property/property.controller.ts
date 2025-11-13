import { Controller, Get, Query } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller()
export class PropertyController {
  constructor(private readonly service: PropertyService) {}
  @Get('/cities')
  async getCities(@Query('search') search?: string): Promise<string[]> {
    const s = search?.trim();
    return this.service.getCities(s);
  }

@Get('/localities')
  async getLocalities(@Query('search') search?: string): Promise<string[]> {
    const s = search?.trim();
    return this.service.getLocalities(s);
  }

}
