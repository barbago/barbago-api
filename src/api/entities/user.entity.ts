import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  uid: string;

  @Column()
  name: string;

  @Column()
  email: string;

  constructor(uid: string, name: string, email: string) {
    super();
    this.uid = uid;
    this.name = name;
    this.email = email;
  }
}
