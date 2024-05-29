import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { RecipeService } from './recipes.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('/recipes')
export class RecipesController {
  constructor(private RecipeService: RecipeService) {}

  @UseGuards(AuthGuard)
  @Get()
  getRecipes() {
    return this.RecipeService.getRecipes();
  }
  @UseGuards(AuthGuard)
  @Post('/getbyid')
  getRecipesById(@Body() body) {
    console.log(body);
    return this.RecipeService.getRecipesById(body.id);
  }

  @UseGuards(AuthGuard)
  @Post()
  createRecipe(@Request() req, @Body() body) {
    console.log(req);
    return this.RecipeService.createNewRecipes(req, body);
  }
}
