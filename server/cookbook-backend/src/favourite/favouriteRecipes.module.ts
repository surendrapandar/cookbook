import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { FavouriteRecipeModel } from "./favouriteRecipes.model";
import { FavouriteController } from "./favouriteRecipes.controller";
import { FavouriteRecipeService } from "./favouriteRecipes.service";
import { RecipesModule } from "src/recipes/recipes.module";

@Module({
    imports: [SequelizeModule.forFeature([FavouriteRecipeModel]), RecipesModule],
    controllers: [FavouriteController],
    providers: [FavouriteRecipeService],
    
})

export class FavouriteRecipeModule {}