import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { FavouriteRecipeModel } from "./favouriteRecipes.model";
import { RecipeService } from "src/recipes/recipes.service";

@Injectable()
export class FavouriteRecipeService {
    constructor(private RecipeService: RecipeService,@InjectModel(FavouriteRecipeModel) private readonly FavModel : typeof FavouriteRecipeModel){}

    async getAllFavourite(req){
        const data = await this.FavModel.findAll({
            where: {userId: req.user.id},
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