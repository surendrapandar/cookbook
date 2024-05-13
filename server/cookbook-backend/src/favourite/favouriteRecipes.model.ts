import {
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Recipe, RecipeModel } from 'src/recipes/recipes.model';
import { User, UserModle } from 'src/signup/signup.interface';

export interface FavouriteRecipe {
  id: number;
  recipeId: number;
  userId: number;
}

@Table
export class FavouriteRecipeModel extends Model<FavouriteRecipeModel> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => UserModle)
  @Column
  userId: number;

  @ForeignKey(() => RecipeModel)
  @Column
  recipeId: number;
}
