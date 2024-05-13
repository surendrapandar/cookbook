import { DataTypes, Optional } from 'sequelize';
import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User, UserModle } from 'src/signup/signup.interface';

export interface Recipe {
  id: number;
  name: string;
  instructions: string;
  thumbnailImage: string;
  ingredients: string;
  postedAt: Date;
  postedBy: string;
  userId: number;
  user: User | null;
}

export interface RecipeAttribute extends Optional<Recipe, 'id' | 'user'> {}

@Table
export class RecipeModel extends Model<Recipe, RecipeAttribute> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @Column
  name: string;
  @Column({
    type: DataTypes.STRING(2000), // Increase the length to 2000 characters
  })
  instructions: string;
  @Column
  thumbnailImage: string;
  @Column({
    type: DataTypes.STRING(2000), // Increase the length to 2000 characters
  })
  ingredients: string;
  @Column
  postedAt: Date;
  @Column
  postedBy: string;
  @ForeignKey(() => UserModle)
  @Column
  userId: number;

  @BelongsTo(() => UserModle)
  user: User;
}
