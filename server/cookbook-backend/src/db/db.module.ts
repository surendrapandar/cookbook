import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModle } from '../signup/signup.interface';
import { RecipeModel } from 'src/recipes/recipes.model';
import { FavouriteRecipeModel } from 'src/favourite/favouriteRecipes.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'somePassword',
      database: 'weather',
      models: [UserModle, RecipeModel, FavouriteRecipeModel],
      autoLoadModels: true,
      sync: {
        alter: true,
      },
    }),
  ],
})
export class DatabaseModule {}
