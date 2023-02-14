//this class is for the recruiter entity in database in recruiter have a relation with company
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Company } from './company.entity';

@Entity()
export class Recruiter extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  title: string;

  @Column()
  company_id: number;

  @ManyToOne((type) => Company, (company) => company.recruiters)
  @JoinColumn({ name: 'company_id' })
  company: Company;
}
