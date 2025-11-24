
  import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

  @Entity('projects')
  export class ProjectEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: 'created_on', type: 'timestamp without time zone' })
    created_on: Date;

    @UpdateDateColumn({ name: 'edited_on', type: 'timestamp without time zone' })
    edited_on: Date;

    @Column({ name: 'is_deleted', type: 'boolean', default: false })
    is_deleted: boolean;

    @Column({ name: 'map_coordinates', type: 'text', nullable: true })
    map_coordinates: string;

    @Column({ name: 'building_name', type: 'text' })
    building_name: string;

    @Column({ name: 'developer_name', type: 'text', nullable: true })
    developer_name: string;

    @Column({ name: 'construction_status', type: 'text', nullable: true })
    construction_status: string;

    @Column({ name: 'building_age', type: 'integer', nullable: true })
    building_age: number;

    @Column({ name: 'visitors_parking', type: 'boolean', default: false })
    visitors_parking: boolean;

    @Column({ name: 'box_type', type: 'text', nullable: true })
    box_type: string;

    @Column({ name: 'land_ownership', type: 'text', nullable: true })
    land_ownership: string;

    @Column({ name: 'gated_society', type: 'boolean', default: false })
    gated_society: boolean;

    @Column({ name: 'rera_details', type: 'jsonb', nullable: true })
    rera_details: any;

    @Column({ name: 'possession_by', type: 'text', nullable: true })
    possession_by: string;

    @Column({ name: 'gas_connection', type: 'boolean', default: false })
    gas_connection: boolean;

    @Column({ name: 'total_towers_building', type: 'integer', nullable: true })
    total_towers_building: number;

    @Column({ name: 'offers', type: 'text', nullable: true })
    offers: string;

    @Column({ name: 'total_tower_wing_details', type: 'text', nullable: true })
    total_tower_wing_details: string;

    @Column({ name: 'project_size', type: 'integer', nullable: true })
    project_size: number;

    @Column({ name: 'carpet_area', type: 'jsonb', nullable: true })
    carpet_area: any;

    @Column({ name: 'building_amenities', type: 'jsonb', nullable: true })
    building_amenities: any;

    @Column({ name: 'old_property', type: 'boolean', default: false })
    old_property: boolean;

    @Column({ name: 'is_live', type: 'boolean', default: true })
    is_live: boolean;

    @Column({ name: 'created_by_user', type: 'integer', nullable: true })
    created_by_user: number;

    @Column({ name: 'updated_by_user', type: 'integer', nullable: true })
    updated_by_user: number;

    @Column({ name: 'address_id', type: 'integer', nullable: true })
    address_id: number;
  }
