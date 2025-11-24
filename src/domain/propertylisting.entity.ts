import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('property_listings')
export class PropertyListingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_on', type: 'timestamp' })
  created_on: Date;

  @UpdateDateColumn({ name: 'edited_on', type: 'timestamp' })
  edited_on: Date;

  @Column({ name: 'is_deleted', type: 'boolean', default: false })
  is_deleted: boolean;

  @Column({ name: 'construction_status', type: 'varchar', length: 100, nullable: true })
  construction_status: string;

  @Column({ name: 'carpet_area', type: 'jsonb', nullable: true })
  carpet_area: any;

  @Column({ name: 'building_amenities', type: 'jsonb', nullable: true })
  building_amenities: any;

  @Column({ name: 'total_towers_building', type: 'integer', nullable: true })
  total_towers_building: number;

  @Column({ name: 'building_age', type: 'integer', nullable: true })
  building_age: number;

  @Column({ name: 'project_size', type: 'integer', nullable: true })
  project_size: number;

  @Column({ name: 'visitors_parking', type: 'boolean', default: false })
  visitors_parking: boolean;

  @Column({ name: 'gas_connection', type: 'boolean', default: false })
  gas_connection: boolean;

  @Column({ name: 'gated_society', type: 'boolean', default: false })
  gated_society: boolean;

  @Column({ name: 'property_type', type: 'varchar', length: 100 })
  property_type: string;

  @Column({ name: 'bhk_type', type: 'double precision', nullable: true })
  bhk_type: number;

  @Column({ name: 'room_specification', type: 'jsonb', nullable: true })
  room_specification: any;

  @Column({ name: 'furnishing_details', type: 'jsonb', nullable: true })
  furnishing_details: any;

  @Column({ name: 'your_floor', type: 'integer', nullable: true })
  your_floor: number;

  @Column({ name: 'total_floors', type: 'integer', nullable: true })
  total_floors: number;

  @Column({ name: 'covered_parking', type: 'integer', nullable: true })
  covered_parking: number;

  @Column({ name: 'overlooking_view', type: 'varchar', length: 100, nullable: true })
  overlooking_view: string;

  @Column({ name: 'main_entrance', type: 'varchar', length: 100, nullable: true })
  main_entrance: string;

  @Column({ name: 'room_dimensions', type: 'jsonb', nullable: true })
  room_dimensions: any;

  @Column({ name: 'internal_specifications', type: 'jsonb', nullable: true })
  internal_specifications: any;

  @Column({ name: 'in_house_appliance', type: 'jsonb', nullable: true })
  in_house_appliance: any;

  @Column({ name: 'furnishing_status', type: 'varchar', length: 100, nullable: true })
  furnishing_status: string;

  @Column({ name: 'tower', type: 'varchar', length: 100, nullable: true })
  tower: string;

  @Column({ name: 'rera_details', type: 'jsonb', nullable: true })
  rera_details: any;

  @Column({ name: 'total_tower_wing_details', type: 'jsonb', nullable: true })
  total_tower_wing_details: any;

  @Column({ name: 'building_structure', type: 'jsonb', nullable: true })
  building_structure: any;

  @Column({ name: 'wing_number', type: 'integer', nullable: true })
  wing_number: number;

  @Column({ name: 'asking_price', type: 'integer', nullable: true })
  asking_price: number;

  @Column({ name: 'monthly_maintenance', type: 'integer', nullable: true })
  monthly_maintenance: number;

  @Column({ name: 'price_negotiable', type: 'boolean', default: false })
  price_negotiable: boolean;

  @Column({ name: 'brokerage', type: 'jsonb', nullable: true })
  brokerage: any;

  @Column({ name: 'price_breakup', type: 'text', nullable: true })
  price_breakup: string;

  @Column({ name: 'lap', type: 'boolean', default: false })
  lap: boolean;

  @Column({ name: 'applicable_offers', type: 'jsonb', nullable: true })
  applicable_offers: any;

  @Column({ name: 'listing_score', type: 'integer', nullable: true })
  listing_score: number;

  @Column({ name: 'listing_stage', type: 'integer', nullable: true })
  listing_stage: number;

  @Column({ name: 'is_project_listing', type: 'boolean', default: false })
  is_project_listing: boolean;

  @Column({ name: 'project_id', type: 'integer', nullable: true })
  project_id: number;

  @Column({ name: 'created_by_user', type: 'integer', nullable: true })
  created_by_user: number;

  @Column({ name: 'updated_by_user', type: 'integer', nullable: true })
  updated_by_user: number;
}
