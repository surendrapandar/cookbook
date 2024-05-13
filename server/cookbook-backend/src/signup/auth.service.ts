import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserModle } from './signup.interface';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { RecipeModel } from 'src/recipes/recipes.model';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(UserModle) private readonly userModel: typeof UserModle,
  ) {}

  async createUserAccount(username: string, password: string, email: string) {
    try {
      const user = await this.userModel.create({ username, password, email });
      return user;
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictException('Email address already exists');
      }

      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await this.userModel.findOne({
        where: { email, password },
      });
      const payload = {
        id: user.id,
        email: user.email,
        username: user.username,
      };
      console.log(await this.jwtService.signAsync(payload));
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
