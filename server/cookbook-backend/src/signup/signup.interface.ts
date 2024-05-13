import { Optional } from 'sequelize';
import {
  AutoIncrement,
  BelongsToMany,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { FavouriteRecipeModel } from 'src/favourite/favouriteRecipes.model';
import { RecipeModel } from 'src/recipes/recipes.model';

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

  @Column({ unique: true })
  email: string;

  @Column
  password: string;

  @BelongsToMany(() => RecipeModel, {
    through: () => FavouriteRecipeModel,
  })
  favouritRecipe: RecipeModel[];
}
