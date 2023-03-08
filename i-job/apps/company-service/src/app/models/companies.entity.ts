import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Recruiters } from './recruiter.entity';
@Entity()
export class Companies extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  employees: number;

  @Column()
  industry: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  website: string;

  @Column()
  linkedin: string;

  @Column()
  authId: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @OneToMany((type) => Recruiters, (recruiter: Recruiters) => recruiter.company)
  recruiters: Recruiters[];
}
