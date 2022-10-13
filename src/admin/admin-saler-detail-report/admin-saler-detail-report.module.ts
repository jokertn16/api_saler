import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminSalerDetailReportController } from "./admin-saler-detail-report.controller";
import { AdminSalerDetailReportDataModelEntity } from "./admin-saler-detail-report.entity/admin-saler-detail-report.data.model.entity";
import { AdminSalerDetailReportService } from "./admin-saler-detail-report.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminSalerDetailReportDataModelEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    AdminSalerDetailReportModule,
  ],
  controllers: [AdminSalerDetailReportController],
  providers: [AdminSalerDetailReportService],
  exports: [AdminSalerDetailReportService],
})
export class AdminSalerDetailReportModule {}
