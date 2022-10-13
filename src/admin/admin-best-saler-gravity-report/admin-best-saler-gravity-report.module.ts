import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminBestSalerGravityReportController } from "./admin-best-saler-gravity-report.controller";
import { AdminBestSalerGravityReportDataModelEntity } from "./admin-best-saler-gravity-report.entity/admin-best-saler-gravity-report.data.model.entity";
import { AdminBestSalerGravityReportService } from "./admin-best-saler-gravity-report.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([AdminBestSalerGravityReportDataModelEntity]),
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({
          secret: process.env.SECRET_TOKEN,
        }),
        AdminBestSalerGravityReportModule,
      ],
      controllers: [AdminBestSalerGravityReportController],
      providers: [AdminBestSalerGravityReportService],
      exports: [AdminBestSalerGravityReportService]
})
export class AdminBestSalerGravityReportModule {}