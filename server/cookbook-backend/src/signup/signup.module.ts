import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthService } from './auth.service';
import { SignupController } from './signup.controller';
import { UserModle } from './signup.interface';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'your-secret-key',
      signOptions: { expiresIn: '24h' },
    }),
    SequelizeModule.forFeature([UserModle]),
  ],
  controllers: [SignupController],
  providers: [AuthService],
  exports: [AuthService],
})
export class SignupModule {}
