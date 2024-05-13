import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { DatabaseModule } from './db/db.module';
import { SignupModule } from './signup/signup.module';
import { RecipesModule } from './recipes/recipes.module';
import { FavouriteRecipeModule } from './favourite/favouriteRecipes.module';

@Module({
  imports: [SignupModule,DatabaseModule, RecipesModule, FavouriteRecipeModule],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
