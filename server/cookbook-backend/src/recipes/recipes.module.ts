import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipeService } from './recipes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RecipeModel } from './recipes.model';

@Module({
  imports: [SequelizeModule.forFeature([RecipeModel])],
  controllers: [RecipesController],
  providers: [RecipeService, RecipeModel],
  exports: [RecipeService],
})
export class RecipesModule {}
