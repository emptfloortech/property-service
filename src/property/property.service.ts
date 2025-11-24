import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from '../domain/project.entity';
import { PropertyListingEntity } from '../domain/propertylisting.entity';

@Injectable()
export class PropertyService {
  constructor(
    private databaseService: DatabaseService,

    @InjectRepository(ProjectEntity)
    private projectRepo: Repository<ProjectEntity>,

    @InjectRepository(PropertyListingEntity)
    private listingRepo: Repository<PropertyListingEntity>,
  ) {}

    private ensureSingle<T>(value: T | T[]): T {
    return Array.isArray(value) ? value[0] : value;
  }
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

    async createRental(body: any) {
    let projectId = body.project_id;

    if (projectId) {
      const projectExists = await this.projectRepo.findOne({
        where: { id: projectId },
      });

      if (!projectExists) {
        throw new Error(`Project with ID ${projectId} does not exist`);
      }
    }

    if (!projectId) {
      const project = this.projectRepo.create(body);
      const savedProject = this.ensureSingle(
        await this.projectRepo.save(project)
      );
      projectId = savedProject.id;
    }

    // 3️⃣ Always create listing
    const listing = this.listingRepo.create({
      ...body,
      project_id: projectId,
    });

const savedListingResult = await this.listingRepo.save(listing);
const savedListing = this.ensureSingle(savedListingResult);

    return {
      message: 'Listing created successfully',
      project_id: projectId,
      listing_id: savedListing.id,
    };
  }
}