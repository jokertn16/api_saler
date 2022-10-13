import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { TechresSaler } from "src/techres-saler/techres-saler.entity/techres-saler.entity";
import { TechresSalerService } from "src/techres-saler/techres-saler.service";
import { DecodeToken } from "../utils.decode-token.common/utils.decode-token.common";
import { DecodeBearerTokenInterFace } from "../utils.decode-token.common/utils.decode-token.interface.common";
import { Account } from "../utils.enum/utils.account.enum";
import { ExceptionResponseDetail } from "../utils.exception.common/utils.exception.common";

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(
    private techresSalerService: TechresSalerService
  ) { }

  async use(req: Request, res: Response, next: NextFunction) {
    let bearerToken: string = req.headers.authorization;

    if (!bearerToken || bearerToken === "") {
      throw new HttpException(
        new ExceptionResponseDetail(
          HttpStatus.BAD_REQUEST,
          "Kiểm tra lại xem bạn đã truyền token vào chưa!"
        ),
        HttpStatus.OK
      );
    }
    let decodeBearerTokenInterFace: DecodeBearerTokenInterFace =
      await new DecodeToken().verifyBearerToken(
        bearerToken,
        process.env.SECRET_TOKEN
      );

    let techresSaler: TechresSaler;
    switch (+decodeBearerTokenInterFace.sub) {
      case Account.TECHRES_SALER:
        techresSaler = await this.techresSalerService.findOne(
          decodeBearerTokenInterFace.user_id
        );
        if (techresSaler.jwt_token !== decodeBearerTokenInterFace.jwt_token) {
          throw new HttpException(
            new ExceptionResponseDetail(
              HttpStatus.BAD_REQUEST,
              "Token bạn truyền không phải của techres_saler!"
            ),
            HttpStatus.OK
          );
        }
        break;
      case Account.ADMIN:
        techresSaler = await this.techresSalerService.findOne(
          decodeBearerTokenInterFace.user_id
        );
        if (techresSaler.jwt_token !== decodeBearerTokenInterFace.jwt_token) {
          throw new HttpException(
            new ExceptionResponseDetail(
              HttpStatus.BAD_REQUEST,
              "Token bạn truyền không phải của techres_saler!"
            ),
            HttpStatus.OK
          );
        }
        break;

      default:
        throw new HttpException(
          new ExceptionResponseDetail(
            HttpStatus.BAD_REQUEST,
            "Token bạn truyền vào không hợp lệ!"
          ),
          HttpStatus.OK
        );
    }
    req.user = techresSaler;
    next();
  }
}
