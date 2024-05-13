import { Module } from "@nestjs/common";
import { LoginController } from "./login.controller";
import { SignupModule } from "src/signup/signup.module";
import { AuthGuard } from "src/auth/auth.guard";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [SignupModule, AuthGuard],
  controllers: [LoginController],
  providers: [],
})
export class LoginModule {}