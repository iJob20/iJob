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
import { Skill } from './skills.entity';
import { User } from './user.entity';

@Entity()
export class Education extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  schoolName: string;

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

  @Column()
  startDttm: Date;

  @Column({ nullable: true })
  endDttm: Date;

  @Column()
  fieldOfStudy: string;

  @Column({ nullable: true })
  grade: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinTable()
  userId: User;
}
