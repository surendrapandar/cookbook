import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { Request } from "@nestjs/common";
import { FavouriteRecipeService } from "./favouriteRecipes.service";

@Controller('favourite')
export class FavouriteController {
    constructor(private FavouriteRecipeService: FavouriteRecipeService) {}

  @UseGuards(AuthGuard)
  @Get("/get")
  async getAllFavouritesRecipes(@Request() req) {
    return this.FavouriteRecipeService.getAllFavourite(req)
  }

  @UseGuards(AuthGuard)
  @Post()
  async createFavouriteRecipe(@Request() req){
    return this.FavouriteRecipeService.createFavouriteRecipe(req)
  }

}
