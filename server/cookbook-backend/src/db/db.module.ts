import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModle } from '../signup/signup.interface';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'somePassword',
      database: 'weather',
      models: [UserModle],
      autoLoadModels: true,
      // sync: {
      //   force: true
      // }
    }
  ),
  ],
})
export class DatabaseModule {}
