import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Education } from './education.entity';
import { Experience } from './experience.entity';
import { Project } from './projects.entity';
import { Skill } from './skills.entity';
import { User } from './user.entity';

@Entity()
export class UserCV extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  about: string;

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

  @ManyToMany(() => Skill)
  @JoinTable()
  skills: Skill[];

  @OneToMany(() => Education, (education) => education.id)
  education: Education[];

  @OneToMany(() => Experience, (experience) => experience.id)
  experience: Experience[];

  @OneToMany(() => Project, (project) => project.id)
  project: Project[];

  @ManyToOne(() => User, (user) => user.id)
  @JoinTable()
  userId: User;
}
