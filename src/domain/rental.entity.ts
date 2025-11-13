import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('rental_properties')
export class rentalPropertyEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

   @Column({ type: 'jsonb', nullable: false })
  propertyTypeOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  bhkTypeOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  constructorStatusOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  boxTypeOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  buildingAgeOptions: any;

  @Column({ type: 'varchar', length: 50, nullable: true })
  PossesiomBy: string;

  @Column({ type: 'jsonb', nullable: false })
  furnitureDetailsOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  furnitureWithApplianceAndAmentiesDetailsOptions: any;


  @Column({ type: 'jsonb', nullable: false })
  myFloorOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  totalFloorOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  VisitorParkingOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  coveredParkingOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  landOwnershipOptions: any;

@Column({ type: 'jsonb', nullable: false })
  GasConnectionOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  gatedSecurityOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  totalBuildingOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  mainEntranceOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  internalSpecificationsOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  brokerageOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  preferredTenantOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  foodPreferenceOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  securityDepositOptions: any;

  @Column({ type: 'jsonb', nullable: false })
  lookingForOptions: any;

}
