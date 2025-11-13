import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class PropertyService {
  constructor(private databaseService: DatabaseService) {}

  async getCities(_: string | undefined): Promise<string[]> {
    // Use fixed query to return city names from public.city
    const sql = `SELECT name FROM cities ORDER BY id ASC`;
    const rows = await this.databaseService.query(sql);
    return rows.map((r: any) => String(r.name));
  }

  async getLocalities(_: string | undefined): Promise<string[]> {
    // Use fixed query to return locality names from public.locality
    const sql = `SELECT name FROM localities ORDER BY id ASC`;
    const rows = await this.databaseService.query(sql);
    return rows.map((r: any) => String(r.name));
  }
}