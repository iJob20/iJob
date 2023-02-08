import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auth extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  password: string;
}
