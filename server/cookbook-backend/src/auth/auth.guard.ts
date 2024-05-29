import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Redirect,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, response } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      // response.redirect('http://localhost:5173/login');
      throw new UnauthorizedException();
    }
    try {
      const decode_token = await this.jwtService.verify(token, {
        secret: 'your-secret-key',
      });
      // console.log(decode_token)
      // const payload = await this.jwtService.verifyAsync(token, {
      //   secret: 'your-secret-key',
      // });
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = decode_token;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
