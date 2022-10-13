import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminTotalAllSalerReportController } from "./admin-total-all-saler-report.controller";
import { AdminTotalAllSalerReportDataModelEntity } from "./admin-total-all-saler-report.entity/admin-total-all-saler-report.data.model.entity";
import { AdminTotalAllSalerReportService } from "./admin-total-all-saler-report.service";

@Module({
    imports: [
      TypeOrmModule.forFeature([AdminTotalAllSalerReportDataModelEntity]),
      PassportModule.register({ defaultStrategy: "jwt" }),
      JwtModule.register({
        secret: process.env.SECRET_TOKEN,
      }),
      AdminTotalAllSalerReportModule,
    ],
    controllers: [AdminTotalAllSalerReportController],
    providers: [AdminTotalAllSalerReportService],
    exports: [AdminTotalAllSalerReportService],
  })
  export class AdminTotalAllSalerReportModule {}