import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";

@Controller('favourite')
export class FavouriteController {
    constructor() {}

  @UseGuards(AuthGuard)
  @Get()
  getAllFavourites() {
    return 'Get all favourites';
  }

}
