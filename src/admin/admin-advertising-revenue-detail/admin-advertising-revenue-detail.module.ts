import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminAdvertisingRevenueDetailController } from "./admin-advertising-revenue-detail.controller";
import { AdminAdvertisingRevenueDetailDataModelEntity } from "./admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.entity";
import { AdminAdvertisingRevenueDetailService } from "./admin-advertising-revenue-detail.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([AdminAdvertisingRevenueDetailDataModelEntity]),
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({
          secret: process.env.SECRET_TOKEN,
        }),
        AdminAdvertisingRevenueDetailModule,
      ],
      controllers: [AdminAdvertisingRevenueDetailController],
      providers: [AdminAdvertisingRevenueDetailService],
      exports: [AdminAdvertisingRevenueDetailService]
})
export class AdminAdvertisingRevenueDetailModule {}