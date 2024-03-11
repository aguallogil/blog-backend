import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor() { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log('entro')
        const request = context.switchToHttp().getRequest();
        console.log(request.headers.authorization)
        const token = request.headers.authorization?.split(' ')[1];
        console.log(token)
        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
            if (payload.exp && Date.now() >= payload.exp * 1000) {
                throw new UnauthorizedException('Token has expired');
            }
            request['user'] = payload;
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }
}
