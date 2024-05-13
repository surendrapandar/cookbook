import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { DatabaseModule } from './db/db.module';
import { SignupModule } from './signup/signup.module';
import { FavouriteController } from './favourite/favourite.controller';

@Module({
  imports: [SignupModule,DatabaseModule],
  controllers: [AppController, LoginController, FavouriteController],
  providers: [AppService],
})
export class AppModule {}
