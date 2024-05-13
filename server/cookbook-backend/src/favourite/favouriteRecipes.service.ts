import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { FavouriteRecipeModel } from "./favouriteRecipes.model";
import { RecipeService } from "src/recipes/recipes.service";

@Injectable()
export class FavouriteRecipeService {
    constructor(private RecipeService: RecipeService,@InjectModel(FavouriteRecipeModel) private readonly FavModel : typeof FavouriteRecipeModel){}

    async getAllFavourite(){
        const data = await this.FavModel.findAll({
            where: {userId: 1},
        })

        const recipeIds = await Promise.all(data.map(async (data) => {
            return await this.RecipeService.getRecipesById(data.recipeId);
        }));
        
        
        return recipeIds;
        
    }

    async createFavouriteRecipe(req){
        return this.FavModel.create({
            userId: req.user.id,
            recipeId: req.body.recipeId
        })
    }
}