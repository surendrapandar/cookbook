import { Optional } from 'sequelize';
import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';


export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
}

export interface userAttribute extends Optional<User, 'id'> {}

@Table
export class UserModle extends Model<User, userAttribute> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  username: string;

  @Column({unique: true})
  email: string;

  @Column
  password: string;
}
