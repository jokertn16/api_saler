import { Body, Controller, Get, HttpException, HttpStatus, Post, Query, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { BaseResponseData } from 'src/utils.common/utils.response.common/utils.base.response.common';
import { AuthLoginDTO } from './auth.dto/auth.login.dto';


@Controller('api/auth')
export class AuthController {
  constructor() { }

  @Post('user-login')
  async userLogin(@Body(new ValidationPipe()) authLoginDTO: AuthLoginDTO, @Res() res: Response): Promise<any> {
    let response: BaseResponseData = new BaseResponseData();
    return res.status(HttpStatus.OK).send(response);
  }


}
