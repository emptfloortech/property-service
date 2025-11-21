import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class PropertyService {
  constructor(private databaseService: DatabaseService) {}

  async getCities(_: string | undefined): Promise<string[]> {
    // Use fixed query to return city names from public.city
    const sql = `SELECT "cityName" FROM cities ORDER BY id ASC`;
    const rows = await this.databaseService.query(sql);
    return rows.map((r: any) => String(r.cityName));
  }

  async getLocalities(_: string | undefined): Promise<string[]> {
    // Use fixed query to return locality names from public.locality
    const sql = `SELECT "localityName" FROM localities ORDER BY id ASC`;
    const rows = await this.databaseService.query(sql);
    return rows.map((r: any) => String(r.localityName));
  }

    /**
     * Return all rows from the rental table.
     * Returns an array of objects (column -> value).
     */
    async getRentals(): Promise<any[]> {
      const sql = `SELECT * FROM public.rental_properties ORDER BY id ASC`;
      const rows = await this.databaseService.query(sql);
      return Array.isArray(rows) ? rows : [];
    }

    /**
     * Return all rows from the resale table.
     * Returns an array of objects (column -> value).
     */
    async getResales(): Promise<any[]> {
      const sql = `SELECT * FROM public.resale_properties ORDER BY id ASC`;
      const rows = await this.databaseService.query(sql);
      return Array.isArray(rows) ? rows : [];
    }
}