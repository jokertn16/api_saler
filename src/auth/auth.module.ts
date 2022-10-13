import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { EmployeeModule } from "src/employee/employee.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),

    JwtModule.register({
      secret: process.env.SECRET_TOKEN, // "1235sd-5656sdf-@dfkdf-sdsjfdj",
      signOptions: { expiresIn: "1d" },
    }),
    PassportModule,
    EmployeeModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtStrategy, PassportModule],
})
export class AuthModule {}
