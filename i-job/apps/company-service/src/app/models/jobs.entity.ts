//this class for jobs table in database in job have a relation with company and recruiter
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Company } from './company.entity';
import { Recruiter } from './recruiter.entity';
@Entity()
export class Jobs extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column()
  salary: string | undefined;

  @Column()
  company_id: number;

  @Column()
  recruiter_id: string;

  @ManyToOne((type) => Company, (company) => company.recruiters)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @ManyToOne((type) => Recruiter, (recruiter) => recruiter.company)
  @JoinColumn({ name: 'recruiter_id' })
  recruiter: Recruiter;
}
