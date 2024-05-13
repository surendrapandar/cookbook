import { Injectable } from '@nestjs/common';
import { RecipeModel } from './recipes.model';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

@Injectable()
export class RecipeService {
  data = Date();
  constructor(
    @InjectModel(RecipeModel) private readonly recipeModel: typeof RecipeModel,
  ) {}

  getRecipes() {
    return this.recipeModel.findAll({
      where: {
        id: { [Op.in]: [] },
      },
    });
  }

  getRecipesById(id) {
    return this.recipeModel.findOne({ where: { id: id } });
  }

  createNewRecipes(req, body) {
    return this.recipeModel.create({
      name: body.name,
      instructions: body.instructions,
      thumbnailImage: body.thumbnailImage,
      ingredients: body.ingredients,
      postedAt: new Date(),
      postedBy: body.postedBy,
      userId: req.user.id,
    });
  }
}
