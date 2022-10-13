import { Injectable, Provider } from '@nestjs/common';
import { AuthLoginDTO } from './auth.dto/auth.login.dto';

@Injectable()
export class AuthService {
    static LocalStrategy: Provider<any>;
    constructor(
    ) { }

    async login(authLoginDTO: AuthLoginDTO) {
       
    }
}