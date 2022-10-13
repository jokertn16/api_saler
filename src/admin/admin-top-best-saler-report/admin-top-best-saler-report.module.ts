import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminTopTenProductBestSellerDetailController } from "./admin-top-best-saler-report.controller";
import { AdminTopBestSalerReportDataModelEntity } from "./admin-top-best-saler-report.entity/admin-top-best-saler-report.data.model.entity";
import { AdminTopBestSalerReportService } from "./admin-top-best-saler-report.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminTopBestSalerReportDataModelEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    AdminTopBestSalerReportModule,
  ],
  controllers: [AdminTopTenProductBestSellerDetailController],
  providers: [AdminTopBestSalerReportService],
  exports: [AdminTopBestSalerReportService],
})
export class AdminTopBestSalerReportModule {}
