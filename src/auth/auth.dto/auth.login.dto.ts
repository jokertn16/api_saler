import { IsEmpty, IsNotEmpty, Length } from 'class-validator';
import { IsNotEmptyString } from 'src/utils.common/utils.decorator.common/utils.decorator.common';
export class AuthLoginDTO {
    @IsNotEmptyString()
    readonly username: string;

    @IsNotEmptyString()
    readonly password: string;
}