import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminTotalAllLocationWithBestSalesResultsReportController } from "./admin-total-all-location-with-best-sales-results-report.controller";
import { AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity } from "./admin-total-all-location-with-best-sales-results-report.entity/admin-total-all-location-with-best-sales-results-report.data.model.entity";
import { AdminTotalAllLocationWithBestSalesResultsReportService } from "./admin-total-all-location-with-best-sales-results-report.service";

@Module({
    imports: [
      TypeOrmModule.forFeature([AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity]),
      PassportModule.register({ defaultStrategy: "jwt" }),
      JwtModule.register({
        secret: process.env.SECRET_TOKEN,
      }),
      AdminTotalAllLocationWithBestSalesResultsReportModule,
    ],
    controllers: [AdminTotalAllLocationWithBestSalesResultsReportController],
    providers: [AdminTotalAllLocationWithBestSalesResultsReportService],
    exports: [AdminTotalAllLocationWithBestSalesResultsReportService],
  })
  export class AdminTotalAllLocationWithBestSalesResultsReportModule {}