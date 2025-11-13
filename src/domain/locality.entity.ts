import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('localities')
export class LocalityEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  localityName: string;

  @Column({ type: 'int', nullable: false })
  cityId: number;

  @Column({ type: 'int', nullable: false })
  landMarkId: number;


}